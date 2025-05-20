import type React from "react"
import "@/app/globals.css"
import { Inter, Style_Script} from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Metadata } from "next"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})
const styleScript = Style_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-style",
})

export const metadata: Metadata = {
  title: "Madhav Gyawali",
  description: "Portfolio website of Madhav Gyawali, a CSIT student and technology enthusiast.",
  icons: {
    icon: [
      { url: '/favicon.ico/', sizes: 'any'},
      { url: '/icon.png/', type: 'image/png', sizes: '96x96' },
    ],
    apple: [
      { url: '/apple-icon.png/', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${styleScript.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}