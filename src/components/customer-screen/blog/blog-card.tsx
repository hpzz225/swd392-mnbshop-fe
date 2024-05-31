import blogImg from '@/assets/img/blog/milknews.jpeg'
import { ROUTE_PATHS } from '@/router'
import { Link } from 'react-router-dom'

export default function BlogCard() {
  return (
    <div>
      <article className="news-item">
        <figure className="news-item__img-wrap">
          {/* TODO: add link */}
          <Link to={`${ROUTE_PATHS.BLOG}/1`}>
            <img src={blogImg} alt="" className="news-item__thumb" />
          </Link>
        </figure>
        <section className="news-item__body">
          <h3>
            <Link to={`${ROUTE_PATHS.BLOG}/1`} className="news-item__heading">
              Key Considerations for Regulatory Compliant.
            </Link>
          </h3>
          <p className="news-item__desc">
            It's easy to think about medical care from a narrow perspective. You go to the hospital.
          </p>
          <Link to={`${ROUTE_PATHS.BLOG}/1`} className="news-item__more">
            Learn More
          </Link>
        </section>
      </article>
    </div>
  )
}
