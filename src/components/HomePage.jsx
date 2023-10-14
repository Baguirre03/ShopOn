import Button from "./Button";

export default function HomePage() {
  return (
    <header className="home-page">
      <div className="top-home">
        <h4>ShopOn</h4>
        <div className="cta-header">
          <Button to="login">Log In</Button>
          <Button to="signup">Sign Up</Button>
        </div>
      </div>
      <div className="middle-home">
        <p className="slogan">ShopQuick with ShopOn</p>
        {/* <p className="description">timeless looks, anytime</p> */}
        <Button to="shop">Shop Now</Button>
      </div>
      <div className="shop-now-cta"></div>
      <div className="bottom-home">
        <Button className="slant" spanClass="button-child">
          Become a Driver
        </Button>
      </div>
    </header>
  );
}
