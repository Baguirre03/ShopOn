import Button from "./Button";
import image from "../assets/signup.png";

export default function SignUp() {
  return (
    <div className="signup">
      <div className="left-signup">
        <div className="title-signup">Sign-Up</div>
        <div className="description-signup">
          <p className="desc-signup">
            ShopOn offers same-day delivery of clothes and accessories within
            our service areas.
          </p>
          <p className="desc2-signup">
            Shop for whatever you feel like wearing and get it in a blink of an
            eye!
          </p>
          <Button to="signup">Sign Up</Button>
        </div>
      </div>
      <div className="right-signup">
        <img src={image} alt="" />
      </div>
    </div>
  );
}
