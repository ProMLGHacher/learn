import Image from 'next/image'
import styles from './page.module.scss'

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
          <a className={styles.phone} href="tel:+73532976969">+7 (353) 297-69-69</a>
          <p className={styles.sm}>Whats’app</p>
          <p className={styles.sm}>Telegram</p>
        </div>
      </div>
      
      <iframe className={styles.maps} src="https://yandex.ru/map-widget/v1/?ll=55.100685%2C51.765499&mode=search&oid=1120187347&ol=biz&z=17.71"></iframe>
    </section>
  )
}

export default Contacts