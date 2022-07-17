import { notion } from "./server/notion";
import { GetPagePropertyResponse, GetPageResponse } from "@notionhq/client/build/src/api-endpoints";

Promise.resolve().then(async () => {
  const database = await notion.databases.query({
    database_id: "d78317ce27d84ed7b539c57493a8a66b",
  });
  const properties = await Promise.all(database.results.map((page) => fetchPageProperties(page.id, page.properties)));

  console.log(properties.map((properties) => renderProperties(properties)));
});
