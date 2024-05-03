import React, { useCallback, useEffect, useRef, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import fireworksConfig from "./fireworksConfig";

function ParticleComponent() {
  const particlesRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  const init = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // Set isVisible to false after 7.5 seconds
    }, 7500); // 7.5 seconds in milliseconds

    return () => {
      clearTimeout(timer); // Clear the timer if the component unmounts early
    };
  }, []);

  const handleParticlesLoaded = (instance) => {
    if (isVisible) {
      // Only update particlesRef if the component is still visible
      particlesRef.current = instance;
    }
  };

  return (
    <>
      {isVisible && (
        <Particles
          options={fireworksConfig}
          init={init}
          loaded={handleParticlesLoaded}
          width="100%"
          height="100%"
        />
      )}
    </>
  );
}

export default ParticleComponent;
