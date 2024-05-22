import blogImg from '@/assets/img/blog/news2.jpg'

export default function BlogCard() {
  return (
    <div>
      <article className="news-item">
        <figure className="news-item__img-wrap">
          <a href="#!">
            <img src={blogImg} alt="" className="news-item__thumb" />
          </a>
        </figure>
        <section className="news-item__body">
          <h3>
            <a href="#!" className="news-item__heading">
              Key Considerations for Regulatory Compliant.
            </a>
          </h3>
          <p className="news-item__desc">
            It's easy to think about medical care from a narrow perspective. You go to the hospital.
          </p>
          <a href="" className="news-item__more">
            Learn More
          </a>
        </section>
      </article>
    </div>
  )
}
