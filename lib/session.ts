import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [GoogleProvider({ clientId: "", clientSecret: "" })],
  //jwt: {encode: ({secret, token} => {}, decode: async({secret, token}) => {})},
  theme: { colorScheme: "light", logo: "/logo.png" },
  //callbacks: {async session({session}){}, async signIn({user}){}}
};
