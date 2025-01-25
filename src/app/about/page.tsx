import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24">
      <main >
        {/* Main Company Overview Section */}
        <div className="relative bg-teal-500 shadow-md rounded-md mb-4">
          <div className="hidden md:block">
            <Image
              src="/city1.jpg"
              alt="aboutImage"
              width={2064}
              height={1152}
              className=""
            />
          </div>
          <div className="block md:hidden">
            <Image
              src="/mobileCity1.jpg"
              alt="aboutImage"
              width={736}
              height={1120}
              className=""
            />
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          
          {/* Text Overlay */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
            <h1 className="text-2xl md:text-4xl lg:text-6xl whitespace-nowrap">
              Company Overview
            </h1>
            <p className="text-gray-300 md:text-xl lg:text-2xl mt-2">
              Innova Gen is a forward-thinking AI startup committed to creating
              intelligent, transformative solutions for businesses and
              individuals. Our team is driven by a passion for technology and
              innovation, bringing fresh ideas to the AI landscape. We’re
              solving real-world problems with our AI-powered products and
              services, making the world smarter, safer, and more efficient.
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="">
          {/* Mission Statement */}
          <section className="p-20 md:px-36 lg:px-64">
            <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">
              Mission Statement
            </h2>
            <p className="text-gray-600">
              Our mission at Innova Gen is to build innovative AI solutions that
              empower businesses and enhance everyday experiences. We strive to
              push the boundaries of artificial intelligence, providing
              solutions that improve lives, protect communities, and advance
              industries.
            </p>
          </section>

          {/* Vision Statement */}
          <section className="bg-teal-500 p-20 md:px-36 lg:px-64">
            <h2 className="text-2xl text-center font-semibold text-white mb-4">
              Vision Statement
            </h2>
            <p className="text-gray-100">
              Our vision is to be a leading force in the AI industry, offering
              transformative solutions that shape the future. We aspire to
              create AI products that are not only smart but also intuitive and
              impactful for all users.
            </p>
          </section>

          {/* Team Introduction */}
          <section className="bg-white p-20 md:px-36 lg:px-64">
            <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">
              Team Introduction
            </h2>
            <p className="text-gray-600">
              At Innova Gen, we have a diverse and talented team of engineers,
              data scientists, and AI specialists. Our collaborative approach
              ensures that we’re always pushing the limits of what’s possible.
              Led by Shajeer 3 Waqar, the founder, and a passionate team, we
              are on a mission to make AI accessible, practical, and
              life-changing.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
