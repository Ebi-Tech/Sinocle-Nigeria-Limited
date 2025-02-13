"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Service } from "../app/types";

interface ServiceCardProps {
    service: Service;
    imagePosition?: 'left' | 'right';
}

export default function ServiceCard({ service, imagePosition = 'right' }: ServiceCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative flex flex-col md:flex-row w-full bg-emerald-600 rounded-lg overflow-hidden h-[700px] md:h-[600px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {imagePosition === 'left' && (
                <div className="relative w-full md:w-1/2 h-[350px] md:h-full">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            )}

            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    {service.title}
                </h2>
                <p className="text-base md:text-lg mb-8 text-white/90 leading-relaxed max-w-xl">
                    {service.description}
                </p>
                <div className="flex justify-start">
                    <Link
                        href={`/services/${service.id}`}
                        className="inline-flex items-center justify-center px-5 py-2.5 border-2 border-white text-white hover:bg-white hover:text-emerald-600 transition-colors duration-200 rounded text-lg w-32 md:w-48"
                    >
                        Learn more →
                    </Link>
                </div>
            </div>

            {imagePosition === 'right' && (
                <div className="relative w-full md:w-1/2 h-[350px] md:h-full">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            )}
        </div>
    );
}