"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export function TestimonialsColumn({
  className,
  testimonials,
  duration = 16,
}: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) {
  return (
    <div className={className}>
      <motion.div
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className={cn("flex flex-col gap-6 pb-6", "will-change-transform")}
      >
        {[...Array(2)].map((_, block) => (
          <React.Fragment key={block}>
            {testimonials.map((t, i) => (
              <div
                key={`${block}-${i}`}
                className="max-w-xs w-full rounded-3xl border border-yellow-400/25 bg-black/60 p-6
                           shadow-[0_0_0_1px_rgba(250,204,21,0.08)] backdrop-blur"
              >
                <p className="text-sm text-white/85 leading-relaxed">
                  {t.text}
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-yellow-400/40"
                  />
                  <div className="leading-tight">
                    <div className="font-semibold text-yellow-300">{t.name}</div>
                    <div className="text-xs text-white/55">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}