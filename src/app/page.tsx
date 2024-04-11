import styles from './page.module.scss'
import FirstSection from '@/components/landing/FirstSection/FirstSection'
import Categories from '@/components/landing/Categories/Categories'
import Benefits from '@/components/landing/Benefits/Benefits'
import Service from '@/components/landing/Service/Service'
import Blog from '@/components/landing/Blog/Blog'
import './responsive.scss'
import Footer from '@/components/landing/footer/Footer'
import { Suspense } from 'react'
import TradeInPopUp from '@/components/tradein/TradeIn'
import PromoCodePopUp from '@/components/promoceodepopup/PromoCodePopUp'
import Foundalowerprice from '@/components/foundalowerprice/foundalowerprice'

export default function Home() {
  return (
    <>

      <main className={styles.main}>
        <FirstSection />
        <Categories />
        <Benefits />
        <Service />
        <Suspense fallback="">
          <Blog />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
