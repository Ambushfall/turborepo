"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const ShadertoyExample = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let renderer, camera, scene, uniforms;

    const init = () => {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: canvasRef.current,
      });
      renderer.autoClearColor = false;

      camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
      scene = new THREE.Scene();

      const plane = new THREE.PlaneGeometry(2, 2);

      uniforms = {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector3() },
      };

      const fragmentShader = `
#include <common>
 
uniform vec3 iResolution;
uniform float iTime;
 

void mainImage( out vec4 O, vec2 u ) {
  vec2 R = iResolution.xy,
       U = (u+u - R ) / R.y;
  O *= 0.;
  
  for ( float l = length(U), d, i = 0.; i < 4.; i++)
      U = fract(U * 1.5) - .5,
      d = length(U) * exp(-l),
      d = pow(abs( .08 / sin(d*8. + iTime) ) , 1.2),
      O += d * ( .5 + .5*cos( 6.28*(l + i*.4 + iTime*.4 +vec4(.26,.42,.56,0) ) ) );
}
 
void main() {
  mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;

      const material = new THREE.ShaderMaterial({
        fragmentShader,
        uniforms,
      });
      scene.add(new THREE.Mesh(plane, material));
    };

    const resizeRendererToDisplaySize = () => {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    };

    const render = (time) => {
      time *= 0.001; // convert to seconds

      resizeRendererToDisplaySize();

      const canvas = renderer.domElement;
      uniforms.iResolution.value.set(canvas.width, canvas.height, 1);
      uniforms.iTime.value = time;
      resizeRendererToDisplaySize();

      renderer.render(scene, camera);

      requestAnimationFrame(render);
    };

    init();
    requestAnimationFrame(render);

    return () => {
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default ShadertoyExample;
