"use client"

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '600px'
}
const slideImages = [
  {
    url: '/1.jpg',
  },
  {
    url: '/2.jpg',
  },
  {
    url: '/3.jpg',
  },
  {
    url: '/4.jpg',
  },
  {
    url: '/5.jpg',
  },
];

export default function Galeria() {
  return (
    <div className='ml-auto mr-auto pt-8 pb-16 max-w-6xl'>
      <h1 className="text-center font-bold text-4xl p-4 mb-6 text-gray-800">Galeria</h1>
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  )
}