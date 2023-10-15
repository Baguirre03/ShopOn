import Button from "./Button";

export default function CheckoutInfo() {
  return (
    <div className="checkout-info-container">
      <div className="checkout-image"></div>
      <div className="right-side-checkout">
        <h4>Checkout or view your cart</h4>
        <ul className="bullet points">
          <li>Order before 2 pm and get your purchase within the day</li>
          <li>Not your size? Avail of our hassle-free return policy</li>
          <li>Get 24/7 customer support</li>
          <li>We support contactless payment</li>
        </ul>
        <Button className="default-brown" to="signup">
          Shop Now
        </Button>
      </div>
    </div>
  );
}
