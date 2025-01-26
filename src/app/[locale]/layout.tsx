// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export { generateStaticParams } from "next-intlayer"; // Ligne à insérer

export const metadata: Metadata = {
  title: "Créer une Application Next",
  description: "Généré par créer une application Next",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang="en">
    <body className={inter.className}>{children}</body>
  </html>
);

export default RootLayout;
