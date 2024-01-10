/* eslint-disable @next/next/no-img-element */
'use client';

import Image from 'next/image';
import styles from './Product.module.scss'

const Product = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.carousel}>
                <button className={styles.arrow}><Image src={'/Arrow-up.svg'} width={40} height={40} alt='стреклка' /></button>
                <div className={styles.imagesWrapper}>
                    <div className={styles.images} style={{
                        transform: 'translateX(0px)'
                    }}>
                        <img src="/iphonecat.png" alt="iphone" />
                        <img src="/iphonecat.png" alt="iphone" />
                        <img src="/iphonecat.png" alt="iphone" />
                        <img src="/iphonecat.png" alt="iphone" />
                        <img src="/iphonecat.png" alt="iphone" />
                        <img src="/iphonecat.png" alt="iphone" />
                    </div>
                </div>
                <button style={{
                    transform: 'rotateZ(180deg)'
                }} className={styles.arrow}><Image src={'/Arrow-up.svg'} width={40} height={40} alt='стреклка' /></button>
            </div>
            <div className={styles.main}>
                <h4 className={styles.name}>Apple iPhone 15 Pro Max</h4>
                <p className={styles.desc}>Стандартная версия со слотом под физическую сим-карту. Пик инноваций в дизайне. iPhone 15 Pro Max представляет собой воплощение эстетики и функциональности. Впервые рамка iPhone выполнена из титана, благодаря чему устройство является самым легким iPhone Pro в истории и способно выдерживать самые серьезные нагрузки.</p>
            </div>
            <div className={styles.price}>
                <p>134 990 ₽</p>
            </div>
        </div>
    )
}

export default Product