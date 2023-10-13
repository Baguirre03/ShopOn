import "./styles/app.css";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import WhyDrive from "./components/Why";

function App() {
  return (
    <>
      <div className="main">
        <HomePage></HomePage>
      </div>
      <SignUp></SignUp>
      <WhyDrive></WhyDrive>
    </>
  );
}

export default App;
