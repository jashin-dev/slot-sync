import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

export const checkUser = async () => {
  const user = await currentUser();
  if (!user) {
    return null;
  }

  try {
    const existingUser = await db?.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (existingUser) {
      return existingUser;
    }

    const initialName = `${user.firstName} ${user.lastName}`;
    const initialUsername =
      initialName.split(" ").join("-").toLowerCase() +
      "-" +
      user.id.slice(-4).toLowerCase();

    (await clerkClient()).users.updateUser(user.id, {
      username: initialUsername,
    });

    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name: initialName,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
        username: initialUsername,
      },
    });

    return newUser;
  } catch (error) {
    console.log(error);
  }
};
