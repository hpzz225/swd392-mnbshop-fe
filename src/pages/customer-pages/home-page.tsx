import BlogsSection from '@/components/customer-screen/blogs-section'
import CategoriesSection from '@/components/customer-screen/categories-section'
import ProductSection from '@/components/customer-screen/product-section'
import SlideShow from '@/components/customer-screen/slideshow'

export default function HomePage() {
  return (
    <div>
      <div className="container home">
        <SlideShow />
        <CategoriesSection />
        <ProductSection />
        <BlogsSection />
      </div>
    </div>
  )
}
