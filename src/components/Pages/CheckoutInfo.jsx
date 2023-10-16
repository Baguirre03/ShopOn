import Button from "../HelperComponents/Button";

export default function CheckoutInfo() {
  return (
    <div className="checkout-info-container">
      <div className="checkout-image"></div>
      <div className="right-side-checkout">
        <h4>Perks of Shopping with us</h4>
        <ul className="bullet points">
          <li>Order before 2 pm and get your purchase within the day</li>
          <li>Not your size? Avail our hassle-free return policy</li>
          <li>Get 24/7 customer support</li>
          <li>We support contactless payment to make it easier for you</li>
        </ul>
        <Button className="default-brown" to="signup">
          Shop Now
        </Button>
      </div>
    </div>
  );
}
