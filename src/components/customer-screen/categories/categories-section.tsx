import CategoryCard from './category-card'
import ViewMore from '../view-more'

export default function CategoriesSection() {
  return (
    <div>
      <section className="home__container">
        <div className="home__row">
          <h2 className="home__heading">Browse Categories</h2>
          <ViewMore />
        </div>
        <div className="home__cate row row-cols-3 row-cols-md-1">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </section>
    </div>
  )
}
