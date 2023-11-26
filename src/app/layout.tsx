import type {Metadata} from 'next'
import {League_Spartan} from 'next/font/google'
import './globals.css'
import NavBar from "@/components/NavBar/NavBar";
import Provider from "@/utils/ThemeProvider";


const spartan = League_Spartan({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Spring Invoice',
    description: 'Next.js Application supported by a Spring Boot Rest Api',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={"bg-bg-light dark:bg-bg-dark"}>
            <Provider>
                <>
                    <NavBar/>
                    <main className={"h-full w-screen px-6 md:px-12 xl:px-0 "}>
                        {children}
                    </main>
                </>
            </Provider>
            </body>
        </html>
    )
}
