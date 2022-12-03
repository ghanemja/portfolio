import { EventEmitter } from "events";

export default class Sizes extends EventEmitter {
  constructor() {
    super();
    this.width = window.innerWidth;
    this.height = window.innerWidth;
    this.aspect = this.width / this.height;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);
    this.frustrum = 50;
    //frustrum size needs to be included above

    if (this.width < 968) {
      this.device = "mobile";
    } else {
      this.device = "desktop";
    }
    window.addEventListener("resize", () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.aspect = this.width / this.height;
      this.pixelRatio = Math.min(window.devicePixelRatio, 2);
      this.emit("resize");

      if (this.width < 968 && this.device !== "mobile") {
        this.device = "mobile";
        this.emit("switchdevice", this.device);
      } else if (this.width >= 968 && this.device !== "desktop") {
        this.device = "desktop";
        this.emit("switchdevice", this.device);
      }
    });
  }
}
