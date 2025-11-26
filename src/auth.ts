import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"
import Twitter from "next-auth/providers/twitter"
import LinkedIn from "next-auth/providers/linkedin"
// Note: TikTok and Pinterest providers might need custom implementation or community providers
// For now we'll stick to the built-in ones and add placeholders for others

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Google,
        Facebook,
        Twitter,
        LinkedIn,
    ],
    pages: {
        signIn: "/settings", // Redirect to settings page for connecting accounts
    },
    callbacks: {
        async session({ session }) {
            return session
        },
    },
})
