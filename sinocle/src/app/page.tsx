"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = ["/images/1.png", "/images/2.png", "/images/3.png"];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section - Completely separate */}
      <section className="relative h-screen">
        {/* Background Image Slider */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="Background"
              fill
              className="absolute object-cover transition-opacity duration-1000"
              style={{ opacity: index === currentImage ? 1 : 0 }}
              priority={index === 0}
            />
          ))}
        </div>
        {/* Hero text*/}
        <div className="absolute top-[50%] left-[5%] transform -translate-y-1/2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white font-bold">
            Building The Future, One <br /> Project at a Time
          </h1>
          <p className="text-sm sm:text-xl lg:text-2xl text-white mt-4">
            From the onset till now, our mission remains centered on delivering{" "}
            <br />
            projects of superior quality, always on schedule.
          </p>
          {/* CTA Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="bg-white text-black px-6 py-2 font-medium hover:bg-gray-100 transition-colors">
              Get A Quote
            </button>
            <button className="border border-white text-white px-6 py-2 font-medium bg-[#0D8C6D] hover:bg-[#38d1ab] transition-colors">
              Contact Us
            </button>
          </div>
        </div>
        {/* Centered Helmet Image */}
        <div className="absolute top-[55%] right-[5%] transform -translate-y-1/2">
          <Image
            src="/images/helmetguy.png"
            alt="Smaller Image"
            width={380}
            height={800}
            className=""
          />
        </div>
      </section>

      {/* Main Content - Completely separate */}
      <main className="bg-white">
        {/* Services Cards Section */}
        <div className="relative -mt-[50px] px-4 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white shadow-lg relative before:absolute before:top-0 before:left-0 before:right-0 before:h-2 before:bg-[#0D8C6D]">
              <div className="grid grid-cols-1 md:grid-cols-3 relative">
                {/* General Contract Section */}
                <div className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Image
                      src="/images/engineer.svg"
                      alt="General Contract"
                      width={40}
                      height={40}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    General Contract
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Quality services rendered to all planning.
                  </p>
                </div>

                {/* Custom Vertical Divider 1 */}
                <div className="hidden md:block absolute left-1/3 top-1/2 -translate-y-1/2 w-px h-16 bg-gray-900 z-10"></div>

                {/* Project Planning Section */}
                <div className="p-8 text-center border-t md:border-t-0">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Image
                      src="/images/ruler.svg"
                      alt="Project Planning"
                      width={40}
                      height={40}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Project Planning
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Quality services rendered to all planning.
                  </p>
                </div>

                {/* Custom Vertical Divider 2 */}
                <div className="hidden md:block absolute left-2/3 top-1/2 -translate-y-1/2 w-px h-16 bg-gray-900 z-10"></div>

                {/* Refurbishment Section */}
                <div className="p-8 text-center border-t md:border-t-0">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Image
                      src="/images/measuring-tool.svg"
                      alt="Refurbishment"
                      width={40}
                      height={40}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Refurbishment</h3>
                  <p className="text-gray-600 text-sm">
                    Quality services rendered to all planning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Content Section */}
        <section className="py-16 ">
          <div className="container mx-auto px-5 flex justify-center gap-[70px]">
            <Image
              src="/images/frame.png"
              alt="Refurbishment"
              width={550}
              height={140}
            />

            <div className="text-left font-serif gap-[90px]">
              <p className="text[16px] font-bold">
                Who We are{" "}
                <span className="inline-block w-12 h-[2px] bg-white ml-2"></span>{" "}
              </p>
              <h1 className="text-[50px] font-bold">Sincole Nigeria Limited</h1>
              <p className="text[16px]">
                At Sinocle Nigeria Limited, we are proud to be the leading real
                estate company in Nigeria, offering a comprehensive range of
                services in real estate development, property development and
                contract, real estate consulting, and land sales. With our
                headquarters situated in Asaba, Delta State, Nigeria, we operate
                across the nation, serving clients with professionalism,
                expertise, and integrity. <br />
                At the core of our organization lies a cohesive and accomplished
                team of professionals, brought together by a shared passion for
                bringing dreams to life. We take immense pride in our ability to
                transform your ideas into tangible realities, crafted with
                precision and attention to detail.
              </p>
              <button className="bg-[#0D8C6D] text-white text-[16px] px-6 py-2 font-medium hover:bg-[#38d1ab] transition-colors mt-5">
                More About Us{" "}
                <span className="ml-2 font-serif text-[16px] leading-[10px]">
                  ↗
                </span>
              </button>
            </div>
          </div>
        </section>

        <section className="bg-[#0D8C6D] text-white py-16 px-10 md:px-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
            {/* Left Content */}
            <div>
              <h5 className="uppercase tracking-wide font-semibold">
                Who We Do{" "}
                <span className="inline-block w-12 h-[2px] bg-white ml-2"></span>
              </h5>
              <h2 className="text-4xl font-bold mt-2">Our Services</h2>
              <p className="text-lg mt-4">
                Our range of services is crafted to deliver strategic insights
                and foster sustainable growth for businesses across various
                industries.
              </p>
              <button className="mt-6 border border-white text-white py-2 px-6 rounded hover:bg-white hover:text-[#007550] transition">
                View All Services →
              </button>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              {[
                {
                  icon: "📊",
                  title: "Residential",
                  desc: "Whether it’s crafting custom-built homes or revitalizing existing properties.",
                },
                {
                  icon: "🏢",
                  title: "Commercial",
                  desc: "From sleek office complexes to bustling retail spaces.",
                },
                {
                  icon: "⚖️",
                  title: "Government",
                  desc: "We tackle projects of all sizes and complexity with dedication and expertise.",
                },
                {
                  icon: "📋",
                  title: "Consultation",
                  desc: "Consultants assist in navigating the complexities.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 border-t border-white pt-4"
                >
                  <span className="text-3xl">{service.icon}</span>
                  <div>
                    <h4 className="text-xl font-semibold">{service.title}</h4>
                    <p className="text-sm">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
