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
    <div className="flex flex-col">
      {/* Hero Section */}
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

      {/* Content Section */}
      <section className="bg-white">
        <div className="container mx-auto py-16 px-8">
          <ol className="list-inside list-decimal text-sm text-black mb-8">
            <li className="mb-2">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                src/app/page.tsx
              </code>
              .
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
