// app/layout.tsx
import "../styles/globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Contato from "../components/layout/Contato";

export const metadata = {
  title: "GritoWeb | Wordpress | WooCommerce | Suporte Técnico",
  description:
    "Agência especializada em desenvolvimento WordPress e WooCommerce. Consulte nossas soluções de hospedagens e planos de manutenção.",
  openGraph: {
    title: "GritoWeb | Wordpress | WooCommerce | Suporte Técnico",
    description:
      "Agência especializada em desenvolvimento WordPress e WooCommerce. Consulte nossas soluções de hospedagens e planos de manutenção.",
    url: "https://gritoweb.com.br/",
    siteName: "GritoWeb",
    images: [
      {
        url: "/og-image.svg", // coloque sua imagem em /public/og-image.png
        width: 1200,
        height: 630,
        alt: "GritoWeb",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  authors: [{ name: "Suporte GritoWeb" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/png" href="/favico.webp" />
      </head>
      <body>
        <div className="py-4 px-8 lg:px-0">
          <Header />
        </div>
        <div>{children}</div>
        <div className="px-8 lg:px-0">
          <Contato />
        </div>
        <div className="bg-primary absolute w-[100vw] left-0 bottom -0">
          <Footer />
        </div>
      </body>
    </html>
  );
}
