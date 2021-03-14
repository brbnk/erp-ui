import ProductCard from 'modules/catalog/lib/components/products/card.component'
import Trail from 'components/trail/trail.component'
import style from './list.module.scss'
import cardStyle from './card.module.scss'

const ProductList = ({ products }) => {
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