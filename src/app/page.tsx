"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { Phone, Clock, MapPin, Star } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { TestimonialsSection } from "@/components/sections/testimonials";


const UBEREATS =
  "https://www.ubereats.com/fr/store/ocrispy-poulet/PJ_yvIMzX9uNToTgDE8HGw?pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjI0JTIwUnVlJTIwUGFibG8lMjBOZXJ1ZGElMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjJDaElKUFlVNldIb0c1a2NSaEh4M0duUHpiazAlMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDguNzYxMzY3ODk5OTk5OTk2JTJDJTIybG9uZ2l0dWRlJTIyJTNBMi42NjQ3MjU4JTdE";

const ADDRESS = "13 Av. du Général Leclerc, 77330 Ozoir-la-Ferrière, France";
const PHONE_DISPLAY = "01 60 64 83 77";
const PHONE_TEL = "+33160648377";

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d657.470156777243!2d2.672090628616767!3d48.7650758982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e607665365f9a9%3A0xf54d08ff5991d8eb!2sO%27CRISPY%20POULET!5e0!3m2!1sfr!2sfr!4v1766921210570!5m2!1sfr!2sfr";

const menuCards = [
  {
    title: "Menu Pilons",
    price: "7,50€",
    desc: "3 pilons + accompagnement + boisson. Simple, efficace, dangereux.",
    img: "/images/menu-pilons.png", // mets tes images ici
  },
  {
    title: "Menu Cuisses",
    price: "7,50€",
    desc: "Cuisse + accompagnement + boisson. Le classique qui fait taire tout le monde.",
    img: "/images/menu-cuisses.png",
  },
  {
    title: "Menu Ailes",
    price: "7,50€",
    desc: "Ailes + accompagnement + boisson. Croustillant, addictif, tu connais.",
    img: "/images/menu-ailes.png",
  },
];

export default function Page() {
  // ✅ scroll smooth même si tes ancres veulent “téléporter”
  useEffect(() => {
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = prev;
    };
  }, []);

  const navItems = [
    { name: "Accueil", url: "#top", icon: MapPin },
    { name: "Menu", url: "#menu", icon: Clock },
    { name: "Avis", url: "#avis", icon: Star },
    { name: "Contact", url: "#contact", icon: Phone },
  ];

  return (
    <main id="top" className="min-h-screen bg-black text-yellow-100">
      <NavBar items={navItems} className="top-0 bottom-auto" />

      {/* HERO */}
      <section className="relative h-[86vh] min-h-[560px] w-full overflow-hidden">
        <Image
          alt="O'Crispy - Hero"
          src="/images/hero-ocrispy.png"
          fill
          priority
          className="object-cover object-center scale-[0.95]" // ✅ petit “dézoom”
        />
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center">
          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            O&apos;Crispy
          </h1>
          <p className="mt-4 max-w-2xl text-yellow-100/80">
            Croustillant. Généreux. Et ça arrive chaud.
          </p>

          {/* badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-yellow-100/80">
            <span className="rounded-full border border-yellow-500/25 bg-yellow-500/10 px-3 py-1">
              Halal
            </span>
            <span className="rounded-full border border-yellow-500/25 bg-yellow-500/10 px-3 py-1">
              10–20€ / personne
            </span>
            <span className="rounded-full border border-yellow-500/25 bg-yellow-500/10 px-3 py-1">
              Sur place & à emporter
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#menu"
              className="rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-black hover:bg-yellow-300"
            >
              Voir le menu
            </a>

            <InteractiveHoverButton
              href={UBEREATS}
              target="_blank"
              rel="noopener noreferrer"
              text="Commander (Uber Eats)"
              className="w-72"
            />
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Menu du moment
          </h2>
          <p className="mt-4 text-yellow-100/70">
            On garde le focus: Pilons, Cuisses, Ailes. Le reste, tu verras après.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {menuCards.map((c) => (
            <article
              key={c.title}
              className="overflow-hidden rounded-2xl border border-yellow-500/20 bg-black/40"
            >
              <div className="relative h-56 w-full">
                <Image alt={c.title} src={c.img} fill className="object-cover" />
                <div className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1 text-sm text-yellow-100">
                  {c.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{c.title}</h3>
                <p className="mt-3 text-yellow-100/70">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <InteractiveHoverButton
            href={UBEREATS}
            target="_blank"
            rel="noopener noreferrer"
            text="Commander maintenant"
            className="w-72"
          />
        </div>
      </section>

      <TestimonialsSection />

      {/* CONTACT + MAP */}
      <section id="contact" className="bg-black py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Contact
            </h2>
            <p className="mt-4 text-yellow-100/70">
              Tu viens, tu commandes, tu repars heureux. Basique.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-stretch">
            {/* infos */}
            <div className="rounded-2xl border border-yellow-500/20 bg-black/40 p-8">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-yellow-400" />
                <div>
                  <h3 className="text-lg font-semibold">Téléphone</h3>
                  <a
                    className="mt-2 inline-block font-semibold text-yellow-300 hover:underline"
                    href={`tel:${PHONE_TEL}`}
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="mt-8 flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-yellow-400" />
                <div>
                  <h3 className="text-lg font-semibold">Adresse</h3>
                  <p className="mt-2 text-yellow-100/70">{ADDRESS}</p>
                </div>
              </div>

              <div className="mt-8 flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-yellow-400" />
                <div>
                  <h3 className="text-lg font-semibold">Horaires</h3>
                  <ul className="mt-3 space-y-2 text-sm text-yellow-100/70">
                    <li>Dimanche: 11:00–00:00</li>
                    <li>Lundi: 11:00–00:00</li>
                    <li>Mardi: 11:00–00:00</li>
                    <li>Mercredi: 11:00–00:00</li>
                    <li>Jeudi: 11:00–00:00</li>
                    <li>Vendredi: 11:00–13:00, 14:00–02:00</li>
                    <li>Samedi: 11:00–02:00</li>
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <InteractiveHoverButton
                  href={UBEREATS}
                  target="_blank"
                  rel="noopener noreferrer"
                  text="Commander (Uber Eats)"
                  className="w-full"
                />
              </div>
            </div>

            {/* ✅ MAP: sans absolute, sans piège, ça s'affiche */}
            <div className="overflow-hidden rounded-2xl border border-yellow-500/20 bg-black">
              <iframe
                title="Carte O'Crispy"
                src={MAP_EMBED}
                className="h-[520px] w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <footer className="mt-16 text-center text-sm text-yellow-100/50">
            © {new Date().getFullYear()} O&apos;Crispy. Tous droits réservés.
          </footer>
        </div>
      </section>
    </main>
  );
}
