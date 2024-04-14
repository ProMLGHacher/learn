'use client';

import styles from './TradeIn.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { BASE_URL } from '@/utils/conts';
import { useRouter } from 'next/navigation';



const TradeInPopUp = () => {

    const [phone, setPhone] = useState('')
    const [phoneModel, setPhoneModel] = useState("")
    const [bodyCondition, setBodyCondition] = useState("")
    const [displayCondition, setDisplayCondition] = useState("")
    const [battaryCondition, setBattaryCondition] = useState("")

    const router = useRouter()


    const submit = useCallback(async (e: any) => {
        e?.preventDefault()
        fetch(BASE_URL + '/api/trade-in/request', {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            mode: 'cors',
            body: JSON.stringify({
                "phone": phone,
                "deviceModel": phoneModel,
                "corpusState": bodyCondition,
                "displayState": displayCondition,
                "batteryState": battaryCondition
            })
        })
        .then(e => {
            if (e.status == 200) {
                window.location.href = '/'
            }
        })
    }, [phoneModel, phone, bodyCondition, displayCondition, battaryCondition])

    return (
        <>
            <div id='tradeinpopup' className={styles.wrapper}>
                <div style={{
                    position: 'relative',
                    overflow: 'hidden'
                }} className={styles.modal}>
                    <div className={styles.head}>
                        <a href={'#'}><Image src={'/exit.svg'} alt='close modal' width={20} height={20} /></a>
                    </div>
                    <div className={styles.main}>
                        <form>
                            <h4 className={styles.tlte}>Trade-in</h4>
                            <div className={styles.edit}>
                                <p>Ваш номер телефона<span className={styles.red}>*</span></p>
                                <input value={phone} onChange={(e) => {
                                    setPhone(e.target.value)
                                }} type="name" required autoComplete='name' />
                            </div>
                            <div className={styles.edit}>
                                <p>Модель телефона<span className={styles.red}>*</span></p>
                                <input value={phoneModel} onChange={(e) => {
                                    setPhoneModel(e.target.value)
                                }} required minLength={11} maxLength={11} type="tel" />
                            </div>
                            <div className={styles.edit}>
                                <p>Состояние корпуса</p>
                                <input value={bodyCondition} onChange={(e) => {
                                    setBodyCondition(e.target.value)
                                }} type="email" />
                            </div>
                            <div className={styles.edit}>
                                <p>Состояние дисплея</p>
                                <input value={displayCondition} onChange={(e) => {
                                        setDisplayCondition(e.target.value)
                                    }} type="text" />
                            </div>
                            {/* <div className={styles.edit}>
                                <p>Состояние дисплея</p>
                                <div style={{
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <select value={displayCondition} onChange={(e) => {
                                        setDisplayCondition(e.target.value)
                                    }} name="" id="">
                                        <option value="Phone">Перезвонить</option>
                                        <option value="Email">Написать</option>
                                    </select>
                                    <Image style={{
                                        position: 'absolute',
                                        right: '10px',
                                        objectPosition: 'center',
                                        pointerEvents: 'none'
                                    }} src={'/dropdown-icon.svg'} alt='' width={16} height={16} />
                                </div>
                            </div> */}
                            <div className={styles.edit}>
                                <p>Состояние аккумулятора</p>
                                <input value={battaryCondition} onChange={(e) => {
                                        setBattaryCondition(e.target.value)
                                    }} type="text" />
                            </div>
                            {/* <div className={styles.edit}>
                                <p>Состояние аккумулятора</p>
                                <div style={{
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <select value={battaryCondition} onChange={(e) => {
                                        setBattaryCondition(e.target.value)
                                    }} name="" id="">
                                        <option value="Phone">Перезвонить</option>
                                        <option value="Email">Написать</option>
                                    </select>
                                    <Image style={{
                                        position: 'absolute',
                                        right: '10px',
                                        objectPosition: 'center',
                                        pointerEvents: 'none'
                                    }} src={'/dropdown-icon.svg'} alt='' width={16} height={16} />
                                </div>
                            </div> */}
                            <button onClick={submit} className={`${styles.submit} tap`} type='submit'>Отправить <Image src={'/arrow-right-black.svg'} alt='отправить стрелка' width={32} height={7} /></button>
                            <p className={styles.personalData}>Нажимая на кнопку, вы даете согласие на обработку <Link href={'/policy.pdf'}>персональных данных</Link></p>
                        </form>
                        <div style={{
                            position: 'relative'
                        }} className={styles.reverse}>

                        </div>
                        <img className={styles.image} style={{
                            width: '45%',
                            objectFit: 'contain',
                            objectPosition: 'right',
                            maxHeight: '92%',
                            position: 'absolute',
                            right: '0',
                            bottom: '0',
                        }} src="/tradeinpopup.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TradeInPopUp