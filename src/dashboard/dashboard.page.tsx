import React, { useState, useEffect, useRef } from 'react'
import { Page } from 'common/components/layout'
import { Order } from 'core/models/orders'
import { OrderList, Insights } from './components'
import { Marketplace } from './components/insights'
import { useElementDimensions } from 'common/hooks/elementDimensions'
import { BarChart } from './components/charts/bar-chart'

import { mockData, xAxis, chartAxisDetails } from './mock/bar-chart-mock'
import mock from './mock/orders'
import styles from './dashboard.module.scss'

const Dashboard = () => {
  const chart = useRef<HTMLDivElement>(null)
  const [ data, setData ] = useState([])
  const [ canvas, setCanvas ] = useState<any>()
  const [ orders, setOrders ] = useState<Order[]>([])
  const { dimensions } = useElementDimensions(chart)

  const [ selectedMarketplace, setSelectedMarketplace ] = useState<Marketplace>(
    { name: "Mercado Livre", color: "#ecc944" }
  )

  const {
    layout,
    layout__left,
    layout__right
  } = styles

  useEffect(() => {
    setOrders(mock)
    setData(mockData)
  }, [])

  useEffect(() => {
    if (!canvas)
      setCanvas(new BarChart(chart))

    if (canvas && dimensions)
      canvas.UpdateDimensions(dimensions)
  }, [ dimensions ])

  useEffect(() => {
    if (canvas) {
      canvas.updateColor(selectedMarketplace.color)
      canvas.Init(data, dimensions)
    }
  }, [ canvas ])

  useEffect(() => {
    if (canvas)
      canvas.UpdateData(data)
  }, [ data ])

  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const changeData = (marketplace: Marketplace) => {
    let randomXAxis = xAxis.slice(0, getRandomInt(1, xAxis.length - 1))

    let data = randomXAxis.reduce((startArray, letter) => {
      return [...startArray, { name: letter, value: Math.random() }]
    }, [])

    let randomData = Object.assign(data, chartAxisDetails)

    canvas.updateColor(marketplace.color)
    setData(randomData)
    setSelectedMarketplace(marketplace)
  }

  return (
    <Page title='Dashboard' contentLayout={layout}>
      <OrderList
        style={{
          gridRow: '1/3',
          gridColumn: '1'
        }}
        orders={orders}
      />
      <Insights
        ref={chart}
        changeData={changeData}
        selectedMarketplace={selectedMarketplace}
        style={{
          gridRow: '1/2',
          gridColumn: '2/4'
        }}
      />
      <section className={layout__left}>

      </section>
      <section className={layout__right}>

      </section>
    </Page>
  )
}

export default React.memo(Dashboard)