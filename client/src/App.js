import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import HomePage from "./routes/homePage/HomePage.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
