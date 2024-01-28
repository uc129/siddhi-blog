import * as THREE from "three";
import React, { forwardRef, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
// import { PillarShader } from "./pillarShader";
import { Vector3 } from "three";



const TempleModel = forwardRef((props, ref) => {
    const { nodes } = useGLTF("/assets/3DModels/pillar.glb");



    const uniforms = useMemo(() => {

        return {
            // ...GhibliShader.uniforms,
            // uBaseColor: { value: new Color('#49897C') },
            // uAmbientLightColor: { value: new Color('#050505') },
            // uDirLightColor: { value: new Color('white') },
            // uDirLightPos: { value: new Vector3(15, 15, 15) },
            // uLineColor1: { value: new Color('#808080') },
            // uLineColor2: { value: new Color('black') },

            colorMap: {
                value: props.colors
            },
            brightnessThresholds: {
                value: [0.9, 0.45, 0.001]
            },
            lightPosition: {
                value: new Vector3(15, 15, 15)
            },
        }

    }, [props.colors]);

    // const meshMaterial = useMemo(() => {
    //     return new THREE.MeshNormalMaterial({ side: THREE.DoubleSide, blendColor: [new THREE.Color('#FBCEB1'), new THREE.Color('#FFC000')] });
    // })

    // const meshMaterial2 = useMemo(() => {
    //     return new THREE.MeshDepthMaterial({ side: THREE.DoubleSide, depthTest: true, depthWrite: true, opacity: 0.5, });
    // })

    const meshMaterial3 = new THREE.MeshToonMaterial({ side: THREE.DoubleSide, color: new THREE.Color('#FFF5EE'), opacity: 0.5, });


    return (
        <group {...props} ref={ref} dispose={null}>

            <mesh
                geometry={nodes.Object_6.geometry}
                position={[0, -0.7, 0]}
                scale={0.34}
                material={meshMaterial3}
                uniforms={uniforms}
            />
        </group>
    );
});

useGLTF.preload("/assets/3DModels/pillar.glb");

export { TempleModel };