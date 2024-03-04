/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import styles from './Categories.module.scss'
import Link from 'next/link'

const Categories = () => {
    return (
        <div id='categories' className={styles.wrapper}>
            <div className={styles.title}>
                <Image src={'/browse.svg'} alt='browse icon' width={35} height={35} />
                <h2>Лучшие устройства Apple в одном магазине</h2>
            </div>
            <div className={styles.categories}>
                <Link href={'/catalog/iPhone'} style={{
                    gridArea: "iphone"
                }} className={`${styles.category} ${styles.iphone} tap`}>
                    <h4>iPhone</h4>
                    <img src="\cat\iPhone-cat.png" alt="iphone" />
                </Link>
                <Link href={'/catalog/AirPods'} style={{
                    gridArea: "AirPods"
                }} className={`${styles.category} tap`}>
                    <h4>AirPods</h4>
                    <img src="/cat/AirPods-cat.png" alt="AirPods" />
                </Link>
                <Link href={'/catalog/Watch'} style={{
                    gridArea: "Watch"
                }} className={`${styles.category} tap`}>
                    <h4>Watch</h4>
                    <img src="\cat\Watch-cat.png" alt="Watch" />
                </Link>
                <Link href={'/catalog/Mac'} style={{
                    gridArea: "Mac"
                }} className={`${styles.category} tap`}>
                    <h4>Mac</h4>
                    <img src="\cat\mac-cat.png" alt="Mac" />
                </Link>
                <Link href={'/catalog/iPad'} style={{
                    gridArea: "iPad"
                }} className={`${styles.category} tap`}>
                    <h4>iPad</h4>
                    <img src="\cat\iPad-cat.png" alt="iPad" />
                </Link>
                <Link href={'/catalog/accessories'} className={`${styles.category} ${styles.acs} tap`}>
                    <h4>Аксессуары</h4>
                    <img src="\cat\usb-cat.png" alt="Аксессуары" />
                </Link>
                <Link href={'/catalog/consoles'} className={`${styles.category} tap`}>
                    <img src="\cat\ps-cat.png" alt="Игровые приставки" />
                    <h4>Игровые приставки</h4>
                </Link>
                <Link href={'/catalog/Dyson'} className={`${styles.category} tap`}>
                    <h4>Dyson</h4>
                    <img src="\cat\dyson-cat.png" alt="Dyson" />
                </Link>
            </div>
        </div>
    )
}

export default Categories