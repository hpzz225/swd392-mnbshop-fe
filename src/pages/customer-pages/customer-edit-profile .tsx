import profileImg from '@/assets/img/avatar/avatar-3.png'
import arrowLeft from '@/assets/icons/arrow-left.svg'
import profile from '@/assets/icons/profile.svg'
import location from '@/assets/icons/location.svg'
import message2 from '@/assets/icons/message-2.svg'
import formError from '@/assets/icons/form-error.svg'
import heart from '@/assets/icons/heart.svg'
import download from '@/assets/icons/download.svg'
import gift2 from '@/assets/icons/gift-2.svg'
import shield from '@/assets/icons/shield.svg'
import info from '@/assets/icons/info.svg'
import danger from '@/assets/icons/danger.svg'

export default function CustomerEditProfile() {
  return (
    <div>
      <main className="profile">
        <div className="container">
          <div className="profile-container">
            <div className="search-bar d-none d-md-flex">
              <input type="text" name="" id="" placeholder="Search for item" className="search-bar__input" />
              <button className="search-bar__submit">
                <img src="./assets/icons/search.svg" alt="" className="search-bar__icon icon" />
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
              <div className="col-9 col-xl-8 col-lg-12">
                <div className="cart-info">
                  <div className="row gy-3">
                    <div className="col-12">
                      <h2 className="cart-info__heading">
                        <a href="./profile.html">
                          <img src={arrowLeft} alt="" className="icon cart-info__back-arrow" />
                        </a>
                        Add credit or debit card
                      </h2>

                      <form action="./profile.html" className="form form-card">
                        <div className="form__row">
                          <div className="form__group">
                            <label htmlFor="first-name" className="form__label form-card__label">
                              First Name
                            </label>
                            <div className="form__text-input">
                              <input
                                type="text"
                                name=""
                                id="first-name"
                                placeholder="First name"
                                className="form__input"
                                required
                                autoFocus
                              />
                              <img src={formError} alt="" className="form__input-icon-error" />
                            </div>
                            <p className="form__error">Please enter your first name</p>
                          </div>
                          <div className="form__group">
                            <label htmlFor="last-name" className="form__label form-card__label">
                              Last Name
                            </label>
                            <div className="form__text-input">
                              <input
                                type="text"
                                name=""
                                id="last-name"
                                placeholder="Last name"
                                className="form__input"
                                required
                              />
                              <img src={formError} alt="" className="form__input-icon-error" />
                            </div>
                            <p className="form__error">Please enter your last name</p>
                          </div>
                        </div>

                        <div className="form__row">
                          <div className="form__group">
                            <label htmlFor="card-number" className="form__label form-card__label">
                              Card Number
                            </label>
                            <div className="form__text-input">
                              <input
                                type="text"
                                name=""
                                id="card-number"
                                placeholder="Card Number"
                                className="form__input"
                                required
                              />
                              <img src={formError} alt="" className="form__input-icon-error" />
                            </div>
                            <p className="form__error">Please enter a valid card number</p>
                          </div>
                          <div className="form__group">
                            <label htmlFor="expiration-date" className="form__label form-card__label">
                              Expiration Date
                            </label>
                            <div className="form__text-input">
                              <input
                                type="text"
                                name=""
                                id="expiration-date"
                                placeholder="Expiration Date"
                                className="form__input"
                                required
                              />
                              <img src={formError} alt="" className="form__input-icon-error" />
                            </div>
                            <p className="form__error">Please enter a valid expiration date</p>
                          </div>
                        </div>

                        <div className="form__row">
                          <div className="form__group">
                            <label htmlFor="card-cvv" className="form__label form-card__label">
                              CVV
                            </label>
                            <div className="form__text-input">
                              <input
                                type="text"
                                name=""
                                id="card-cvv"
                                placeholder="123"
                                className="form__input"
                                required
                              />
                              <img src={formError} alt="" className="form__input-icon-error" />
                            </div>
                            <p className="form__error">Please enter a valid CVV</p>
                          </div>
                          <div className="form__group">
                            <label htmlFor="phone-number" className="form__label form-card__label">
                              Phone Number
                            </label>
                            <div className="form__text-input">
                              <input
                                type="text"
                                name=""
                                id="phone-number"
                                placeholder="Phone Number"
                                className="form__input"
                                required
                              />
                              <img src={formError} alt="" className="form__input-icon-error" />
                            </div>
                            <p className="form__error">Please enter a valid phone number</p>
                          </div>
                        </div>

                        <div className="form__group">
                          <label htmlFor="set-default-card" className="form__label form-card__label">
                            Card Preferences
                          </label>
                          <label className="form__checkbox">
                            <input
                              type="checkbox"
                              name=""
                              id="set-default-card"
                              checked
                              className="form__checkbox-input d-none"
                            />
                            <span className="form__checkbox-label">Set as default card</span>
                          </label>
                        </div>

                        <div className="form-card__bottom">
                          <a className="btn btn--text" href="./profile.html">
                            Cancel
                          </a>
                          <button className="btn btn--primary btn--rounded">Save card</button>
                        </div>
                      </form>
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
