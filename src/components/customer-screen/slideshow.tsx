import slideShow from '@/assets/img/slideshow/31424.jpg'
import srcSetImg from '@/assets/img/slideshow/srcset.jpeg'

export default function SlideShow() {
  return (
    <div className="home__container">
      <div className="slideshow">
        <div className="slideshow__inner">
          <div className="slideshow__item">
            <a className="slideshow__link">
              <picture>
                <source media="(max-width: 767.98px)" srcSet={srcSetImg} />
                <img src={slideShow} alt="" className="slideshow__img" />
              </picture>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
