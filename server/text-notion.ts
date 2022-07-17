import { GetPagePropertyResponse } from "@notionhq/client/build/src/api-endpoints";

type TextRendererOptions = {
  fileHandler?: (url: string) => string | Promise<string>;
};

export async function renderPropertyToText(property: GetPagePropertyResponse, { fileHandler = (url) => url }: TextRendererOptions = {}) {
  if (property.type == "property_item") {
    return property.results
      .map((result) => {
        if (result.type == "title") {
          return result.title.plain_text;
        }
        if (result.type == "rich_text") {
          return result.rich_text.plain_text;
        }
        throw new Error(`Unsupported property item type: ${result.type}`);
      })
      .join("");
  }
  if (property.type == "url") {
    return property.url;
  }
  if (property.type == "number") {
    return property.number;
  }
  if (property.type == "checkbox") {
    return property.checkbox;
  }
  if (property.type == "files") {
    return await Promise.all(
      property.files.map((file) => {
        if (file.type == "file") {
          return fileHandler(file.file.url);
        }
        if (file.type == "external") {
          return fileHandler(file.external.url);
        }
        throw new Error(`Unsupported file type: ${file.type}`);
      })
    );
  }
  throw new Error(`Unsupported property type ${property.type}`);
}

export async function renderPropertiesToText(properties: Map<string, GetPagePropertyResponse>, options?: TextRendererOptions) {
  return new Map(
    await Promise.all(Array.from(properties.entries()).map(async ([property, value]) => [property, await renderPropertyToText(value, options)] as const))
  );
}
