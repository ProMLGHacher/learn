import Image from 'next/image'
import styles from './Footer.module.scss'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrp}>
                <Image style={{
                    filter: 'invert(100%)'
                }} src={'/iStore.svg'} alt='right arrow in by button' width={129} height={36} />
                <nav className={styles.nav}>
                    <Link className={styles.navItem} href={"/catalog/iPhone"}>iPhone</Link>
                    <Link className={styles.navItem} href={"/catalog/AirPods"}>AirPods</Link>
                    <Link className={styles.navItem} href={"/catalog/Watch"}>Watch</Link>
                    <Link className={styles.navItem} href={"/catalog/Mac"}>Mac</Link>
                    <Link className={styles.navItem} href={"/catalog/iPad"}>iPad</Link>
                    <Link className={styles.navItem} href={"/catalog/accessories"}>Аксесуары</Link>
                    <Link className={styles.navItem} href={"/catalog/consoles"}>Игровые приставки</Link>
                    <Link className={styles.navItem} href={"/catalog/Dyson"}>Dyson</Link>
                </nav>
                <Link className={styles.phone} href={'tel:+79878476868'} >+7 (987) 847-68-68</Link>
            </div>
            <p className={styles.of}>Сайт носит сугубо информационный характер и не является публичной офертой, определяемой Статьей 437 (2) ГК РФ. Apple, логотип Apple и изображения Apple являются зарегистрированными товарными знаками компании Apple Inc.  App Store является знаком обслуживания компании Apple Inc. Instagram принадлежит компании Meta, признанной экстремистской организацией и запрещенной</p>
        </footer>
    )
}

export default Footer