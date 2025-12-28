"use client";

import { motion } from "framer-motion";
import {
  TestimonialsColumn,
  type Testimonial,
} from "@/components/ui/testimonials-columns-1";

const testimonials: Testimonial[] = [
  { text: "Croustillant de fou, et ça arrive chaud. Je recommande.", image: "https://randomuser.me/api/portraits/men/32.jpg", name: "Moussa", role: "Avis Google" },
  { text: "Les ailes sont dangereuses. Tu dis 'j’en prends juste 2' et tu finis le menu.", image: "https://randomuser.me/api/portraits/women/44.jpg", name: "Aïssata", role: "Avis Google" },
  { text: "Portions généreuses, bon goût, pas sec. Validé.", image: "https://randomuser.me/api/portraits/men/12.jpg", name: "Koffi", role: "Avis Google" },
  { text: "Livraison rapide, poulet bien assaisonné. Ça régale.", image: "https://randomuser.me/api/portraits/women/18.jpg", name: "Nadine", role: "Avis Google" },
  { text: "Pilons bien épais, vrai croustillant. 10/10.", image: "https://randomuser.me/api/portraits/men/55.jpg", name: "Ibrahim", role: "Avis Google" },
  { text: "Ça cale fort. Le genre de commande qui te met bien.", image: "https://randomuser.me/api/portraits/women/9.jpg", name: "Fatou", role: "Avis Google" },
  { text: "Qualité au rendez-vous, c’est propre et bon.", image: "https://randomuser.me/api/portraits/men/77.jpg", name: "Cheikh", role: "Avis Google" },
  { text: "Croustillant dehors, juteux dedans. Aucun débat.", image: "https://randomuser.me/api/portraits/women/28.jpg", name: "Aminata", role: "Avis Google" },
  { text: "Service efficace, et ça sort vite. Parfait.", image: "https://randomuser.me/api/portraits/men/8.jpg", name: "Junior", role: "Avis Google" },
  { text: "Franchement, gros respect. Je reviens.", image: "https://randomuser.me/api/portraits/women/61.jpg", name: "Sabrina", role: "Avis Google" },
];

const col1 = testimonials.slice(0, 4);
const col2 = testimonials.slice(4, 7);
const col3 = testimonials.slice(7, 10);

export function TestimonialsSection() {
  return (
    <section
      id="avis"
      className="relative overflow-hidden bg-black py-20"
    >
      {/* glow léger jaune */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-24 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-yellow-400/20 blur-3xl" />
        <div className="absolute -bottom-24 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-yellow-300/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[680px] text-center"
        >
          <div className="inline-flex rounded-lg border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-yellow-300">
            Avis Google
          </div>

          <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight text-yellow-300">
            Ils ont goûté. Ils ont validé.
          </h2>

          <p className="mt-4 text-white/65">
            Des retours qui donnent faim. C’est le but.
          </p>
        </motion.div>

        <div
          className="mt-12 flex justify-center gap-6 overflow-hidden max-h-[740px]
          [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
        >
          <TestimonialsColumn testimonials={col1} duration={14} />
          <TestimonialsColumn testimonials={col2} className="hidden md:block" duration={18} />
          <TestimonialsColumn testimonials={col3} className="hidden lg:block" duration={16} />
        </div>
      </div>
    </section>
  );
}
