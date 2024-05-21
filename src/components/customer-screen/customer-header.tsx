import more from '@/assets/icons/more.svg'
import logo from '@/assets/icons/logo.svg'
import arrowLeft from '@/assets/icons/arrow-left.svg'
import buy from '@/assets/icons/buy.svg'
import heart from '@/assets/icons/heart.svg'
import arrowDown from '@/assets/icons/arrow-down.svg'
import search from '@/assets/icons/search.svg'
import avatar from '@/assets/img/avatar.jpg'

export default function CustomerHeader() {
  return (
    <div>
      <div className="container">
        <div className="top-bar">
          <button className="top-bar__more d-none d-lg-block js-toggle" toggle-target="#navbar">
            <img src={more} alt="" className="icon top-bar__more-icon" />
          </button>

          <a href="./" className="logo top-bar__logo">
            <img src={logo} alt="M&B Mart" className="logo__img top-bar__logo-img" />
            <h1 className="logo__title top-bar__logo-title mt-3">M&B Mart</h1>
          </a>

          <nav className="navbar hide" id="navbar">
            <button className="navbar__close-btn js-toggle" toggle-target="#navbar">
              <img className="icon" src={arrowLeft} alt="" />
            </button>

            <a href="" className="nav-btn d-none d-md-flex">
              <img src={buy} alt="" className="icon nav-btn__icon" />
              <span className="nav-btn__title">Card</span>
              <span className="nav-btn__qnt">3</span>
            </a>

            <a href="" className="nav-btn d-none d-md-flex">
              <img src={heart} alt="" className="icon nav-btn__icon" />
              <span className="nav-btn__title">Favorite</span>
              <span className="nav-btn__qnt">3</span>
            </a>

            <ul className="navbar__list js-dropdown-list">
              <li className="navbar__item">
                <a href="#!" className="navbar__link">
                  Departments
                  <img src={arrowDown} alt="" className="icon navbar__arrow" />
                </a>
              </li>
              <li className="navbar__item">
                <a href="#!" className="navbar__link">
                  Grocery
                  <img src={arrowDown} alt="" className="icon navbar__arrow" />
                </a>
              </li>
              <li className="navbar__item">
                <a href="#!" className="navbar__link">
                  Beauty
                  <img src={arrowDown} alt="" className="icon navbar__arrow" />
                </a>
              </li>
            </ul>
          </nav>

          <div className="navbar__overlay js-toggle" toggle-target="#navbar"></div>

          <div className="top-act">
            <div className="top-act__group d-md-none top-act__group--single">
              <button className="top-act__btn">
                <img src={search} alt="" className="icon top-act__icon" />
              </button>
            </div>

            <div className="top-act__group d-md-none">
              <button className="top-act__btn">
                <img src={heart} alt="" className="icon top-act__icon" />
                <span className="top-act__title">03</span>
              </button>

              <div className="top-act__separate"></div>

              <button className="top-act__btn">
                <img src={buy} alt="" className="icon top-act__icon" />
                <span className="top-act__title">$65.42</span>
              </button>
            </div>

            <div className="top-act__user">
              <img src={avatar} alt="" className="top-act__avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
