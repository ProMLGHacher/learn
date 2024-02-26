'use client'
import Image from 'next/image';
import styles from './MobileHeader.module.scss'
import Link from 'next/link';
import { useCallback, useState } from 'react';

const MobileHeader = () => {
  const [active, setActive] = useState<boolean>(false)

  const burgerClickHandler = useCallback(() => {
    setActive(true)
  }, [])

  const exitClickHandler = useCallback(() => {
    setActive(false)
  }, [])

  return (
    <>
      <aside className={`${styles.slider} ${active ? styles.active : ""}`}>
        <button onClick={exitClickHandler}><Image src={'/exit.svg'} alt='close' width={18} height={18} /> </button>
        <div className={styles.categories}>
          <Link onClick={exitClickHandler} href={"/catalog/iPhone"}>iPhone</Link>
          <Link onClick={exitClickHandler} href={"/catalog/AirPods"}>AirPods</Link>
          <Link onClick={exitClickHandler} href={"/catalog/Watch"}>Watch</Link>
          <Link onClick={exitClickHandler} href={"/catalog/Mac"}>Mac</Link>
          <Link onClick={exitClickHandler} href={"/catalog/iPad"}>iPad</Link>
          <Link onClick={exitClickHandler} href={"/catalog/accessories"}>Аксесуары</Link>
          <Link onClick={exitClickHandler} href={"/catalog/consoles"}>Игровые приставки</Link>
          <Link onClick={exitClickHandler} href={"/catalog/Dyson"}>Dyson</Link>
        </div>
        <div className={styles.divider}></div>
        <nav>
          <Link onClick={exitClickHandler} href={"/#categories"}>Каталог</Link>
          <Link onClick={exitClickHandler} href={"/warranty"}>Гарантия</Link>
          <Link onClick={exitClickHandler} href={"/service"}>Сервисный центр</Link>
          <Link onClick={exitClickHandler} href={"/shipping_and_payment"}>Доставка и оплата</Link>
          <Link onClick={exitClickHandler} href={"/contacts"}>Контакты</Link>
          <Link onClick={exitClickHandler} href={"/tradein"}>Trade In</Link>
          <Link onClick={exitClickHandler} href={"/installment"}>Рассрочка</Link>
        </nav>
        <div className={styles.divider}></div>
        <div className={styles.contacts}>
          <div className={styles.phone}>
            <Image src={'/call.png'} alt='phone' width={17} height={17} />
            <Link href={'tel:+79878476868'}>+7 (987) 847-68-68</Link>
          </div>
          <div className={styles.sm}>
            <Link href={'https://wa.me/79619379196'}>Whats’app</Link>
            <Link href={'https://t.me/iamgavr'}>Telegram</Link>
          </div>
        </div>
      </aside>
      <div className={styles.wrapper}>
        <div className={styles.leftSide}>
          <button onClick={burgerClickHandler}><Image src={'/burger.svg'} width={22} height={10} alt='burger' /></button>
        </div>
        <Link href={'/'} className={styles.center}>
          <Image src={'/iStore.svg'} width={77} height={21.68} alt='logo' />
        </Link>
        <div className={styles.rightSide}>
          <Link href={'tel:+79878476868'}><Image src={'/call.png'} alt='call' width={20} height={20} /></Link>
        </div>
      </div>
    </>
  )
}

export default MobileHeader