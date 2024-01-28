import React from 'react';
import { TempleModel } from './pillar.three';
import { Color } from 'three';
import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const PillarScene = () => {

    useFrame(({ clock }) => {
        const pillar = pillarRef.current;
        if (!pillar) return;
        // const time = clock.getElapsedTime();
        pillar.rotation.y += 0.0002;
    })

    const pillarRef = React.useRef();

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

            <TempleModel
                ref={pillarRef}
                position={[-5, 0, 0]}
                colors={[
                    // new Color('#427062').convertLinearToSRGB(),
                    // new Color('#33594e').convertLinearToSRGB(),
                    // new Color('#234549').convertLinearToSRGB(),
                    // new Color('#1e363f').convertLinearToSRGB(),

                    new Color('#7393B3').convertLinearToSRGB(),
                    new Color('#E97451').convertLinearToSRGB(),
                    new Color('#FFBF00').convertLinearToSRGB(),
                    new Color('#CC5500').convertLinearToSRGB(),
                ]}
            />

            <OrbitControls minDistance={40} maxDistance={40} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
        </>
    )
}

export default PillarScene;