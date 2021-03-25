import "./App.scss";
import Navbar from "./components/Navbar";
import FirstScreen from "./components/FirstScreen";
import SecondScreen from "./components/SecondScreen";
import ThirdScreen from "./components/ThirdScreen";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SocialMedia />
      <FirstScreen />
      <SecondScreen />
      <ThirdScreen />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
