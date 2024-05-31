import AccountInfoSection from './account-info-section'
import WalletSection from './wallet-section'

export default function CustomerInfo() {
  return (
    <div className="col-9 col-xl-8 col-lg-7 col-md-12">
      <div className="cart-info">
        <div className="row gy-3">
          <WalletSection />
          <AccountInfoSection />
        </div>
      </div>
    </div>
  )
}
