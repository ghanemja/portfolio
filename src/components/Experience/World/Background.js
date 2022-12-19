import * as THREE from "three";
import Experience from "../Experience";

export default class Background {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.setBackground();
    }

    setBackground() {
        const starGeometry = new THREE.BufferGeometry();
        const starMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
        })
        const starPositions = []
        for(let i = 0; i < 100000; i++) {
            const x = (Math.random() - 0.5) * 700
            const y = (Math.random() - 0.5) * 700
            const z = -Math.random() * 700
            starPositions.push(x,y,z)
        }
        starGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starPositions, 3))
        const stars = new THREE.Points(
            starGeometry, starMaterial
        )
        this.scene.add(stars)
    }

    resize() {

    }
    update() {

    }
}