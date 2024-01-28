import { useThree, extend } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Vector3 } from 'three';

extend({ OrbitControls });

const CustomOrbitControls = (props) => {
    const { camera, gl } = useThree();

    const handleRotate = (event) => {
        // Restrict rotation in the x-direction
        const maxPolarAngle = Math.PI / 2; // 90 degrees

        if (camera) {
            // Check if the new angle exceeds the limit
            const newPolarAngle = camera.rotation.toVector3().angleTo(new Vector3(0, 1, 0));

            if (newPolarAngle <= maxPolarAngle) {
                // Allow rotation if within the limit
                camera.rotateOnWorldAxis(new Vector3(0, 1, 0), event.deltaX / 100);
            }
        }
    };

    return <orbitControls {...props} rotate={handleRotate} args={[camera, gl.domElement]} />;
};

export default CustomOrbitControls;
