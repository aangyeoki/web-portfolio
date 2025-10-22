import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { certificates } from '../constants';
import { div } from 'framer-motion/client';
import 'flowbite';


const Carousel = ({ index, img }) => {
  return (
<div
  id="default-carousel"
  className="relative w-full max-w-5xl mx-auto z-10"
  data-carousel="slide"
>
  {/* Carousel wrapper */}
  <div className="relative h-56 sm:h-64 md:h-80 lg:h-96 overflow-hidden rounded-2xl flex items-center justify-center">
    {certificates.map((cert, index) => (
      <div
        key={index}
        className="hidden duration-700 ease-in-out flex justify-center items-center"
        data-carousel-item
      >
        <img
          src={cert.img}
          alt={`certificate-${index + 1}`}
          className="absolute block w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] rounded-xl object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 shadow-lg"
        />
      </div>
    ))}
  </div>

  {/* Slider indicators */}
  <div className="absolute z-30 flex -translate-x-1/2 bottom-4 left-1/2 space-x-3 rtl:space-x-reverse">
    {certificates.map((_, index) => (
      <button
        key={index}
        type="button"
        className="w-2.5 h-2.5 rounded-full bg-white/60 hover:bg-white"
        aria-current={index === 0 ? "true" : "false"}
        aria-label={`Slide ${index + 1}`}
        data-carousel-slide-to={index}
      ></button>
    ))}
  </div>

  {/* Slider controls */}
  <button
    type="button"
    className="absolute top-1/2 left-4 z-30 flex items-center justify-center w-10 h-10 -translate-y-1/2 bg-white/40 hover:bg-white/70 rounded-full shadow-md backdrop-blur-sm transition"
    data-carousel-prev
  >
    <svg
      className="w-4 h-4 text-gray-700"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 6 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 1 1 5l4 4"
      />
    </svg>
    <span className="sr-only">Previous</span>
  </button>

  <button
    type="button"
    className="absolute top-1/2 right-4 z-30 flex items-center justify-center w-10 h-10 -translate-y-1/2 bg-white/40 hover:bg-white/70 rounded-full shadow-md backdrop-blur-sm transition"
    data-carousel-next
  >
    <svg
      className="w-4 h-4 text-gray-700"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 6 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 9 4-4-4-4"
      />
    </svg>
    <span className="sr-only">Next</span>
  </button>
</div>

);}

export default Carousel;