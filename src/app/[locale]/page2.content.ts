// src/app/[locale]/page.content.ts
import { t, type Dictionary } from "intlayer";

const pageContent = {
  key: "page2",
  content: {
    getStarted: {
      main: t({
        en: "Get started by editing",
        fr: "Commencez par éditer",
        es: "Comience por editar",
      }),
      pageLink: "src/app/page.tsx",
    },
  },
} satisfies Dictionary;

export default pageContent;
