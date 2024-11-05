// Configuración básica de Three.js
const canvas = document.getElementById('bg-canvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true }); // Habilitar fondo transparente
renderer.setSize(window.innerWidth, window.innerHeight);

// Crear partículas
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 5000;
const positions = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10; // Rango aleatorio
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const particlesMaterial = new THREE.PointsMaterial({ color: 0x00ffcc, size: 0.05 });
const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

camera.position.z = 5;

// Animar las partículas
function animate() {
    requestAnimationFrame(animate);
    particles.rotation.y += 0.001; // Movimiento de rotación
    renderer.render(scene, camera);
}

animate();

// Ajustar tamaño de la ventana
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
