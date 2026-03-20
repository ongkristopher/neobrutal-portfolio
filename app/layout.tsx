import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: {
    default: "Kristopher Ong — Web Developer & UI/UX Designer",
    template: "%s | Kristopher Ong",
  },
  description:
    "Senior Web Developer and UI/UX Designer based in Bulacan, Philippines. Specializing in Angular, Next.js, React, and modern web technologies with 8+ years of experience.",
  keywords: [
    "web developer",
    "frontend developer",
    "angular",
    "react",
    "next.js",
    "ui/ux designer",
    "philippines",
    "kristopher ong",
  ],
  authors: [{ name: "Kristopher Ong" }],
  creator: "Kristopher Ong",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Kristopher Ong — Web Developer & UI/UX Designer",
    description:
      "Senior Web Developer and UI/UX Designer based in Bulacan, Philippines. Specializing in Angular, Next.js, React, and modern web technologies.",
    siteName: "Kristopher Ong Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kristopher Ong — Web Developer & UI/UX Designer",
    description:
      "Senior Web Developer and UI/UX Designer based in Bulacan, Philippines.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kristopher Ong",
              jobTitle: "Senior Web Developer",
              description:
                "Web Developer and UI/UX Designer based in Bulacan, Philippines",
              sameAs: [
                "https://github.com/ongkristopher",
                "https://linkedin.com/in/ongkristopher",
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
