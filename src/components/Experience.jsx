import { Box, OrbitControls, Sphere } from "@react-three/drei";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { Boy } from "./Boy"
import { Island } from "./Island"
import { Lights } from "./Lights"
import { inRad } from "../App";

export const Experience = () => {
  return (
    <>
    {/* <ambientLight intensity={0.9} /> */}

    {/* Light 1 x, z, -y */}
    <Lights />

      <OrbitControls />

      <Boy />

      {/* <RigidBody colliders={"ball"}>
        <Sphere position={[3, 15, 0]} args={[2, 64, 64]} castShadow>
          <meshStandardMaterial color="lightpink" />
        </Sphere>
      </RigidBody>

      <RigidBody>
        <Box position={[3, 5, 0]} args={[1.2, 1.7, 1]} castShadow>
          <meshStandardMaterial color="royalblue" />
        </Box>
      </RigidBody> */}
      
      {/* floor */}
      {/* <RigidBody type="fixed" name="floor"
                  rotation={[0, inRad(45), 0]}
                  friction={5}
                  >
        <Box position={[0,0,0]} args={[30, 1, 30]} receiveShadow>
          <meshStandardMaterial color="springgreen" />
        </Box>
      </RigidBody> */}

      <Island />
    </>
  );
};
