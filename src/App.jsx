import "./styles/app.css";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import WhyDrive from "./components/Why";
import WelcomeDriver from "./components/DriverSignup";

function App() {
  return (
    <>
      <div className="main">
        <HomePage></HomePage>
      </div>
      <SignUp></SignUp>
      <WhyDrive></WhyDrive>
      <WelcomeDriver></WelcomeDriver>
    </>
  );
}

export default App;
