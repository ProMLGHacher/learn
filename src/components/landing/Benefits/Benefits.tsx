import Image from 'next/image'
import styles from './Benefits.module.scss'

const Benefits = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.title}>
            <Image src={'/warn.svg'} alt='why we icon' width={39} height={39} />
            <h5>Почему мы подойдем именно вам?</h5>
        </div>
        <div className={styles.benefits}>
            <div className={styles.benefit}>
                <Image src={'/heart.svg'} width={150} height={150} alt='heart' />
                <h4>Клиентский сервис</h4>
                <p>Премиальное обслуживание. Бесплатная консультация и техническая поддержка.</p>
            </div>
            <div className={styles.benefit}>
                <Image src={'/fire.svg'} width={150} height={150} alt='heart' />
                <h4>Оригинальная техника</h4>
                <p>Мы продаем только новую и оригинальную технику Apple, Гарантия на технику две недели.</p>
            </div>
            <div className={styles.benefit}>
                <Image src={'/clock.svg'} width={150} height={150} alt='heart' />
                <h4>Актуальность</h4>
                <p>В наличии представлен весь актуальный ассортимент моделей и флагманов линейки</p>
            </div>
        </div>
    </div>
  )
}

export default Benefits