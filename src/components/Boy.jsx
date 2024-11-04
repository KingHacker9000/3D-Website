import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations, useKeyboardControls } from '@react-three/drei'
import { CapsuleCollider, CuboidCollider, quat, RigidBody, euler } from "@react-three/rapier";
import { useFrame, useThree } from '@react-three/fiber';
import {Controls, inRad} from '../App';
import * as THREE from 'three'; // Import Quaternion from Three.js

export function Boy(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/BoyLow.glb')
  const { actions } = useAnimations(animations, group)

  const [hover, setHover] = useState(false);
  const character = useRef();

  const isOnFloor = useRef(true);
  const floorSpeed = 7;
  const jumpSpeed = 1;

  const getSpeed = (velocity) => {
    return Math.sqrt(velocity.x ** 2 + velocity.y ** 2 + velocity.z ** 2);
  }

  const capSpeed = () => {
    const velocity = character.current.linvel(); // Get current linear velocity
    const speed = getSpeed(velocity) // Calculate current speed

    // Check if the speed exceeds the maximum
    if (speed > floorSpeed) {
      const scale = floorSpeed / speed; // Calculate the scaling factor
      character.current.setLinvel({
        x: velocity.x * scale,
        y: velocity.y, // Allow vertical movement (e.g., jump) to stay unchanged
        z: velocity.z * scale
      });
    }
  }

  const MOVEMENT_THRESHOLD = 0.05;
  const faceMovementDirection = () => {
    const velocity = character.current.linvel();

    // Skip if the character is not moving
    if (Math.abs(velocity.x) <= MOVEMENT_THRESHOLD && Math.abs(velocity.z) <= MOVEMENT_THRESHOLD) return;

    let targetAngle = Math.atan2(velocity.x, velocity.z);

    // Handle pure x-axis movement
    if (Math.abs(velocity.z) < MOVEMENT_THRESHOLD) {
        if (velocity.x > 0) {
            targetAngle = Math.PI / 2;
        } else if (velocity.x < 0) {
            targetAngle = -Math.PI / 2;
        }
    }

    // Method 1: Direct quaternion creation
    const qw = Math.cos(targetAngle / 2);
    const qy = Math.sin(targetAngle / 2);

    // Method 1: Direct quaternion values
    character.current.setRotation({
        x: 0,
        y: qy,  // Using qy instead of targetAngle
        z: 0,
        w: qw
    }, true);
}

  // Movement Functions
  const jump = (delta) => {
    if (isOnFloor.current) {
        character.current.applyImpulse({x: 0, y: 5 * delta, z: 0})
        isOnFloor.current = false;
    }
  }

  const moveForward = (dir) => {
    return {x: 0, y: 0, z: -0.1 * dir * (isOnFloor.current? floorSpeed: jumpSpeed)}
  }

  const moveLeft = (dir) => {
    return {x: -0.1 * dir * (isOnFloor.current? floorSpeed: jumpSpeed), y: 0, z: 0}
  }

  const addForce = (forces, newForce) => {
    forces.x += newForce.x;
    forces.y += newForce.y;
    forces.z += newForce.z;
  }

  const jumpPressed = useKeyboardControls((state) => state[Controls.jump])
  const upPressed = useKeyboardControls((state) => state[Controls.forward])
  const downPressed = useKeyboardControls((state) => state[Controls.back])
  const leftPressed = useKeyboardControls((state) => state[Controls.left])
  const rightPressed = useKeyboardControls((state) => state[Controls.right])

  useFrame((_state, delta) => {

    if (jumpPressed) {
        jump(1)
    }

    const force = {x: 0, y: 0, z: 0};

    if (upPressed) {
        addForce(force, moveForward(1))
    }
    if (downPressed) {
        addForce(force, moveForward(-1))
    }
    if (leftPressed) {
        addForce(force, moveLeft(1))
    }
    if (rightPressed) {
        addForce(force, moveLeft(-1))
    }

    if (getSpeed(force) > 0) {
      character.current.applyImpulse(force);
      actions["metarigAction"].play()
      actions["KeyAction"].play()
      actions["KeyAction.001"].play()
    }
    else {
      actions["metarigAction"].stop()
      actions["KeyAction"].stop()
      actions["KeyAction.001"].stop()
    }

    capSpeed()
    faceMovementDirection()
  });


  return (
  
  <RigidBody position={[0, 3, 2.5]}
            rotation={[0, 0, 0]}
            ref={character}
            colliders={false}
            enabledRotations={[false, true, false]}
            canSleep={false}
            castShadow

            onCollisionEnter={({other}) => {
                if (other.rigidBodyObject.name === "floor") {
                    isOnFloor.current = true;
                }
            }}
            onCollisionExitr={({other}) => {
                if (other.rigidBodyObject.name === "floor") {
                    isOnFloor.current = false;
                }
            }}
>

    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="metarig">
          <skinnedMesh
            name="model"
            geometry={nodes.model.geometry}
            material={materials['Material.001']}
            skeleton={nodes.model.skeleton}
            castShadow
          />
          <mesh
            name="model006"
            receiveShadow
            geometry={nodes.model006.geometry}
            material={materials.Dust}
            morphTargetDictionary={nodes.model006.morphTargetDictionary}
            morphTargetInfluences={nodes.model006.morphTargetInfluences}
            position={[0.141, 0.072, -0.071]}
            rotation={[-0.185, 0, 0]}
            scale={0.422}
          />
          <mesh
            name="model007"
            receiveShadow
            geometry={nodes.model007.geometry}
            material={materials.Dust}
            morphTargetDictionary={nodes.model007.morphTargetDictionary}
            morphTargetInfluences={nodes.model007.morphTargetInfluences}
            position={[-0.069, 0.16, -0.117]}
            rotation={[2.957, 0, 0]}
            scale={-0.422}
          />
          <primitive object={nodes.spine} />
          <primitive object={nodes.neutral_bone} />
        </group>
      </group>
    </group>
    {/* <CapsuleCollider args={[0.5, 0.4]} position={[0, 0.9, 0]}/> */}
    <CuboidCollider args={[0.4, 0.9, 0.3]}  position={[0, 0.9, 0]}/>
  </RigidBody>
  )
}

useGLTF.preload('models/BoyLow.glb')