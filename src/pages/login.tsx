import login_thumb from '@/assets/img/auth/login_thumb.png'
import logo from '@/assets/icons/logo.svg'
import message from '@/assets/icons/message.svg'
import lock from '@/assets/icons/lock.svg'
import form_error from '@/assets/icons/form-error.svg'
import google from '@/assets/icons/google.svg'

export default function Login() {
  return (
    <div className="auth">
      <div className="auth__intro d-md-none">
        <img src={login_thumb} alt="" className="auth__intro-img" />
        <p className="auth__intro-text">Nourishing the Bond Between Mom and Baby with Nature's Perfect Nutrients</p>
      </div>
      <div className="auth__content">
        <div className="auth__content-inner">
          <a href="./" className="logo">
            <img src={logo} alt="M&B Mart" className="logo__img" />
            <h2 className="logo__title">M&B Mart</h2>
          </a>
          <h1 className="auth__heading">Hello Again!</h1>
          <p className="auth__desc">
            Welcome back to sign in. As a returning customer, you have access to your previously saved all information.
          </p>
          <form action="" className="form auth__form">
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

            <div className="form__group form__group--inline">
              <label className="form__checkbox">
                <input type="checkbox" name="" id="" className="form__checkbox-input d-none" />
                <span className="form__checkbox-label">Set as default card</span>
              </label>
              <a href="" className="auth__link form__pull-right">
                Forgot Password
              </a>
            </div>

            <div className="form__group auth__btn-group">
              <button className="btn btn--primary auth__btn form__submit-btn">Sign in</button>
              <button className="btn btn--outline auth__btn btn--no-margin">
                <img src={google} alt="" className="btn__icon icon" />
                Sign in with Google
              </button>
            </div>
          </form>

          <p className="auth__text">
            Don't have an account yet?
            <a href="" className="auth__link auth__text-link">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
