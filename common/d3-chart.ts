import { transition } from 'd3-transition'
import { select } from 'd3-selection'
import { scaleLinear } from 'd3-scale'
import { axisBottom, axisLeft } from 'd3-axis'
import { MutableRefObject } from 'react';

select.prototype.transition = transition

export class SimpleChart {
  private svg: any;
  private chart: any;
  private circles: any;
  private dims: DOMRect;
  private innerHeight: number;
  private innerWidth: number;
  private xScale: any;
  private xAxisBottomG: any;
  private xAxisBottom: any;
  private yScale: any;
  private yAxisLeftG: any;
  private yAxisLeft: any;
  private data: any;
  private margin: any;

  constructor(node: MutableRefObject<HTMLDivElement>) {
    this.svg = select(node.current).append('svg')

    this.svg
      .attr('width', '100%')
      .attr('height', '100%')

    this.margin = { top: 80, bottom: 15, left: 65, right: 80 }
  }

  public init(data, dimensions) {
    this.setDimensions(dimensions)
    this.setScales()

    this.chart = this.svg.append('g')

    this.createAxes()
    this.updateData(data)
  }

  public updateDimensions(dimensions) {
    if (!this.xAxisBottomG || !this.circles)
      return

    this.setDimensions(dimensions)
    this.setScales()
    this.updateAxes()

    this.circles = this.chart.selectAll('.myCircle')
      .transition().duration(500)
        .attr("cx", (_, index) => this.xScale(index) + this.margin.bottom)
        .attr("cy", (data) => this.yScale(data) + this.margin.left)

  }

  private setDimensions(dims: DOMRect) {
    this.dims = dims
    this.innerHeight = dims.height
    this.innerWidth = dims.width
  }

  private setScales() {
    this.xScale = scaleLinear().domain([0, 20]).range([0, this.innerWidth - this.margin.right ])
    this.yScale = scaleLinear().domain([0, 20]).range([this.innerHeight - this.margin.top, 0])
  }

  private createAxes() {
    this.scaleAxes()

    this.xAxisBottomG = this.chart
      .append('g')
      .attr('transform', `translate(${this.margin.bottom}, ${this.innerHeight -this.margin.bottom})`)
      .call(this.xAxisBottom)

    this.yAxisLeftG = this.svg
      .append('g')
      .attr('transform', `translate(${this.margin.bottom}, ${this.margin.left})`)
      .call(this.yAxisLeft)
  }

  private updateAxes() {
    this.scaleAxes()

    this.xAxisBottomG
      .transition().duration(200)
      .attr('transform', `translate(${this.margin.bottom}, ${this.innerHeight - this.margin.bottom})`)
      .call(this.xAxisBottom)

    this.yAxisLeftG
      .transition().duration(200)
      .call(this.yAxisLeft)
  }

  private scaleAxes() {
    this.xAxisBottom = axisBottom(null)
      .scale(this.xScale)
      .tickSize(-(this.innerHeight - this.margin.top))

    this.yAxisLeft = axisLeft(null)
      .scale(this.yScale)
      .tickSize(-(this.innerWidth - this.margin.right))
  }

  private updateData = (data) => {
    this.data = data;
    this.circles = this.chart.selectAll(".myCircle").data(this.data);
    this.circles
      .enter()
      .append("circle")
      .attr("class", "myCircle")
      .attr("r", 5)
      .attr("cx", (_, index) => this.xScale(index) + this.margin.bottom)
      .attr("cy", (data) => this.yScale(data) + this.margin.left)
      .attr("fill", "lightgreen");
  };
}