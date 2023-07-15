import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./desktop_pc/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const [shouldRenderModel, setShouldRenderModel] = useState(false);

  useEffect(() => {
    const checkNetworkSpeed = async () => {
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if (connection) {
        const speedMbps = connection.downlink;
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const shouldRender = speedMbps > 1 && !isMobile;
        setShouldRenderModel(shouldRender);
      } else {
        setShouldRenderModel(true); // Render model if network speed cannot be determined
      }
    };

    checkNetworkSpeed();
  }, []);

  return (
    <>
      {shouldRenderModel ? (
        <Canvas
          shadows
          frameloop="demand"
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6],
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              autoRotate
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Earth />
            <Preload all />
          </Suspense>
        </Canvas>
      ) : (
        <img
          src="https://example.com/your-gif-url.gif"
          alt="Loading GIF"
          style={{ width: "100%", height: "100%" }}
        />
      )}
    </>
  );
};

export default EarthCanvas;
