/* eslint-disable */
import { Locales } from 'intlayer';
import type { PageContent as _AyJKkYAm3wDKoM1pPeLl } from '../.intlayer/types/page.d.ts';
import type { Page2Content as _EkNfq6plaXeCK7FBnDn0 } from '../.intlayer/types/page2.d.ts';

declare module 'intlayer' {
  interface IntlayerDictionaryTypesConnector {
    "page": _AyJKkYAm3wDKoM1pPeLl;
    "page2": _EkNfq6plaXeCK7FBnDn0;
  }

  type ConfigLocales = Locales.ENGLISH | Locales.SPANISH;
  type ExtractedLocales = Extract<Locales, ConfigLocales>;
  type ExcludedLocales = Exclude<Locales, ConfigLocales>;

  interface IConfigLocales<Content> extends Record<ExtractedLocales, Content>, Partial<Record<ExcludedLocales, Content>> {}
}