import Contact from '@/app/ui/contact';
import {
  AtSymbolIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className='flex flex-col md:flex-row min-h-screen items-center justify-center gap-6 px-10 md:px-12 xl:px-24 py-24 bg-gray-100'>
      <div className="px-10 lg:px-20 py-8 md:py-20 xl:py-10 gap-10 rounded-md bg-gradient-to-r from-gray-700 to-gray-500 text-white shadow-md">
        <h2 className="text-6xl xl:text-8xl whitespace-nowrap">Get Started
        <div className="flex items-center space-x-2">
        <span>with</span>
        <p className="text-teal-500">AI</p>
        </div>
          today</h2>

          <div className='py-10'>
            <div>For inquiries or support, contact us at:</div>
            <div>
              <p>info@innovagen.com</p>
            </div>
            <div className='pt-2'>Social Media Links:</div>
            <div>
              <p>Instagram: @innova_gen</p>
              <p>LinkedIn: Innova Gen LinkedIn</p>
              <p>Twitter: @innova_gen</p>
          
            </div>
            
          </div>
      </div>

      <div className="inline-block">
        <Contact />
      </div>
      
    </div>
  );
}