import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import SpiderScene from "./scene";

export default function SpiderContainer(props) {

    useEffect(() => {
        let canvas = document.getElementById("canvas");
        if (!canvas) return
        canvas.setAttribute("style", " height:200vh; width: 20%; position: absolute; bottom:10em; left: 0; z-index: 0; overflow: hidden; object-fit: contain;");
    })

    return (
        <Canvas id="canvas" camera={{ position: [1, 0, 0], fov: [4] }} className="overflow-hidden pointer-events-none">
            <SpiderScene />
        </Canvas>
    );
}


