import type { Metadata } from 'next'
import './globals.scss'
import TopHeader from '@/components/TopHeader/TopHeader'
import Header from '@/components/Header/Header'
import { SF } from './fonts/font'
import Foundalowerprice from '@/components/foundalowerprice/foundalowerprice'
import PromoCodePopUp from '@/components/promoceodepopup/PromoCodePopUp'
import TradeInPopUp from '@/components/tradein/TradeIn'

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
      <head>
        <meta name="google-site-verification" content="_Mcxgv_53f7moh5Uxh3zrNW-5tHyvS-Gv1-5y-yomTE" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"></meta>
      </head>
      <body style={{
        fontFamily: SF.style.fontFamily
      }} className={SF.className}>
        <TradeInPopUp />
        <PromoCodePopUp />
        <Foundalowerprice />
        <TopHeader />
        <Header />
        {children}
      </body>
    </html>
  )
}
