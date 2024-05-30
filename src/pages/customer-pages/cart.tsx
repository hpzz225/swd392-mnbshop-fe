import search from '@/assets/icons/search.svg'
import arrowDown2 from '@/assets/icons/arrow-down-2.svg'
import arrowRight from '@/assets/icons/arrow-right.svg'
import heart from '@/assets/icons/heart.svg'
import trash from '@/assets/icons/trash.svg'
import gift from '@/assets/icons/gift.svg'
import plus from '@/assets/icons/plus.svg'
import minus from '@/assets/icons/minus.svg'
import item1 from '@/assets/img/product/item-1.png'

export default function Cart() {
  return (
    <div>
      <main className="checkout-page">
        <div className="container">
          {/* <!-- Search bar --> */}
          <div className="checkout-container">
            <div className="search-bar d-none d-md-flex">
              <input type="text" name="" id="" placeholder="Search for item" className="search-bar__input" />
              <button className="search-bar__submit">
                <img src={search} alt="" className="search-bar__icon icon" />
              </button>
            </div>
          </div>

          {/* <!-- Breadcrumbs --> */}
          <div className="checkout-container">
            <ul className="breadcrumbs checkout-page__breadcrumbs">
              <li>
                <a href="./" className="breadcrumbs__link">
                  Home
                  <img src={arrowRight} alt="" />
                </a>
              </li>
              <li>
                <a href="#!" className="breadcrumbs__link breadcrumbs__link--current">
                  Checkout
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Checkout content --> */}
          <div className="checkout-container">
            <div className="row gy-xl-3">
              <div className="col-8 col-xl-12">
                <div className="cart-info">
                  <div className="cart-info__list">
                    {/* <!-- Cart item 1 --> */}
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
                            <div className="cart-item__input">
                              <button className="cart-item__input-btn">
                                <img className="icon" src={minus} alt="" />
                              </button>
                              <span>1</span>
                              <button className="cart-item__input-btn">
                                <img className="icon" src={plus} alt="" />
                              </button>
                            </div>
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

                    {/* <!-- Cart item 1 --> */}
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
                            <div className="cart-item__input">
                              <button className="cart-item__input-btn">
                                <img className="icon" src={minus} alt="" />
                              </button>
                              <span>1</span>
                              <button className="cart-item__input-btn">
                                <img className="icon" src={plus} alt="" />
                              </button>
                            </div>
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

                    {/* <!-- Cart item 1 --> */}
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
                            <div className="cart-item__input">
                              <button className="cart-item__input-btn">
                                <img className="icon" src={minus} alt="" />
                              </button>
                              <span>1</span>
                              <button className="cart-item__input-btn">
                                <img className="icon" src={plus} alt="" />
                              </button>
                            </div>
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
                  </div>
                  <div className="cart-info__bottom d-md-none">
                    <div className="row">
                      <div className="col-8 col-xxl-7">
                        <div className="cart-info__continue">
                          <a href="./" className="cart-info__continue-link">
                            <img className="cart-info__continue-icon icon" src={arrowDown2} alt="" />
                            Continue Shopping
                          </a>
                        </div>
                      </div>
                      <div className="col-4 col-xxl-5">
                        <div className="cart-info__row">
                          <span>Subtotal:</span>
                          <span>$191.65</span>
                        </div>
                        <div className="cart-info__row">
                          <span>Shipping:</span>
                          <span>$10.00</span>
                        </div>
                        <div className="cart-info__separate"></div>
                        <div className="cart-info__row cart-info__row--bold">
                          <span>Total:</span>
                          <span>$201.65</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
