import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreedModel = ({ shape }) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  const modelRef = useRef();

  useEffect(() => {
    renderer.setSize(window.innerWidth / 2, window.innerHeight);
    modelRef.current.appendChild(renderer.domElement);

    const geometry = shape === 'sphere' ? new THREE.SphereGeometry() : new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const model = new THREE.Mesh(geometry, material);

    scene.add(model);
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      model.rotation.x += 0.01;
      model.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      scene.remove(model);
      renderer.domElement.remove();
    };
  }, [shape]);

  return <div ref={modelRef}></div>;
};

export default ThreedModel;
