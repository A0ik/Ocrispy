"use client";

import { Home, UtensilsCrossed, Star, Phone } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const navItems = [
  { name: "Accueil", url: "#top", icon: Home },
  { name: "Menu", url: "#menu", icon: UtensilsCrossed },
  { name: "Avis", url: "#avis", icon: Star },
  { name: "Contact", url: "#contact", icon: Phone },
];

export function NavbarClient() {
  return <NavBar items={navItems} />;
}