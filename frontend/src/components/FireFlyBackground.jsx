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
            value: "#0f172a",
          },
        },
      }}
    />
  );
};

export default FireflyBackground;
