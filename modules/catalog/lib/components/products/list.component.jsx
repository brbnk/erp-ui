import ProductCard from 'modules/catalog/lib/components/products/card.compopnent'
import style from './list.module.scss'

const ProductList = ({ products }) => {
  return (
    <div className={style.products}>
      {
        products.map((product, index) => {
          return <ProductCard product={product} key={index}/>
        })
      }
    </div>
  )
}

export default ProductList