import NextAuth from "next-auth";
import { authOptions } from "market/server/auth";

export default NextAuth(authOptions);
