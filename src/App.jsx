import "./styles/app.css";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <div className="main">
        <HomePage></HomePage>
      </div>
      <SignUp></SignUp>
    </>
  );
}

export default App;
