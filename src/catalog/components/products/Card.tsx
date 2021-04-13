import style from './Card.module.scss'

import { Products } from 'core/models/products'

interface ProductCardProps {
  product: Products,
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { img, name, discount, price } = product

  return (
    <>
      <div className={style.image}>
        <img src={img}/>
      </div>
      <div className={style.info}>
        <span> Código: <b>1374</b> </span>
        <p className={style.name}> {name} </p>
      </div>
      {
        discount ?
          <div className={style.discount}>
            <b className={style.price}> {`R$ ${discount}`} </b>
            <span> {`R$ ${price}`} </span>
          </div> :
          <b className={style.price}> {`R$ ${price}`} </b>
      }
    </>
  )
}

export default ProductCard