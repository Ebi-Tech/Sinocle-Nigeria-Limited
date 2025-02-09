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
              Get Connected
            </button>
            <button className="border border-white text-white px-6 py-2 font-medium hover:bg-white/10 transition-colors">
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
        <section className="py-16">
          <div className="container mx-auto px-8 flex justify-center gap-8">
            <Image
              src="/images/frame.png"
              alt="Refurbishment"
              width={550}
              height={140}
            />

            <div className="text-left font-serif">
              <p className="text[16px] font-bold">Who We are </p>
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
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
