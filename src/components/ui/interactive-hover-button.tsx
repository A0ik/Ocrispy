"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  text?: string;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
};

export function InteractiveHoverButton({
  text = "Commander",
  href,
  target,
  rel,
  className,
}: Props) {
  const isExternal = !!href && /^https?:\/\//.test(href);
  const Comp: any = href ? (isExternal ? "a" : Link) : "button";

  return (
    <Comp
      {...(href ? { href } : {})}
      {...(isExternal ? { target, rel } : {})}
      className={cn(
        "group relative overflow-hidden rounded-full border border-yellow-500/30",
        "bg-yellow-500/10 px-6 py-3 font-semibold text-yellow-100",
        "inline-flex items-center justify-center",
        "focus:outline-none focus:ring-2 focus:ring-yellow-400/60",
        className,
      )}
    >
      {/* blob (NE DOIT PAS PASSER DEVANT LE TEXTE) */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-[10%] top-[40%] z-0 h-2 w-2 rounded-lg bg-yellow-400 transition-all duration-300
                   group-hover:left-0 group-hover:top-0 group-hover:h-full group-hover:w-full group-hover:scale-[1.8]"
      />

      {/* Texte normal */}
      <span
        className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center
                   translate-x-2 transition-all duration-300
                   group-hover:translate-x-12 group-hover:opacity-0"
      >
        {text}
      </span>

      {/* Texte hover */}
      <span
        className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center gap-2
                   translate-x-12 opacity-0 transition-all duration-300
                   group-hover:translate-x-0 group-hover:opacity-100"
      >
        {text} <ArrowRight className="h-5 w-5" />
      </span>

      {/* Spacer (pour garder la bonne taille sans afficher) */}
      <span className="invisible select-none">{text}</span>
    </Comp>
  );
}