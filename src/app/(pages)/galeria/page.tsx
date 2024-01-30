"use client"

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


// const divStyle = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   backgroundSize: 'cover',
//   height: '90vw',
//   width: '90vw',
//   margin: 'auto'
// }
const slideImages = [
  {
    url: '/1.jpg',
    divStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: 'cover',
      height: '90vw',
      width: '90vw',
      margin: 'auto'
    },
  },
  {
    url: '/2.jpg',
    divStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: 'cover',
      height: '90vw',
      width: '90vw',
      margin: 'auto'
    },
  },
  {
    url: '/3.jpg',
    divStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: 'cover',
      height: '50vw',
      width: '90vw',
      margin: 'auto'
    },
  },
  {
    url: '/4.jpg',
    divStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: 'cover',
      height: '90vw',
      width: '90vw',
      margin: 'auto'
    },
  },
  {
    url: '/5.jpg',
    divStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: 'cover',
      height: '90vw',
      width: '90vw',
      margin: 'auto'
    },
  },
];

export default function Galeria() {
  return (
    <div className='ml-auto mr-auto pt-8 pb-16 max-w-6xl bg-gray-200'>
      <h1 className="text-center font-bold text-4xl p-4 mb-6 text-gray-800">Galeria</h1>
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div style={{ ...slideImage.divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  )
}