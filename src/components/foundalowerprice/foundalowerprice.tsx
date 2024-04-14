'use client';

import styles from './foundalowerprice.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { BASE_URL } from '@/utils/conts';
import { useRouter } from 'next/navigation';



const Foundalowerprice = () => {

    const [phone, setPhone] = useState('')
    const [fio, setFio] = useState("")
    const [model, setModel] = useState("")
    const [link, setLink] = useState("")

    const submit = useCallback(async (e: any) => {
        e?.preventDefault()
        fetch(BASE_URL + '/api/request-for-change-cost', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            mode: 'cors',
            body: JSON.stringify({
                "fullname": fio,
                "phone": phone,
                "deviceModel": model,
                "urlToOtherStore": link
            })
        })
            .then(e => {
                if (e.status == 200) {
                    window.location.href = '/'
                }
            })
    }, [phone, fio, model, link])

    return (
        <>
            <div id='foundalowerprice' className={styles.wrapper}>
                <div style={{
                    position: 'relative',
                    overflow: 'hidden'
                }} className={styles.modal}>
                    <div className={styles.head}>
                        <a href={'#'}><Image src={'/exit.svg'} alt='close modal' width={20} height={20} /></a>
                    </div>
                    <div className={styles.main}>
                        <form>
                            <h4 className={styles.tlte}>Нашли цену ниже?</h4>
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
                            <div className={styles.edit}>
                                <p>Модель техники</p>
                                <input value={model} onChange={(e) => {
                                    setModel(e.target.value)
                                }} required type="tel" />
                            </div>
                            <div className={styles.edit}>
                                <p>Ссылка на другой магазин</p>
                                <input value={link} onChange={(e) => {
                                    setLink(e.target.value)
                                }} required type="tel" />
                            </div>
                            <button onClick={submit} className={`${styles.submit} tap`} type='submit'>Отправить <Image src={'/arrow-right-black.svg'} alt='отправить стрелка' width={32} height={7} /></button>
                            <p className={styles.personalData}>Нажимая на кнопку, вы даете согласие на обработку <Link href={'/policy.pdf'}>персональных данных</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Foundalowerprice