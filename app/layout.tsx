import type { Metadata } from "next";
import localFont from "next/font/local"
import { Nixie_One } from "next/font/google";
import "./globals.css";
import Container from "@/ui/container";

const nimbus = localFont({
  src: "../public/fonts/TAN-NIMBUS.ttf"
});

const dreamAvenue = localFont({
  src: "../public/fonts/dream-avenue.ttf"
});

const nixieOne = Nixie_One({
  weight: "400",
  variable: "--font-nixie-one",
  subsets: ["latin"],
  preload: true
});

export const metadata: Metadata = {
  title: {
    template: "%s | The Black Palm Bakery",
    default: "The Black Palm Bakery",
  },
  description: "The Black Palm Bakery. Crafting custom pastries for your special day.",
  keywords: "Louisville, Bakery, Custom, Pastries, Wedding, Birthday, Cakes, Cupcakes, Cookies, Brownies, Black Palm Bakery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nixieOne.variable} ${nimbus.className} ${dreamAvenue.className} antialiased bg-[url(../public/images/bgLight.png)] bg-cover bg-no-repeat`}
      >
        <main className="flex justify-center min-h-dvh">
          <Container>
            {children}
          </Container>
        </main>
      </body>
    </html>
  );
}
