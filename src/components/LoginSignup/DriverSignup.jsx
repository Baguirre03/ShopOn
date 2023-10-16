import BackButton from "../HelperComponents/BackButton";
import Button from "../HelperComponents/Button";

export default function WelcomeDriver({ driver }) {
  return (
    <>
      <section className="welcome-container">
        <div className="welcome-left">
          <h2>Welcome Future {driver ? "Driver" : "Shopper"}</h2>
          <p>We're so happy you're here.</p>
        </div>
        <div className="welcome-right">
          <label htmlFor="phone-email">
            What's your phone number or email?
          </label>
          <input
            type="text"
            id="phone-email"
            placeholder="Enter phone number or email"
          />
          <span className="OR">
            <span className="or-span">or</span>
          </span>
          <button className="sign-in">
            <div className="button-content">
              <img
                className="sign-in-img"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              />
              Continue with Google
            </div>
          </button>
          <button className="sign-in">
            <div className="button-content">
              <img
                className="sign-in-img"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
              />
              Continue with Apple
            </div>
          </button>
          <button className="sign-in">
            <div className="button-content">
              <img
                className="sign-in-img"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
              />
              Continue with Facebook
            </div>
          </button>
          <Button className="default-pink">continue</Button>
        </div>
        <BackButton></BackButton>
      </section>
    </>
  );
}
