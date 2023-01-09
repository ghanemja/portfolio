import * as THREE from "three";
import Sizes from "../utils/Sizes";
import Time from "../utils/Time";
import Resources from "../utils/Resources";
import Assets from "../utils/Assets";
import Camera from "./Camera";
import Renderer from "./Renderer";
import World from "./World/World";
import Controls from "./Controls";

export default class Experience {
  static instance;
  constructor(canvas) {
    if (Experience.instance) {
      return Experience.instance;
    }
    Experience.instance = this;
    this.canvas = canvas;
    this.scene = new THREE.Scene();
    this.time = new Time();
    this.sizes = new Sizes();
    this.camera = new Camera();
    this.resources = new Resources(Assets);
    this.renderer = new Renderer();
    this.world = new World();
    this.controls = new Controls();

    this.sizes.on("resize", () => {
      this.resize();
    });

    this.time.on("update", () => {
      this.update();
    });
  }

  resize() {
    this.camera.resize();
    this.world.resize();
    this.renderer.resize();
  }
  update() {
    this.camera.update();
    this.world.update();
    this.renderer.update();
    if (this.controls){
      this.controls.update();
    }
  }

  repositionCamera(left,right,top,bottom) {
    this.camera.reposition(left,right,top,bottom)
  }
}