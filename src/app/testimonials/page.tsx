import Image from "next/image";

export default function TestimonialsPage() {
  return (
    <div className="bg-gray-100 min-h-screen pt-20 md:p-24">

      <main className="container mx-auto px-4 py-8">
        <section className="bg-teal-500 shadow-md rounded-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Customer Feedback</h2>
          <p className="text-gray-100 mb-4 italic">
            “Innova Gen’s AI-powered solutions have truly transformed the way we do business. The home security system is incredibly reliable, and the mental health app has been a game-changer for our employees’ well-being.” – Client Name
          </p>
        </section>

        <section className="p-6">
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Case Studies</h2>
          <div className="flex flex-col md:flex-row p-6 gap-4">
            <div className="bg-white shadow-md rounded-md p-6">
              <Image
                className="rounded-md mb-4"
                src="/office1.jpg"
                alt="office"
                width={1032}
                height={576}
                priority
                />
              <h3 className="text-xl font-bold text-gray-800">Case Study 1: Smart Home Security Deployment</h3>
              <p className="text-gray-600">
                A detailed case study of how our AI-powered home security system helped a residential complex enhance safety.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-md p-6">
              <Image
                  className="rounded-md mb-4"
                  src="/office1.jpg"
                  alt="office"
                  width={1032}
                  height={576}
                  priority
                  />
              <h3 className="text-xl font-bold text-gray-800">Case Study 2: Mental Health Monitoring in the Workplace</h3>
              <p className="text-gray-600">
                Learn how our mental health app improved employee well-being and reduced stress in a corporate setting.
              </p>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
