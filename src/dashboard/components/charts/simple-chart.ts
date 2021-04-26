import { transition } from 'd3-transition'
import { select } from 'd3-selection'
import { scaleLinear } from 'd3-scale'
import { axisBottom, axisLeft } from 'd3-axis'
import { MutableRefObject } from 'react';
import { D3Chart } from 'common/chart/base-chart'

select.prototype.transition = transition

export class SimpleChart extends D3Chart {
  private allCircles: any;
  private xScale: any;
  private xAxisBottomG: any;
  private xAxisBottom: any;
  private yScale: any;
  private yAxisLeftG: any;
  private yAxisLeft: any;

  constructor(node: MutableRefObject<HTMLDivElement>) {
    super(node)
  }

  /* BEGIN: Abstract Methods Implemented */
  public Init(data: any, dimensions: DOMRect) {
    this.SetDimensions(dimensions)
    this.setScales()
    this.createAxis()
    this.UpdateData(data)
  }

  public UpdateDimensions(dimensions: DOMRect) {
    if (!this.xAxisBottomG || !this.allCircles)
      return

    this.SetDimensions(dimensions)
    this.setScales()
    this.updateAxes()

    this.allCircles = this.chart.selectAll('.myCircle')
      .transition().duration(500)
        .attr("cx", (_, index) => this.xScale(index) + this.margin.bottom)
        .attr("cy", (data) => this.yScale(data) + this.margin.left)
  }

  public UpdateData = (data) => {
    this.data = data;
    this.allCircles = this.chart.selectAll(".myCircle").data(this.data);

    this.allCircles
      .transition().duration(500)
      .attr("cx", (_, index) => this.xScale(index) + this.margin.bottom)
      .attr("cy", (data) => this.yScale(data) + this.margin.left)
      .attr("fill", "lightgreen");

    this.ReRenderData()
  };

  public ReRenderData() {
    this.allCircles
      .enter().append('circle').attr("class", "myCircle")
        .attr('r', 5)
        .attr("cx", (_, index) => this.xScale(index) + this.margin.bottom)
        .attr("cy", (data) => this.yScale(data) + this.margin.left)
        .attr("fill", "lightgreen");

    this.RemovePreviousData()
  }

  public RemovePreviousData() {
    this.allCircles.exit().remove()
  }
  /* END: Abstract Methods Implemented */

  private updateAxes() {
    this.ScaleAxis()

    this.xAxisBottomG
      .transition().duration(200)
      .attr('transform', `translate(${this.margin.bottom}, ${this.innerHeight - this.margin.bottom})`)
      .call(this.xAxisBottom)

    this.yAxisLeftG
      .transition().duration(200)
      .call(this.yAxisLeft)
  }

  private setScales() {
    this.xScale = scaleLinear().domain([0, 20]).range([0, this.innerWidth - this.margin.right ])
    this.yScale = scaleLinear().domain([0, 20]).range([this.innerHeight - this.margin.top, 0])
  }

  private createAxis() {
    this.ScaleAxis()

    this.xAxisBottomG = this.chart
      .append('g')
      .attr('transform', `translate(${this.margin.bottom}, ${this.innerHeight -this.margin.bottom})`)
      .call(this.xAxisBottom)

    this.yAxisLeftG = this.svg
      .append('g')
      .attr('transform', `translate(${this.margin.bottom}, ${this.margin.left})`)
      .call(this.yAxisLeft)
  }

  public ScaleAxis() {
    this.xAxisBottom = axisBottom(null)
      .scale(this.xScale)
      .tickSize(-(this.innerHeight - this.margin.top))

    this.yAxisLeft = axisLeft(null)
      .scale(this.yScale)
      .tickSize(-(this.innerWidth - this.margin.right))
  }
}