// import * as THREE from "three";
import Experience from "../Experience";
import SpaceLab from "./SpaceLab";
import Environment from "./Environment";
import { EventEmitter } from "events";

export default class World extends EventEmitter {
  constructor() {
    super();
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;
    this.resources = this.experience.resources;
    this.spacelab = this.resources.items.spacelab;
    this.time = this.experience.time;
    this.elapsed = this.time.elapsed;
    this.controls = this.experience.controls;

    this.resources.on("ready", () => {
        this.environment = new Environment();
      this.spacelab = new SpaceLab();
      this.spacelabcontents = this.spacelab.scene;
      this.emit("worldready");
    });
  }

  resize() {}

  update() {
    if (this.spacelab) {
      this.spacelab.update();
    }
    if (this.controls) {
      this.controls.update();
    }
  }
}