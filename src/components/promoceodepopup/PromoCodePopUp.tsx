'use client';

import styles from './PromoCodePopUp.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';



const PromoCodePopUp = () => {

    const [phone, setPhone] = useState('')
    const [fio, setFio] = useState("")

    const submit = useCallback(async (e: any) => {
        e?.preventDefault()

    }, [])

    return (
        <>
            <div id='promocodepopup' className={styles.wrapper}>
                <div style={{
                    position: 'relative',
                    overflow: 'hidden'
                }} className={styles.modal}>
                    <div className={styles.head}>
                        <a href={'#'}><Image src={'/exit.svg'} alt='close modal' width={20} height={20} /></a>
                    </div>
                    <div className={styles.main}>
                        <form>
                            <h4 className={styles.tlte}>Получи промокод на Скидку 10%</h4>
                            <div className={styles.edit}>
                                <p>Ваше ФИО<span className={styles.red}>*</span></p>
                                <input value={fio} onChange={(e) => {
                                    setFio(e.target.value)
                                }} required autoComplete='name' />
                            </div>
                            <div className={styles.edit}>
                                <p>Телефон<span className={styles.red}>*</span></p>
                                <input value={phone} onChange={(e) => {
                                    setPhone(e.target.value)
                                }} required type="tel" />
                            </div>
                            <button onClick={submit} className={`${styles.submit} tap`} type='submit'>Отправить <Image src={'/arrow-right-black.svg'} alt='отправить стрелка' width={32} height={7} /></button>
                            <p className={styles.personalData}>Нажимая на кнопку, вы даете согласие на обработку <Link href={'/policy.pdf'}>персональных данных</Link></p>
                        </form>
                        <div style={{
                            position: 'relative'
                        }} className={styles.reverse}>

                        </div>
                        <img className={styles.image} style={{
                            width: '20%',
                            objectFit: 'contain',
                            objectPosition: 'right',
                            position: 'absolute',
                            right: '0',
                        }} src="/tradeinpopup.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PromoCodePopUp