import Image from 'next/image'
import styles from './Near.module.scss'

const Near = () => {
    return (
        <section className={styles.footer}>
            <div>
                <h5>Всегда рядом</h5>
                <p>Оставьте заявку и мы свяжемся<br />с вами в ближайшее время.</p>
                <button className={`${styles.button} tap`}>Консультация <Image src={'/arrow-right.svg'} alt='right arrow in by button' width={33} height={6} /></button>
            </div>
        </section>
    )
}

export default Near