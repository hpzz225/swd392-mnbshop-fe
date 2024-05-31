import productImg from '@/assets/img/product/milk1.png'
import heart from '@/assets/icons/heart.svg'
import heartActive from '@/assets/icons/heart-red.svg'
import star from '@/assets/icons/star.svg'
import { Link } from 'react-router-dom'
import { ROUTE_PATHS } from '@/router'

export default function ProductCard() {
  return (
    <div>
      <div className="col">
        <article className="product-card">
          <div className="product-card__img-wrap">
            {/* TODO: add link */}
            <Link to={`${ROUTE_PATHS.PRODUCT}/1`}>
              <img src={productImg} alt="" className="product-card__thumb" />
            </Link>
            <button className="like-btn product-card__like-btn">
              <img src={heart} alt="" className="icon like-btn__icon" />
              <img src={heartActive} alt="" className="like-btn__icon--liked" />
            </button>
          </div>

          <Link to={`${ROUTE_PATHS.PRODUCT}/1`}>
            <h3 className="product-card__title">Lavazza Milk Blends - Try the Italian</h3>
          </Link>
          <p className="product-card__brand">Lavazza</p>
          <div className="product-card__row">
            <div className="product-card__rating">
              <img src={star} alt="" className="product-card__star" />
              <span className="product-card__score">3.4</span>
            </div>
            <span className="product-card__price">$53.00</span>
          </div>
        </article>
      </div>
    </div>
  )
}
