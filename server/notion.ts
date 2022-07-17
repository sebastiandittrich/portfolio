import { Client } from "@notionhq/client";
import { GetPageResponse } from "@notionhq/client/build/src/api-endpoints";
import { config } from "dotenv";

config();
export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

type RichTextObject = RichTextObjectText;
export type RichTextObjects = RichTextObject[];

interface RichTextObjectText {
  type: "text";
  text: {
    content: string;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
}

type FileObject =
  | {
      type: "external";
      external: {
        url: string;
      };
    }
  | {
      type: "file";
      file: {
        url: string;
        expiry_time: string;
      };
    };

interface BlockContents {
  paragraph: {
    rich_text: RichTextObjects;
  };
  heading_1: {
    rich_text: RichTextObjects;
  };
  numbered_list_item: {
    rich_text: RichTextObjects;
  };
  image: FileObject;
}
type BlockType = keyof BlockContents;

export type Block<Type extends BlockType> = {
  type: Type;
} & {
  [key in Type]: BlockContents[Type];
};

type UnknownBlock = Block<"heading_1"> | Block<"paragraph"> | Block<"image">;
export type UnknownBlocks = UnknownBlock[];

type BlockRenderer<BType extends BlockType, RenderType> = (block: Block<BType>) => RenderType;
type BlockRenderers<RenderType> = {
  [Type in BlockType]: BlockRenderer<Type, RenderType>;
};

export function makeBlockRenderer<BlockType>(renderers: Partial<BlockRenderers<BlockType>>) {
  const fallbackRenderer = (_: UnknownBlock) => false;
  return (blocks: UnknownBlocks) => blocks.map((block) => (renderers[block.type] || fallbackRenderer)(block as any));
}

export async function fetchPageProperties(page: GetPageResponse) {
  if (!("properties" in page)) {
    throw new Error("Page has no properties");
  }
  return new Map(
    await Promise.all(
      Object.keys(page.properties).map(
        async (property) => [property, await notion.pages.properties.retrieve({ page_id: page.id, property_id: page.properties[property].id })] as const
      )
    )
  );
}
