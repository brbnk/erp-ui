import style from './card.module.scss'

const ProductCard = ({ product }) => {
  const { img, name, discount, price } = product

  return (
    <>
      <div className={style.image}>
        <img src={img}/>
      </div>
      <p className={style.name}> {name} </p>
      {
        discount ?
          <div className={style.discount}>
            <b className={style.price}> {discount} </b>
            <span> {price} </span>
          </div> :
          <b className={style.price}> {price} </b>
      }
    </>
  )
}

export default ProductCard