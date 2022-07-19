import { notion } from "./server/notion";
import { GetPagePropertyResponse, GetPageResponse } from "@notionhq/client/build/src/api-endpoints";

Promise.resolve().then(async () => {
  const database = await notion.pages.retrieve({ page_id: "d08a24065137421caf836abc63801401" });
  const page = await notion.databases.retrieve({ database_id: "d78317ce27d84ed7b539c57493a8a66b" });

  if (!("last_edited_time" in page)) {
    throw new Error("Page has no last_edited_time");
  }
  if (!("last_edited_time" in database)) {
    throw new Error("Database has no last_edited_time");
  }

  console.log("Page", page.last_edited_time);
  console.log("Database", database.last_edited_time);
});
