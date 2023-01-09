import * as THREE from "three";
import Experience from "./Experience";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { ThemeProvider } from "@mui/system";

export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.initialCameraPosition = new THREE.Vector3(
      24 * Math.sin(0.2 * Math.PI),
      10,
      50 * Math.cos(0.2 * Math.PI)
      );
      // focus point of the camera 
       this.target = new THREE.Vector3(0,0, 0);

      this.createOrthographicCamera();
      this.setOrbitControls();
  }

  createOrthographicCamera() {
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
      10000
    );
    this.orthographicCamera.position.copy(this.initialCameraPosition);
    this.orthographicCamera.lookAt(this.target);
    // this.helper = new THREE.CameraHelper(this.orthographicCamera);
    this.scene.add(this.orthographicCamera);
    // console.log(this.orthographicCamera);
  }

  // look side to side on object 
  // instead of onclick where you actively control 
  // using camera as orbit controls
  setOrbitControls() {
    this.controls = new OrbitControls(this.orthographicCamera, this.canvas);
    // this.controls.enableRotate = true;
    this.controls.enableDamping = false;
    this.controls.enableZoom = true;
    this.controls.autoRotate = true;
    this.controls.enablePan = true;
    this.controls.maxZoom = 4;
    this.controls.minZoom = .75;
    this.controls.autoRotateSpeed = 0.4;
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
    // console.log(this.orthographicCamera.position)
  }

  reposition(left, right, top, bottom) {
    this.orthographicCamera.left = left;
    this.orthographicCamera.right = right;
    this.orthographicCamera.top = top;
    this.orthographicCamera.bottom = bottom;
    this.orthographicCamera.updateProjectionMatrix();
  }
}