import Image from 'next/image'
import styles from './Near.module.scss'
import Link from 'next/link'

const Near = () => {
    return (
        <>
            <div className={styles.title}>
                <Image src={'/msg.svg'} alt='Сервисный центр иконка' width={39} height={39} />
                <h4>Сервисный центр</h4>
            </div>
            <section className={styles.footer}>
                <div>
                    <h5>Всегда рядом</h5>
                    <p>Оставьте заявку и мы свяжемся<br />с вами в ближайшее время.</p>
                    <Link href={'/contacts'} className={`${styles.button} tap`}>Консультация <Image src={'/arrow-right.svg'} alt='right arrow in by button' width={33} height={6} /></Link>
                </div>
            </section>
        </>
    )
}

export default Near