import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const {email, password} = credentials
        
        if(email !== "john@gmail.com" || password !== '1234'){
         throw new Error("salom")
        }
        
        return <h2>Welcome</h2> 
        
        //{id: '1234', name: "John Doe", email: "john@gmail.com"}
           
        
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    // error: '/auth/error',
    // signOut: '/auth/signout'
  }


};

export default NextAuth(authOptions);
