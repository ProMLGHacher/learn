/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import styles from './FirstSection.module.scss'
import Link from 'next/link'

const FirstSection = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h2 className={styles.title}>iPhone 15 и 15 Pro</h2>
        <h1 className={styles.subTitle}>Продажа iPhone в Оренбург</h1>
        <Link className={styles.byLink} href={'/catalog/iPhone'}>
          <button className={`${styles.byButton} tap`}>Купить <Image src={'/arrow-right.svg'} alt='right arrow in by button' width={33} height={6} /></button>
        </Link>
      </div>
      <img className={styles.img} width={'60%'} src={'/iphone.png'} alt='iphone background' />
    </div>
  )
}

export default FirstSection