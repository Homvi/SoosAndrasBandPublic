
import "./App.scss";
import Navbar from "./components/Navbar"
import FirstScreen from "./components/FirstScreen"
import SecondScreen from "./components/SecondScreen"

function App() {
  return <div className="App">
    <Navbar />
    <FirstScreen />
    <SecondScreen />
  </div>;
}

export default App;
