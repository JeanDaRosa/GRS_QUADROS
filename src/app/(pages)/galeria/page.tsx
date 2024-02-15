"use client"

import React, { useState } from 'react';

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
  {
    url: '/b2.jpg',
  },
  {
    url: '/b3.jpg',
  },
  {
    url: '/b4.jpg',
  },
  {
    url: '/c1.jpg',
  },
  {
    url: '/c2.jpg',
  },
  {
    url: '/c3.jpg',
  },
  {
    url: '/c4.jpg',
  },
  {
    url: '/c5.jpg',
  },
  {
    url: '/d1.jpg',
  },
  {
    url: '/d2.jpg',
  },
  {
    url: '/d3.jpg',
  },
  {
    url: '/d4.jpg',
  },
  {
    url: '/geral1.jpg',
  },
  {
    url: '/geral2.jpg',
  },
  {
    url: '/geral3.jpg',
  },

  {
    url: '/geral4.jpg',
  },
];



const PhotoGrid = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleClick = (photo: any) => {
    setSelectedPhoto(photo);
  };

  const handleClose = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="h-full w-full justify-center items-center flex flex-col bg-gray-200">
      <h1 className="text-center font-bold text-4xl p-4 mb-6 pt-6 text-gray-800">Galeria</h1>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-2 m-3 md:mx-72">
        {slideImages.map((photo, index) => (
          <div key={index} className="relative">
            <img
              src={photo.url}
              alt={`Photo ${index}`}
              className="w-full h-auto cursor-pointer"
              onClick={() => handleClick(photo.url)}
            />
          </div>
        ))}

        {selectedPhoto && (
          <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacity-50" onClick={handleClose}>
            <div className="max-w-lg mx-auto bg-white rounded-lg overflow-hidden">
              <img src={selectedPhoto} alt="Selected" className="w-full" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoGrid;