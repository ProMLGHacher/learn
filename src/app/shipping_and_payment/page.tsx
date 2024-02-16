import Footer from '@/components/landing/footer/Footer'
import Near from '@/components/landing/near/Near'
import styles from './page.module.scss'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <h1 style={{
            textAlign: 'center',
            marginBlock: '60px',
        }} className={styles.ttl}>Доставка и оплата</h1>
        <div className={styles.wrapper}>
            <div>
                <Image src={'/money.svg'} alt='' width={120} height={120} />
                <h3>Наличный расчёт</h3>
                <p>На данный момент оплатить заказ как при самовывозе, так и при доставке</p>
            </div>
            <div>
                <Image src={'/card-tick.svg'} alt='' width={120} height={120} />
                <h3>Банковский перевод</h3>
                <p>Для клиентов из других регионов оплата возможна банковским переводом.</p>
            </div>
            <div>
                <Image src={'/camera.svg'} alt='' width={102} height={102} />
                <h3>QR-код</h3>
                <p>Оплата по QR через Систему быстрых платежей. </p>
            </div>
        </div>

        <Near />
        <Footer />
    </div>
  )
}

export default page