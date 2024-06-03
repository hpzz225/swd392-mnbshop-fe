import arrowRight from '@/assets/icons/arrow-right.svg'
import heart from '@/assets/icons/heart.svg'
import trash from '@/assets/icons/trash.svg'
import plus from '@/assets/icons/plus.svg'
import minus from '@/assets/icons/minus.svg'
import item1 from '@/assets/img/product/milk1.png'

export default function CartItem({ isCheckout }: { isCheckout?: boolean }) {
  return (
    <article className="cart-item">
      <a href="./product-detail.html">
        <img src={item1} alt="" className="cart-item__thumb" />
      </a>
      <div className="cart-item__content">
        <div className="cart-item__content-left">
          <h3 className="cart-item__title">
            <a href="./product-detail.html">Coffee Beans - Espresso Arabica and Robusta Beans</a>
          </h3>
          <p className="cart-item__price-wrap">
            $47.00 | <span className="cart-item__status">In Stock</span>
          </p>
          <div className="cart-item__ctrl cart-item__ctrl--md-block">
            <div className="cart-item__input">
              LavAzza
              <img className="icon" src={arrowRight} alt="" />
            </div>
            {isCheckout ? (
              <div className="cart-item__input">
                <span>1</span>
              </div>
            ) : (
              <div className="cart-item__input">
                <button className="cart-item__input-btn">
                  <img className="icon" src={minus} alt="" />
                </button>
                <span>1</span>
                <button className="cart-item__input-btn">
                  <img className="icon" src={plus} alt="" />
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="cart-item__content-right">
          <p className="cart-item__total-price">$47.00</p>
          <div className="cart-item__ctrl">
            <button className="cart-item__ctrl-btn">
              <img src={heart} alt="" />
              Save
            </button>
            <button className="cart-item__ctrl-btn js-toggle" toggle-target="#delete-confirm">
              <img src={trash} alt="" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
