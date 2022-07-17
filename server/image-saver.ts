import { makeBlockRenderer, RichTextObjects, UnknownBlocks } from "./notion";
import { get as callbackGet } from "https";
import sharp from "sharp";
import { Stream } from "stream";
import { readdir, unlink } from "fs/promises";
import { randomUUID } from "crypto";
import { join } from "path";
import { IncomingMessage } from "http";

async function get(url: string) {
  return new Promise<IncomingMessage>((resolve, reject) => {
    callbackGet(url, (res) => {
      resolve(res);
    }).on("error", (err) => {
      reject(err);
    });
  });
}

async function stream2buffer(stream: Stream): Promise<Buffer> {
  return new Promise<Buffer>((resolve, reject) => {
    const _buf = Array<any>();
    stream.on("data", (chunk) => _buf.push(chunk));
    stream.on("end", () => resolve(Buffer.concat(_buf)));
    stream.on("error", (err) => reject(`error converting stream - ${err}`));
  });
}

// remove all files in the directory and its subdirectories
export async function removeFiles(dir: string) {
  const files = await readdir(dir);
  for (const file of files.filter((file) => file != ".gitkeep")) {
    const filePath = join(dir, file);
    await unlink(filePath);
  }
}

export async function saveImageInSize(url: string, { size, assetDirectory, format }: { size: number; assetDirectory: string; format: keyof sharp.FormatEnum }) {
  const id = randomUUID();
  const imagename = `${id}.${format}`;
  const imagepath = join(assetDirectory, imagename);

  const res = await get(url);
  const image = sharp(await stream2buffer(res));

  await image.clone().resize({ width: size, height: size, fit: "outside" }).toFormat(format).toFile(imagepath);

  return imagename;
}
