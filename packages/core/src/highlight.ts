import { escapeHtml } from 'markdown-it/lib/common/utils.mjs';

export interface VokitHighLightHelperConfig {
  hasLang?: (lang: string) => boolean;
  handleHighlight: (str: string, lang: string) => string;
  codeHighlightExtensionMap?: Record<string, string>;
  codeBlockClass?: (lang: string) => string;
}

export class HighLightHelper {
  config: VokitHighLightHelperConfig;

  constructor(config: VokitHighLightHelperConfig) {
    this.config = config;
  }

  transform(str: string, lang: string) {
    const {
      hasLang = () => true,
      handleHighlight,
      codeHighlightExtensionMap = {},
      codeBlockClass,
    } = this.config;

    let res = escapeHtml(str);

    lang = codeHighlightExtensionMap[lang] || lang;

    if (lang) {
      if (hasLang(lang)) {
        res = handleHighlight(str, lang);
      }
    }

    return `<pre class="${codeBlockClass ? codeBlockClass(lang) : `language-${lang}`}"><code>${res}</code></pre>`;
  }
}
