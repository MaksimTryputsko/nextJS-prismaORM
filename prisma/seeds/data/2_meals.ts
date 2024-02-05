import { DB } from "../seed";

const secondMeal = async (db: DB) => {
  const newUser2 = await db.user.upsert({
    where: { email: "newUser2@prisma.io" },
    update: {},
    create: {
      email: "newUser2@prisma.io",
      name: "newUser2",
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

module.exports = secondMeal;
