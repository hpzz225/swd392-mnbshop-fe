import search from '@/assets/icons/search.svg'
import arrowDown2 from '@/assets/icons/arrow-down-2.svg'
import arrowRight from '@/assets/icons/arrow-right.svg'
import heart2 from '@/assets/icons/heart-2.svg'
import trash from '@/assets/icons/trash.svg'
import plus from '@/assets/icons/plus.svg'
import minus from '@/assets/icons/minus.svg'
import item1 from '@/assets/img/product/item-1.png'

export default function FavouriteList() {
  return (
    <div>
      <main className="checkout-page">
        <div className="container">
          <div className="checkout-container">
            <div className="search-bar d-none d-md-flex">
              <input type="text" name="" id="" placeholder="Search for item" className="search-bar__input" />
              <button className="search-bar__submit">
                <img src={search} alt="" className="search-bar__icon icon" />
              </button>
            </div>
          </div>

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
                  Favorite
                </a>
              </li>
            </ul>
          </div>

          <div className="checkout-container">
            <div className="row gy-xl-3">
              <div className="col-12">
                <div className="cart-info">
                  <h1 className="cart-info__heading">Favourite List</h1>
                  <p className="cart-info__desc">3 items</p>
                  <div className="cart-info__check-all">
                    <label className="cart-info__checkbox">
                      <input type="checkbox" name="shipping-adress" className="cart-info__checkbox-input" />
                    </label>
                  </div>
                  <div className="cart-info__list">
                    {/* <!-- Cart item 1 --> */}
                    <article className="cart-item">
                      <label className="cart-info__checkbox">
                        <input type="checkbox" name="shipping-adress" className="cart-info__checkbox-input" checked />
                      </label>
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
                          <div className="cart-item__ctrl-wrap">
                            <div className="cart-item__ctrl cart-item__ctrl--md-block">
                              <div className="cart-item__input">
                                LavAzza
                                <img className="icon" src={arrowDown2} alt="" />
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
                            <div className="cart-item__ctrl">
                              <button className="cart-item__ctrl-btn">
                                <img src={heart2} alt="" />
                                Save
                              </button>
                              <button className="cart-item__ctrl-btn js-toggle" toggle-target="#delete-confirm">
                                <img src={trash} alt="" />
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="cart-item__content-right">
                          <p className="cart-item__total-price">$47.00</p>
                          <button className="cart-item__checkout-btn btn btn--primary btn--rounded">Check Out</button>
                        </div>
                      </div>
                    </article>

                    {/* <!-- Cart item 1 --> */}
                    <article className="cart-item">
                      <label className="cart-info__checkbox">
                        <input type="checkbox" name="shipping-adress" className="cart-info__checkbox-input" checked />
                      </label>
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
                          <div className="cart-item__ctrl-wrap">
                            <div className="cart-item__ctrl cart-item__ctrl--md-block">
                              <div className="cart-item__input">
                                LavAzza
                                <img className="icon" src={arrowDown2} alt="" />
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
                            <div className="cart-item__ctrl">
                              <button className="cart-item__ctrl-btn">
                                <img src={heart2} alt="" />
                                Save
                              </button>
                              <button className="cart-item__ctrl-btn js-toggle" toggle-target="#delete-confirm">
                                <img src={trash} alt="" />
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="cart-item__content-right">
                          <p className="cart-item__total-price">$47.00</p>
                          <button className="cart-item__checkout-btn btn btn--primary btn--rounded">Check Out</button>
                        </div>
                      </div>
                    </article>

                    {/* <!-- Cart item 1 --> */}
                    <article className="cart-item">
                      <label className="cart-info__checkbox">
                        <input type="checkbox" name="shipping-adress" className="cart-info__checkbox-input" checked />
                      </label>
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
                          <div className="cart-item__ctrl-wrap">
                            <div className="cart-item__ctrl cart-item__ctrl--md-block">
                              <div className="cart-item__input">
                                LavAzza
                                <img className="icon" src={arrowDown2} alt="" />
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
                            <div className="cart-item__ctrl">
                              <button className="cart-item__ctrl-btn">
                                <img src={heart2} alt="" />
                                Save
                              </button>
                              <button className="cart-item__ctrl-btn js-toggle" toggle-target="#delete-confirm">
                                <img src={trash} alt="" />
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="cart-item__content-right">
                          <p className="cart-item__total-price">$47.00</p>
                          <button className="cart-item__checkout-btn btn btn--primary btn--rounded">Check Out</button>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="cart-info__bottom">
                    <div className="cart-info__row cart-info__row-md--block">
                      <div className="cart-info__continue">
                        <a href="./" className="cart-info__continue-link">
                          <img className="cart-info__continue-icon icon" src={arrowDown2} alt="" />
                          Continue Shopping
                        </a>
                      </div>
                      <a href="./checkout.html" className="cart-info__checkout-all btn btn--primary btn--rounded">
                        All Check Out
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
