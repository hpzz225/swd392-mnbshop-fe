import CartItem from '@/components/customer-screen/cart-favourite/cart-item'
import Breadcrumb from '@/components/customer-screen/breadcrumb'
import SearchBarMobile from '@/components/customer-screen/search-bar-mobile'
import PriceSection from '@/components/customer-screen/cart-favourite/price-section'

export default function Cart() {
  return (
    <div>
      <main className="checkout-page">
        <div className="container">
          {/* <!-- Search bar --> */}
          <SearchBarMobile />
          {/* <!-- Breadcrumbs --> */}
          <Breadcrumb />
          {/* <!-- Checkout content --> */}
          <div className="checkout-container">
            <div className="row gy-xl-3">
              <div className="col-8 col-xl-12">
                <div className="cart-info">
                  <div className="cart-info__list">
                    {/* <!-- Cart item --> */}
                    <CartItem />
                    <CartItem />
                    <CartItem />
                  </div>
                </div>
              </div>
              <PriceSection />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
