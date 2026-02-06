"use client";

import React, { useState, useEffect, useRef } from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";
import { FadeIn } from "./fade-in";

const clientImages = [
    {
        src: "/clients/cieh.webp",
        alt: "CIEH Logo",
    },
    {
        src: "/clients/cisco.webp",
        alt: "Cisco Logo",
    },
    {
        src: "/clients/dell.webp",
        alt: "Dell Logo",
    },
    {
        src: "/clients/fortinet.webp",
        alt: "Fortinet Logo",
    },
    {
        src: "/clients/hewlett.webp",
        alt: "Hewlett Packard Enterprise Logo",
    },
    {
        src: "/clients/hp.webp",
        alt: "HP Logo",
    },
    {
        src: "/clients/microsoft.webp",
        alt: "Microsoft Logo",
    },
    {
        src: "/clients/iro.webp",
        alt: "IRO Logo",
    },
    {
        src: "/clients/comptia.webp",
        alt: "Comptia Logo",
    },
    {
        src: "/clients/sophos.webp",
        alt: "Sophos Logo",
    },
    {
        src: "/clients/vmware.webp",
        alt: "VMware Logo",
    },
    {
        src: "/clients/ubiquiti.webp",
        alt: "Ubiquiti Logo",
    },
];

export const Clients = () => {
    const [isVisible, setIsVisible] = useState(false);
    const clientsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        const currentRef = clientsRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <section
            ref={clientsRef}
            className={`py-20 relative overflow-hidden transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Trusted by Industry Leaders
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Partnering with world-class technology companies to deliver excellence
                        </p>
                    </div>
                </FadeIn>
            </div>
            <InfiniteMovingCards
                items={clientImages}
                direction="right"
                speed="slow"
            />
        </section>
    );
};