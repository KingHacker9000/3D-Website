import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import {Physics} from "@react-three/rapier"
import { Suspense, useMemo } from "react";
import { KeyboardControls } from "@react-three/drei";

export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  jump: "jump"
}

export const inRad = (deg) => {
  return deg * Math.PI / 180
}

function App() {

  const map = useMemo(
    () => [
      {name: Controls.forward, keys: ["ArrowUp", "KeyW"]},
      {name: Controls.back, keys: ["ArrowDown", "KeyS"]},
      {name: Controls.left, keys: ["ArrowLeft", "KeyA"]},
      {name: Controls.right, keys: ["ArrowRight", "KeyD"]},
      {name: Controls.jump, keys: ["Space"]},
  ], 
  []
)


  return (
    <KeyboardControls map={map}>
      <Canvas shadows camera={{ position: [0, 50, 60], fov: 30}}>
        <color attach="background" args={["#02ccfe"]} />
        <Suspense>
        {/* <Physics debug> */}
          <Physics>
            <Experience />
          </Physics>
        </Suspense>
      </Canvas>
    </KeyboardControls>
  );
}

export default App;
