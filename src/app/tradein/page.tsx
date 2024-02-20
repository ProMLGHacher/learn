import Footer from '@/components/landing/footer/Footer'
import Near from '@/components/landing/near/Near'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './page.module.scss'

const page = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.wrp}>
                    <div>
                        <h1 className={styles.h1}>Trade-IN</h1>
                        <h5 className={styles.h5}>Это умный, удобный и экологичный способ покупки новых<br />устройств. Теперь вам есть куда принести свои устройства<br />Apple, которые вы решили обновить, получить при этом выгоду<br />себе и принести пользу окружающей среде.</h5>
                    </div>
                    <Link href={'/contacts'} className={`tap`} style={{
                        textDecoration: 'none',
                        padding: '12px 24px',
                        backgroundColor: 'transparent',
                        border: '1px solid black',
                        color: 'black',
                        borderRadius: '30px',
                        fontSize: '18px',
                        fontWeight: 100,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                        marginTop: '30px',
                    }}>Консультация <Image style={{
                        filter: 'invert(100%)'
                    }} src={'/arrow-right.svg'} alt='right arrow in by button' width={33} height={6} /></Link>
                </div>
                <Image className={styles.img} src={'/image2022.png'} alt='apple vision pro image' width={703} height={538} />
            </div>
            <h3 style={{
                fontSize: '40px'
            }} className={styles.wrapper}>Как это работает?</h3>
            <div className={styles.wrper}>
                <div>
                    <h3>Принесите своё устройство в любой из магазинов</h3>
                    <p>Мы принимаем все модели iPhone, iPad, AirPods, Apple Watch и ноутбуки Mac. Устройство должно быть в рабочем состоянии (включаться).</p>
                </div>
                <div>
                    <h3>Передайте своё устройство на оценку</h3>
                    <p>мы проведем диагностику для оценки его стоимости. При оценке мы учитываем повреждения и царапины на корпусе, экране, сколы и другие следы использования.</p>
                </div>
                <div>
                    <h3>Используйте скидку при покупке нового устройства</h3>
                    <p>Что вы хотите купить - решать вам, ограничений по ассортименту нет. </p>
                </div>
            </div>
            <Near />
            <Footer />
        </>
    )
}

export default page
