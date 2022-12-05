import * as THREE from "three";
import Experience from "./Experience";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.createOrthographicCamera();
    this.setOrbitControls();
  }

  createOrthographicCamera() {
    const initialCameraPosition = new THREE.Vector3(
        24 * Math.sin(0.2 * Math.PI),
        15,
        50 * Math.cos(0.2 * Math.PI)
      );
    // focus point of the camera 
    const target = new THREE.Vector3(0, 0, 0);

    // takes aspect ratio and multiplies 
    // by the distance from the camera that you can see
    // based on position of camera & size
    // tells you what distance you see back and forward
    this.orthographicCamera = new THREE.OrthographicCamera(
      (-this.sizes.aspect * this.sizes.frustrum) / 2,
      (this.sizes.aspect * this.sizes.frustrum) / 2,
      this.sizes.frustrum / 2,
      -this.sizes.frustrum / 2,
      -200,
      1000
    );
    this.orthographicCamera.position.copy(initialCameraPosition);
    this.orthographicCamera.lookAt(target);
    // this.helper = new THREE.CameraHelper(this.orthographicCamera);
    this.scene.add(this.orthographicCamera);
    // console.log(this.orthographicCamera);
  }

  // look side to side on object 
  // instead of onclick where you actively control 
  // using camera as orbit controls
  setOrbitControls() {
    this.controls = new OrbitControls(this.orthographicCamera, this.canvas);
    this.controls.enableRotate = true;
    this.controls.enableDamping = false;
    this.controls.enableZoom = true;
    this.controls.autoRotate = true;
    this.controls.enablePan = false;
    this.controls.autoRotateSpeed = 0.5;
  }

  resize() {
    // Updating Orthographic Camera on Resize
    this.orthographicCamera.left =
      (-this.sizes.aspect * this.sizes.frustrum) / 2;
    this.orthographicCamera.right =
      (this.sizes.aspect * this.sizes.frustrum) / 2;
    this.orthographicCamera.top = this.sizes.frustrum / 2;
    this.orthographicCamera.bottom = -this.sizes.frustrum / 2;
    this.orthographicCamera.updateProjectionMatrix();
  }

  update() {
    this.controls.update();
  }
}