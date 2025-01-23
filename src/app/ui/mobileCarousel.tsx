"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

interface CarouselProps {
  images: string[]; // Array of image URLs (strings)
}

const MobileCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Auto transition effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, [images.length]);

  // Go to next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Go to previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Go to specific slide on indicator click
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-auto">
      <div className="overflow-hidden relative">
        {/* Carousel Images */}
        <div className="flex w-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Image
                className="object-cover object-center"
                src={image}
                alt={`Slide ${index + 1}`}
                width={736}
                height={1120}
                priority
              />
               
            </div>
          ))}
        </div>

        {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        {/* Text Overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  z-10">
        {/* Dynamic Text (you can customize this part based on the current slide) */}
      
      <div className="flex flex-col items-center">
      <h1 className="text-4xl">Artificial Intelligence Solutions</h1>
        <p className="text-gray-300 text-lg my-2">Welcome to Innova Gen, where we shape the future with cutting-edge AI solutions. Our innovative technologies are designed to transform industries and improve everyday life. From enhancing home security to revolutionizing mental health monitoring, we’re here to make AI work for you.</p>

        <div>
          <Link
            className="inline-flex items-end text-sm justify-start bg-teal-500 text-white py-2 px-4 rounded-full"
            href="/products"
          >
            Learn More
          </Link>
        </div>

      </div>

      </div>
        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full"
        >
          <ChevronLeftIcon className="w-8 h-8"/>
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full"
        >
          <ChevronRightIcon className="w-8 h-8"/>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileCarousel;
