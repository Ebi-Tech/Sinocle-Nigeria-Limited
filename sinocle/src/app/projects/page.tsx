import Image from "next/image";

export default function Projects() {
  const image = "/images/project.png";

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
    </>
  );
}
