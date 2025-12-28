"use client";

import React from "react";
import { Home, Utensils, Star, Phone } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

export function SiteNavbar() {
  const items = [
    { name: "Accueil", url: "#top", icon: Home },
    { name: "Menu", url: "#menu", icon: Utensils },
    { name: "Avis", url: "#avis", icon: Star },
    { name: "Contact", url: "#contact", icon: Phone },
  ];

  return <NavBar items={items} className="top-4 bottom-auto" />;
}
