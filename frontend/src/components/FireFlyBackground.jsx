import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFireflyPreset } from "tsparticles-preset-firefly";

const FireflyBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFireflyPreset(engine);
  }, []);

  return (
    <Particles
  id="firefly-bg"
  init={particlesInit}
  options={{
    preset: "firefly",
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    background: {
      color: {
        value: "#0f172a", // midnight navy blue (great for dark themes)
      },
    },
    color: {
  value: ["#a78bfa", "#facc15", "#60a5fa"], // lavender, yellow, soft blue
},

    particles: {
      number: {
        value: 20, // 🔽 Lower the number of fireflies
        density: {
          enable: true,
          value_area: 900,
        },
      },
      opacity: {
  value: 0.4,
  animation: {
    enable: true,
    speed: 0.5,
    minimumValue: 0.1,
    sync: false,
  },
},

      size: {
        value: { min: 2, max: 8}, // 🔽 Smaller particles
      },
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
        },
        onClick: {
          enable: false,
        },
      },
    },
  }}
/>
  );
};

export default FireflyBackground;
