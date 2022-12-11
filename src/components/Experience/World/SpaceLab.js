import * as THREE from "three";
import Experience from "../Experience";
import { EventEmitter } from "events";

export default class SpaceLab extends EventEmitter {
  constructor() {
    super();

    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.elapsed = this.time.elapsed;
    this.lab = this.resources.items.lab;
    this.labscene = this.lab.scene;
    this.camera = this.experience.camera.orthographicCamera;
    this.canvas = this.experience.canvas;
    this.sizes = this.experience.sizes;
    this.controls = this.experience.controls;
    //imports
    this.spaceKids = {};
    this.setModel();
    this.setAnimations();
    this.onMouseDown();
    //functions
  }

  setModel() {
    this.labscene.children.forEach(kid => {
        kid.castShadow = true;
        kid.receiveShadow = true;
        this.spaceKids[kid.name.toLowerCase()] = kid;
    });
    // this.ambientLight = new THREE.AmbientLight(0xffffff, 2);
    // this.scene.add(this.ambientLight);
    this.labscene.scale.set(.15,.15,.15);
    this.labscene.position.set(0,10,0);
    this.scene.add(this.labscene)
    // console.log(this.labscene)
    // console.log(this.spaceKids)

  }
  setAnimations(){
    this.mixer = new THREE.AnimationMixer(this.labscene);
    //  console.log(this.lab.animations)
     this.float = this.mixer.clipAction(this.lab.animations[1]);
     this.spin = this.mixer.clipAction(this.lab.animations[0]);
      //assigning variables to the animations to be played
     this.float.play();
      //play animations
  }

  initializeRaycaster(e) {
    var direction = new THREE.Vector3(0,0,1);
    direction.normalize();

    const mouse = new THREE.Vector2();
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    //mouse location in client
    this.raycaster = new THREE.Raycaster();
    this.raycaster.setFromCamera(mouse, this.camera);

    const objects = this.labscene.children;
    this.intersects = this.raycaster.intersectObjects(objects, true);
    if (this.intersects.length) {
      console.log(this.intersects);
      this.float.stop();
    }

   }

   onMouseDown() {
    window.addEventListener("mousedown", (e) => {this.initializeRaycaster(e)});

   }

  resize() {}

  update() {

    this.mixer.update(this.time.delta * 0.0018);
    //speed at which animaton plays (adjust time delta to adjust playback speed)


    
  }
}