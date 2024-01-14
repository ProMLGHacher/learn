import Image from 'next/image'
import styles from './PortableHeader.module.scss'
import Link from 'next/link'

const PortableHeader = () => {
  return (
    <div className={styles.wrapper}>
            <div className={styles.leftSide}>
                <Link href={'/'}><Image src={'/logo.png'} width={77} height={21.68} alt='logo' /></Link>
                <nav className={styles.nav}>
                    <Link className={styles.navItem} href={'/'} >iPhone</Link>
                    <Link className={styles.navItem} href={'/'} >AirPods</Link>
                    <Link className={styles.navItem} href={'/'} >Mac</Link>
                    <Link className={styles.navItem} href={'/'} >Watch</Link>
                    <Link className={styles.navItem} href={'/'} >iPad</Link>
                    <Link className={styles.navItem} href={'/'} >Dyson</Link>
                    <Link className={styles.navItem} href={'/'} >Игровые приставки</Link>
                    <Link className={styles.navItem} href={'/'} >Аксесуары</Link>
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