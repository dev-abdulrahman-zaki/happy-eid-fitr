import React, {useState} from "react";
import MainHeading from "./components/MainHeading";
import CountdownTimer from "./components/CountdownTimer";
import ZakatAlfitr from "./components/ZakatAlfitr";
import ZakatFAQ from "./components/ZakatFAQ";
import Footer from "./components/Footer";
import TakberPlayer from "./components/TakberPlayer";
import ShareButtons from "./components/ShareButtons";
import ParticleComponent from "./components/ParticleComponent";
import fireworksConfig from "./components/ParticleComponent";
import GreetingCard from "./components/GreetingCard";
import ConfettiAnimation from "./components/ConfettiAnimation";

function App() {
  const [isPartyMode, setIsPartyMode] = useState(false);

  const handlePartyModeClick = () => {
    setIsPartyMode(!isPartyMode);
    setTimeout(() => {
      setIsPartyMode(false);
    }, 5000);
  };

  return (
    <main className="app">
      {isPartyMode && <ConfettiAnimation isPartyMode={isPartyMode} />}
      <MainHeading />
      <CountdownTimer />
      <GreetingCard handlePartyModeClick={handlePartyModeClick} />
      <ZakatAlfitr />
      <ZakatFAQ />
      <TakberPlayer />
      <ShareButtons />
      <ParticleComponent options={fireworksConfig} />
      <Footer />
    </main>
  );
}

export default App;
