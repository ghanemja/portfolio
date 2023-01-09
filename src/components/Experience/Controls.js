import Experience from "./Experience";

export default class Controls {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.camera = this.experience.camera;
        this.orthographicCamera = this.experience.camera.orthographicCamera;
        this.lab = this.experience.world.spacelab;
        this.rotation = this.orthographicCamera.rotation;
    }

    resize() {
    
    }
    
    update(){
    
    }
}
