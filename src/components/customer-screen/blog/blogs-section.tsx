import BlogCard from './blog-card'
import ViewMore from '../view-more'

export default function BlogsSection() {
  return (
    <div>
      <section className="home__container">
        <div className="home__row">
          <h2 className="home__heading">Read Latest News & Events.</h2>
          <ViewMore />
        </div>
        <div className="row row-cols-4 row-cols-lg-2 row-cols-sm-1 gy-3 g-lg-3 g-md-2">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section>
    </div>
  )
}
