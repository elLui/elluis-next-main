import NextAuth, {NextAuthOptions} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';


// TODO :: 1. add google auth
// TODO :: 2. add facebook auth

// we are using an authOptions object to add types to the NextAuth() function through the NextAuthOptions interface

export const authOptions: NextAuthOptions = {
    providers: [

        CredentialsProvider({
        // The name to display on the sign-in form (e.g. "Sign in with...")
        name: "Credentials", // `credentials` is used to generate a form on the sign-in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
            username: {label: "Username", type: "text", placeholder: "numeroTres@example.com"},
            password: {label: "Password", type: "password"}
        }, async authorize(credentials, req) {
            // Add logic here to look up the user from the credentials supplied
            // const user = {id: "1", name: "elluis", email: "elluis@example.com"}

            // use /api/login route to verify credentials
            const response = await fetch("http://localhost:3000/api/login", {
                method: "POST", headers: {
                    "Content-Type": "application/json"
                }, body: JSON.stringify({
                    username: credentials?.username, password: credentials?.password,
                }),
            })

            const user = await response.json();


            if (user) {
                // Any object returned will be saved in `user` property of the JWT
                return user
            } else {
                // If you return null then an error will be displayed advising the user to check their details.
                return null

                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            }
        }
    })],

    // default strategy JWT
    // default maxAge 30 days
    session: {}
}

const handler = NextAuth(authOptions);


export {handler as GET, handler as POST};
