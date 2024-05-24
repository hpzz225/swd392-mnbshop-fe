import ProductCard from '@/components/customer-screen/product-card'
import FilterForm from '@/components/customer-screen/filter-form'
import CategoriesSection from '@/components/customer-screen/categories-section'

export default function ProductsList() {
  return (
    <div className="container page">
      <section className="page__container">
        <div className="page__row">
          <h2 className="page__heading">Product</h2>
          <FilterForm />
          <div className="mb-10">
            <CategoriesSection />
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
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </div>
  )
}
