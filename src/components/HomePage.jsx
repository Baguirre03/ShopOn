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
        <h1 className="slogan">ShopQuick with ShopOn</h1>
        <p className="description">Get timeless looks, anytime</p>
        <Button to="shop">Shop Now</Button>
      </div>
      <div className="shop-now-cta"></div>
      <div className="bottom-home">
        <Button>Become a Driver</Button>
      </div>
    </header>
  );
}
