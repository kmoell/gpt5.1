import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Three.js Scene Setup
const canvas = document.getElementById('canvas-container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
renderer.setPixelRatio(window.devicePixelRatio);
canvas.appendChild(renderer.domElement);

camera.position.z = 5;

// Create floating spheres for 3D background
const spheres = [];
for (let i = 0; i < 5; i++) {
    const geometry = new THREE.SphereGeometry(Math.random() * 1 + 0.5, 32, 32);
    const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color().setHSL(Math.random(), 0.7, 0.6),
        emissive: new THREE.Color().setHSL(Math.random(), 1, 0.4),
        shininess: 100,
    });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
    );
    scene.add(sphere);
    spheres.push({
        mesh: sphere,
        velocityX: (Math.random() - 0.5) * 0.02,
        velocityY: (Math.random() - 0.5) * 0.02,
        velocityZ: (Math.random() - 0.5) * 0.02,
    });
}

// Add lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0x00d4ff, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Handle window resize
function onWindowResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}
window.addEventListener('resize', onWindowResize);

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Update sphere positions
    spheres.forEach((sphere) => {
        sphere.mesh.position.x += sphere.velocityX;
        sphere.mesh.position.y += sphere.velocityY;
        sphere.mesh.position.z += sphere.velocityZ;

        // Bounce off boundaries
        if (sphere.mesh.position.x > 8) sphere.velocityX *= -1;
        if (sphere.mesh.position.x < -8) sphere.velocityX *= -1;
        if (sphere.mesh.position.y > 8) sphere.velocityY *= -1;
        if (sphere.mesh.position.y < -8) sphere.velocityY *= -1;
        if (sphere.mesh.position.z > 8) sphere.velocityZ *= -1;
        if (sphere.mesh.position.z < -8) sphere.velocityZ *= -1;

        // Rotate
        sphere.mesh.rotation.x += 0.003;
        sphere.mesh.rotation.y += 0.002;
    });

    renderer.render(scene, camera);
}
animate();

// GSAP Animations for scroll effects
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
    });
});

// Hero content animation
gsap.from('.hero-title', {
    duration: 1,
    opacity: 0,
    y: 50,
    delay: 0.2,
});

gsap.from('.hero-subtitle', {
    duration: 1,
    opacity: 0,
    y: 30,
    delay: 0.4,
});

gsap.from('.cta-button', {
    duration: 1,
    opacity: 0,
    scale: 0.8,
    delay: 0.6,
});

// Tech section animation
const techItems = document.querySelectorAll('.tech-item');
techItems.forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            end: 'top 60%',
            scrub: 1,
        },
        opacity: 0,
        x: (index % 2 === 0 ? -50 : 50),
        duration: 0.8,
    });
});

// Navbar animation on scroll
let lastScrollY = 0;
const navbar = document.querySelector('.navbar');
lenis.on('scroll', (e) => {
    lastScrollY = e.velocity > 0 ? 1 : 0;
    if (lastScrollY > 0) {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
    } else if (window.scrollY < 100) {
        navbar.style.background = 'rgba(10, 14, 39, 0.7)';
    }
});

console.log('GPT 5.1 - Modern Web Showcase initialized!');
