import { forwardRef, useState } from 'react'
import { Equalizer, Assignment, AccountBalance, Person } from '@material-ui/icons'

import insightStyle from './Insights.module.scss'
import dashboardStyle from '../../dashboard.module.scss'

export interface Marketplace {
  name: string,
  color: string
}

interface InsightsProps extends React.HTMLAttributes<HTMLDivElement>{
  changeData: (marketplace: Marketplace) => void,
  selectedMarketplace: Marketplace
}

const Insights = forwardRef<any, any>(
  ({ changeData, selectedMarketplace, ...rest }: InsightsProps, chart
) => {
  const marketplaces: Marketplace[] = [
    { name: "Mercado Livre", color: "#ecc944" },
    { name: "Amazon", color: "#222e3c" },
    { name: "Magazine Luiza", color: "#0f8bff" },
    { name: "Via Varejo", color: "#00462e" },
    { name: "B2W", color: "#06eac3" },
    { name: "Madeira Madeira", color: "#ec7f1e" },
    { name: "Submarino", color: "#0399d0" }
  ]

  const {
    layout__stats,
    stats_container, stats_filter, filters, selected,
    stats_kpi, kpi_card } = insightStyle

  const { section_header } = dashboardStyle

  return (
    <section { ...rest } className={ layout__stats }>
      <div className={section_header}>
        <Equalizer/>
        <h1> Insights </h1>
      </div>
      <div className={stats_container}>
        <div className={stats_filter}>
          <div className={filters}>
            {
              marketplaces.map((m, i) =>
                <h3
                  key={i}
                  onClick={() => { changeData(m) }}
                  className={selectedMarketplace.name === m.name ? selected : null}
                > { m.name } </h3>
              )
            }
          </div>
          <div style={{ height: '100%', width: '100%' }} ref={chart}>

          </div>
        </div>
        <div className={stats_kpi} style={{ color: `${selectedMarketplace.color}`}}>
            <div className={kpi_card}>
              <div>
                <h1> 1000 </h1>
                <span> Pedidos </span>
              </div>
              <Assignment/>
            </div>
            <div className={kpi_card}>
              <div>
                <h1> R$ 200.321,00 </h1>
                <span> Faturamento </span>
              </div>
              <AccountBalance />
            </div>
            <div className={kpi_card}>
              <div>
                <h1> R$ {Math.ceil(200321/100)} </h1>
                <span> Ticket Médio </span>
              </div>
              <Person/>
            </div>
        </div>
      </div>
    </section>
  )
})

export default Insights