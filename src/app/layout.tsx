import type { Metadata } from 'next'
import './globals.scss'
import TopHeader from '@/components/TopHeader/TopHeader'
import Header from '@/components/Header/Header'
import { SF } from './fonts/font'

export const metadata: Metadata = {
  title: 'iStore в Оренбурге: Оригинальная Техника Apple и Лучшие Цены на iPhone с Бесплатной Доставкой',
  description: 'iStore Оренбург! Погрузитесь в удивительный опыт использования продукции Apple с нашим дружелюбным сервисом. Оригинальная техника, стильные аксессуары и выгодные предложения – всё, что вам нужно для полного погружения в цифровой мир Apple. Покупайте у нас с комфортом!',
  keywords: 'iStore, iStore в Оренбурге, iStore Оренбург, Техника Apple в Оренбурге, Аксессуары Apple, iStore Россия, Apple Watch, Оренбург, Сервисное обслуживание устройств Apple, MacBook Оренбург, бесплатная доставка техники Apple',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
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
