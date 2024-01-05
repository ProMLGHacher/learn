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
      <div className={`${styles.slider} ${active ? styles.active : ""}`}>
        <button onClick={exitClickHandler}><Image src={'/exit.svg'} alt='close' width={18} height={18} /> </button>
        <div className={styles.categories}>
          <Link onClick={exitClickHandler} href={"#categories"}>iPhone</Link>
          <Link onClick={exitClickHandler} href={"#categories"}>AirPods</Link>
          <Link onClick={exitClickHandler} href={"#categories"}>Mac</Link>
          <Link onClick={exitClickHandler} href={"#categories"}>Watch</Link>
          <Link onClick={exitClickHandler} href={"#categories"}>iPad</Link>
          <Link onClick={exitClickHandler} href={"#categories"}>Dyson</Link>
          <Link onClick={exitClickHandler} href={"#categories"}>Аксесуары</Link>
          <Link onClick={exitClickHandler} href={"#categories"}>Игровые приставки</Link>
        </div>
        <div className={styles.divider}></div>
        <nav>
          <Link onClick={exitClickHandler} href={"#categories"}>Каталог</Link>
          <Link onClick={exitClickHandler} href={"#categories"}>Гарантия</Link>
          <Link onClick={exitClickHandler} href={"#categories"}>Сервисный центр</Link>
          <Link onClick={exitClickHandler} href={"#categories"}>Программа лояльности</Link>
          <Link onClick={exitClickHandler} href={"#categories"}>Доставка и оплата</Link>
        </nav>
        <div className={styles.divider}></div>
        <div className={styles.contacts}>
          <div className={styles.phone}>
            <Image src={'/call.png'} alt='phone' width={17} height={17} />
            <Link href={'tel:+70000000000'}>+7 (000) 000-00-00</Link>
          </div>
          <div className={styles.sm}>
            <Link href={'#'}>Whats’app</Link>
            <Link href={'#'}>Telegram</Link>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftSide}>
          <button onClick={burgerClickHandler}><Image src={'/burger.svg'} width={22} height={10} alt='burger' /></button>
        </div>
        <div className={styles.center}>
          <Image src={'/logo.png'} width={77} height={21.68} alt='logo' />
        </div>
        <div className={styles.rightSide}>
          <button><Image src={'/call.png'} alt='call' width={20} height={20} /></button>
        </div>
      </div>
    </>
  )
}

export default MobileHeader