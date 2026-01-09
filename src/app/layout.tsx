import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export { generateStaticParams } from "next-intlayer";

export const metadata: Metadata = {
  title: "Créer une Application Next",
  description: "Généré par créer une application Next",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => children;

export default RootLayout;
