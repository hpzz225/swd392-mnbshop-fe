import gift from '@/assets/icons/gift.svg'
import { useCartItem } from '@/hooks/customer-hook/cart/use-cart-list'
import { useCreateOrder } from '@/hooks/customer-hook/cart/use-create-order'
import { useAuth } from '@/hooks/use-auth'
import { notification } from 'antd'

interface PriceSectionProps {
  totalItem: number
  totalPrice: number
  cartId: number
}

export default function PriceSection({ totalItem, totalPrice, cartId }: PriceSectionProps) {
  const createOrderMutation = useCreateOrder()
  const { data: cart } = useCartItem()

  const { user } = useAuth()
  console.log(user?.data)
  function handleOrder() {
    const orderData = {
      deliverAddress: user?.data?.address,
      phone: user?.data?.phone,
      fullName: user?.data?.fullName,
      paymentMethod: 'COD',
      status: 'processing',
      orderDate: new Date().toISOString(),
      totalPrice: totalPrice,
      userId: user?.data?._id,
      cart: cart,
    }
    createOrderMutation.mutate(orderData)
  }

  return (
    <div className="col-4 col-xl-12">
      <div className="cart-info">
        <div className="cart-info__row">
          <span>
            Subtotal <span className="cart-info__sub-label">(items)</span>
          </span>
          <span>{totalItem}</span>
        </div>
        <div className="cart-info__row">
          <span>
            Price <span className="cart-info__sub-label">(Total)</span>
          </span>
          <span>${totalPrice}</span>
        </div>
        <div className="cart-info__row">
          <span>Shipping</span>
          <span>FREE</span>
        </div>
        <div className="cart-info__separate"></div>
        <div className="cart-info__row">
          <span>Estimated Total</span>
          <span>${totalPrice}</span>
        </div>
        <button
          onClick={() => handleOrder(cartId, totalItem)}
          className="cart-info__next-btn btn btn--primary btn--rounded"
        >
          Continue to checkout
        </button>
      </div>
      <div className="cart-info">
        <a href="#!">
          <article className="gift-item">
            <div className="gift-item__icon-wrap">
              <img src={gift} alt="" className="gift-item__icon" />
            </div>
            <div className="gift-item__content">
              <h3 className="gift-item__title">Send this order as a gift.</h3>
              <p className="gift-item__desc">Available items will be shipped to your gift recipient.</p>
            </div>
          </article>
        </a>
      </div>
    </div>
  )
}
