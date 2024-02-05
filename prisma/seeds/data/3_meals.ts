import { DB } from "../seed";

const thirdMeal = async (db: DB) => {
  const newUser3 = await db.user.upsert({
    where: { email: "newUser3@prisma.io" },
    update: {},
    create: {
      email: "newUser3@prisma.io",
      name: "newUser3",
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

module.exports = thirdMeal;
