import Image from 'next/image';
import Link from 'next/link';
import styles from './MobileHeader.module.scss'

const MobileHeader = () => {
  return (
    <div className={styles.wrapper}>
            <div className={styles.leftSide}>
                <Image src={'/logo.png'} width={77} height={21.68} alt='logo' />
            </div>
            <div className={styles.rightSide}>
                <button className={styles.search}><Image src={'/search.png'} alt='search' width={24} height={24} /></button>
                <Image src={'/call.png'} alt='call' width={17} height={17} />
                <Link className={styles.phone} href={'tel:+79878884054'} >+7 (000) 000-00-00</Link>
            </div>
        </div>
  )
}

export default MobileHeader