import { removeFiles, saveImageInSize } from "@/server/image-saver";
import { renderPropertiesToText } from "@/server/text-notion";
import { PageContext } from "../../renderer/types";
import { fetchPageProperties, notion, UnknownBlocks } from "../../server/notion";

export async function onBeforeRender(pageContext: PageContext) {
  const database = await notion.databases.query({
    database_id: "d78317ce27d84ed7b539c57493a8a66b",
    sorts: [{ property: "sort", direction: "descending" }],
  });
  const properties = await Promise.all(database.results.map((page) => fetchPageProperties(page)));

  const renderedProperties = (
    await Promise.all(
      properties.map(async (properties) =>
        Array.from(
          (
            await renderPropertiesToText(properties, {
              fileHandler: (url) =>
                saveImageInSize(url, {
                  size: 200,
                  assetDirectory: process.env.NODE_ENV == "production" ? "dist/client/generated" : "public/generated",
                  format: "webp",
                }).then((name) => `/generated/${name}`),
            })
          ).entries()
        ).reduce((acc, [key, value]) => ({ ...acc, [key.toLowerCase()]: value }), {})
      )
    )
  ).map((properties) => ({ ...properties, logo: properties.logo[0] }));

  // We make `pageProps` available as `pageContext.pageProps`
  return {
    pageContext: {
      pageProps: {
        projects: renderedProperties,
      },
    },
  };
}

// By default `pageContext.*` are available only on the server. But our hydrate function
// we defined earlier runs in the browser and needs `pageContext.pageProps`; we use
// `passToClient` to tell `vite-plugin-ssr` to serialize and make `pageContext.pageProps`
// available to the browser.
export const passToClient = ["pageProps", "urlPathname"];
