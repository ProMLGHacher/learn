import Image from 'next/image'
import styles from './PortableHeader.module.scss'
import Link from 'next/link'

const PortableHeader = () => {
  return (
    <div className={styles.wrapper}>
            <div className={styles.leftSide}>
                <Link href={'/'}><Image src={'/iStore.svg'} width={77} height={21.68} alt='logo' /></Link>
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
            </div>
            <div className={styles.rightSide}>
                <Image src={'/call.png'} alt='call' width={17} height={17} />
                <Link className={styles.phone} href={'tel:+79878476868'} >+7 (987) 847-68-68</Link>
            </div>
        </div>
  )
}

export default PortableHeader