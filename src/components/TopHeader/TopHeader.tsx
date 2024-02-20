import Link from 'next/link'
import React from 'react'
import styles from './TopHeader.module.scss'


const TopHeader = () => {
    return (
        <nav className={styles.nav}>
            <div>
                <div className={styles.innerNav}>
                    <Link className={styles.link} href={"/#categories"}>Каталог</Link>
                    <Link className={styles.link} href={"/warranty"}>Гарантия</Link>
                    <Link className={styles.link} href={"/service"}>Сервисный центр</Link>
                    <Link className={styles.link} href={"/shipping_and_payment"}>Доставка и оплата</Link>
                    <Link className={styles.link} href={"/contacts"}>Контакты</Link>
                    <Link className={styles.link} href={"/tradein"}>Trade In</Link>
                    <Link className={styles.link} href={"/installment"}>Рассрочка</Link>
                </div>
                <div className={styles.innerNav}>
                    <Link className={styles.link} href={"https://wa.me/79619379196"} target='_blank'>Whats’app</Link>
                    <Link className={styles.link} href={"https://t.me/iamgavr"} target='_blank'>Telegram</Link>
                </div>
            </div>
        </nav>
    )
}

export default TopHeader