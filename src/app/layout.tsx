import "./globals.css";

export const metadata = {
  title: "O'Crispy",
  description: "Poulet crispy. Jaune & noir. Simple.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-black text-yellow-100">{children}</body>
    </html>
  );
}
