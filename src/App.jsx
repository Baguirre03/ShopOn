import "./styles/app.css";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import WhyDrive from "./components/Why";
import WelcomeDriver from "./components/DriverSignup";
import SignIn from "./components/SignIn";
import HomeSearch from "./components/HomePagelookUp";
import Track from "./components/TrackOrder";
import CheckoutInfo from "./components/CheckoutInfo";
import About from "./components/About";

function App() {
  return (
    <>
      <div className="main">
        <HomePage></HomePage>
      </div>
      <HomeSearch></HomeSearch>
      <Track></Track>
      <CheckoutInfo></CheckoutInfo>
      <SignUp></SignUp>

      <WhyDrive></WhyDrive>
      <WelcomeDriver></WelcomeDriver>
      <SignIn></SignIn>
      <About></About>
    </>
  );
}

export default App;
