import arrowRight from '@/assets/icons/arrow-right.svg'

export default function Breadcrumb() {
  return (
    <div>
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
    </div>
  )
}
