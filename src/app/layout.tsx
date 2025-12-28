import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O’Crispy | Poulet croustillant à Ozoir",
  description: "Poulet croustillant, menus pilons/cuisse/ailes. Commande rapide.",
  icons: {
    icon: "/icon.png", // si tu as src/app/icon.png
    // ou "/favicon.ico" si tu as src/app/favicon.ico
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}