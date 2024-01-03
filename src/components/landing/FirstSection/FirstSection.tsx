import Image from 'next/image'
import styles from './FirstSection.module.scss'

const FirstSection = () => {
  return (
    <div className={styles.wrapper}>
        <h2 className={styles.title}>iPhone 15 и 15 Pro</h2>
        <h1 className={styles.subTitle}>Продажа iPhone в Оренбург</h1>
        <button className={styles.byButton}>Купить <Image src={'/arrow-right.svg'} alt='right arrow in by button' width={33} height={6} /></button>
        <img style={{
            alignSelf: 'flex-start'
        }} width={'90%'} src={'/iphone.png'} alt='iphone background' />
    </div>
  )
}

export default FirstSection