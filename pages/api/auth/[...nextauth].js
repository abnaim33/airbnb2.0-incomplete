import bcrypt from "bcrypt"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
// import { PrismaAdapter } from "@next-auth/prisma-adapter"
import Users from '../../../models/userModel'
// import prisma from "../../../libs/prismadb"

export const authOptions = {
  // adapter: CredentialsProvider,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Please fill both fields');
        }

        // const user = await prisma.user.findUnique({
        //   where: {
        //     email: credentials.email
        //   }
        // });

        const user = await Users.findOne({ email: credentials.email })
        console.log(user, 'from next auth')
        if (!user) {
          throw new Error('Invalid credentials');
        }

   
        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.password
        );
 
        if (!isCorrectPassword) {
          throw new Error('wrong password');
        }

        return user;
      }
    })
  ],
  pages: {
    signIn: '/',
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions);