import Image from 'next/image'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <h5>Всегда рядом</h5>
                <p>Оставьте заявку и мы свяжемся с вами в ближайшее время.</p>
                <button className={styles.button}>Консультация <Image src={'/arrow-right.svg'} alt='right arrow in by button' width={33} height={6} /></button>
            </div>
        </footer>
    )
}

export default Footer