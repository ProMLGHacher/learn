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
                    <Image className={styles.imgmobile} src={'/5_iphone.png'} alt='apple vision pro image' width={294} height={211} />
                    <div>
                        <h1 className={styles.h1}>Платить полностью или<br />по частям - решать вам.</h1>
                        <h5 className={styles.h5}>Хотите новый гаджет от Apple, но нет<br />возможности сразу его оплатить?<br />
                            Воспользуйтесь рассрочкой или<br />
                            кредитом в наших магазинах.</h5>
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
                <img className={styles.img} src={'/5_iphone.png'} alt='apple vision pro image'/>
            </div>
            <Near />
            <Footer />
        </>
    )
}

export default page
