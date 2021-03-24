import "./App.scss";
import Navbar from "./components/Navbar";
import FirstScreen from "./components/FirstScreen";
import SecondScreen from "./components/SecondScreen";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstScreen />
      <SecondScreen />
      <Footer />
    </div>
  );
}

export default App;
