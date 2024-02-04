"use client"

import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  height: '500px',
  width: '50vw',
  margin: 'auto'
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

const slideImagesDonos = [
  {
    url: '/donos1.jpg',

  },
  {
    url: '/donos2.jpg',

  },
  {
    url: '/donos3.jpg',

  },
  {
    url: '/donos4.jpg',

  },
];
const slideImagesA = [
  {
    url: '/a1.jpg',

  },
  {
    url: '/a2.jpg',

  },
  {
    url: '/a3.jpg',

  },
  {
    url: '/a4.jpg',

  },
  {
    url: '/a5.jpg',

  },
];

const slideImagesB = [
  {
    url: '/b2.jpg',

  },
  {
    url: '/b3.jpg',

  },
  {
    url: '/b4.jpg',

  },
];

const slideImagesB1 = [
  {
    url: '/b1.jpg',

  },

];

export default function Galeria() {
  return (
    <>
      <div className='ml-auto mr-auto pt-8 pb-16 max-w-6xl bg-gray-200'>
        <h1 className="text-center font-bold text-4xl p-4 mb-6 text-gray-800">Galeria</h1>
        <div className="slide-container w-auto h-auto ">
          <Carousel infiniteLoop showArrows >
            {slideImages.map((slideImage, index) => (
              <div key={index}>
                {/* <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }} >
                </div> */}
                <img style={{ width: '70%' }} src={slideImage.url} alt='foto' />
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className='ml-auto mr-auto pt-8 pb-16 max-w-6xl bg-gray-200'>
        {/* <h1 className="text-center font-bold text-4xl p-4 mb-6 text-gray-800">Galeria</h1> */}
        <div className="slide-container">
          <Carousel infiniteLoop showArrows dynamicHeight  >
            {slideImagesDonos.map((slideImage, index) => (
              <div key={index}>
                {/* <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                </div> */}
                <img style={{ width: '100%' }} src={slideImage.url} alt='foto' />
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className='ml-auto mr-auto pt-8 pb-16 max-w-6xl bg-gray-200'>
        {/* <h1 className="text-center font-bold text-4xl p-4 mb-6 text-gray-800">Galeria</h1> */}
        <div className="slide-container">
          <Carousel infiniteLoop showArrows dynamicHeight >
            {slideImagesA.map((slideImage, index) => (
              <div key={index} className='flex flex-col items-center'>
                {/* <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                </div> */}
                <img style={{ width: '60%' }} src={slideImage.url} alt='foto' />
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className='ml-auto mr-auto pt-8 pb-16 max-w-6xl bg-gray-200'>
        {/* <h1 className="text-center font-bold text-4xl p-4 mb-6 text-gray-800">Galeria</h1> */}
        <div className="slide-container">
          <Carousel showThumbs >
            {slideImagesB1.map((slideImage, index) => (
              <img key={index} style={{ width: '60%' }} src={slideImage.url} alt='foto' />

            ))}
          </Carousel>
        </div>
      </div>

      <div className='ml-auto mr-auto pt-8 pb-16 max-w-6xl bg-gray-200'>
        {/* <h1 className="text-center font-bold text-4xl p-4 mb-6 text-gray-800">Galeria</h1> */}
        <div className="slide-container">
          <Carousel infiniteLoop>
            {slideImagesB.map((slideImage, index) => (
              <div key={index} className='flex flex-col items-center justify-center'>
                <img style={{ width: '60%' }} src={slideImage.url} alt='foto' />
              </div>
            ))}
          </Carousel>
        </div>
      </div>

    </>
  )
}