import ProductCard from '@/components/customer-screen/product-card'
import selectArrow from '@/assets/icons/select-arrow.svg'
import search from '@/assets/icons/search.svg'

type CustomStyleProps = {
  '--min-value'?: string
  '--max-value'?: string
  '--width'?: string
}

export default function ProductsList() {
  const sliderStyle: React.CSSProperties & CustomStyleProps = {
    '--min-value': '10%',
    '--max-value': '80%',
  }
  const formSelectStyle: React.CSSProperties & CustomStyleProps = {
    '--width': '158px',
  }
  return (
    <div className="container home">
      <section className="home__container">
        <div className="home__row">
          <h2 className="home__heading">Total LavAzza 1320</h2>
          <div className="filter-wrap">
            <button className="filter-btn js-toggle" toggle-target="#home-filter">
              Filter
              <img src="./assets/icons/filter.svg" alt="" className="icon filter-btn__icon" />
            </button>
            <div className="filter hide" id="home-filter">
              <img src="./assets/icons/arrow-up.png" alt="" className="filter__arrow" />
              <h3 className="filter__heading">Filter</h3>
              <form action="" className="filter__form">
                <div className="filter__row filter__content">
                  <div className="filter__col">
                    <label htmlFor="" className="filter__form-label">
                      Price
                    </label>
                    <div className="filter__form-group">
                      <div className="filter__form-slider" style={sliderStyle}></div>{' '}
                    </div>
                    <div className="filter__form-group filter__form-group--inline">
                      <div>
                        <label htmlFor="" className="filter__form-label filter__form-label--small">
                          Minimum
                        </label>
                        <div className="filter__form-text-input filter__form-text-input--small">
                          <input type="text" name="" id="" className="filter__form-input" value="$30.00" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="" className="filter__form-label filter__form-label--small">
                          Maximum
                        </label>
                        <div className="filter__form-text-input filter__form-text-input--small">
                          <input type="text" name="" id="" className="filter__form-input" value="$100.00" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="filter__separate"></div>
                  <div className="filter__col">
                    <label htmlFor="" className="filter__form-label">
                      Size/Weight
                    </label>
                    <div className="filter__form-group">
                      <div className="filter__form-select-wrap">
                        <div className="filter__form-select" style={formSelectStyle}>
                          500g
                          <img src={selectArrow} alt="" className="icon filter__form-select-arrow" />
                        </div>
                        <div className="filter__form-select">
                          Gram
                          <img src={selectArrow} alt="" className="icon filter__form-select-arrow" />
                        </div>
                      </div>
                    </div>
                    <div className="filter__form-group">
                      <div className="filter__form-tags">
                        <button className="filter__form-tag">Small</button>
                        <button className="filter__form-tag">Medium</button>
                        <button className="filter__form-tag">Large</button>
                      </div>
                    </div>
                  </div>

                  <div className="filter__separate"></div>

                  <div className="filter__col">
                    <label htmlFor="" className="filter__form-label">
                      Brand
                    </label>
                    <div className="filter__form-group">
                      <div className="filter__form-text-input">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Search brand name"
                          className="filter__form-input"
                        />
                        <img src={search} alt="" className="icon filter__form-input-icon" />
                      </div>
                    </div>
                    <div className="filter__form-group">
                      <div className="filter__form-tags">
                        <button className="filter__form-tag">Lavazza</button>
                        <button className="filter__form-tag">Nescafe</button>
                        <button className="filter__form-tag">Starbucks</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="filter__row filter__footer">
                  <button className="btn btn--text filter__cancel js-toggle" toggle-target="#home-filter">
                    Cancel
                  </button>
                  <button className="btn btn--primary filter__submit js-toggle" toggle-target="#home-filter">
                    Show Result
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row row-cols-4 row-cols-lg-2 row-cols-sm-1 gy-3 g-lg-3 g-md-2">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </div>
  )
}
