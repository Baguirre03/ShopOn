import Button from "../HelperComponents/Button";
import money from "../assets/money.png";
import people from "../assets/people.png";
import clock from "../assets/clock.png";
import face from "../assets/face.png";

export default function WhyDrive() {
  return (
    <div className="driver">
      <div className="left-driver">
        <h2 className="driver-title">Become a Driver</h2>
        <div className="left-driver-section">
          <p>Look dashing while on the go with our casual wear Items</p>
          <Button to="signup-driver" className="default-pink">
            Sign up Today
          </Button>
        </div>
        <div className="left-driver-section">
          <p>Did you already apply or are you already a driver? Log in here</p>
          <Button to="login" className="default-pink">
            Log in
          </Button>
        </div>
        <p className="faq-callout">Have any questions? Visit our FAQ page</p>
      </div>
      <div className="right-driver">
        <h2 className="driver-title">Why ShopOn?</h2>
        <div className="why-section">
          <div className="why-img-desc">
            <div className="image-container">
              <img src={money}></img>
            </div>
            <div className="why-words">
              <h4>Earn More</h4>
              <desc>
                Earn tips and keep the full amount. Earnings per ride are
                transferred to your bank account every week
              </desc>
            </div>
          </div>
          <div className="why-img-desc">
            <div className="image-container">
              <img src={people}></img>
            </div>
            <div className="why-words">
              <h4>Be a Part of Something Great</h4>
              <desc>We're a community who cares about others</desc>
            </div>
          </div>
          <div className="why-img-desc">
            <div className="image-container">
              <img src={clock}></img>
            </div>
            <div className="why-words">
              <h4>Flexible Scheduling</h4>
              <desc>
                From day one, you can work where you want and when you want
              </desc>
            </div>
          </div>
          <div className="why-img-desc">
            <div className="image-container">
              <img src={face}></img>
            </div>
            <div className="why-words">
              <h4>More Benefits</h4>
              <desc>
                We are here to assist you anytime with you deliveries. We
                believe it is a team effort and want to ensure the safety of our
                drivers
              </desc>
            </div>
          </div>
          <Button to="signup-driver" className="default-brown">
            Start earning extra money now
          </Button>
        </div>
      </div>
    </div>
  );
}
