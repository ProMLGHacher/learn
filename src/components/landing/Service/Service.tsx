import Image from 'next/image'
import styles from './Service.module.scss'
import Link from 'next/link'

const Service = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.title}>
            <Image src={'/msg.svg'} alt='Сервисный центр иконка' width={39} height={39} />
            <h4>Сервисный центр</h4>
        </div>
        <div className={styles.main}>
            <h4>Собственный центр</h4>
            <h5>Лучшее качество ремонта, с профессионалами своего дела</h5>
            <Link href={'/contacts'} className={`${styles.button} tap`}>Консультация <Image src={'/arrow-right.svg'} alt='right arrow in by button' width={33} height={6} /></Link>
        </div>
    </div>
  )
}

export default Service