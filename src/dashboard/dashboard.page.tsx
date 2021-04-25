import React, { useState, useEffect, useRef } from 'react'
import { Page } from 'common/components/layout'
import { Order } from 'core/models/orders'
import { OrderList } from './components'
import { useElementDimensions } from 'common/hooks/elementDimensions'
import mock from './mock/orders'
import styles from './dashboard.module.scss'
import { SimpleChart } from 'common/d3-chart'

const Dashboard = () => {
  const chart = useRef<HTMLDivElement>(null)
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
  }, [])

  useEffect(() => {
    if (!canvas) {
      setCanvas(new SimpleChart(chart))
    }

    if (canvas && dimensions)
      canvas.updateDimensions(dimensions)
  }, [ dimensions ])

  useEffect(() => {
    if (canvas) canvas.init([4, 3, 7, 2, 2, 2, 2, 7, 3, 4, 10, 20, 13, 17, 7, 6], dimensions)
  }, [ canvas ])

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