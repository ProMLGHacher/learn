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
                }}>iStore для бизнеса</h1>
                <h4 style={{
                    textAlign: 'center',
                    fontSize: "26px",
                    fontWeight: '300',
                    marginBottom: '30px'
                }}>Не откладывайте покупку — приобретайте технику Apple <br /> для бизнеса на выгодных платёжных условиях</h4>
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
                }}> <span style={{
                    marginInline: '40px'
                }}>Заявка</span> <Image style={{
                    filter: 'invert(100%)'
                }} src={'/arrow-right.svg'} alt='right arrow in by button' width={33} height={6} /></Link>
                <h3 style={{
                    fontSize: '32px',
                    marginTop: '100px',
                    marginBottom: '20px',
                    textAlign: 'center'
                }}>Как это работает?</h3>
                <div className={styles.wrapper}>
                    <div>
                        <h3 style={{
                            textAlign: 'center'
                        }}>Оставьте заявку на сайте</h3>
                        <p style={{
                            textAlign: 'center'
                        }}>Дождитесь звонка менеджера <br /> в течение 24 часов</p>
                    </div>
                    <div>
                        <h3 style={{
                            textAlign: 'center'
                        }}>Узнайте о программе</h3>
                        <p style={{
                            textAlign: 'center'
                        }}>Проведем диагностику для оценки<br />его стоимости. </p>
                    </div>
                    <div>
                        <h3 style={{
                            textAlign: 'center'
                        }}>Работа по договору</h3>
                        <p style={{
                            textAlign: 'center'
                        }}>Мы работаем только по договору —<br />так проще и безопаснее для всех</p>
                    </div>
                </div>
            </div>
            <Near />
            <Footer />
        </>
    )
}

export default page