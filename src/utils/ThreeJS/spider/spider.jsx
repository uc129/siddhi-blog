import React from "react";
import { useGLTF } from "@react-three/drei";

export function Spider(props) {
    const { nodes, materials } = useGLTF("/assets/3DModels/spider.glb");
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_2.geometry}
                material={materials.spider_mech}
                rotation={[-Math.PI / 2, 0, 0]}
            />
        </group>
    );
}

useGLTF.preload("/assets/3DModels/spider.glb");
