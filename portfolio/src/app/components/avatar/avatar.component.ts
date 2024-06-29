import { Component, AfterViewInit, OnInit, Inject } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
})
export class AvatarComponent implements OnInit {
  avatarModel: string = 'models/Dennis.glb'

  ngOnInit(): void {
    this.createThreeJsBox();
  }

  createThreeJsBox(): void {

    if (typeof window !== "undefined") {
      const canvas = document.getElementById('canvas-box');

      const scene = new THREE.Scene();

      if (!canvas) {
        return;
      }


      const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true
      });

      renderer.setSize(500, 500);

      const camera = new THREE.PerspectiveCamera(
        45,
        1,
        0.1,
        1000
      );

      camera.position.set(0, 0.9, 2.4);

      const assetLoader = new GLTFLoader();

      let mixer: THREE.AnimationMixer;
      assetLoader.load(this.avatarModel, function (gltf) {
        const model = gltf.scene;
        scene.add(model);
        mixer = new THREE.AnimationMixer(model);
        const clips = gltf.animations;
        const action = mixer.clipAction(clips[1]);
        action.play();

      }, undefined, function (error) {
        console.error(error);
      });

      const clock = new THREE.Clock();
      function animate() {
        if (mixer)
          mixer.update(clock.getDelta());
        renderer.render(scene, camera);
      }

      renderer.setAnimationLoop(animate);

      window.addEventListener('resize', function () {
        camera.aspect = 1;
        camera.updateProjectionMatrix();
        renderer.setSize(500, 500);
      });


    }
  }
}
