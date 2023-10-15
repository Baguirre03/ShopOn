import "./styles/app.css";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import WhyDrive from "./components/Why";
import WelcomeDriver from "./components/DriverSignup";
import SignIn from "./components/SignIn";

function App() {
  return (
    <>
      <div className="main">
        <HomePage></HomePage>
      </div>
      <SignUp></SignUp>
      <WelcomeDriver></WelcomeDriver>
      <WhyDrive></WhyDrive>
      <SignIn></SignIn>
    </>
  );
}

export default App;
