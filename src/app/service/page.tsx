import Footer from '@/components/landing/footer/Footer'
import Near from '@/components/landing/near/Near'
import styles from './page.module.scss'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <div className={styles.wrp} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <h1 style={{
                    fontSize: '45px',
                    marginBottom: '16px',
                    marginTop: '80px',
                    textAlign: 'center'
                }}>Сервисный центр техники Apple</h1>
                <h4 style={{
                    textAlign: 'center',
                    fontSize: "26px",
                    fontWeight: '300',
                    marginBottom: '30px'
                }}>Первоклассные инженеры. Оригинальные запчасти</h4>
                <Link href={'https://t.me/iamgavr'} target="_blank" className='tap' style={{
                    textDecoration: 'none',
                    color: 'black',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid black',
                    borderRadius: '10px',
                    padding: '14px 38px',
                    marginBottom: '115px',
                    cursor: 'pointer'
                }}>Консультация</Link>
                <div className={styles.wrapper}>
                    <div>
                        <Image src={'/user-search.svg'} alt='' width={105} height={105} />
                        <h3>Инженеры</h3>
                        <p>Лучшие специалисты по ремонту техники Apple. Выполняем самые сложные ремонты.</p>
                    </div>
                    <div>
                        <Image src={'/home.svg'} alt='' width={101} height={101} />
                        <h3>Комфорт</h3>
                        <p>Уютный и красивый сервис по ремонту Вашей техники Apple.</p>
                    </div>
                    <div>
                        <Image src={'/tick-circle.svg'} alt='' width={96} height={96} />
                        <h3>Честная гарантия</h3>
                        <p>Предоставляем гарантию на все виды работ. На некоторые услуги действует пожизненная гарантия.</p>
                    </div>
                </div>
            </div>
            <Near />
            <Footer />
        </>
    )
}

export default page