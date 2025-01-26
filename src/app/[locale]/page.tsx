import { IntlayerClientProvider, LocalParams } from "next-intlayer";
import { IntlayerServerProvider } from "next-intlayer/server";
import { PageContent } from "./PageContent";

export default function Home({ params: { locale } }: LocalParams) {
  return (
    <IntlayerServerProvider locale={locale}>
      <IntlayerClientProvider locale={locale}>
        <PageContent />
      </IntlayerClientProvider>
    </IntlayerServerProvider>
  );
}
