import React from 'react'
import selectArrow from '@/assets/icons/select-arrow.svg'
import search from '@/assets/icons/search.svg'

type CustomStyleProps = {
  '--min-value'?: string
  '--max-value'?: string
  '--width'?: string
}

export default function FilterForm() {
  const sliderStyle: React.CSSProperties & CustomStyleProps = {
    '--min-value': '10%',
    '--max-value': '80%',
  }
  const formSelectStyle: React.CSSProperties & CustomStyleProps = {
    '--width': '100%',
  }

  return (
    <div>
      <div className="filter-wrap">
        <div className="filter" id="home-filter">
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
                  Made in
                </label>
                <div className="filter__form-group">
                  <div className="filter__form-select-wrap">
                    <div className="filter__form-select" style={formSelectStyle}>
                      USA
                      <img src={selectArrow} alt="" className="icon filter__form-select-arrow" />
                    </div>
                  </div>
                </div>
                <div className="filter__form-group filter__form-group">
                  <div className="filter__form-tags">
                    <button className="filter__form-tag">Japan</button>
                    <button className="filter__form-tag">China</button>
                    <button className="filter__form-tag">France</button>
                    <button className="filter__form-tag">England</button>
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
                    <input type="text" name="" id="" placeholder="Search brand name" className="filter__form-input" />
                    <img src={search} alt="" className="icon filter__form-input-icon" />
                  </div>
                </div>
                <div className="filter__form-group">
                  <div className="filter__form-tags">
                    <button className="filter__form-tag">Ensure</button>
                    <button className="filter__form-tag">Abbott</button>
                    <button className="filter__form-tag">Meiji</button>
                    <button className="filter__form-tag">Yokogold</button>
                    <button className="filter__form-tag">Similac</button>
                    <button className="filter__form-tag">Nutifood</button>
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
  )
}
