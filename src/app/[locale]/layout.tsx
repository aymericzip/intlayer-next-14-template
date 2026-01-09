import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { IntlayerClientProvider } from "next-intlayer";
import { getHTMLTextDir, LocalesValues } from "intlayer";

const inter = Inter({ subsets: ["latin"] });

export { generateStaticParams } from "next-intlayer";

export const metadata: Metadata = {
  title: "Créer une Application Next",
  description: "Généré par créer une application Next",
};

const RootLayout = ({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: { locale: LocalesValues };
}>) => (
  <html lang={params.locale} dir={getHTMLTextDir(params.locale)}>
    <IntlayerClientProvider locale={params.locale}>
      <body className={inter.className}>{children}</body>
    </IntlayerClientProvider>
  </html>
);

export default RootLayout;
