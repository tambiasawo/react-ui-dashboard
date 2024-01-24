import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";

//mocking api response
const users = [
  {
    id: "1",
    name: "John Doe",
    username: "johndoe",
    email: "test@test.com",
    password: "123456789",
  },
  {
    id: "2",
    name: "Tambs",
    username: "ta",
    email: "ta@yahoo.com",
    password: "123456",
  },
  {
    id: "3",
    name: "Peter Stanley",
    username: "peterstanley",
    email: "peter@example.com",
    password: "password",
  },
];

export const authOptions: NextAuthOptions = {
  pages: { signIn: "/auth/login", signOut: "/logout" },

  session: {
    strategy: "jwt",
  },

  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: "Email Address",
          type: "email",
          placeholder: "jsmith@yahoo.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        /*   const res = await fetch("/your/endpoint", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();
          if (res.ok && user) {
          return user;
        }
 */

        // If no error and we have user data, return it
        let user = users.find(
          (user) =>
            user.email === credentials?.email &&
            user.password === credentials?.password
        );

        if (user) return user;

        // Return null if user data could not be retrieved
        return null;
      },
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
