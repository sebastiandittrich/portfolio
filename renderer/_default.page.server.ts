import { renderToString } from "@vue/server-renderer";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr";
import { createApp } from "./app";
import logoUrl from "./logo.svg";
import type { PageContext } from "./types";
import type { PageContextBuiltIn } from "vite-plugin-ssr";

export { render };
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ["pageProps", "urlPathname"];

async function render(pageContext: PageContextBuiltIn & PageContext) {
    const app = createApp(pageContext);
    const appHtml = await renderToString(app);

    // See https://vite-plugin-ssr.com/head
    const { documentProps } = pageContext;
    const title = (documentProps && documentProps.title) || "Sebastian Dittrich";
    const desc = (documentProps && documentProps.description) || "A software developer from Dresden. ";

    const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,700&display=swap" defer />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
        <!-- Fathom - beautiful, simple website analytics -->
        <script src="https://cdn.usefathom.com/script.js" data-spa="auto" data-site="KIOUAQTJ" defer></script>
        <!-- / Fathom -->
        <script defer type="text/javascript" src="https://api.pirsch.io/pirsch-extended.js" id="pirschextendedjs" data-code="acFL7OU14FSZ11BKDC8IWJN5uHjqeRmq"></script>
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`;

    return {
        documentHtml,
        pageContext: {
            // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
        },
    };
}
