// components/CollapsibleNavBar.js
"use client"

import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import NavLinks from '@/app/ui/nav-links';
import Image from "next/image";
import Link from 'next/link';

export default function CollapsibleNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed flex w-full bg-white px-4 z-50">
      <div className='flex flex-row w-full justify-between'>
       <Link
          className="flex items-end "
          href="/"
        >
          <div className="flex items-center justify-center">
            <Image
                      className=""
                      src="/InnovaGen_Logo.png"
                      alt="InnovaGen logo"
                      width={72}
                      height={72}
                      priority
                    />
              <div className='pe-4 text-2xl text-teal-500 font-bold'>InnovaGen</div>
          </div>
        </Link>

        <div className="flex flex-row items-center">
              {/* Navbar container */}
            <nav className="bg-white w-full">
              {/* Mobile Hamburger Icon */}
              <div className="flex items-center md:hidden">
                <button
                  className="text-black"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Bars3Icon className="w-8 text-black" />
                </button>
              </div>
            </nav>
          </div>    
        </div>

      {/* Full Screen Overlay on Mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 z-50 md:hidden">
          <div className="flex p-4">
            <button
              className="text-white"
              onClick={() => setIsOpen(false)}
            >
              <XMarkIcon className="w-8 text-white"/>
            </button>
            
          </div>
          <div className="flex flex-col text-2xl text-white justify-center">
          <button
              className="text-white"
              onClick={() => setIsOpen(false)}
            >
              <NavLinks/>
            </button>
            
          </div>
        </div>
      )}
    </div>
  );
}
