import { transition } from 'd3-transition'
import { select } from 'd3-selection'
import { scaleBand, scaleLinear } from 'd3-scale'
import { axisBottom, axisLeft } from 'd3-axis'
import { max } from 'd3-array'
import { MutableRefObject } from 'react';
import { D3Chart } from 'common/chart/base-chart'

select.prototype.transition = transition

export class BarChart extends D3Chart {
  private allRects: any;
  private xAxisBottom: any;
  private yAxisLeft: any;
  private xAxisBottomG: any;
  private yAxisLeftG: any;

  constructor(node: MutableRefObject<HTMLDivElement>) {
    super(node)
  }

  public Init(data: any, dimensions: DOMRect) {
    this.data = data
    this.margin.bottom = 20
    this.margin.left = 35

    this.SetDimensions(dimensions)
    this.setScales()
    this.createAxis()
    this.UpdateData(data)
  }

  public UpdateDimensions(dimensions: DOMRect) {
    if (!this.xAxisBottomG || !this.allRects)
      return

    this.SetDimensions(dimensions)
    this.setScales()
    this.updateAxis()

    this.allRects = this.chart.selectAll('rect')
      .transition().duration(this.transition)
        .attr('x', (d, i) => this.xAxis(i))
        .attr('y', d => this.yAxis(d.value))
        .attr('height', d => this.yAxis(0) - this.yAxis(d.value))
        .attr('width', this.xAxis.bandwidth())
  }

  public UpdateData(data: any) {
    this.data = data

    this.setScales()
    this.updateAxis()

    this.allRects = this.chart
      .attr('fill', 'tomato')
      .selectAll('rect')
      .data(this.data)

    this.allRects
      .join('rect')
        .transition().duration(this.transition)
        .attr('x', (d, i) => this.xAxis(i))
        .attr('y', d => this.yAxis(d.value))
        .attr('height', d => this.yAxis(0) - this.yAxis(d.value))
        .attr('width', this.xAxis.bandwidth())

    this.ReRenderData()
  }

  public ReRenderData() {
    this.allRects
      .enter().append('rect')
        .attr('x', (d, i) => this.xAxis(i))
        .attr('y', d => this.yAxis(d.value))
        .attr('height', d => this.yAxis(0) - this.yAxis(d.value))
        .attr('width', this.xAxis.bandwidth())
  }

  public RemovePreviousData() {
    this.allRects.exit().remove()
  }

  public ScaleAxis() {
    this.xAxisBottom = axisBottom(this.xAxis)
      .tickFormat((_, i) => this.data[i].name)
      .tickSizeOuter(0);

    this.yAxisLeft = axisLeft(this.yAxis)
      .ticks(null, this.data.format)
  }

  private setScales() {
    let maxValue = max(this.data, d => d["value"]) as any

    this.xAxis = scaleBand()
      .domain([ ...Array(this.data.length).fill(1).map((_, i) => String(i)) ])
      .range([ this.margin.left, this.innerWidth - this.margin.right ])
      .padding(.2);

    this.yAxis = scaleLinear()
      .domain([ 0 , maxValue ]).nice()
      .range([ this.innerHeight - this.margin.bottom, this.margin.top ])
  }

  private createAxis() {
    this.ScaleAxis()

    this.xAxisBottomG = this.chart
      .append('g')
      .call(g => g
          .attr("transform", `translate(0, ${this.innerHeight - this.margin.bottom})`)
          .call(this.xAxisBottom)
      )

    this.yAxisLeftG = this.svg
      .append('g')
      .call(g => g
        .attr("transform", `translate(${this.margin.left}, 0)`)
        .call(this.yAxisLeft)
        .call(g => g.select(".domain").remove())
        .call(g => g.append("text")
            .attr("x", -this.margin.left)
            .attr("y", this.margin.top - 15)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text(this.data.y))
      )
  }

  private updateAxis() {
    this.ScaleAxis()

    this.xAxisBottomG
      .transition().duration(this.transition)
      .call(g => g
        .attr("transform", `translate(0, ${this.innerHeight - this.margin.bottom})`)
        .call(this.xAxisBottom))

    this.yAxisLeftG
        .transition().duration(this.transition)
        .call(g => g
          .attr("transform", `translate(${this.margin.left}, 0)`)
          .call(this.yAxisLeft)
        )
  }
}