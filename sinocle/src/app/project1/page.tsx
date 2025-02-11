"use client";
import Image from "next/image";
import SlideInSection from "@/components/SlideInSection";

export default function Projects() {
  return (
    <main className="w-full min-h-screen mx-auto text-black font-serif overflow-hidden dark:text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex font-serif">
        <Image
          src="/images/pro1.png"
          alt="About Background"
          fill
          className="absolute object-cover"
          priority
        />

        <div className="relative flex w-full justify-between text-white gap-10 max-w-full mx-auto px-6 md:px-12 lg:flex">
          <div className="flex-1 absolute top-[50%] left-[5%] transform -translate-y-1/2 mt-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold">
              Toscana Hotel <br /> Project
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
        <section className="bg-gray-50 py-12 px-4 sm:px-6 md:px-8 lg:px-6">
          <div className="mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              About this Project
            </h2>
            <div className="w-12 h-1 bg-green-700 mt-2 mb-4"></div>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.{" "}
              <br />
              Proin cursus, dolor a mollis consectetur, risus dolor fermentum{" "}
              <br />
              massa, a commodo elit dui sit amet risus.
            </p>
            <ul className="text-gray-600 mt-4 space-y-1 text-sm md:text-base">
              <li>• Maecenas ornare nisl</li>
              <li>• A tortor ultrices bibendum</li>
              <li>• Nulla fermentum</li>
              <li>• Metus quis</li>
              <li>• Sodales tristique</li>
            </ul>
            <div className="w-full py-12 px-4 sm:px-6 md:px-8 lg:px-6 aspect-[16/9] relative">
              <Image
                src="/images/pr.png"
                alt="Modern architectural home"
                fill
                className="object-contain mx-auto"
                priority
              />
            </div>

            <div className="w-full py-16 px-4 md:px-8 lg:px-12">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
                {/* Image container */}
                <div className="w-full md:w-1/2 relative aspect-[4/3]">
                  <Image
                    src="/images/pr1.png"
                    alt="Modern architectural design"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Text container */}
                <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit consectetur adipiscing elit. Nullam
                    lectus erat, consectetur eu sapien eget rhoncus consectetur
                    sem. Proin cursus, dolor a mollis consectetur, risus dolor
                    fermentum massa, a commodo elit dui sit amet risus. Maecenas
                    ornare nisl a tortor ultrices bibendum. Nulla fermentum,
                    metus quis sodales tristique, augue mauris molestie augue
                    non feugiat ligula risus nec felis.
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    Lectus erat, consectetur eu sapien eget rhoncus consectetur
                    sem. Proin cursus, dolor a mollis consectetur, risus dolor
                    fermentum massa, a commodo elit dui sit amet risus. Maecenas
                    ornare nisl a tortor ultrices bibendum. Nulla fermentum,
                    metus quis sodales tristique, augue mauris molestie augue
                    non feugiat ligula risus nec felis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SlideInSection>
    </main>
  );
}
