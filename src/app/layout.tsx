import type { Metadata } from 'next'
import './globals.css'
import TopHeader from '@/components/TopHeader/TopHeader'
import Header from '@/components/Header/Header'
import { SF } from './fonts/font'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  keywords: ''
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>

      </head>
      <body style={{
        fontFamily: SF.style.fontFamily
      }} className={SF.className}>
        <TopHeader />
        <Header />
        {children}
      </body>
    </html>
  )
}
