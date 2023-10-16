import "./styles/app.css";
import HomePage from "./components/Pages/HomePage";
import SignUp from "./components/Pages/SignUp";
import WhyDrive from "./components/Pages/Why";
import HomeSearch from "./components/Pages/HomePagelookUp";
import Track from "./components/Pages/TrackOrder";
import CheckoutInfo from "./components/Pages/CheckoutInfo";
import About from "./components/Pages/About";

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
      <About></About>
    </>
  );
}

export default App;
