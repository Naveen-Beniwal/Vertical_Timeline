import { useEffect } from "react";
import VerticalTimeline from "./assets/Components/verticalTimeline";
import "./App.css";
import * as THREE from "three";
import RINGS from "vanta/dist/vanta.rings.min";

function App() {
  useEffect(() => {
    let effect;
    try {
      effect = RINGS({
        el: "#bg",
        THREE: THREE,
        color: 0x000000,
        speed: 0.7,
        turbulence: 1,
        amplitude: 0.3,
      });
    } catch (error) {
      console.error("Error initializing Vanta.js RINGS:", error);
    }

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <div id="bg">
      <VerticalTimeline />
    </div>
  );
}

export default App;
