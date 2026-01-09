import { getLocale } from "intlayer";
import { IntlayerServerProvider } from "next-intlayer/server";
import { PageContent } from "../components/pageContent/PageContent";
import { LocaleSwitcher } from "@/components/localeSwitcher/LocaleSwitcher";
import { headers, cookies } from "next/headers";

export default async function Home() {
  const locale = await getLocale({
    // Gets a specific header (e.g., 'accept-language')
    getHeader: (name) => headers().get(name),

    // Gets a specific cookie value
    getCookie: (name) => cookies().get(name)?.value,
  });

  return (
    <IntlayerServerProvider locale={locale}>
      <div className="mr-auto w-auto flex z-50 absolute top-10 right-10">
        <LocaleSwitcher />
      </div>
      <PageContent />
    </IntlayerServerProvider>
  );
}
