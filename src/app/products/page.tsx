import Image from "next/image";

export default function ProductPage() {
  return (
    <div className="bg-gray-100 min-h-screen pt-20 md:pt-24">
      <main className="p-6 lg:px-24 xl:px-40">
        <section className="mb-8">
          <h2 className="flex bg-teal-500 justify-center text-white text-4xl shadow-md rounded-md p-6">
            Discover Our Products
          </h2>
        </section>
        <section>
          {/* Grid container for products */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-md p-6">
              <div className="flex justify-center">
                <Image
                  className="rounded-md mb-4"
                  src="/office1.jpg"
                  alt="office"
                  width={1032}
                  height={576}
                  priority
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">AI-Powered Home Security</h2>
              <p className="text-gray-600 mb-4">
                With the rise of smart homes, our AI-powered security system takes safety to the next level. The system utilizes advanced AI algorithms to recognize and predict potential threats, delivering real-time alerts for unusual activities. It’s intuitive, easy to install, and ensures that your home remains safe 24/7.
              </p>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Key Features:</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Real-time threat detection</li>
                <li>Automated alerts and monitoring</li>
                <li>Easy installation with smart integration</li>
                <li>Seamless app interface</li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-md p-6">
              <div className="flex justify-center">
                <Image
                  className="rounded-md mb-4"
                  src="/office1.jpg"
                  alt="office"
                  width={1032}
                  height={576}
                  priority
                />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mental Health Monitoring App</h2>
              <p className="text-gray-600 mb-4">
                Our innovative AI-powered mental health monitoring app is designed to help individuals better manage their mental well-being. By analyzing voice tone, facial expressions, and texting patterns, the app detects early signs of stress, depression, or anxiety. The app offers personalized self-care tips, meditation exercises, and connects users with mental health professionals when needed.
              </p>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Key Features:</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Real-time mood analysis</li>
                <li>Personalized self-care suggestions</li>
                <li>Professional help at the touch of a button</li>
                <li>Data privacy and security guaranteed</li>
              </ul>
            </div>

            {/* Additional product cards can go here */}
          </div>
        </section>
      </main>
    
    </div>
  );
}
