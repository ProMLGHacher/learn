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
                <Link href={'/catalog/Iphone'} style={{
                    gridArea: "iphone"
                }} className={`${styles.category} ${styles.iphone}`}>
                    <h4>iPhone</h4>
                    <img src="/iphonecat.png" alt="iphone" />
                </Link>
                <div style={{
                    gridArea: "AirPods"
                }} className={styles.category}>
                    <h4>AirPods</h4>
                    <img src="/airpods.png" alt="iphone" />
                </div>
                <div style={{
                    gridArea: "Watch"
                }} className={styles.category}>
                    <h4>Watch</h4>
                    <img src="/airpods.png" alt="iphone" />
                </div>
                <div style={{
                    gridArea: "Mac"
                }} className={styles.category}>
                    <h4>Mac</h4>
                    <img src="/airpods.png" alt="iphone" />
                </div>
                <div style={{
                    gridArea: "iPad"
                }} className={styles.category}>
                    <h4>iPad</h4>
                    <img src="/airpods.png" alt="iphone" />
                </div>
                <div className={styles.category}>
                    <h4>iPhone</h4>
                    <img src="/airpods.png" alt="iphone" />
                </div>
                <div className={styles.category}>
                    <h4>iPhone</h4>
                    <img src="/airpods.png" alt="iphone" />
                </div>
                <div className={styles.category}>
                    <h4>iPhone</h4>
                    <img src="/airpods.png" alt="iphone" />
                </div>
            </div>
        </div>
    )
}

export default Categories