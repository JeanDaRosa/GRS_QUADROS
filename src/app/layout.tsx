import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from './components/header/index'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GRS Quadros - Início',
  description: 'GRS Quadros',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <main >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
