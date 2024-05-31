import profileImg from '@/assets/img/avatar/avatar-3.png'
import profile from '@/assets/icons/profile.svg'
import location from '@/assets/icons/location.svg'
import message2 from '@/assets/icons/message-2.svg'
import heart from '@/assets/icons/heart.svg'
import download from '@/assets/icons/download.svg'
import gift2 from '@/assets/icons/gift-2.svg'
import shield from '@/assets/icons/shield.svg'
import { ROUTE_PATHS_CUSTOMER } from '@/router'
import { Link } from 'react-router-dom'

export default function SidebarInfo() {
  return (
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
              <Link to={ROUTE_PATHS_CUSTOMER.EDIT_PROFILE} className="profile-menu__link">
                <span className="profile-menu__icon">
                  <img src={profile} alt="" className="icon" />
                </span>
                Personal info
              </Link>
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
      </aside>
    </div>
  )
}
