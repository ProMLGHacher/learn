import Image from 'next/image'
import styles from './page.module.scss'
import Link from 'next/link'

const Contacts = () => {
  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <Image src={'/point.svg'} width={27} height={39} alt='point icon' />
        <h3>Контакты</h3>
      </div>
      <div className={styles.contacts}>
        <div>
          <p className={styles.smallTitle}>адреса магазина</p>
          <h2 className={styles.adress}>г. Оренбург, ул. Пролетарская, 31</h2>
          <p className={styles.workTime}>Понедельник - Воскресенье</p>
          <p className={styles.workTime}>с 10:00 до 21:00</p>
        </div>
        <div>
          <p className={styles.smallTitle}>связь с нами</p>
          <a className={styles.phone} href="tel:+79878476868">+7 (987) 847-68-68</a>
          <Link href={'https://wa.me/79619379196'} target='_blank' className={styles.sm}>Whats’app</Link>
          <Link href={'https://t.me/iamgavr'} target='_blank' className={styles.sm}>Telegram</Link>
        </div>
      </div>
      
      <iframe className={styles.maps} src="https://yandex.ru/map-widget/v1/?ll=55.100685%2C51.765499&mode=search&oid=1120187347&ol=biz&z=17.71"></iframe>
    </section>
  )
}

export default Contacts