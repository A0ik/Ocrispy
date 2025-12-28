"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string; // "#menu" etc
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items?.[0]?.name ?? "");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (e: React.MouseEvent, url: string, name: string) => {
    setActiveTab(name);

    if (!url.startsWith("#")) return;

    e.preventDefault();
    const el = document.querySelector(url);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });

    // met l'URL à jour sans jump
    history.replaceState(null, "", url);
  };

  return (
    <div
      className={cn(
        // ✅ toujours en haut (mobile + desktop)
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-4",
        className,
      )}
    >
      <div className="flex items-center gap-2 bg-black/40 border border-yellow-500/20 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={(e) => handleNavClick(e, item.url, item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-5 py-2 rounded-full transition-colors",
                "text-yellow-100/80 hover:text-yellow-200",
                isActive && "bg-yellow-500/15 text-yellow-300",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden inline-flex">
                <Icon size={18} strokeWidth={2.5} />
              </span>

              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-yellow-500/10 rounded-full -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-yellow-400 rounded-t-full">
                    <div className="absolute w-12 h-6 bg-yellow-400/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-yellow-400/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-yellow-400/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
