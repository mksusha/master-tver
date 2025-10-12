"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

const stats = [
    { number: 10, label: "лет опыта" },
    { number: 120, label: "реализованных проектов" },
    { number: 50, label: "довольных клиентов" },
    { number: 25, label: "человек в команде" },
];

export default function StatsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();
    const [counts, setCounts] = useState(stats.map(() => 0));

    useEffect(() => {
        if (isInView) {
            controls.start("visible");

            stats.forEach((stat, i) => {
                let start = 0;
                const end = stat.number;
                const duration = 1500;
                const step = Math.ceil(end / (duration / 16));

                const counter = setInterval(() => {
                    start += step;
                    if (start >= end) {
                        start = end;
                        clearInterval(counter);
                    }
                    setCounts((prev) => {
                        const updated = [...prev];
                        updated[i] = start;
                        return updated;
                    });
                }, 16);
            });
        }
    }, [isInView, controls]);

    return (
        <section
            ref={ref}
            className="relative mt-32 mb-32 px-4 md:px-8 flex justify-center"
        >
            <div className="relative w-full max-w-[1600px] overflow-hidden rounded-3xl  text-white ">

                <div className="absolute  inset-0">
                    <Image
                        src="/stats.jpg"
                        alt="Background"
                        fill
                        className="object-cover object-center"
                    />
                </div>
                <div className="absolute bg-black/20 inset-0" />

                {/* Контент */}
                <div className="relative z-10 py-20 px-8 md:px-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-light mb-16"
                    >
                        Наш опыт — ваше спокойствие
                    </motion.h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.2 * i, duration: 0.6 }}
                                className="flex flex-col items-center"
                            >
                <span className="text-6xl md:text-7xl  text-white ">
                  {counts[i]}
                </span>
                                <span className="mt-3 text-lg md:text-2xl text-white tracking-wide">
                  {stat.label}
                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
