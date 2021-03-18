import ProductCard from 'src/catalog/lib/components/products/card.component'
import Trail from 'components/trail/trail.component'
import style from './list.module.scss'
import cardStyle from './card.module.scss'
import { Products } from '../../../catalog.page'

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