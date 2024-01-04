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
        <button onClick={exitClickHandler}>exit</button>
        <Link onClick={exitClickHandler} href={"#categories"}>Скролл</Link>
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