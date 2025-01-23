'use client';

import {
  HomeIcon,
  GlobeAltIcon,
  ChatBubbleOvalLeftIcon,
  BellIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/'},
  { name: 'About', href: '/about'},
  { name: 'Products', href: '/products'},
  { name: 'Services', href: '/services'},
  { name: 'Blog', href: '/blog'},
  { name: 'Contact', href: '/contact'},
  { name: 'Testimonials', href: '/testimonials'},    
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex items-center justify-center p-3 text-md font-medium hover:text-teal-500 md:flex-none',
              {
                'underline underline-offset-8 decoration-2 decoration-teal-500 text-teal-500': pathname === link.href,
              },
            )}
          >
            <p className="">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
