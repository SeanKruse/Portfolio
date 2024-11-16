// src/components/NoiseTexture.js
import React from 'react';

const NoiseTexture = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 700 700"
    width="700"
    height="700"
    id="nnnoise"
  >
    <defs>
      <filter
        id="nnnoise-filter"
        x="-20%"
        y="-20%"
        width="140%"
        height="140%"
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
        colorInterpolationFilters="linearRGB"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.102"
          numOctaves="4"
          seed="15"
          stitchTiles="stitch"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          result="turbulence"
        ></feTurbulence>
        <feSpecularLighting
          surfaceScale="15"
          specularConstant="0.75"
          specularExponent="20"
          lightingColor="#68625D"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          in="turbulence"
          result="specularLighting"
        >
          <feDistantLight azimuth="3" elevation="100"></feDistantLight>
        </feSpecularLighting>
      </filter>
    </defs>
    <rect width="700" height="700" fill="transparent"></rect>
    <rect
      width="700"
      height="700"
      fill="#68625D"
      filter="url(#nnnoise-filter)"
    ></rect>
  </svg>
);

export default NoiseTexture;