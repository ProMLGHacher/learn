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
                    <Link className={styles.link} href={"/"}>Сервисный центр</Link>
                    <Link className={styles.link} href={"/"}>Программа лояльности</Link>
                    <Link className={styles.link} href={"/"}>Доставка и оплата</Link>
                </div>
                <div className={styles.innerNav}>
                    <Link className={styles.link} href={"/"}>Whats’app</Link>
                    <Link className={styles.link} href={"/"}>Telegram</Link>
                </div>
            </div>
        </nav>
    )
}

export default TopHeader