import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { IntlayerClientProvider } from "next-intlayer";
import { getHTMLTextDir, getLocale } from "intlayer";
import { headers, cookies } from "next/headers";
export { generateStaticParams } from "next-intlayer";

export const metadata: Metadata = {
  title: "Créer une Application Next",
  description: "Généré par créer une application Next",
};

const inter = Inter({ subsets: ["latin"] });

const RootLayout = async ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const locale = await getLocale({
    // Gets a specific header (e.g., 'accept-language')
    getHeader: (name) => headers().get(name),

    // Gets a specific cookie value
    getCookie: (name) => cookies().get(name)?.value,
  });

  return (
    <html lang={locale} dir={getHTMLTextDir(locale)}>
      <IntlayerClientProvider defaultLocale={locale}>
        <body className={inter.className}>{children}</body>
      </IntlayerClientProvider>
    </html>
  );
};

export default RootLayout;
