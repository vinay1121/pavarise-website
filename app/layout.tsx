import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'PAVARISE ETHEREAL — Sovereign Cognitive Cybersecurity AI',
  description: "BUDDI is India's first fully offline cognitive cybersecurity AI. Predicts attacks before they happen. No cloud. No foreign data centres. 100% on your infrastructure.",
  keywords: ['cybersecurity AI India','offline SIEM','air-gapped cybersecurity','BUDDI','PAVARISE'],
  openGraph: {
    title: 'PAVARISE ETHEREAL — BUDDI',
    description: 'The Security AI That Cannot Be Turned Off by a Foreign Government',
    siteName: 'PAVARISE ETHEREAL',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
