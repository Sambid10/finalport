"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { projects } from "./MainRapperforHover";
import Image from "next/image";

export const PictureContainers = ({
    ishovered,
    project,
}: {
    ishovered: { active: boolean; index: number };
    project: any;
}) => {
    const { active, index } = ishovered;
    const ref = useRef<HTMLAnchorElement | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        const element = ref.current; // Reference to the floating container
        const ContainerX = gsap.quickTo(element, "left", {
            duration: 0.8,
            ease: "power3",
        });
        const ContainerY = gsap.quickTo(element, "top", {
            duration: 0.8,
            ease: "power3",
        });

        const handleMouseMove = (e: MouseEvent) => {
            if (!active) return; // Only track mouse when active
            const { clientX, clientY } = e;

            // Ensure alignment with parent container
            const parentRect = element.offsetParent?.getBoundingClientRect() || {
                left: 0,
                top: 0,
            };

            const adjustedX = clientX - parentRect.left; // Adjust based on parent offset
            const adjustedY = clientY - parentRect.top;

            ContainerX(adjustedX);
            ContainerY(adjustedY);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [active]);

    const animation = {
        initial: { scale: 0, x: "-50%", y: "-50%" },
        open: {
            scale: 1,
            x: "-50%",
            y: "-50%",
            transition: { ease: [0.76, 0, 0.24, 1], duration: 0.5 },
        },
        close: {
            scale: 0,
            x: "-50%",
            y: "-50%",
            transition: { ease: [0.76, 0, 0.24, 1], duration: 0.5 },
        },
    };

    return (
        <motion.a
            href={"/"}
            ref={ref}
            variants={animation}
            initial="initial"
            animate={active ? "open" : "close"}
            className="absolute h-[200px] w-[250px] overflow-hidden pointer-events-none z-30"
        >
            <motion.div
                style={{
                    top: index * -100 + "%",
                }}
                className="h-[100%] w-[100%] absolute prac pointer-events-none z-30"
            >
                {projects.map((pro, i) => (
                    <div
                        key={i}
                        className="h-[100%] flex justify-center items-center bg-[#FCFCFC]"
                    >
                        <img
                            className="h-[200px] object-cover"
                            src={`/${pro.img}`}
                            alt="li"
                           
                        />
                    </div>
                ))}
            </motion.div>
        </motion.a>
    );
};
