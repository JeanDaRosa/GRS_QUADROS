"use client"

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '100vh'
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

export default function Galeria(){
    return (
      <div className="slide-container bg-gray-200">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}