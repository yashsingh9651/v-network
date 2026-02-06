"use client";
import { motion } from "framer-motion";

export const FadeIn = ({
    children,
    delay = 0,
    className,
    direction = "up",
    duration = 0.6,
    once = true
}: {
    children: React.ReactNode,
    delay?: number,
    className?: string,
    direction?: "up" | "down" | "left" | "right" | "none",
    duration?: number,
    once?: boolean
}) => {
    const directions = {
        up: { y: 30, x: 0 },
        down: { y: -30, x: 0 },
        left: { x: 30, y: 0 },
        right: { x: -30, y: 0 },
        none: { x: 0, y: 0 }
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...directions[direction] }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ 
                duration, 
                delay, 
                ease: [0.25, 0.1, 0.25, 1]
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};