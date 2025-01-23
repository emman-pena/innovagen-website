import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';
import Image from "next/image";


export default function NavBar() {
  return (
    <div className="fixed flex top-0 left-0 w-full bg-white px-3 md:px-2 shadow-md md:px-42 lg:px-72 z-50">
      
        <Link
          className="flex items-end justify-center"
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
              <div className='pe-4 text-2xl text-teal-500 font-medium'>InnovaGen</div>
          </div>
        </Link>
        <div className="flex grow flex-row items-center justify-end md:flex-row px-4">
          <NavLinks /> 
        </div>
      
    </div>
  );
}