import type { Metadata } from 'next'
import { DM_Sans } from "next/font/google";
import './globals.css'

export const metadata: Metadata = {
  title: 'Kristopher Ong - Portfolio',
  description: 'Personal Portfolio'
}

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
