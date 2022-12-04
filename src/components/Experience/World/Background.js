import * as THREE from "three";
import Experience from "../Experience";

export default class Background {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.setBackground();


    }

    setBackground() {
        // const material = new THREE.PointsMaterial({
        //     size: 0.05,
        // })
        // const getRandomParticlePos = (particleCount) => {
        //     const arr = new Float32Array(particleCount * 3);
        //     for (let i = 0; i < particleCount; i++) {
        //       arr[i] = (Math.random() - 0.5) * 100;
        //       console.log(arr[i])
        //     }
        //     return arr;
        //   };
        // const geometry = new THREE.BufferGeometry();
        // console.log(geometry)

        // geometry.setAttribute("position", new THREE.BufferAttribute(getRandomParticlePos(350),3) );
        // const background = new THREE.Mesh(geometry, material);


        //   this.scene.add(background);


        


    }

    resize() {

    }
    update() {

    }
}