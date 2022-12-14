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
    this.camera2 = this.experience.camera.perspectiveCamera;
    this.canvas = this.experience.canvas;
    this.width = this.experience.sizes.width;
    this.height = this.experience.sizes.height;
    this.sizes = this.experience.sizes;
    this.controls = this.experience.controls;
    //imports
    this.spacechilds = {};
    this.setModel();
    this.setRobot();
    this.setAnimations();
    this.onMouseDown();
    //functions
  }

  setModel() {
    this.labscene.children.forEach(child => {
      //   if (child instanceof THREE.Group) {
      //   child.children.forEach((groupchild) => {
      //     groupchild.castShadow = true;
      //     groupchild.receiveShadow = true;
      //   });
      // }
        this.spacechilds[child.name.toLowerCase()] = child;
        if(child.name.toLowerCase() === "navrobot"){
          console.log('here robot')
          this.robot = child;
          
        }
        if(child.name.toLowerCase() === "about"){
          this.aboutButton = child;
          
        }
        if(child.name.toLowerCase() === "research"){
          this.researchButton = child;
          
        }
        if(child.name.toLowerCase() === "industry"){
          this.industryButton = child;
          
        }
        if(child.name.toLowerCase() === "volunteering"){
          this.volunteeringButton = child;
          
        }
        if(child.name.toLowerCase() === "contact"){
          this.contactButton = child;
          
        }
    });
    this.setNavButtons();
    this.labscene.scale.set(.12,.12,.12);
    this.labscene.position.set(0,10,0);
    this.scene.add(this.labscene)
    // console.log(this.labscene)
    // console.log(this.spacechilds)
  }

  setAnimations(){
    this.mixer = new THREE.AnimationMixer(this.labscene);
     console.log(this.lab.animations)
  }

  setRobot() {
    this.camera2.add(this.robot);
    this.robot.position.set(this.canvas.width / 2 , this.canvas.height / 2)
    // console.log(this.canvas.height)
    // console.log(this.canvas.width)
    // this.robot.position.set(this.canvas.width / 2, this.canvas.height / 2)
    
  }

  setNavButtons() {
    this.camera.add(this.aboutButton);
    this.camera.add(this.researchButton);
    this.camera.add(this.industryButton);
    this.camera.add(this.volunteeringButton);
    this.camera.add(this.contactButton);

    this.aboutButton.scale.set(10,15,17.5);
    this.aboutButton.position.set(17.5,7.5,20);
    this.aboutButton.rotation.set(0,89.1,0);

    this.researchButton.scale.set(10,15,17.5);
    this.researchButton.position.set(17.5,7.5,20);
    this.researchButton.rotation.set(0,89.1,0);

    this.industryButton.scale.set(10,15,17.5);
    this.industryButton.position.set(17.5,7.5,20);
    this.industryButton.rotation.set(0,89.1,0);

    this.volunteeringButton.scale.set(10,15,17.5);
    this.volunteeringButton.position.set(17.5,7.5,20);
    this.volunteeringButton.rotation.set(0,89.1,0);

    this.contactButton.scale.set(10,15,17.5);
    this.contactButton.position.set(17.5,7.5,20);
    this.contactButton.rotation.set(0,89.1,0);
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
      // this.float.stop();
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