import Image from "next/image";
import Carousel from '@/app/ui/carousel';
import MobileCarousel from '@/app/ui/mobileCarousel';
import type { NextPage } from "next";
import Link from 'next/link';
import clsx from 'clsx';


const imagesDesktop = [
  '/city1.jpg',
  '/city2.jpg',
  '/city3.jpg',
];

const imagesMobile = [
  '/mobilecity1.jpg',
  '/mobilecity2.jpg',
  '/mobilecity3.jpg',
];

const products = [
  { key: '1', name: 'AI-Powered Home Security', href: '/products', imageSrc: '/office1.jpg', overview: 'With the rise of smart homes, our AI-powered security system takes safety to the next level. The system utilizes advanced AI algorithms to recognize and predict potential threats, delivering real-time alerts for unusual activities. It’s intuitive...'},
  { key: '2', name: 'Mental Health Monitoring App', href: '/products', imageSrc: '/office2.jpg', overview: 'Our innovative AI-powered mental health monitoring app is designed to help individuals better manage their mental well-being. By analyzing voice tone, facial expressions, and texting patterns, the app detects early signs of stress, depression...'},
];

const Home: NextPage = () => {
  return (
    <div className="grid min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col h-full bg-gray-100">
        <div className="bg-teal-700 justify-center items-center">
          {/** Carousel */}
          <div className="hidden md:block">
            <Carousel images={imagesDesktop} />
          </div>
          <div className="block md:hidden">
            <MobileCarousel images={imagesMobile} />
          </div>
        </div>

        <div className="px-24 pt-16 space-y-4">
          <h2 className="flex justify-center text-3xl">Discover Our Products </h2>

          <div className="flex flex-col md:flex-row gap-4">

            {/** Displays only a limited number of product cards */}
            {products.map((link) => {
            return (
              <Link
                key={link.key}
                href={link.href}
                className={clsx(
                  'flex flex-col rounded-md bg-white p-1 text-sm font-medium shadow-md'
                )}
              >
                <Image src={link.imageSrc} alt={link.name} width={500} height={250} className="rounded-sm"/>
                <div className="p-4 space-y-4">
                  <p className="text-lg">{link.name}</p>
                  <p className="line-clamp-2 text-gray-500">{link.overview}</p>
                  <p className="underline underline-offset-4 decoration-2 hover:decoration-teal-500 hover:text-teal-500">Learn more</p>
                </div>
              </Link>
              );
            })}

          </div>

          <div className="flex justify-center pt-4 text-xl text-teal-500 underline underline-offset-8 decoration-2 hover:text-teal-300 hover:decoration-teal-300">
            <Link
              className="flex items-end justify-center"
              href="/products"
            >
              Browse products
            </Link>
          </div>

        </div>

        <div className="flex flex-col px-24 py-16">
          <div className="bg-white rounded-md px-12 py-8 space-y-4 shadow-md">
          <h2 className="text-3xl">Get Started with AI Today</h2>
          <p>
            Innovagen brings knowledge and expertise to your fingertips, 
            fueling businesses to turn challenges into opportunities and ideas into impact.
          </p>
          <Link
          className="inline-flex items-end justify-center text-sm bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-300"
          href="/contact"
          >Contact Us</Link>
          </div>
        </div>
        <div>

        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
};

export default Home;
