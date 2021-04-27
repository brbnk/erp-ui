import { forwardRef, useState } from 'react'
import { Equalizer } from '@material-ui/icons'

import insightStyle from './Insights.module.scss'
import dashboardStyle from '../../dashboard.module.scss'

interface InsightsProps extends React.HTMLAttributes<HTMLDivElement>{
  changeData: () => void
}

const Insights = forwardRef<any, any>(({ changeData, ...rest }: InsightsProps, ref) => {
  const [ selectedMarketplace, setSelectedMarketplace ] = useState<string>("Mercado Livre")
  const [ marketplaces, setMarketplaces ] = useState<string[]>([
    "Mercado Livre", "Amazon", "Magazine Luiza"
  ])

  const { layout__stats, stats_container, stats_filter, filters, selected } = insightStyle
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
                  onClick={() => { changeData(); setSelectedMarketplace(m) }}
                  className={selectedMarketplace === m ? selected : null}
                > { m } </h3>
              )
            }
          </div>
          <div style={{ height: '100%', width: '100%' }} ref={ref}>

          </div>
        </div>
        <div>

        </div>
      </div>
    </section>
  )
})

export default Insights