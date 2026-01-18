import { Header } from '../../Components/Header';
import { CartSummary } from './CartSummary';
import { PaymentSummary } from './PaymentSummery';
import '../Styles/checkout/CheckoutPage.css';
import '../Styles/checkout/checkout-header.css';

export function CheckoutPage({ cart }) {

  return (
    <>
      <title>Checkout</title>
      <Header cart={cart} />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <CartSummary cart={cart} />
          <PaymentSummary />
        </div>
      </div>
    </>
  )
}