
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Lights(props) {
  const { nodes, materials } = useGLTF('models/IslandLight.glb')
  return (
    <group {...props} dispose={null}>
      <directionalLight
        intensity={2397.33/1000}
        decay={2}
        color="#ffe2a6"
        position={[-4.576, 49.548, 80.21]}
        rotation={[-0.469, -0.265, 0.776]}
      />
      <directionalLight
        intensity={1099.63/1000}
        decay={2}
        color="#ffe2a6"
        position={[-3.497, 49.548, 80.351]}
        rotation={[-0.464, 0.148, 0.776]}
      />
      <directionalLight
        intensity={826.43/1000}
        decay={2}
        color="#ffe2a6"
        position={[63.253, 57.836, -12.483]}
        rotation={[-1.124, 0.987, 1.07]}
      />
    </group>
  )
}

useGLTF.preload('models/IslandLight.glb')