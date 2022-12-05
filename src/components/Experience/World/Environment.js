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

    const intensity = 25;
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

    // space background
    // this.sphere = new THREE.SphereGeometry( 500, 32, 16 ); //creates spherical geometry with radius 500, 32 horizontal segments and 16 vertical segments
    // this.spaceImage = new THREE.TextureLoader().load( 'https://i.imgur.com/gY9PSFo.jpg' ); //loads the picture on the spherical geometry
    // this.material = new THREE.MeshBasicMaterial( { map: this.spaceImage } ); //pastes the picture on the spherical geometry.
    // this.scene.background.TextureLoader(new THREE.Mesh( this.sphere, this.material ))
    
    // this.secondSphere = new THREE.Mesh( this.sphere, this.material ); //creates sphere from spherical geometry and texture
    // this.secondSphere.scale.set(1,1,1)
    // this.secondSphere.position.set(50,150,500)
    // this.scene.add( this.secondSphere ); //displays this another sphere
    // // this.material.side = THREE.FrontSide; //renders the Space Background picture inside of Space backgrond Spherical Geometry, not outside
    // // sun
    // const geometry3 = new THREE.SphereGeometry( 3, 32, 16 ); //creates spherical geometry with radius 3, 32 horizontal segments and 16 vertical segments
    // const texture3 = new THREE.TextureLoader().load( 'https://i.imgur.com/gWRlaR0.jpg' ); //loads the picture on the spherical geometry
    // const material3 = new THREE.MeshBasicMaterial( { map: texture3 } ); //pastes the picture on the spherical geometry.
    // const sphere3 = new THREE.Mesh( geometry3, material3 ); //creates sphere from spherical geometry and texture
    // this.scene.add( sphere3 ); //displays this another sphere
    // sphere3.position.set(0, 0, 250); //positions this Sun on 3D point (X = 0, y = 0, z = 250)

    // const light = new THREE.PointLight( 0xffffff , 1, 1000, 2 ); //Creates white light with intensity of 1, range of light is 1000 units and pphysically correct lighting is activated when using 2
    // light.position.set( 0, 0, 250 ); //positions this Light on 3D point (X = 0, y = 0, z = 250)
    // this.scene.add( light ); //displays this light



  }
  

  resize() {}

  update() {}
}