"use client";
import Image from "next/image";
import { Building, Home as HomeIcon, MapPin } from "lucide-react";

export default function About() {
  const image = "/images/about.png";

  return (
    <>
      {/* Background Image */}
      <section className="relative h-screen flex font-serif">
        <Image
          src={image}
          alt="About Background"
          fill
          className="absolute object-cover"
          priority
        />

        {/* Container for both Hero Text and Right Content */}
        <div className="relative flex w-full justify-between text-white gap-10 max-w-full mx-auto">
          {/* Hero text */}
          <div className="flex-1 absolute top-[50%] left-[5%] transform -translate-y-1/2 mt-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold">
              About our <br />
              construction
              <br /> company
            </h1>
            <p className="text-sm sm:text-xl lg:text-2xl text-white mt-4">
              From the onset till now, our mission remains centered on
              delivering <br />
              projects of superior quality, always on schedule.
            </p>
            {/* CTA Buttons */}
            <div className="mt-8 flex gap-4">
              <button className="border border-white text-white px-6 py-2 font-medium bg-[#0D8C6D] hover:bg-[#38d1ab] transition-colors">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Content */}

          <div className="flex-1 absolute top-[50%] right-[5%] transform -translate-y-1/2 space-y-6">
            <h1 className="font-bold text-[32px] text-[#0D8C6D]">What We Do</h1>
            {[
              {
                icon: (
                  <Building
                    size={28}
                    strokeWidth={1.5}
                    className="text-[#0D8C6D]"
                  />
                ),
                title: "Property Development and Contract",
                desc: [
                  "We offer reliable solutions for clients",
                  "seeking to develop or contract properties.",
                ],
              },
              {
                icon: (
                  <HomeIcon
                    size={28}
                    strokeWidth={1.5}
                    className="text-[#0D8C6D]"
                  />
                ),
                title: "Real Estate Development",
                desc: [
                  "We excel in real estate development,",
                  "delivering exceptional projects that meet",
                  "the highest standards of quality and innovation.",
                ],
              },
              {
                icon: (
                  <MapPin
                    size={28}
                    strokeWidth={1.5}
                    className="text-[#0D8C6D]"
                  />
                ),
                title: "Premium Land Sales in Nigeria",
                desc: [
                  "Sinocle Nigeria Limited offers premium",
                  "land sales throughout Nigeria.",
                ],
              },
            ].map((service, index) => (
              <div key={index} className="flex items-start gap-4 pt-0">
                <span>{service.icon}</span>
                <div>
                  <h4 className="text-xl font-semibold">{service.title}</h4>
                  {service.desc.map((line, lineIndex) => (
                    <p key={lineIndex} className="text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">About us</h2>
            <div className="w-12 h-1 bg-[#0D8C6D] mx-auto"></div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="text-gray-600 leading-relaxed">
              <p>
                At Sinocle Nigeria Limited, we are proud to be the leading real
                estate company in Nigeria, offering a comprehensive range of
                services in real estate development, property development and
                contract, real estate consulting, and land sales. With our
                headquarters situated in Asaba, Delta State, Nigeria, we operate
                across the nation, serving clients with professionalism,
                expertise, and integrity.
              </p>
            </div>

            {/* Right Column */}
            <div className="text-gray-600 leading-relaxed">
              <p>
                Our mission is to help our customers across geography and class
                experience superior satisfaction through our quality products
                and services.Our vision is to be a global Real Estate
                development company, distinctive for superior value delivery to
                our customers, investors and employees.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
