'use client';

import styles from './PromoCodePopUp.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { BASE_URL } from '@/utils/conts';



const PromoCodePopUp = () => {

    const [email, setEmail] = useState('')
    const [fio, setFio] = useState("")

    const submit = useCallback(async (e: any) => {
        e?.preventDefault()
        fetch(BASE_URL + '/api/discount', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            mode: 'cors',
            body: JSON.stringify({
                "email": email,
                "fullname": fio
            })
        })
            .then(e => {
                if (e.status == 200) {
                    window.location.href = '/'
                }
            })
    }, [email, fio])

    useEffect(() => {
        let times = 0

        const increment = () => {
            setTimeout(() => {
                console.log(times);

                if (times >= 3) {
                    window.location.href = '#promocodepopup'
                } else {
                    times += 1
                    increment()
                }
            }, 1000)
        }

        increment()
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
                                <p>Почта<span className={styles.red}>*</span></p>
                                <input value={email} onChange={(e) => {
                                    setEmail(e.target.value)
                                }} required type="email" />
                            </div>
                            <button onClick={submit} className={`${styles.submit} tap`} type='submit'>Отправить <Image src={'/arrow-right-black.svg'} alt='отправить стрелка' width={32} height={7} /></button>
                            <p className={styles.personalData}>Нажимая на кнопку, вы даете согласие на обработку <Link href={'/policy.pdf'}>персональных данных</Link></p>
                        </form>
                        <img className={styles.image} style={{
                            width: '27%',
                            objectFit: 'contain',
                            objectPosition: 'right',
                            position: 'absolute',
                            right: '0',
                            bottom: '0'
                        }} src="/tradeinpopup.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PromoCodePopUp