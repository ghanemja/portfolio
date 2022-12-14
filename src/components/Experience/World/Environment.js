import * as THREE from "three";
import Experience from "../Experience";

export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.camera = this.experience.camera.orthographicCamera;
    this.setSunlight();
  }

  setSunlight() {
    // const color = new THREE.Color("rgb(44, 59, 175)");
    const color = new THREE.Color("#ffffff");
    // rgb(255, 255, 255)

    const intensity = 5;
    this.sunLight = new THREE.DirectionalLight(color, intensity);
    this.sunLight.position.set(20, 50, 0);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.camera.near = 0;
    this.sunLight.shadow.camera.far = 100;
    this.sunLight.shadow.camera.left = -20;
    this.sunLight.shadow.camera.right = 20;
    this.sunLight.shadow.camera.top = 20;
    this.sunLight.shadow.camera.bottom = -20;
    // this.sunLight.shadow.normalBias = -0.05;
    this.sunLight.shadow.mapSize.set(2048, 2048);
    this.sunLightHelper = new THREE.DirectionalLightHelper(this.sunLight);
    this.helper = new THREE.CameraHelper(this.sunLight.shadow.camera);

    // this.scene.add(this.sunLightHelper, this.helper);
    //front facing sunlight
   
    //back facing sunlight
    
    this.scene.add(this.sunLight);
    this.ambientLight = new THREE.AmbientLight(color, 1.5);
    this.scene.add(this.ambientLight);
  }
  

  resize() {}

  update() {}
}