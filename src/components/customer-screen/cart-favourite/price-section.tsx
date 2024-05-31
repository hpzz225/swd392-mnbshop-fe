import gift from '@/assets/icons/gift.svg'

export default function PriceSection() {
  return (
    <div className="col-4 col-xl-12">
      <div className="cart-info">
        <div className="cart-info__row">
          <span>
            Subtotal <span className="cart-info__sub-label">(items)</span>
          </span>
          <span>3</span>
        </div>
        <div className="cart-info__row">
          <span>
            Price <span className="cart-info__sub-label">(Total)</span>
          </span>
          <span>$191.65</span>
        </div>
        <div className="cart-info__row">
          <span>Shipping</span>
          <span>$10.00</span>
        </div>
        <div className="cart-info__separate"></div>
        <div className="cart-info__row">
          <span>Estimated Total</span>
          <span>$201.65</span>
        </div>
        <a href="./shipping.html" className="cart-info__next-btn btn btn--primary btn--rounded">
          Continue to checkout
        </a>
      </div>
      <div className="cart-info">
        <a href="#!">
          <article className="gift-item">
            <div className="gift-item__icon-wrap">
              <img src={gift} alt="" className="gift-item__icon" />
            </div>
            <div className="gift-item__content">
              <h3 className="gift-item__title">Send this order as a gift.</h3>
              <p className="gift-item__desc">Available items will be shipped to your gift recipient.</p>
            </div>
          </article>
        </a>
      </div>
    </div>
  )
}
