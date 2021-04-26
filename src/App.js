import "./App.css";
import Contact from "./components/Contact";
import GameStack from "./components/GameStack";
import Header from "./components/Header";
import MobileStack from "./components/MobileStack";
import Navigation from "./components/Navigation";
import Stack from "./components/Stack";
function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Stack />
      <MobileStack />
      <GameStack />
      <Contact />
    </>
  );
}

export default App;
