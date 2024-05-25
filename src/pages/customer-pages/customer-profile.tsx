import profileImg from '@/assets/img/avatar/avatar-3.png'
import search from '@/assets/icons/search.svg'
import profile from '@/assets/icons/profile.svg'
import location from '@/assets/icons/location.svg'
import message2 from '@/assets/icons/message-2.svg'
import message from '@/assets/icons/message.svg'
import heart from '@/assets/icons/heart.svg'
import download from '@/assets/icons/download.svg'
import gift2 from '@/assets/icons/gift-2.svg'
import shield from '@/assets/icons/shield.svg'
import info from '@/assets/icons/info.svg'
import danger from '@/assets/icons/danger.svg'
import calling from '@/assets/icons/calling.svg'
import plus from '@/assets/icons/plus.svg'
import planeBg from '@/assets/img/card/plane-bg.svg'
import plane from '@/assets/img/card/plane.svg'
import leafBg from '@/assets/img/card/leaf-bg.svg'
import leaf from '@/assets/img/card/leaf.svg'
import item1 from '@/assets/img/product/item-1.png'
import item2 from '@/assets/img/product/item-2.png'

type CustomStyleProps = {
  '--bg-color'?: string
  '--margin'?: string
}

export default function CustomerProfile() {
  const bgColorSelectStyle1: React.CSSProperties & CustomStyleProps = {
    '--bg-color': '#354151',
  }
  const bgColorSelectStyle2: React.CSSProperties & CustomStyleProps = {
    '--bg-color': '#1e2e69',
  }
  const marginSelectStyle: React.CSSProperties & CustomStyleProps = {
    '--margin': '20px',
  }

  return (
    <div>
      <main className="profile">
        <div className="container">
          <div className="profile-container">
            <div className="search-bar d-none d-md-flex">
              <input type="text" name="" id="" placeholder="Search for item" className="search-bar__input" />
              <button className="search-bar__submit">
                <img src={search} alt="" className="search-bar__icon icon" />
              </button>
            </div>
          </div>

          <div className="profile-container">
            <div className="row gy-md-3">
              <div className="col-3 col-xl-4 col-lg-5 col-md-12">
                <aside className="profile__sidebar">
                  <div className="profile-user">
                    <img src={profileImg} alt="" className="profile-user__avatar" />
                    <h1 className="profile-user__name">Imran Khan</h1>
                    <p className="profile-user__desc">Registered: 17th May 2022</p>
                  </div>

                  <div className="profile-menu">
                    <h3 className="profile-menu__title">Manage Account</h3>
                    <ul className="profile-menu__list">
                      <li>
                        <a href="./edit-personal-info.html" className="profile-menu__link">
                          <span className="profile-menu__icon">
                            <img src={profile} alt="" className="icon" />
                          </span>
                          Personal info
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="profile-menu__link">
                          <span className="profile-menu__icon">
                            <img src={location} alt="" className="icon" />
                          </span>
                          Addresses
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="profile-menu__link">
                          <span className="profile-menu__icon">
                            <img src={message2} alt="" className="icon" />
                          </span>
                          Communications & privacy
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="profile-menu">
                    <h3 className="profile-menu__title">My items</h3>
                    <ul className="profile-menu__list">
                      <li>
                        <a href="#!" className="profile-menu__link">
                          <span className="profile-menu__icon">
                            <img src={download} alt="" className="icon" />
                          </span>
                          Reorder
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="profile-menu__link">
                          <span className="profile-menu__icon">
                            <img src={heart} alt="" className="icon" />
                          </span>
                          Lists
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="profile-menu__link">
                          <span className="profile-menu__icon">
                            <img src={gift2} alt="" className="icon" />
                          </span>
                          Registries
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="profile-menu">
                    <h3 className="profile-menu__title">Subscriptions & plans</h3>
                    <ul className="profile-menu__list">
                      <li>
                        <a href="#!" className="profile-menu__link">
                          <span className="profile-menu__icon">
                            <img src={shield} alt="" className="icon" />
                          </span>
                          Protection plans
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="profile-menu">
                    <h3 className="profile-menu__title">Customer Service</h3>
                    <ul className="profile-menu__list">
                      <li>
                        <a href="#!" className="profile-menu__link">
                          <span className="profile-menu__icon">
                            <img src={info} alt="" className="icon" />
                          </span>
                          Help
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="profile-menu__link">
                          <span className="profile-menu__icon">
                            <img src={danger} alt="" className="icon" />
                          </span>
                          Terms of Use
                        </a>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
              <div className="col-9 col-xl-8 col-lg-7 col-md-12">
                <div className="cart-info">
                  <div className="row gy-3">
                    <div className="col-12">
                      <h2 className="cart-info__heading">My Wallet</h2>
                      <p className="cart-info__desc profile__desc">Payment methods</p>

                      <div className="row gy-md-2 row-cols-3 row-cols-xl-2 row-cols-lg-1">
                        <div className="col">
                          <article className="payment-card" style={bgColorSelectStyle1}>
                            <img src={planeBg} alt="" className="payment-card__img" />
                            <div className="payment-card__top">
                              <img src={plane} alt="" />
                              <span className="payment-card__type">FeatherCard</span>
                            </div>
                            <div className="payment-card__number">1234 4567 8901 2221</div>
                            <div className="payment-card__bottom">
                              <div>
                                <p className="payment-card__label">Card Holder</p>
                                <p className="payment-card__value">Imran Khan</p>
                              </div>
                              <div className="payment-card__expired">
                                <p className="payment-card__label">Expired</p>
                                <p className="payment-card__value">10/22</p>
                              </div>
                              <div className="payment-card__circle"></div>
                            </div>
                          </article>
                        </div>

                        <div className="col">
                          <article className="payment-card" style={bgColorSelectStyle2}>
                            <img src={leafBg} alt="" className="payment-card__img" />
                            <div className="payment-card__top">
                              <img src={leaf} alt="" />
                              <span className="payment-card__type">FeatherCard</span>
                            </div>
                            <div className="payment-card__number">1234 4567 2221 8901</div>
                            <div className="payment-card__bottom">
                              <div>
                                <p className="payment-card__label">Card Holder</p>
                                <p className="payment-card__value">Imran Khan</p>
                              </div>
                              <div className="payment-card__expired">
                                <p className="payment-card__label">Expired</p>
                                <p className="payment-card__value">11/22</p>
                              </div>
                              <div className="payment-card__circle"></div>
                            </div>
                          </article>
                        </div>

                        <div className="col">
                          <a className="new-card" href="./add-new-card.html">
                            <img src={plus} alt="" className="new-card__icon icon" />
                            <p className="new-card__text">Add New Card</p>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <h2 className="cart-info__heading">Account info</h2>
                      <p className="cart-info__desc profile__desc">Addresses, contact information and password</p>
                      <div className="row gy-md-2 row-cols-2 row-cols-lg-1">
                        <div className="col">
                          <a href="./edit-personal-info.html">
                            <article className="account-info">
                              <div className="account-info__icon">
                                <img src={message} alt="" className="icon" />
                              </div>
                              <div>
                                <h3 className="account-info__title">Email Address</h3>
                                <p className="account-info__desc">tarek97.ta@gmail.com</p>
                              </div>
                            </article>
                          </a>
                        </div>

                        <div className="col">
                          <a href="./edit-personal-info.html">
                            <article className="account-info">
                              <div className="account-info__icon">
                                <img src={calling} alt="" className="icon" />
                              </div>
                              <div>
                                <h3 className="account-info__title">Phone number</h3>
                                <p className="account-info__desc">+000 11122 2345 657</p>
                              </div>
                            </article>
                          </a>
                        </div>

                        <div className="col">
                          <a href="./edit-personal-info.html">
                            <article className="account-info">
                              <div className="account-info__icon">
                                <img src={location} alt="" className="icon" />
                              </div>
                              <div>
                                <h3 className="account-info__title">Add an address</h3>
                                <p className="account-info__desc">Bangladesh Embassy, Washington, DC 20008</p>
                              </div>
                            </article>
                          </a>
                        </div>

                        <div className="col">
                          <a href="./edit-personal-info.html">
                            <article className="account-info">
                              <div className="account-info__icon">
                                <img src={gift2} alt="" className="icon" />
                              </div>
                              <div>
                                <h3 className="account-info__title">Day of birth</h3>
                                <p className="account-info__desc">29th July 2002</p>
                              </div>
                            </article>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <h2 className="cart-info__heading">Lists</h2>
                      <p className="cart-info__desc profile__desc">2 items - Primary</p>

                      <article className="favourite-item">
                        <img src={item1} alt="" className="favourite-item__thumb" />
                        <div>
                          <h3 className="favourite-item__title">Coffee Beans - Espresso Arabica and Robusta Beans</h3>
                          <div className="favourite-item__content">
                            <span className="favourite-item__price">$47.00</span>
                            <button className="btn btn--primary btn--rounded">Add to cart</button>
                          </div>
                        </div>
                      </article>

                      <div className="separate" style={marginSelectStyle}></div>

                      <article className="favourite-item">
                        <img src={item2} alt="" className="favourite-item__thumb" />
                        <div>
                          <h3 className="favourite-item__title">Lavazza Coffee Blends - Try the Italian Espresso</h3>
                          <div className="favourite-item__content">
                            <span className="favourite-item__price">$53.00</span>
                            <button className="btn btn--primary btn--rounded">Add to cart</button>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div id="delete-confirm" className="modal modal--small hide">
        <div className="modal__content">
          <p className="modal__text">Do you want to remove this item from shopping cart?</p>
          <div className="modal__bottom">
            <button className="btn btn--small btn--outline modal__btn js-toggle" toggle-target="#delete-confirm">
              Cancel
            </button>
            <button
              className="btn btn--small btn--danger btn--primary modal__btn btn--no-margin js-toggle"
              toggle-target="#delete-confirm"
            >
              Delete
            </button>
          </div>
        </div>
        <div className="modal__overlay js-toggle" toggle-target="#delete-confirm"></div>
      </div>
    </div>
  )
}
