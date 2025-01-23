import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="">
        <section>
        {/* Main Company Overview Section */}
                <div className="relative bg-teal-500 shadow-md rounded-md mb-4">
                  <Image
                    src="/city1.jpg"
                    alt="aboutImage"
                    width={2064}
                    height={1152}
                    className="rounded-sm hidden md:block"
                  />
                  <Image
                    src="/mobileCity1.jpg"
                    alt="aboutImage"
                    width={736}
                    height={1120}
                    className="rounded-sm block md:hidden"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  
                  {/* Text Overlay */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
                    <h1 className="text-2xl md:text-4xl lg:text-6xl whitespace-nowrap">
                      Innovagen
                    </h1>
                    <p className="text-gray-300 md:text-xl lg:text-2xl mt-2">
                    Innova Gen offers a range of AI-powered solutions that help businesses, homes, and individuals thrive in an ever-evolving digital world. From automated systems that streamline operations to intelligent solutions that enhance personal well-being, we are constantly innovating to meet the demands of the future.
                    </p>
                  </div>
                </div>
        </section>

        <section className="flex flex-col md:flex-row gap-4 p-8 md:p-12 lg:p-20 xl:px-40">
          <div className="bg-white shadow-md rounded-md p-6 flex-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">AI-Powered Home Security</h2>
            <p className="text-gray-600 mb-4">
              Advanced AI algorithms that ensure your home is safe and secure, monitoring activities in real-time and providing instant alerts.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-md p-6 flex-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">AI for Mental Health</h2>
            <p className="text-gray-600 mb-4">
              Our AI-driven mental health app analyzes voice tones, facial expressions, and texting patterns to detect early signs of stress, anxiety, or depression, offering personalized recommendations for better mental well-being.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-md p-6 flex-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Custom AI Solutions</h2>
            <p className="text-gray-600 mb-4">
              Whether you need a custom AI solution for your business or a specific application, we are here to help. Our team specializes in developing tailored AI tools that integrate seamlessly into your existing systems, helping you make smarter decisions, reduce costs, and improve operational efficiency.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
