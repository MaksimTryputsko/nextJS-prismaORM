import { PrismaClient } from "@prisma/client";
import { parseArgs } from "node:util";
export const db = new PrismaClient();

const fs = require("fs");
type DB = typeof db;

const options = {
  from: { type: "string" },
  to: { type: "string" },
} as const;

const main = async () => {
  const {
    values: { from, to },
  } = parseArgs({ options });

  try {
    const fileList: string[] = fs.readdirSync("./prisma/seeds/data");

    if (!from && !to) {
      return fileList.forEach((file) => {
        require(`./data/${file}`)(db);
      });
    }

    const toFile = to + ".ts" ?? fileList[fileList.length - 1];
    const fromFile = from + ".ts" ?? fileList[0];

    return fileList.forEach((file) => {
      if (file >= fromFile && file <= toFile) {
        require(`./data/${file}`)(db);
      }
    });
  } catch (error) {
    console.error(error);
    process.exit();
  } finally {
    await db.$disconnect();
  }
};

main();

export type { DB };
