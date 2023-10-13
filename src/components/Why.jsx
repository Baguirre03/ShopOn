import Button from "./Button";

export default function WhyDrive() {
  return (
    <div className="driver">
      <div className="left-driver">
        <h2>Become a Driver</h2>
        <p>Look dashing while on the go with our casual wear Items</p>
        <Button className="default-pink">Sign up Today</Button>
        <p>Did you already apply or are you already a driver? Log in here</p>
        <Button className="default-pink">Log in</Button>
      </div>
      <div className="right-driver">
        <h2>Why ShopOn?</h2>
        <div className="why-img-desc">
          <div>
            <img></img>
            <desc>Earn Tips and Keep the Full Amount</desc>
          </div>
        </div>
        <div className="why-img-desc">
          <img></img>
          <desc>
            <bold>Be a part of something great!</bold> We're a community who
            cares about others
          </desc>
        </div>
      </div>
      <div className="bottom-button">
        <Button className="back-default"></Button>
      </div>
    </div>
  );
}
