import BlogCard from '@/components/customer-screen/blog-card'
import FilterForm from '@/components/customer-screen/filter-form'

export default function BlogsList() {
  return (
    <div>
      <div className="container page">
        <section className="page__container">
          <div className="page__row">
            <h2 className="page__heading">Blog</h2>
            <FilterForm />
          </div>
          <div className="row row-cols-4 row-cols-lg-2 row-cols-sm-1 gy-3 g-lg-3 g-md-2">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </section>
      </div>
    </div>
  )
}
