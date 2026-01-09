import { LocalParams } from "next-intlayer";
import { IntlayerServerProvider } from "next-intlayer/server";
import { PageContent } from "./PageContent";
import { LocaleSwitcher } from "@/components/localeSwitcher/LocaleSwitcher";

export default function Home({ params: { locale } }: LocalParams) {
  return (
    <IntlayerServerProvider locale={locale}>
      <div className="mr-auto w-auto flex z-50 absolute top-10 right-10">
        <LocaleSwitcher />
      </div>
      <PageContent />
    </IntlayerServerProvider>
  );
}
