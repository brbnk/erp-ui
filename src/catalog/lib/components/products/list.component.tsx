import ProductCard from './card.component'
import { Products } from 'core/models/products'
import { Trail } from 'lib/components'
import { TrailConfigs } from 'lib/components/trail/trail.component'

import style from './list.module.scss'
import cardStyle from './card.module.scss'

type ProductListProps = {
  products: Products[],
  trailConfigs: TrailConfigs
}

const ProductList = ({ products, trailConfigs }: ProductListProps) => {
  return (
    <>
      {
        products.length > 0 ?
        <div className={style.products}>
            <Trail containerClass={cardStyle.card} configs={trailConfigs}>
              {
                products.map((product, index) => (
                  <ProductCard product={product} key={index}/>
                ))
              }
            </Trail>
        </div> :
        <div className={style.noContent}>
          <img src='https://www.drcycle.in/assets/images/NoRecordFound.png'/>
        </div>
      }
    </>
  )
}

export default ProductList