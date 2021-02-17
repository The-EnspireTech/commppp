import "./App.css";
import logo from "./Logo.png";
function App() {
  return (
    <div className="App">
      <header>
        <div className="img">
          <img src={logo} alt="" />
          <h2>Enspire Tech</h2>
        </div>
      </header>
      <div className="center">
        <h1>Coming Soon</h1>
        <a href="https://facebook.com/enspiretech" target="_blank">
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default App;
