import ProductCard from './product-card'
import ViewMore from './view-more'

export default function ProductSection() {
  return (
    <div>
      <section className="home__container">
        <div className="home__row">
          <h2 className="home__heading">Best seller</h2>
          <ViewMore />
        </div>
        <div className="row row-cols-4 row-cols-lg-2 row-cols-sm-1 gy-3 g-lg-3 g-md-2">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </div>
  )
}
