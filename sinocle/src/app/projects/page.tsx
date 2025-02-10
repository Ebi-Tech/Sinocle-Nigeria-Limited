"use client";
import Image from "next/image";
import SlideInSection from "@/components/SlideInSection";

export default function Projects() {
  const image = "/images/project.png";

  return (
    <main className="w-full">
      {/* Background Image */}
      <section className="relative h-screen flex font-serif">
        {/* Background Image */}
        <Image
          src={image}
          alt="About Background"
          fill
          className="absolute object-cover"
          priority
        />

        {/* Container for Hero Text & Right Content (Large Screens) */}
        <div className="relative flex w-full justify-between text-white gap-10 max-w-full mx-auto px-6 md:px-12 lg:flex">
          {/* Hero text */}
          <div className="flex-1 absolute top-[50%] left-[5%] transform -translate-y-1/2 mt-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold">
              Our Construction <br /> Project
            </h1>
            <p className="text-sm sm:text-xl lg:text-xl text-white mt-4">
              From the onset till now, our mission remains centered on
              delivering <br /> projects of superior quality, always on
              schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <SlideInSection direction="down" className="">
        <section className="py-16 px-6 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Cards */}
              {[
                {
                  title: "Property Development",
                  desc: "We offer reliable solutions for clients seeking to develop or contract properties.",
                  img: "/images/p1.png",
                },
                {
                  title: "Real Estate Development",
                  desc: "We excel in real estate development, delivering exceptional projects with quality and innovation.",
                  img: "/images/r2.png",
                },
                {
                  title: "Premium Land Sales",
                  desc: "Sinocle Nigeria Limited offers premium land sales throughout Nigeria.",
                  img: "/images/r1.png",
                },
                {
                  title: "Premium Land Sales",
                  desc: "Sinocle Nigeria Limited offers premium land sales throughout Nigeria.",
                  img: "/images/r1.png",
                },
                {
                  title: "Premium Land Sales",
                  desc: "Sinocle Nigeria Limited offers premium land sales throughout Nigeria.",
                  img: "/images/r1.png",
                },
                {
                  title: "Premium Land Sales",
                  desc: "Sinocle Nigeria Limited offers premium land sales throughout Nigeria.",
                  img: "/images/r1.png",
                },
                {
                  title: "Premium Land Sales",
                  desc: "Sinocle Nigeria Limited offers premium land sales throughout Nigeria.",
                  img: "/images/r1.png",
                },
                {
                  title: "Premium Land Sales",
                  desc: "Sinocle Nigeria Limited offers premium land sales throughout Nigeria.",
                  img: "/images/r1.png",
                },
                {
                  title: "Premium Land Sales",
                  desc: "Sinocle Nigeria Limited offers premium land sales throughout Nigeria.",
                  img: "/images/r1.png",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden"
                >
                  {/* Image */}
                  <SlideInSection direction="left" className="">
                    <Image
                      src={service.img}
                      alt={service.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                  </SlideInSection>
                  {/* Content */}
                  <SlideInSection direction="right" className="">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold">{service.title}</h3>
                      <p className="text-gray-600 mt-2">{service.desc}</p>
                      <button className="mt-4 border border-black px-4 py-2 text-sm">
                        LEARN MORE
                      </button>
                    </div>
                  </SlideInSection>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SlideInSection>
    </main>
  );
}
