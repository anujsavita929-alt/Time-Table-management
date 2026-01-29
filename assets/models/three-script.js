// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 1.2, 3);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("three-canvas"),
  antialias: true,
  alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

// Lights
const ambient = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambient);
const dir = new THREE.DirectionalLight(0xffffff, 1);
dir.position.set(5, 5, 5);
scene.add(dir);

// Controls
let controls;
if (THREE.OrbitControls) {
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.07;
}

// Load 3D Model
const loader = new THREE.GLTFLoader();
let model = null;
const MODEL_PATH = 'model.glb'; // place your model at assets/models/model.glb

loader.load(
  MODEL_PATH,
  function (gltf) {
    model = gltf.scene;
    // Center and scale
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3()).length();
    const center = box.getCenter(new THREE.Vector3());
    const scale = 2.0 / size;
    model.scale.setScalar(scale);
    model.position.x -= center.x * scale;
    model.position.y -= center.y * scale;
    model.position.z -= center.z * scale;

    scene.add(model);
  },
  function (xhr) {
    // optional progress
  },
  function (error) {
    console.error('Error loading model:', error);
  }
);

// Resize handling
window.addEventListener('resize', onWindowResize);
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  if (model) model.rotation.y += 0.004; // slow rotation
  if (controls) controls.update();
  renderer.render(scene, camera);
}
animate();
