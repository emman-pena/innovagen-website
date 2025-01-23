import Image from "next/image";

export default function BlogPage() {
  return (
    <div className="bg-gray-100 min-h-screen pt-20 md:p-24">
     
      <main className="">
        <section className="rounded-md shadow-md">
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
                        Latest News
                      </h1>
                      <p className="text-gray-300 md:text-xl lg:text-2xl mt-2">
                      Stay updated with the latest advancements in artificial intelligence and how we are shaping the future. From AI breakthroughs to company milestones, our blog keeps you informed and engaged with all things AI.
                      </p>
                    </div>
                  </div>
        </section>

        <section className="p-6 lg:px-40 xl:px-72 flex flex-col items-center">
          <div className="bg-white shadow-md rounded-md p-6">
            <div className="flex justify-center mb-4">
              <Image
                className="rounded-md"
                src="/office1.jpg"
                alt="office"
                width={1032}
                height={576}
                priority
              />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Thought Leadership</h2>
            <p className="text-gray-600 mb-4">
              Explore thought-provoking articles and insights on the impact of AI across industries, the future of technology, and how businesses can harness the power of AI to solve real-world problems.
            </p>
          </div>
        </section>
      </main>

    </div>
  );
}
