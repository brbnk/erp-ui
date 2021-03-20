import { Trail } from 'components'
import { Products } from 'core/models/products'
import ProductCard from './card.component'

import style from './list.module.scss'
import cardStyle from './card.module.scss'

type ProductListProps = {
  products: Products[]
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className={style.products}>
      <Trail containerClass={cardStyle.card}>
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