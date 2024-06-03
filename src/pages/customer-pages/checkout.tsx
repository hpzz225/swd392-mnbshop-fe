import Breadcrumb from '@/components/customer-screen/breadcrumb'
import SearchBarMobile from '@/components/customer-screen/search-bar-mobile'
import CartItem from '@/components/customer-screen/cart-favourite/cart-item'
import AddressSection from '@/components/customer-screen/checkout/address-section'
import CheckoutInfo from '@/components/customer-screen/checkout/checkout-info'

export default function Checkout() {
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
              <div className="col-7 col-xl-7 col-lg-12">
                <div className="cart-info">
                  <h1 className="cart-info__heading">1. Shipping, arrives between Mon, May 16—Tue, May 24</h1>
                  <div className="cart-info__separate"></div>
                  {/* <!-- Checkout address --> */}
                  <AddressSection addressList={null} />
                  <div className="cart-info__separate"></div>
                  <h2 className="cart-info__sub-heading">Items details</h2>
                  <div className="cart-info__list">
                    {/* <!-- Cart item --> */}
                    <CartItem isCheckout={true} />
                    <CartItem isCheckout={true} />
                    <CartItem isCheckout={true} />
                  </div>
                </div>
              </div>
              <CheckoutInfo />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
