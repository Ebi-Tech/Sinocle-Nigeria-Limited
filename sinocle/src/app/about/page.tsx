"use client";
import Image from "next/image";
import {
  Building,
  Home as HomeIcon,
  MapPin,
  ChevronsRight,
} from "lucide-react";

export default function About() {
  const image = "/images/about.png";

  const teamMembers = [
    {
      name: "Jacob Onifade",
      role: "Founder & CEO",
      image: "/images/m1.png", // Replace with actual image URL
    },
    {
      name: "Edward Chukwueneka",
      role: "Legal Advisor",
      image: "/images/m2.png",
    },
    {
      name: "Robert Omario",
      role: "Finance Manager",
      image: "/images/m3.png",
    },
    {
      name: "Joseph Chukwudi",
      role: "Technology Lead",
      image: "/images/m4.png",
    },
  ];

  const achievements = [
    {
      title: "Engineering",
      description:
        "Awards for innovation, efficiency, sustainability in construction",
      image: "/images/eng.png",
    },
    {
      title: "Safety",
      description:
        "Ensuring workplace safety with recognized standards and protocols",
      image: "/images/saf.png",
    },
    {
      title: "Community Impact",
      description:
        "Making a difference through social responsibility and outreach",
      image: "/images/ci.png",
    },
    {
      title: "Environmental",
      description: "Sustainable practices to reduce environmental impact",
      image: "/images/env.png",
    },
    {
      title: "Outstanding Design",
      description: "Recognized for creativity and excellence in design",
      image: "/images/des.png",
    },
    {
      title: "Technology",
      description: "Innovation through cutting-edge technology solutions",
      image: "/images/tech.png",
    },
  ];

  const values = [
    {
      title: "Commitment to Relationship",
      description:
        "Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
    },
    {
      title: "Integrity and Grandeur",
      description:
        "Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
    },
    {
      title: "Meet Expectation",
      description:
        "Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
    },
    {
      title: "Continuous Innovation",
      description:
        "Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
    },
  ];

  return (
    <>
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
              About our <br />
              construction
              <br /> company
            </h1>
            <p className="text-sm sm:text-xl lg:text-xl text-white mt-4">
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

          {/* Right Content (Desktop View - Vertically Stacked) */}
          <div className="hidden lg:flex flex-1 flex-col absolute top-[50%] right-[5%] transform -translate-y-1/2 space-y-6">
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
              <div key={index} className="flex items-start gap-4">
                <span className="flex-shrink-0">{service.icon}</span>
                <div className="flex-1 text-justify">
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

      {/* What We Do Section (For Medium & Small Screens) */}
      <section className="lg:hidden relative py-16 px-6 bg-white text-gray-900 flex justify-center">
        <div className="w-full max-w-3xl">
          {/* Section Title (Left-aligned) */}
          <h1 className="font-bold text-[32px] text-[#0D8C6D] text-left">
            What We Do
          </h1>

          {/* Services List (Justified Text & Centered Section) */}
          <div className="mt-6 space-y-6">
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
              <div key={index} className="flex items-start gap-4">
                {/* Icon */}
                <span className="flex-shrink-0">{service.icon}</span>
                {/* Text Content */}
                <div className="flex-1 text-justify">
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

      {/* Team Section */}
      <section className="py-12 px-4 bg-gray-100 font-serif">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between">
            <div>
              <p className="text-base text-[#05362A] md:text-lg font-bold flex items-center px-[30px]">
                Members{" "}
                <span className="inline-block w-12 h-[2px] bg-black ml-2"></span>
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 px-[30px]">
                Meet Our Team
              </h2>
            </div>
            <p className="ml-2 font-serif text-[16px] leading-[10px]"> ↗ </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[50px] px-[30px] justify-center items-center">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative bg-white rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={400}
                  className="w-full h-60 object-center"
                />
                <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full p-4 text-white">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 px-4 bg-gray-100 font-serif">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center space-x-3">
              <h2 className="text-3xl font-bold">Our achievements</h2>
              <Image
                src="/images/icon.png"
                alt="Achievements"
                width={50}
                height={50}
                className="ml-2"
              />
            </div>
            <div className="w-12 h-1 bg-[#0D8C6D] mx-auto mt-2"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-4">
                <Image
                  src={achievement.image}
                  alt={achievement.title}
                  width={30}
                  height={0}
                  className="h-[auto] mt-1"
                />
                <div>
                  <h3 className="text-lg font-semibold">{achievement.title}</h3>
                  <p className="text-sm text-gray-700">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 md:px-8 lg:px-12  font-serif">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Column - Values List with Background */}
            <div className="relative h-full">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/value.png"
                  alt="Background"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Values Content */}
              <div className="relative z-10  p-8 space-y-8 text-white">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <ChevronsRight
                      className="w-6 h-6 mt-1 text-[#0D8C6D] flex-shrink-0"
                      strokeWidth={2.5}
                    />
                    <div>
                      <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                      <p className="text-sm md:text-base font-[400] text-white">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <div>
                <p className="text-base text-[#05362A] md:text-lg font-bold flex items-center">
                  Our Values{" "}
                  <span className="inline-block w-12 h-[2px] bg-black ml-2"></span>
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                  No Project Too Big or Too Small
                </h2>
              </div>

              <div className="space-y-4 text-gray-600">
                <p className="text-sm md:text-base">
                  We handle all aspects of the development process, from
                  planning and design to construction and project management.
                  Our commitment to excellence and timely delivery ensures that
                  every project receives the attention it deserves. With a
                  resounding success. Our experienced team of architects,
                  engineers, and construction professionals work tirelessly to
                  create sustainable, harmonized, and transforming building
                  developments.
                </p>
                <p className="text-sm md:text-base">
                  From residential planning to commercial properties, we ensure
                  every project is tailored to the unique needs and preferences
                  of our clients. Whether you are looking for residential,
                  commercial, or institutional development, our expertise in a
                  selection of carefully selected properties. Our team assists
                  clients to identifying the ideal living space for their
                  specific needs, ensuring prospective and legality throughout
                  the transaction process. Let Sincole help you find the perfect
                  space to call for your residential or commercial goals.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button className="bg-[#0D8C6D] text-white px-6 py-3 text-sm md:text-base font-medium hover:bg-[#0D8C6D]/90 transition-colors">
                  Get Free Consultation
                </button>
                <button className="border border-[#0D8C6D] text-[#0D8C6D] px-6 py-3 text-sm md:text-base font-medium hover:bg-[#0D8C6D] hover:text-white transition-colors">
                  ONLINE ESTIMATE FORM
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
