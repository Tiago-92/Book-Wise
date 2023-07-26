/* eslint-disable camelcase */
import './globals.css'
import type { Metadata } from 'next'

import { Nunito_Sans } from 'next/font/google'

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'BookWise',
  description: 'App para você gerenciar suas recomendações de livros',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
