import { Trail } from 'components'
import { Products } from 'core/models/products'
import ProductCard from './card.component'
import { TrailConfigs } from 'components/trail/trail.component'

import style from './list.module.scss'
import cardStyle from './card.module.scss'

type ProductListProps = {
  products: Products[],
  trailConfigs: TrailConfigs
}

const ProductList = ({ products, trailConfigs }: ProductListProps) => {
  return (
    <div className={style.products}>
      <Trail containerClass={cardStyle.card} configs={trailConfigs}>
        {
          products.map((product, index) => (
            <ProductCard product={product} key={index}/>
          ))
        }
      </Trail>
    </div>
  )
}

export default ProductList