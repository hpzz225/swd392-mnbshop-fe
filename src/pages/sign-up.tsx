import login_thumb from '@/assets/img/auth/login_thumb.png'
import logo from '@/assets/icons/logo3.png'
import message from '@/assets/icons/message.svg'
import lock from '@/assets/icons/lock.svg'
import form_error from '@/assets/icons/form-error.svg'
import google from '@/assets/icons/google.svg'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <main>
      <div className="auth">
        <div className="auth__intro">
          <Link to={'/'} className="auth__intro-logo logo d-none d-md-flex">
            <img src={logo} alt="M&B Mart" className="logo__img" />
            <h1 className="logo__title">M&B Mart</h1>
          </Link>

          <img src={login_thumb} alt="" className="auth__intro-img" />
          <p className="auth__intro-text">
            The best of luxury brand values, high quality products, and innovative services
          </p>

          <button className="auth__intro-next d-none d-md-flex js-toggle" toggle-target="#auth-content">
            <img src="./assets/img/auth/intro-arrow.svg" alt="" />
          </button>
        </div>
        <div className="auth__content hide" id="auth-content">
          <div className="auth__content-inner">
            <Link to={'/'} className="logo">
              <img src={logo} alt="M&B Mart" className="logo__img" />
              <h1 className="logo__title">M&B Mart</h1>
            </Link>
            <h1 className="auth__heading">Sign Up</h1>
            <p className="auth__desc">Let's create your account and Shop like a pro and save money.</p>
            <form action="/" className="form auth__form">
              <div className="form__group">
                <div className="form__text-input">
                  <input type="email" name="" id="" className="form__input" placeholder="Email" required />
                  <img src={message} alt="" className="form__input-icon" />
                  <img src={form_error} alt="" className="form__input-icon-error" />
                </div>
                <p className="form__error">Email is not in correct format</p>
              </div>

              <div className="form__group">
                <div className="form__text-input">
                  <input
                    type="password"
                    name=""
                    id=""
                    className="form__input"
                    placeholder="Password"
                    required
                    minLength={6}
                  />
                  <img src={lock} alt="" className="form__input-icon" />
                  <img src={form_error} alt="" className="form__input-icon-error" />
                </div>
                <p className="form__error">Password is not in correct format</p>
              </div>

              <div className="form__group">
                <div className="form__text-input">
                  <input
                    type="password"
                    name=""
                    id=""
                    className="form__input"
                    placeholder="Confirm password"
                    required
                    minLength={6}
                  />
                  <img src={lock} alt="" className="form__input-icon" />
                  <img src={form_error} alt="" className="form__input-icon-error" />
                </div>
                <p className="form__error">Password is not in correct format</p>
              </div>

              <div className="form__group form__group--inline">
                <label className="form__checkbox">
                  <input type="checkbox" name="" id="" className="form__checkbox-input d-none" />
                  <span className="form__checkbox-label">Set as default card</span>
                </label>
                <Link to={'/forgot'} className="auth__link form__pull-right">
                  Recovery Password
                </Link>
              </div>

              <div className="form__group auth__btn-group">
                <button className="btn btn--primary auth__btn form__submit-btn">Sign Up</button>
                <button className="btn btn--outline auth__btn btn--no-margin">
                  <img src={google} alt="" className="btn__icon icon" />
                  Sign in with Google
                </button>
              </div>
            </form>

            <p className="auth__text">
              You have an account yet?
              <Link to={'/login'} className="auth__link auth__text-link">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
