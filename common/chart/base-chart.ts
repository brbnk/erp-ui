import { select } from "d3-selection";
import { MutableRefObject } from "react";

interface ChartMargin {
  top: number,
  bottom: number,
  left: number,
  right: number
}

interface RenderLifecycle {
  Init: (data: any, dimensions: DOMRect) => void,
  UpdateDimensions: (dimensions: DOMRect) => void,
  SetDimensions: (dimensions: DOMRect) => void,
  UpdateData: (data: any) => void,
  ReRenderData: () => void,
  RemovePreviousData: () => void,
  ScaleAxis: () => void
}

export abstract class D3Chart implements RenderLifecycle {
  protected svg: any;
  protected chart: any;
  protected xAxis: any;
  protected yAxis: any;
  protected dimensions: DOMRect;
  protected innerHeight: number;
  protected innerWidth: number;
  protected data: any;
  protected margin: ChartMargin;
  protected transition: number;

  constructor(chartContainer: MutableRefObject<HTMLDivElement>) {
    this.svg = select(chartContainer.current).append('svg')
    this.svg
      .attr('width', '100%')
      .attr('height', '100%')

    this.margin = { top: 80, bottom: 15, left: 65, right: 80 }
    this.transition = 200

    this.chart = this.svg.append('g')
  }

  // It should apppend an svg to the DOM element and Set dimensions, axis (if it exists) and data
  public abstract Init(data: any, dimensions: DOMRect);

  // It should set chart dimensions dinamycally
  public abstract UpdateDimensions(dimensions: DOMRect)

  // It should receive and update data
  public abstract UpdateData(data: any)

  // It should "recreate chart" after receiving data
  public abstract ReRenderData()

  // It should remove previous data
  public abstract RemovePreviousData()

  // It should scale Axis
  public abstract ScaleAxis()

  public SetDimensions(dimensions: DOMRect) {
    this.dimensions = dimensions
    this.innerWidth = dimensions.width
    this.innerHeight = dimensions.height
  }
}