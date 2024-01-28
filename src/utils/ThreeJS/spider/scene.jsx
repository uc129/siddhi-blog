import React from 'react';
// import { Color } from 'three';
import { OrbitControls } from '@react-three/drei';
// import { useFrame } from '@react-three/fiber';
import { Spider } from './spider';

const SpiderScene = () => {


    const spider = React.useRef();

    // useFrame(() => {

    //     spider.current.rotation.y += 0.0002;
    // })


    return (
        <>
            <ambientLight intensity={0.1} />

            <directionalLight
                color='white'
                position={[10, 10, 10]}
                intensity={1}
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            />

            <directionalLight
                color='white'
                position={[-10, 10, -10]}
                intensity={1}
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            />

            <Spider
                ref={spider}
                position={[-5, 0, 0]}
            />

            <OrbitControls minDistance={40} maxDistance={40} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
        </>
    )
}

export default SpiderScene