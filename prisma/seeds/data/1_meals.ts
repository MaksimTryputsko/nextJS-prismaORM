import { DB } from "../seed";

const firstMeal = async (db: DB) => {
  const newUser1 = await db.user.upsert({
    where: { email: "newUser1@prisma.io" },
    update: {},
    create: {
      email: "newUser1@prisma.io",
      name: "newUser1",
      posts: {
        create: {
          title: "Check out Prisma with Next.js",
          content: "https://www.prisma.io/nextjs",
          published: true,
        },
      },
    },
  });
};

module.exports = firstMeal;
