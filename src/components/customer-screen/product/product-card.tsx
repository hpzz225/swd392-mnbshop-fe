import addToCart from '@/assets/icons/buy.svg'
import star from '@/assets/icons/star.svg'
import { Link } from 'react-router-dom'
import { ROUTE_PATHS } from '@/router'
import { ProductDetail } from '@/types'
import { useAddCartItem } from '@/hooks/customer-hook/cart/use-add-cart.item'

export default function ProductCard(product: ProductDetail) {
  const AddToCartMutation = useAddCartItem()

  function handleAddToCart(productId: number, quantity: number) {
    console.log(productId, quantity)
    AddToCartMutation.mutate({ productId, quantity })
  }

  return (
    <div>
      <div className="col">
        <article className="product-card">
          <div className="product-card__img-wrap">
            {/* TODO: add link */}
            <Link to={`${ROUTE_PATHS.PRODUCT}/${product?.productId}`}>
              <img src={product?.productImg} alt="" className="product-card__thumb" />
            </Link>
            <button className="like-btn product-card__like-btn" onClick={() => handleAddToCart(product?.productId, 1)}>
              <img src={addToCart} alt="" className="icon like-btn__icon" />
            </button>
          </div>

          <Link to={`${ROUTE_PATHS.PRODUCT}/${product?.productId}`}>
            <h3 className="product-card__title">{product?.productName}</h3>
          </Link>
          <p className="product-card__brand">{product?.brandId}</p>
          <div className="product-card__row">
            <div className="product-card__rating">
              <img src={star} alt="" className="product-card__star" />
              <span className="product-card__score">Danh gia</span>
            </div>
            <span className="product-card__price">{product?.productPrice}</span>
          </div>
        </article>
      </div>
    </div>
  )
}
