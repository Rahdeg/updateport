import type { Metadata } from 'next'
// import { Poppins } from 'next/font/google'
import localFont from "next/font/local"
import './globals.css'
import { cn } from '@/lib/utils'
import { Toaster } from 'sonner'
import { siteConfig } from '@/config/site'

// const inter = Poppins({ subsets: ['latin'], weight: "200" })

const headingFont = localFont({
  src: "../public/font/CroissantOne-Regular.ttf"
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/logo.png",
      href: "/logo.png"
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn("h-full w-full ", headingFont.className)}>
        <Toaster position='top-right' />
        {children}
      </body>
    </html>
  )
}
