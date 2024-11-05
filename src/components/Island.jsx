import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations, useKeyboardControls } from '@react-three/drei'
import { CapsuleCollider, CuboidCollider, quat, RigidBody, euler } from "@react-three/rapier";
import { useFrame, useThree } from '@react-three/fiber';
import {Controls, inRad} from '../App';

export function Island(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('models/IslandTest.glb')
  console.log(materials)

  return (
  
  <RigidBody position={[0, 0, 0]}
            rotation={[0, -inRad(45), 0]}
            colliders={false}
            canSleep={false}
            receiveShadow
            type="fixed" name="floor"
            friction={5}
    >

<group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Island.geometry}
        material={materials.IslandMat}
        position={[0, -5.316, 0]}
        scale={[13.765, 6.301, 13.765]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stair.geometry}
        material={materials['Material.004']}
        position={[18.146, -0.169, 10.496]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[2.109, 2.357, 1.503]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Path1.geometry}
        material={materials.Path}
        position={[18.637, -0.968, 13.782]}
        scale={[4.401, 0.07, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stair001.geometry}
        material={materials['Material.004']}
        position={[-2.12, 2.015, 10.806]}
        rotation={[Math.PI / 2, 0, -1.564]}
        scale={[2.109, 2.357, 1.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.House1.geometry}
        material={materials.house1}
        position={[-11.599, 5.168, -4.213]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.344}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stair002.geometry}
        material={materials['Material.004']}
        position={[7.898, 4.045, -9.927]}
        rotation={[Math.PI / 2, 0, -1.564]}
        scale={[2.109, 1.734, 1.007]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stair003.geometry}
        material={materials['Material.004']}
        position={[11.236, 2.124, -5.597]}
        rotation={[Math.PI / 2, 0, 0.005]}
        scale={[2.109, 1.734, 1.265]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Path2.geometry}
        material={materials.Path2}
        position={[11.221, 0.846, -3.031]}
        scale={[1.993, 0.224, 3.995]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model008.geometry}
        material={materials.Fence}
        position={[-1.801, -3.806, -0.744]}
        rotation={[Math.PI / 2, 0, 1.587]}
        scale={1.59}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model009.geometry}
        material={materials.Fence}
        position={[-8.844, 3.632, -4.935]}
        rotation={[Math.PI / 2, 0, 1.587]}
        scale={1.097}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model010.geometry}
        material={materials.Fence}
        position={[-9.079, 3.632, -2.748]}
        rotation={[Math.PI / 2, 0, 1.587]}
        scale={1.097}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model011.geometry}
        material={materials.Fence}
        position={[-10.33, 3.632, -1.492]}
        rotation={[Math.PI / 2, 0, 3.129]}
        scale={1.097}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model012.geometry}
        material={materials.Fence}
        position={[-12.46, 3.632, -1.486]}
        rotation={[Math.PI / 2, 0, 3.129]}
        scale={1.097}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model013.geometry}
        material={materials.Fence}
        position={[12.156, -0.889, 14.137]}
        rotation={[Math.PI / 2, 0, 3.129]}
        scale={1.59}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.GrassBox}
        position={[10.188, 0.53, 17.567]}
        scale={[1.838, 1.062, 1.838]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BoxFlowers.geometry}
          material={materials.PP_Standard_Material}
          position={[0.839, 1.822, -0.444]}
          rotation={[0, 1.2, 0]}
          scale={[0.221, 0.382, 0.221]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GrassBox001.geometry}
          material={materials['grassBunch.001']}
          position={[0.01, 0.608, 0.016]}
          scale={[0.977, 3.269, 0.977]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GrassBox.geometry}
          material={materials['grassBunch.001']}
          position={[0.01, 0.336, 0.016]}
          scale={[0.977, 3.269, 0.977]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model014.geometry}
        material={materials.Fence}
        position={[5.794, 1.55, 17.002]}
        rotation={[Math.PI / 2, 0, -1.632]}
        scale={1.59}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model015.geometry}
        material={materials.UofT}
        position={[-30.991, 10.627, -3.1]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={6.044}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PP_Rock_Pile_Forest_Moss_05001.geometry}
        material={materials['PP_Standard_Material.001']}
        position={[-18.704, 4.526, 12.301]}
        rotation={[0, -0.235, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model016.geometry}
        material={materials.Fence}
        position={[-10.161, 5.141, -7.087]}
        rotation={[Math.PI / 2, 0, -3.128]}
        scale={1.59}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model017.geometry}
        material={materials.Fence}
        position={[-3.131, 5.33, -7.092]}
        rotation={[Math.PI / 2, 0, -3.131]}
        scale={1.502}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model018.geometry}
        material={materials.Fence}
        position={[3.395, 5.33, -7.078]}
        rotation={[Math.PI / 2, 0, -3.101]}
        scale={1.567}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model019.geometry}
        material={materials.Fence}
        position={[1.69, 5.33, -12.718]}
        rotation={[Math.PI / 2, 0, -3.131]}
        scale={1.823}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stair004.geometry}
        material={materials['Material.004']}
        position={[-4.198, 6.048, -10.384]}
        rotation={[Math.PI / 2, 0, -1.564]}
        scale={[2.23, 2.171, 1.692]}
      />
      <group position={[3.514, 1.03, 17.753]} scale={[1.563, 1.563, 3.217]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_4.geometry}
          material={materials.Water}
        />
        <mesh castShadow receiveShadow geometry={nodes.Mesh_5.geometry} material={materials.Edge} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh_6.geometry} material={materials.Fall} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials.Fall}
          position={[-0.001, -0.073, 0.936]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012.geometry}
          material={materials.Fall2}
          position={[3.405, 4.087, -14.899]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[0.486, 1, 2.058]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PP_Rock_Moss_Grown_11001.geometry}
          material={materials.PP_Standard_Material}
          position={[-0.545, 0.133, -0.784]}
          scale={[0.115, 0.115, 0.056]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials.Material}
        position={[-26.159, 8.326, -3.068]}
        rotation={[Math.PI / 2, 0.598, -Math.PI / 2]}
        scale={[1.207, 0.171, 1.207]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials.Grass}
        position={[-26.316, 8.098, 0.101]}
        rotation={[0, 0, -0.969]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials.GrassBox}
        position={[-16.646, 8.397, -34.295]}
        scale={[2.971, 1.717, 2.971]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials.Instruction}
        position={[5.826, 1.02, 4.667]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={[0.314, 0.344, 0.251]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={materials.Instruction}
          position={[3.427, 0, 4.674]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[1.251, 1, 0.799]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008.geometry}
          material={materials.Instruction}
          position={[3.427, 0, -3.951]}
          rotation={[0, -1.571, 0]}
          scale={[1.251, 1, 0.799]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009.geometry}
          material={materials.Instruction}
          position={[6.435, 0, 0.118]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text001.geometry}
          material={materials.Instruction}
          position={[-6.062, -0.059, -0.037]}
          rotation={[0, 1.571, 0]}
          scale={[6.492, 4.738, 5.188]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text002.geometry}
          material={materials.Instruction}
          position={[3.799, -0.059, 12.895]}
          rotation={[0, 1.571, 0]}
          scale={[6.492, 4.738, 5.188]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text003.geometry}
          material={materials.Instruction}
          position={[3.654, -0.059, -12.752]}
          rotation={[0, 1.571, 0]}
          scale={[6.492, 4.738, 5.188]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text004.geometry}
          material={materials.Instruction}
          position={[12.637, -0.059, 0.163]}
          rotation={[0, 1.571, 0]}
          scale={[6.492, 4.738, 5.188]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text005.geometry}
        material={nodes.Text005.material}
        position={[-16.719, 10.079, -34.072]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.542}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane010.geometry}
        material={materials['Material.003']}
        position={[-25.365, 7.671, 0.101]}
        rotation={[0, 0, -0.047]}
        scale={[1.216, 1.005, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text006.geometry}
        material={nodes.Text006.material}
        position={[-25.413, 7.693, 2.332]}
        rotation={[Math.PI / 2, 1.53, -Math.PI / 2]}
        scale={0.991}
      />
      <group
        position={[-27.97, 7.447, -20.71]}
        rotation={[Math.PI / 2, 0, -Math.PI / 4]}
        scale={4.014}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Name.geometry}
          material={materials.Aspiring}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Name_1.geometry}
          material={materials.Ashish}
        />
        <group position={[2.013, 0.248, -0.12]} rotation={[0, 0, -0.006]} scale={0.315}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Name001.geometry}
            material={materials.Ajin}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Name001_1.geometry}
            material={materials.AjinBg}
          />
        </group>
      </group>
      <group
        position={[0.601, 1.707, -1.662]}
        rotation={[0.955, Math.PI / 6, -0.615]}
        scale={1.177}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text002_1.geometry}
          material={materials['Material.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text002_2.geometry}
          material={materials['Material.007']}
        />
      </group>
      <group position={[-9.365, 7.655, -34.088]} scale={[1, 0.415, 1]}>
        <mesh castShadow receiveShadow geometry={nodes.Mesh.geometry} material={materials.GitHub} onClick={() => {window.open("https://github.com/KingHacker9000")}}/>
        <mesh castShadow receiveShadow geometry={nodes.Mesh_1.geometry} material={materials.Mail} onClick={() => {window.location.href = "mailto:ashishajin05@gmail.com";}} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2.geometry}
          material={materials.Resume}
          onClick={() => {window.open("/resume")}}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_3.geometry}
          material={materials.Linkedin}
          onClick={() => {window.open("https://www.linkedin.com/in/ashish-ajin-thomas/")}}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane013.geometry}
        material={materials['GitHub Image']}
        position={[-9.38, 8.097, -34.103]}
        scale={0.819}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane014.geometry}
        material={materials['Linkedin Image']}
        position={[-6.375, 8.072, -34.103]}
        scale={0.81}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane015.geometry}
        material={materials['Email Image']}
        position={[-3.381, 8.081, -34.103]}
        scale={0.611}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane016.geometry}
        material={materials['Resume Image']}
        position={[-0.345, 8.081, -34.103]}
        scale={0.81}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.model020.geometry}
        material={materials.Fence}
        position={[1.299, 1.55, -5.651]}
        rotation={[Math.PI / 2, 0, 0.037]}
        scale={1.59}
      />
      <group position={[1.585, 1.785, 1.892]} rotation={[0.955, Math.PI / 6, -0.615]} scale={1.694}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text005_1.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text005_2.geometry}
          material={materials['Material.008']}
        />
      </group>
      <group position={[3.736, 1.67, -2.552]} rotation={[0.955, Math.PI / 6, -0.615]} scale={1.177}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text001_2.geometry}
          material={materials['Material.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text001_3.geometry}
          material={materials['Material.007']}
        />
      </group>
      <group
        position={[5.829, 7.532, -30.187]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1.563, 1.563, 3.217]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_7.geometry}
          material={materials.Water}
        />
        <mesh castShadow receiveShadow geometry={nodes.Mesh_8.geometry} material={materials.Edge} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh_9.geometry} material={materials.Fall} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials.Aspiring}
        position={[-1.586, 1.699, -2.656]}
        rotation={[-0.955, Math.PI / 6, 0.615]}
        scale={[1.694, 0.67, 0.411]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text012.geometry}
        material={materials['Grey Stone']}
        position={[-1.316, 2.083, -2.476]}
        rotation={[0.955, Math.PI / 6, -0.615]}
        scale={1.37}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PP_Hyacinth_04001.geometry}
        material={materials.PP_Standard_Material}
        position={[-14.602, 7.317, 2.176]}
        scale={3.183}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PP_Birch_Tree_05001.geometry}
        material={materials.PP_Standard_Material}
        position={[-12.844, 0.422, 19.501]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PP_Rock_Moss_Grown_11003.geometry}
        material={materials.PP_Standard_Material}
        position={[6.415, 7.411, -19.369]}
        rotation={[0, 0.461, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PP_Rock_Moss_Grown_11004.geometry}
        material={materials.PP_Standard_Material}
        position={[6.736, 7.411, -34.14]}
        rotation={[-Math.PI, 1.289, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PP_Rock_Moss_Grown_11002.geometry}
        material={materials.PP_Standard_Material}
        position={[-33.638, 7.411, -17.727]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PP_Tree_10002.geometry}
        material={materials.PP_Standard_Material}
        position={[-15.016, 4.442, 9.196]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PP_Rock_Moss_Grown_11005.geometry}
        material={materials.PP_Standard_Material}
        position={[14.704, 1.237, 5.088]}
        scale={0.179}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PP_Tree_10001.geometry}
        material={materials.PP_Standard_Material}
        position={[21.794, 1.086, -5.978]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PP_Rock_Moss_Grown_11006.geometry}
        material={materials.PP_Standard_Material}
        position={[3.303, 7.781, -29.335]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.179}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PP_Birch_Tree_05017.geometry}
        material={materials.PP_Standard_Material}
        position={[-30.712, 18.902, -32.037]}
        rotation={[-0.045, -0.006, -0.049]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Grass.geometry}
        material={materials.Grass}
        position={[-21.427, 7.57, -9.602]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.114, 0.449, 0.449]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Grass022.geometry}
        material={materials.Grass}
        position={[7.431, 7.725, -17.302]}
        rotation={[Math.PI / 2, 0, -1.212]}
        scale={[0.092, 0.363, 0.363]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Grass023.geometry}
        material={materials.Grass}
        position={[8.008, 7.725, -14.657]}
        rotation={[Math.PI / 2, 0, -1.212]}
        scale={[0.092, 0.363, 0.363]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Grass025.geometry}
        material={materials.Grass}
        position={[-19.006, 7.725, -8.346]}
        rotation={[Math.PI / 2, 0, -0.385]}
        scale={[0.092, 0.363, 0.363]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass001.geometry}
          material={materials.Grass}
          position={[-42.942, -59.257, 0]}
          rotation={[0, 0, -0.766]}
          scale={[0.665, 3.098, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass002.geometry}
          material={materials.Grass}
          position={[46.668, 4.654, 0]}
          rotation={[0, 0, 1.145]}
          scale={[0.33, 3.841, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass003.geometry}
          material={materials.Grass}
          position={[156.406, 27.684, 17.244]}
          rotation={[0, 0, 0.165]}
          scale={[0.997, 1.047, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass004.geometry}
          material={materials.Grass}
          position={[333.355, -29.164, 0]}
          rotation={[0, 0, -0.741]}
          scale={[0.703, 2.969, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass005.geometry}
          material={materials.Grass}
          position={[357.977, -29.293, 0.07]}
          rotation={[0, 0, -0.741]}
          scale={[0.703, 2.969, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass006.geometry}
          material={materials.Grass}
          position={[-11.408, -59.184, 0]}
          rotation={[0, 0, -1.591]}
          scale={[0.255, 3.929, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass007.geometry}
          material={materials.Grass}
          position={[327.763, 42.954, 17.244]}
          rotation={[0, 0, 0.165]}
          scale={[0.997, 1.047, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass008.geometry}
          material={materials.Grass}
          position={[-23.757, 13.784, 0]}
          rotation={[0, 0, -0.557]}
          scale={[0.914, 1.885, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass009.geometry}
          material={materials.Grass}
          position={[87.58, 2.875, 0]}
          rotation={[0, 0, -0.459]}
          scale={[0.959, 1.5, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass010.geometry}
          material={materials.Grass}
          position={[106.427, -3.499, 0]}
          rotation={[0, 0, -2.113]}
          scale={[0.39, 3.754, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass011.geometry}
          material={materials.Grass}
          position={[130.222, 12.383, 0]}
          rotation={[0, 0, -0.741]}
          scale={[0.703, 2.969, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass012.geometry}
          material={materials.Grass}
          position={[137.577, -8.43, 0]}
          rotation={[0, 0, -1.346]}
          scale={[0.274, 3.908, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass013.geometry}
          material={materials.Grass}
          position={[129.858, -18.864, 0]}
          rotation={[0, 0, 0.637]}
          scale={[0.844, 2.334, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass014.geometry}
          material={materials.Grass}
          position={[184.727, -21.448, 0]}
          rotation={[0, 0, 0.233]}
          scale={[0.993, 1.098, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass015.geometry}
          material={materials.Grass}
          position={[191.389, -9.237, 0]}
          rotation={[0, 0, -0.029]}
          scale={[1, 1.001, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass016.geometry}
          material={materials.Grass}
          position={[235.441, -17.981, 0]}
          rotation={[0, 0, -0.741]}
          scale={[0.703, 2.969, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass017.geometry}
          material={materials.Grass}
          position={[227.026, -4.7, 0]}
          rotation={[0, 0, -0.741]}
          scale={[0.703, 2.969, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass018.geometry}
          material={materials.Grass}
          position={[183.157, -3.155, 0]}
          rotation={[0, 0, 0.165]}
          scale={[0.997, 1.047, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass019.geometry}
          material={materials.Grass}
          position={[254.274, 5.41, 0]}
          rotation={[0, 0, -0.741]}
          scale={[0.703, 2.969, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass020.geometry}
          material={materials.Grass}
          position={[280.251, -5.239, 0]}
          rotation={[0, 0, -0.741]}
          scale={[0.703, 2.969, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass021.geometry}
          material={materials.Grass}
          position={[329.134, -9.63, 0]}
          rotation={[0, 0, -0.741]}
          scale={[0.703, 2.969, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass024.geometry}
          material={materials.Grass}
          position={[371.799, 60.724, 17.244]}
          rotation={[0, 0, 0.83]}
          scale={[0.577, 3.361, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass026.geometry}
          material={materials.Grass}
          position={[-5.219, 27.344, 0]}
          rotation={[0, 0, 0.539]}
          scale={[0.925, 1.798, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass027.geometry}
          material={materials.Grass}
          position={[131.404, 1.274, 0]}
          rotation={[0, 0, -1.804]}
          scale={[0.276, 3.907, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass028.geometry}
          material={materials.Grass}
          position={[14.932, -9.379, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass029.geometry}
          material={materials.Grass}
          position={[-44.344, -7.636, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass030.geometry}
          material={materials.Grass}
          position={[-125.982, -11.728, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass031.geometry}
          material={materials.Grass}
          position={[-149.377, -20.2, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass032.geometry}
          material={materials.Grass}
          position={[-113.601, -21.97, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass033.geometry}
          material={materials.Grass}
          position={[-73.353, -19.483, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass034.geometry}
          material={materials.Grass}
          position={[-23.208, -19.105, 0]}
          rotation={[0, 0, -0.644]}
          scale={[0.739, 2.106, 0.885]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass035.geometry}
          material={materials.Grass}
          position={[93.708, 56.404, 17.244]}
          rotation={[0, 0, 0.83]}
          scale={[0.577, 3.361, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass036.geometry}
          material={materials.Grass}
          position={[-32.33, 67.563, 17.244]}
          rotation={[0, 0, 0.83]}
          scale={[0.577, 3.361, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass037.geometry}
          material={materials.Grass}
          position={[132.419, -33.437, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass038.geometry}
          material={materials.Grass}
          position={[108.444, -45.113, 0]}
          rotation={[0, 0, -0.766]}
          scale={[0.665, 3.098, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass039.geometry}
          material={materials.Grass}
          position={[79.041, -17.105, 0]}
          rotation={[0, 0, 1.621]}
          scale={[0.256, 3.928, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass040.geometry}
          material={materials.Grass}
          position={[18.535, -31.553, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass041.geometry}
          material={materials.Grass}
          position={[294.748, -11.422, 0]}
          rotation={[0, 0, -0.63]}
          scale={[0.851, 2.292, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass042.geometry}
          material={materials.Grass}
          position={[185.549, -40.813, 0]}
          rotation={[0, 0, -1.346]}
          scale={[0.274, 3.908, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass043.geometry}
          material={materials.Grass}
          position={[-134.507, -31.629, 0]}
          rotation={[0, 0, -0.63]}
          scale={[0.851, 2.292, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass044.geometry}
          material={materials.Grass}
          position={[-37.064, 23.098, 0]}
          rotation={[0, 0, -0.63]}
          scale={[0.851, 2.292, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass045.geometry}
          material={materials.Grass}
          position={[-82.504, -35.094, 0]}
          rotation={[0, 0, -0.63]}
          scale={[0.851, 2.292, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass046.geometry}
          material={materials.Grass}
          position={[-76.797, -45.32, 0]}
          rotation={[0, 0, 0.048]}
          scale={[1, 1.004, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass047.geometry}
          material={materials.Grass}
          position={[-34.259, -25.255, 0]}
          rotation={[0, 0, 1.66]}
          scale={[0.258, 3.926, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass048.geometry}
          material={materials.Grass}
          position={[32.36, 87.004, 17.244]}
          rotation={[0, 0, 2.761]}
          scale={[0.977, 1.305, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass049.geometry}
          material={materials.Grass}
          position={[90.221, 92.145, 17.244]}
          rotation={[0, 0, 1.061]}
          scale={[0.371, 3.783, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass050.geometry}
          material={materials.Grass}
          position={[115.86, 80.481, 17.244]}
          rotation={[0, 0, 2.062]}
          scale={[0.36, 3.799, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass051.geometry}
          material={materials.Grass}
          position={[51.105, 76.365, 17.244]}
          rotation={[0, 0, 2.433]}
          scale={[0.751, 2.78, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass052.geometry}
          material={materials.Grass}
          position={[79.35, 43.061, 12.282]}
          rotation={[0, 0, 0.165]}
          scale={[0.766, 0.804, 0.768]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass053.geometry}
          material={materials.Grass}
          position={[8.275, 47.974, 12.282]}
          rotation={[0, 0, 2.532]}
          scale={[0.923, 2.3, 1.059]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass054.geometry}
          material={materials.Grass}
          position={[49.245, 66.712, 12.282]}
          rotation={[0, 0, 2.532]}
          scale={[0.923, 2.3, 1.059]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass055.geometry}
          material={materials.Grass}
          position={[27.956, 28.528, 12.282]}
          rotation={[0, 0, -2.14]}
          scale={[0.432, 3.944, 1.059]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass056.geometry}
          material={materials.Grass}
          position={[245.301, -35.365, 0]}
          rotation={[0, 0, -0.79]}
          scale={[0.552, 2.805, 0.875]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass057.geometry}
          material={materials.Grass}
          position={[278.407, -24.476, 0]}
          rotation={[0, 0, -1.372]}
          scale={[0.236, 3.423, 0.875]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass058.geometry}
          material={materials.Grass}
          position={[327.682, -34.557, 0]}
          rotation={[0, 0, -1.372]}
          scale={[0.236, 3.423, 0.875]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass059.geometry}
          material={materials.Grass}
          position={[227.062, 48.954, 17.244]}
          rotation={[0, 0, 0.83]}
          scale={[0.577, 3.361, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass060.geometry}
          material={materials.Grass}
          position={[149.353, 56.112, 18.067]}
          rotation={[0, 0, 0.83]}
          scale={[0.577, 3.361, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass061.geometry}
          material={materials.Grass}
          position={[8.386, -69.55, 0]}
          rotation={[0, 0, -0.621]}
          scale={[0.724, 1.881, 0.841]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass062.geometry}
          material={materials.Grass}
          position={[10.373, -62.661, 0.742]}
          rotation={[0, 0, -0.621]}
          scale={[0.893, 2.322, 0.673]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grass063.geometry}
          material={materials.Grass}
          position={[242.315, 102.565, 23.567]}
          rotation={[0, 0, 0.83]}
          scale={[0.577, 3.361, 1]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PP_Daffodil_03002.geometry}
        material={materials.PP_Standard_Material}
        position={[21.876, 0.35, 17.43]}
      />
      <group position={[21.422, -0.401, 18.717]} rotation={[0, 0.563, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Scene275.geometry}
          material={materials.PP_Standard_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Scene275_1.geometry}
          material={materials['grassBunch.001']}
        />
      </group>
      <group position={[-8.068, 3.505, -5.304]} rotation={[0, 0.563, 0]} scale={0.515}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Scene280.geometry}
          material={materials.PP_Standard_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Scene280_1.geometry}
          material={materials['grassBunch.001']}
        />
      </group>
      <group position={[-8.062, 3.505, -3.73]} rotation={[0, 0.563, 0]} scale={0.394}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Scene281.geometry}
          material={materials.PP_Standard_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Scene281_1.geometry}
          material={materials['grassBunch.001']}
        />
      </group>
      <group position={[-8.141, 3.505, -2.171]} rotation={[0, -0.069, 0]} scale={0.54}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Scene282.geometry}
          material={materials.PP_Standard_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Scene282_1.geometry}
          material={materials['grassBunch.001']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PP_Daffodil_03001.geometry}
        material={materials.PP_Standard_Material}
        position={[10.314, 2.868, 17.958]}
      />
      <group position={[6.27, 5.376, -12.74]} rotation={[0, 0.563, 0]} scale={0.394}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Scene024.geometry}
          material={materials.PP_Standard_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Scene024_1.geometry}
          material={materials['grassBunch.001']}
        />
      </group>
      <group position={[-2.328, 5.338, -13.129]} rotation={[0, -0.069, 0]} scale={0.625}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Scene025.geometry}
          material={materials.PP_Standard_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Scene025_1.geometry}
          material={materials['grassBunch.001']}
        />
      </group>
      <group position={[-3.55, 5.338, -13.129]} rotation={[0, -0.069, 0]} scale={0.625}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Scene026.geometry}
          material={materials.PP_Standard_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Scene026_1.geometry}
          material={materials['grassBunch.001']}
        />
      </group>
      <group position={[-4.751, 5.338, -13.146]} rotation={[0, -0.069, 0]} scale={0.625}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Scene027.geometry}
          material={materials.PP_Standard_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Scene027_1.geometry}
          material={materials['grassBunch.001']}
        />
      </group>
      <group position={[-12.841, 1.711, 14.866]} rotation={[0, 0.563, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Scene029.geometry}
          material={materials.PP_Standard_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Scene029_1.geometry}
          material={materials['grassBunch.001']}
        />
      </group>
      <group position={[-34.459, 8.288, -30.518]} rotation={[0, 0.563, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Scene030.geometry}
          material={materials.PP_Standard_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Scene030_1.geometry}
          material={materials['grassBunch.001']}
        />
      </group>
      <group position={[7.727, 1.966, -6.336]} rotation={[0, 0.014, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Scene031.geometry}
          material={materials.PP_Standard_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Scene031_1.geometry}
          material={materials['grassBunch.001']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BigTreePlants001.geometry}
        material={materials.PP_Standard_Material}
        position={[-4.739, 7.33, -16.357]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BigTreePlants003.geometry}
        material={materials.PP_Standard_Material}
        position={[-6.176, 7.795, -13.624]}
        rotation={[0, -0.58, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BigTreePlants004.geometry}
        material={materials.PP_Standard_Material}
        position={[-27.009, 7.795, -12.667]}
        rotation={[Math.PI, -1.015, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BigTreePlants005.geometry}
        material={materials.PP_Standard_Material}
        position={[4.996, 7.795, -14.28]}
        rotation={[0, -1.566, 0]}
        scale={1.068}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BigTreePlants006.geometry}
        material={materials.PP_Standard_Material}
        position={[-17.664, 7.795, -9.062]}
        rotation={[0, -0.58, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BigTreePlants007.geometry}
        material={materials.PP_Standard_Material}
        position={[-27.619, 8.337, -17.894]}
        rotation={[0, 1.55, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BigTreePlants008.geometry}
        material={materials.PP_Standard_Material}
        position={[4.241, 7.33, 5.168]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BigTreePlants009.geometry}
        material={materials.PP_Standard_Material}
        position={[18.653, 7.33, -15.088]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BigTreePlants010.geometry}
        material={materials.PP_Standard_Material}
        position={[-15.295, 8.337, -22.744]}
        rotation={[-Math.PI, 1.098, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BigTreePlants011.geometry}
        material={materials.PP_Standard_Material}
        position={[0.286, 8.337, -16.728]}
        rotation={[-Math.PI, 1.098, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BigTreePlants012.geometry}
        material={materials.PP_Standard_Material}
        position={[-33.656, 8.337, -13.325]}
        rotation={[-Math.PI, 1.098, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BigTreePlants013.geometry}
        material={materials.PP_Standard_Material}
        position={[-27.358, 8.337, -8.296]}
        rotation={[-Math.PI, 1.522, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BigTreePlants014.geometry}
        material={materials.PP_Standard_Material}
        position={[-19.165, 8.337, -15.196]}
        rotation={[0, 0.758, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BigTreePlants002.geometry}
        material={materials.PP_Standard_Material}
        position={[-12.578, 7.795, -22.152]}
        rotation={[0, -1.212, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BigTreePlants015.geometry}
        material={materials.PP_Standard_Material}
        position={[-4.463, 7.795, -29.346]}
        rotation={[-Math.PI, 0.232, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BigTreePlants016.geometry}
        material={materials.PP_Standard_Material}
        position={[4.188, 7.795, -35.203]}
        rotation={[0, -1.212, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BigTreePlants017.geometry}
        material={materials.PP_Standard_Material}
        position={[2.256, 7.795, -24.411]}
        rotation={[0, -0.124, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BigTreePlants018.geometry}
        material={materials.PP_Standard_Material}
        position={[-13.211, 8.337, -29.956]}
        rotation={[0, 1.421, 0]}
      />
      <group position={[-21.688, 8.219, -32.389]} rotation={[0, 0.563, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Scene053.geometry}
          material={materials.PP_Standard_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Scene053_1.geometry}
          material={materials['grassBunch.001']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BigTreePlants019.geometry}
        material={materials.PP_Standard_Material}
        position={[4.947, 1.58, -1.587]}
        rotation={[0, -1.566, 0]}
        scale={1.068}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BigTreePlants020.geometry}
        material={materials.PP_Standard_Material}
        position={[-32.306, 8.337, -27.034]}
        rotation={[0, 0.758, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BigTreePlants021.geometry}
        material={materials.PP_Standard_Material}
        position={[-27.877, 8.337, -20.783]}
        rotation={[0, 0.758, 0]}
      />
      <group position={[-5.57, 6.854, -11.426]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Scene057.geometry}
          material={materials.PP_Standard_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Scene057_1.geometry}
          material={materials.BigTreeMama}
        />
      </group>
    </group>
    <CuboidCollider args={[30, 0.9, 30]}  position={[0, 0, 0]}/>
  </RigidBody>
  )
}

useGLTF.preload('models/IslandTest.glb')