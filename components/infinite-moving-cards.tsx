"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

interface CardItem {
    src: string;
    alt: string;
}

interface InfiniteMovingCardsProps {
    items: CardItem[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className = "",
}: InfiniteMovingCardsProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLUListElement>(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        addAnimation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty("--animation-direction", "forwards");
            } else {
                containerRef.current.style.setProperty("--animation-direction", "reverse");
            }
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className={`scroller relative z-20 w-full overflow-hidden ${className}`}
        >
            <ul
                ref={scrollerRef}
                className={`flex w-max min-w-full shrink-0 flex-nowrap gap-8 md:gap-16 py-4 ${start ? "animate-scroll" : ""
                    } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
            >
                {items.map((item, idx) => (
                    <li key={idx} className="shrink-0 flex items-center">
                        <div className="relative h-12 md:h-16 aspect-video">
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                loading="lazy"
                                sizes="(max-width: 768px) 128px, 160px"
                                className="object-contain"
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};