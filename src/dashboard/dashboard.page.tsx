import React, { useState, useEffect, useRef } from 'react'
import { Page } from 'common/components/layout'
import { Order } from 'core/models/orders'
import { OrderList } from './components'
import { useElementDimensions } from 'common/hooks/elementDimensions'
import { SimpleChart } from './components/charts/simple-chart'

import mock from './mock/orders'
import styles from './dashboard.module.scss'

const Dashboard = () => {
  const chart = useRef<HTMLDivElement>(null)
  const [ data, setData ] = useState([])
  const [ canvas, setCanvas ] = useState<any>()
  const [ orders, setOrders ] = useState<Order[]>([])
  const { dimensions } = useElementDimensions(chart)

  const {
    layout,
    layout__stats,
    layout__left,
    layout__right
  } = styles

  useEffect(() => {
    setOrders(mock)
    setData([4, 3, 7, 2, 2, 2, 2, 7, 3, 4, 10, 20, 13, 17, 7, 6])
  }, [])

  useEffect(() => {
    if (!canvas) {
      setCanvas(new SimpleChart(chart))
    }

    if (canvas && dimensions)
      canvas.UpdateDimensions(dimensions)
  }, [ dimensions ])

  useEffect(() => {
    if (canvas) canvas.Init(data, dimensions)
  }, [ canvas ])

  useEffect(() => {
    if (canvas) canvas.UpdateData(data)
  }, [ data ])

  const changeData = () => {
    let arr = []

    for (let i = 0; i < 20; i ++) {
      arr.push(Math.round(Math.random()  * 20))
    }
    setData(arr)
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
      <section className={layout__stats}>
        <div style={{ height: '100%', width: '100%' }} ref={chart}>

        </div>
        <div>
          <button onClick={changeData}> Change Data </button>
        </div>
      </section>
      <section className={layout__left}>

      </section>
      <section className={layout__right}>

      </section>
    </Page>
  )
}

export default React.memo(Dashboard)