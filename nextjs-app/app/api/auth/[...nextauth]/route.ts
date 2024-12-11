import NextAuth, { Account, Profile } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { User as UserModel } from "@models/user";
import { Session } from "next-auth";
import { connectDB } from "@utils/db";
import { AdapterUser } from "next-auth/adapters";

export const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session }: { session: Session }) {
      const foundUser = await UserModel.findOne({
        email: session.user?.email,
      });

      if (!foundUser) {
        return undefined;
      }
      const userSession: UserSession = {
        userId: foundUser.id,
        user: foundUser.username,
        email: foundUser.email,
        image: foundUser.imageUrl,
      };

      return { user: userSession };
    },
    async signIn({
      profile,
      account,
      user,
    }: {
      profile?: Profile;
      account: Account | null;
      user: User | AdapterUser;
    }) {
      try {
        await connectDB();
        const userFound = await UserModel.findOne({ email: profile?.email });

        if (!userFound) {
          console.log(profile);
          await UserModel.create({
            email: profile?.email,
            username: profile?.name?.replace(" ", "").toLowerCase(),
            imageUrl: profile.picture,
          });
        }
        return true;
      } catch (error) {
        console.log(error);
      }
      return profile;
    },
  },
});
export { handler as GET, handler as POST };
