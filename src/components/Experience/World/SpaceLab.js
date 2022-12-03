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
    this.camera = this.experience.camera;
    this.canvas = this.experience.canvas;
    this.sizes = this.experience.sizes;
    this.controls = this.experience.controls;

    this.spaceKids = {};
    this.setModel(); 

    

    

  }

  setModel() {
    this.labscene.children.forEach(kid => {
        kid.castShadow = true;
        kid.receiveShadow = true;
        this.spaceKids[kid.name.toLowerCase()] = kid;
    });
    this.ambientLight = new THREE.AmbientLight(0xffffff, 2);
    this.scene.add(this.ambientLight);
    this.labscene.scale.set(1,1,1);
    this.labscene.position.set(0,0,0);

    this.scene.add(this.labscene)
    console.log(this.labscene)

    console.log(this.spaceKids)

  }

  resize() {}

  update() {
    
  }
}