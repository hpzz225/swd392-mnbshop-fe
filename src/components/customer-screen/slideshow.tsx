import slideShow from '@/assets/img/slideshow/slide-1.png'

export default function SlideShow() {
  return (
    <div className="home__container">
      <div className="slideshow">
        <div className="slideshow__inner">
          <div className="slideshow__item">
            <a className="slideshow__link">
              <picture>
                <source media="(max-width: 767.98px)" srcSet="./assets/img/slideshow/slide-1-md.png" />
                <img src={slideShow} alt="" className="slideshow__img" />
              </picture>
            </a>
          </div>
        </div>

        <div className="slideshow__page">
          <span className="slideshow__num">1</span>
          <span className="slideshow__slider"></span>
          <span className="slideshow__num">5</span>
        </div>
      </div>
    </div>
  )
}
