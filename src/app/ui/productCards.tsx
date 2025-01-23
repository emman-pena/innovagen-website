import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Define the Product type
interface Product {
  key: string;
  name: string;
  href: string;
  imageSrc: string;
}

// Define the props type for the component
interface ProductCardsProps {
  products: Product[];
  limit?: number;
}

// Define the products array with the correct type
const products = [
  { key: '1', name: 'AI-Powered Home Security', href: '/products', imageSrc: '/office1.jpg' },
  { key: '2', name: 'Mental Health Monitoring App', href: '/products', imageSrc: '/office2.jpg' },
];

const ProductCards = ({ products, limit = products.length }: ProductCardsProps) => {
  return (
    <>
      {products.map((link) => {
        return (
          <Link
            key={link.key}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium hover:bg-gray-100 hover:text-black md:flex-none md:justify-start md:p-2 md:px-3'
            )}
          >
            <Image src={link.imageSrc} alt={link.name} width={40} height={40} className="rounded-full" />
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
};

export default ProductCards;
