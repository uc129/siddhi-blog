// / Three JS Start
import * as THREE from 'three';

export default function ThreeD() {
    // Define the container dimensions
    const containerWidth = 100; // Set your desired width
    const containerHeight = 100; // Set your desired height

    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, containerWidth / containerHeight, 0.1, 1000);
    camera.position.z = 1.5;

    // Create a renderer that fits the container
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerWidth, containerHeight);
    renderer.setClearColor(0xffffff, 0);

    // Append the renderer's DOM element to your container (div)
    const container = document.getElementById("three-d-cube"); // Replace with your container's ID
    container.style.backgroundColor = "#ffffff";
    container.appendChild(renderer.domElement);

    // Create a rotating box
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const outlineMaterial = new THREE.MeshBasicMaterial({ color: 'black', wireframe: true });
    const cube = new THREE.Mesh(geometry, outlineMaterial);
    scene.add(cube);

    // Auto-rotation
    const animate = () => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    };

    animate();
}
