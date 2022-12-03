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
    const color = new THREE.Color("rgb(255, 255, 255)");

    const intensity = 3.5;
    this.sunLight = new THREE.DirectionalLight(color, intensity);
    this.sunLight.position.set(20, 500, 0);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.camera.near = 0;
    this.sunLight.shadow.camera.far = 1400;
    this.sunLight.shadow.camera.left = -750;
    this.sunLight.shadow.camera.right = 500;
    this.sunLight.shadow.camera.top = 500;
    this.sunLight.shadow.camera.bottom = -500;
    this.sunLight.shadow.bias = -0.005;
    this.sunLight.shadow.mapSize.set(2048, 2048);
    //front facing sunlight
   
    //back facing sunlight
    
    this.scene.add(this.sunLight);
    this.ambientLight = new THREE.AmbientLight(color, 1.5);
    this.scene.add(this.ambientLight);
  }
  

  resize() {}

  update() {}
}