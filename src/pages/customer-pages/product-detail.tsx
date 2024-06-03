import search from '@/assets/icons/search.svg'
import arrowRight from '@/assets/icons/arrow-right.svg'
import star from '@/assets/icons/star.svg'
import starHalf from '@/assets/icons/star-half.svg'
import starBlank from '@/assets/icons/star-blank.svg'
import selectArrow from '@/assets/icons/select-arrow.svg'
import document from '@/assets/icons/document.svg'
import buy from '@/assets/icons/buy.svg'
import bag from '@/assets/icons/bag.svg'
import heart from '@/assets/icons/heart.svg'
import heartRed from '@/assets/icons/heart-red.svg'
import avatar1 from '@/assets/img/avatar/avatar-1.png'
import item1 from '@/assets/img/product/milk1.png'

type CustomStyleProps = {
  '--width'?: string
}

export default function ProductDetail() {
  const widthSelectStyle: React.CSSProperties & CustomStyleProps = {
    '--width': '146px',
  }
  return (
    <div>
      <main className="product-page">
        <div className="container">
          {/* <!-- Search bar --> */}
          <div className="product-container">
            <div className="search-bar d-none d-md-flex">
              <input type="text" name="" id="" placeholder="Search for item" className="search-bar__input" />
              <button className="search-bar__submit">
                <img src={search} alt="" className="search-bar__icon icon" />
              </button>
            </div>
          </div>

          {/* <!-- Breadcrumbs --> */}
          <div className="product-container">
            <ul className="breadcrumbs">
              <li>
                <a href="#!" className="breadcrumbs__link">
                  Departments
                  <img src={arrowRight} alt="" />
                </a>
              </li>
              <li>
                <a href="#!" className="breadcrumbs__link">
                  Coffee
                  <img src={arrowRight} alt="" />
                </a>
              </li>
              <li>
                <a href="#!" className="breadcrumbs__link">
                  Coffee Beans
                  <img src={arrowRight} alt="" />
                </a>
              </li>
              <li>
                <a href="#!" className="breadcrumbs__link breadcrumbs__link--current">
                  LavAzza
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Product info --> */}
          <div className="product-container prod-info-content">
            <div className="row">
              <div className="col-5 col-xl-6 col-lg-12">
                <div className="prod-preview">
                  <div className="prod-preview__list">
                    <div className="prod-preview__item">
                      <img src={item1} alt="" className="prod-preview__img" />
                    </div>
                    <div className="prod-preview__item">
                      <img src={item1} alt="" className="prod-preview__img" />
                    </div>
                    <div className="prod-preview__item">
                      <img src={item1} alt="" className="prod-preview__img" />
                    </div>
                    <div className="prod-preview__item">
                      <img src={item1} alt="" className="prod-preview__img" />
                    </div>
                  </div>
                  <div className="prod-preview__thumbs">
                    <img src={item1} alt="" className="prod-preview__thumb-img prod-preview__thumb-img--current" />
                    <img src={item1} alt="" className="prod-preview__thumb-img" />
                    <img src={item1} alt="" className="prod-preview__thumb-img" />
                    <img src={item1} alt="" className="prod-preview__thumb-img" />
                  </div>
                </div>
              </div>
              <div className="col-7 col-xl-6 col-lg-12">
                <form action="" className="form">
                  <section className="prod-info">
                    <h1 className="prod-info__heading">Milk Beans - No 1 in France</h1>
                    <div className="row">
                      <div className="col-5 col-xxl-6 col-xl-12">
                        <div className="prod-prop">
                          <img src={star} alt="" className="prod-prop__icon" />
                          <h4 className="prod-prop__title">(3.5) 1100 reviews</h4>
                        </div>
                        <label htmlFor="" className="form__label prod-info__label">
                          Size/Weight
                        </label>
                        <div className="filter__form-group">
                          <div className="form__select-wrap">
                            <div className="form__select" style={widthSelectStyle}>
                              500g
                              <img src={selectArrow} alt="" className="form__select-arrow icon" />
                            </div>
                            <div className="form__select">
                              Gram
                              <img src={selectArrow} alt="" className="form__select-arrow icon" />
                            </div>
                          </div>
                        </div>
                        <div className="filter__form-group">
                          <div className="form__tags">
                            <button className="form__tag prod-info__tag">Small</button>
                            <button className="form__tag prod-info__tag">Medium</button>
                            <button className="form__tag prod-info__tag">Large</button>
                          </div>
                        </div>
                      </div>
                      <div className="col-7 col-xxl-6 col-xl-12">
                        <div className="prod-props">
                          <div className="prod-prop">
                            <img src={document} alt="" className="prod-prop__icon icon" />
                            <h4 className="prod-prop__title">Compare</h4>
                          </div>
                          <div className="prod-prop">
                            <img src={buy} alt="" className="prod-prop__icon icon" />
                            <div>
                              <h4 className="prod-prop__title">Delivery</h4>
                              <p className="prod-prop__desc">From $6 for 1-3 days</p>
                            </div>
                          </div>
                          <div className="prod-prop">
                            <img src={bag} alt="" className="prod-prop__icon icon" />
                            <div>
                              <h4 className="prod-prop__title">Pickup</h4>
                              <p className="prod-prop__desc">Out of 2 store, today</p>
                            </div>
                          </div>
                          <div className="prod-info__card">
                            <div className="prod-info__row">
                              <span className="prod-info__price">$500.00</span>
                              <span className="prod-info__tax">10%</span>
                            </div>
                            <p className="prod-info__total-price">$540.00</p>
                            <div className="prod-info__row">
                              <button className="btn btn--primary prod-info__add-to-cart">Add to cart</button>
                              <button className="like-btn prod-info__like-btn">
                                <img src={heart} alt="" className="like-btn__icon icon" />
                                <img src={heartRed} alt="" className="like-btn__icon--liked" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </form>
              </div>
            </div>
          </div>

          {/* <!-- Product content --> */}
          <div className="product-container">
            <div className="prod-tab js-tabs">
              <ul className="prod-tab__list">
                <li className="prod-tab__item prod-tab__item--current">Description</li>
                <li className="prod-tab__item">Review (1100)</li>
                <li className="prod-tab__item">Similar</li>
              </ul>
              <div className="prod-tab__contents">
                <div className="prod-tab__content prod-tab__content--current">
                  <div className="row">
                    <div className="col-8 col-xl-10 col-lg-12">
                      <div className="text-content prod-tab__text-content">
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p>
                          Lorem ipsum dolor sit amet <a href="#!">consectetur</a> adipisicing elit. Aliquid, cupiditate.
                          Modi, quidem, ullam sint dolorum recusandae voluptates dignissimos similique animi assumenda
                          <a href="#!">praesentium</a> et! Illum dolorem est rem voluptas nam! Voluptatem.
                        </p>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, cupiditate. Modi, quidem,
                          ullam sint dolorum recusandae voluptates dignissimos similique animi assumenda praesentium et!
                          Illum dolorem est rem voluptas nam! Voluptatem.
                        </p>
                        <p>
                          <img src={item1} alt="" />
                          <em>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</em>
                        </p>
                        <blockquote>
                          <p>
                            Lorem ipsum dolor sit amet <em>consectetur</em>
                            <u>adipisicing</u> elit. Aliquid, cupiditate. Modi, quidem, ullam sint dolorum recusandae
                            voluptates dignissimos similique animi assumenda praesentium et! Illum dolorem est rem
                            voluptas nam! Voluptatem.
                          </p>
                        </blockquote>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, cupiditate. Modi, quidem,
                          ullam sint dolorum recusandae voluptates dignissimos similique animi assumenda praesentium et!
                          Illum dolorem est rem voluptas nam! Voluptatem.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, cupiditate. Modi, quidem,
                          ullam sint dolorum recusandae voluptates dignissimos similique animi assumenda praesentium et!
                          Illum dolorem est rem voluptas nam! Voluptatem.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="prod-tab__content">
                  <div className="prod-content">
                    <h2 className="prod-content__heading">What our customers are saying</h2>
                    <div className="row row-cols-3 gx-lg-2 row-cols-md-1 gy-md-3">
                      {/* <!-- Review card 1 --> */}
                      <div className="col">
                        <div className="review-card">
                          <div className="review-card__content">
                            <img src={avatar1} alt="" className="review-card__avatar" />
                            <div className="review-card__info">
                              <h4 className="review-card__title">Jakir Hussen</h4>
                              <p className="review-card__desc">Great product, I love this Coffee Beans</p>
                            </div>
                          </div>
                          <div className="review-card__rating">
                            <div className="review-card__star-list">
                              <img src={star} alt="" className="review-card__star" />
                              <img src={star} alt="" className="review-card__star" />
                              <img src={star} alt="" className="review-card__star" />
                              <img src={starHalf} alt="" className="review-card__star" />
                              <img src={starBlank} alt="" className="review-card__star" />
                            </div>
                            <span className="review-card__rating-title">(3.5) Review</span>
                          </div>
                        </div>
                      </div>

                      {/* <!-- Review card 2 --> */}
                      <div className="col">
                        <div className="review-card">
                          <div className="review-card__content">
                            <img src={avatar1} alt="" className="review-card__avatar" />
                            <div className="review-card__info">
                              <h4 className="review-card__title">Jakir Hussen</h4>
                              <p className="review-card__desc">Great product, I love this Coffee Beans</p>
                            </div>
                          </div>
                          <div className="review-card__rating">
                            <div className="review-card__star-list">
                              <img src={star} alt="" className="review-card__star" />
                              <img src={star} alt="" className="review-card__star" />
                              <img src={star} alt="" className="review-card__star" />
                              <img src={starHalf} alt="" className="review-card__star" />
                              <img src={starBlank} alt="" className="review-card__star" />
                            </div>
                            <span className="review-card__rating-title">(3.5) Review</span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Review card 3 --> */}
                      <div className="col">
                        <div className="review-card">
                          <div className="review-card__content">
                            <img src={avatar1} alt="" className="review-card__avatar" />
                            <div className="review-card__info">
                              <h4 className="review-card__title">Jakir Hussen</h4>
                              <p className="review-card__desc">Great product, I love this Coffee Beans</p>
                            </div>
                          </div>
                          <div className="review-card__rating">
                            <div className="review-card__star-list">
                              <img src={star} alt="" className="review-card__star" />
                              <img src={star} alt="" className="review-card__star" />
                              <img src={star} alt="" className="review-card__star" />
                              <img src={starHalf} alt="" className="review-card__star" />
                              <img src={starBlank} alt="" className="review-card__star" />
                            </div>
                            <span className="review-card__rating-title">(3.5) Review</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="prod-tab__content">
                  <div className="prod-content">
                    <h2 className="prod-content__heading">Similar items you might like</h2>
                    <div className="row row-cols-6 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-2">
                      {/* <!-- Product card 1 --> */}
                      <div className="col">
                        <article className="product-card">
                          <div className="product-card__img-wrap">
                            <a href="./product-detail.html">
                              <img src={item1} alt="" className="product-card__thumb" />
                            </a>
                            <button className="like-btn product-card__like-btn">
                              <img src={heart} alt="" className="like-btn__icon icon" />
                              <img src={heartRed} alt="" className="like-btn__icon--liked" />
                            </button>
                          </div>
                          <h3 className="product-card__title">
                            <a href="./product-detail.html">Coffee Beans - Espresso Arabica and Robusta Beans</a>
                          </h3>
                          <p className="product-card__brand">Lavazza</p>
                          <div className="product-card__row">
                            <span className="product-card__price">$47.00</span>
                            <img src={star} alt="" className="product-card__star" />
                            <span className="product-card__score">4.3</span>
                          </div>
                        </article>
                      </div>

                      {/* <!-- Product card 2 --> */}

                      {/* <!-- Product card 3 --> */}

                      {/* <!-- Product card 4 --> */}

                      {/* <!-- Product card 5 --> */}

                      {/* <!-- Product card 6 --> */}
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
