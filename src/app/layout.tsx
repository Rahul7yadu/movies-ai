import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
const inter = Inter({ subsets: ['latin'] })
import Navbar from '@/components/navbar'
export const metadata: Metadata = {
  title: 'Movies.Ai',
  description: 'Created by Rahul yadu',
  icons:'/logo.jpg'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
         attribute="class"
         defaultTheme="system"
         enableSystem
         disableTransitionOnChange
        >
        <Navbar/>
        <main >
        {children}
        </main>
        </ThemeProvider>
        </body>
    </html>
  )
}
