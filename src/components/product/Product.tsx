'use client';
/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';
import styles from './Product.module.scss'
import { useRef, useState } from 'react';
import { useContainerDimensions } from '@/app/hooks/useContainerDimentions';

const Product = ({
    product
}: {
    product: any
}) => {

    const images = useRef<null | HTMLDivElement>(null)
    const [carousel, setCarousel] = useState(0)
    const { width: imageWidth } = useContainerDimensions(images)

    return (
        <div className={styles.wrapper}>
            <div className={styles.carousel}>
                <button onClick={() => {
                    if (carousel == 0) return
                    setCarousel(prev => --prev)
                }} className={styles.arrow}><Image src={'/Arrow-up.svg'} width={30} height={30} alt='стреклка' /></button>
                <div className={styles.imagesWrapper}>
                    <div ref={images} className={styles.images} style={{
                        // +20 потому что gap
                        transform: `translateX(-${(imageWidth + 20) * carousel}px)`
                    }}>
                        <img src="/iphonecat.png" alt="iphone" />
                        <img src="/airpods.png" alt="iphone" />
                        <img src="/iphonecat.png" alt="iphone" />
                        <img src="/iphonecat.png" alt="iphone" />
                        <img src="/iphonecat.png" alt="iphone" />
                        <img src="/iphonecat.png" alt="iphone" />
                    </div>
                </div>
                <button onClick={() => {
                    if (!images.current) return
                    if (carousel == 5) return
                    setCarousel(prev => ++prev)
                }} style={{
                    transform: 'rotateZ(180deg)'
                }} className={styles.arrow}><Image src={'/Arrow-up.svg'} width={30} height={30} alt='стреклка' /></button>
            </div>
            <div className={styles.main}>
                <h4 className={styles.name}>{product.title}</h4>
                <p className={styles.desc}>Стандартная версия со слотом под физическую сим-карту. Пик инноваций в дизайне. iPhone 15 Pro Max представляет собой воплощение эстетики и функциональности. Впервые рамка iPhone выполнена из титана, благодаря чему устройство является самым легким iPhone Pro в истории и способно выдерживать самые серьезные нагрузки.</p>
                <div className={styles.configuraion}>
                    <div>
                        <p>Объем памяти:</p>
                        <div className={styles.filters}>
                            <button className={`${styles.filter} ${styles.selected}`}>256 ГБ</button>
                            <button className={styles.filter}>512 ГБ</button>
                            <button className={styles.filter}>1 ТБ</button>
                        </div>
                    </div>
                    <div>
                        <p>Цвет:</p>
                        <div className={styles.colorFilters}>
                            <button style={{
                                backgroundColor: '#ABA69B'
                            }} className={`${styles.colorFilter}`}></button>
                            <button style={{
                                backgroundColor: '#373C4B'
                            }} className={styles.colorFilter}></button>
                            <button style={{
                                backgroundColor: '#F0EFEB'
                            }} className={styles.colorFilter}></button>
                            <button style={{
                                backgroundColor: '#272826'
                            }} className={styles.colorFilter}></button>
                        </div>
                    </div>
                </div>
                <div className={styles.price}>
                    <button onClick={() => {
                        const arr = JSON.parse(localStorage.getItem("cart") || "[]")
                        arr.push(product.title)
                        localStorage.setItem("cart", JSON.stringify(arr))
                        window.dispatchEvent(new Event("storage"));
                    }} className={styles.toCart}>В корзину <Image src={'/arrow-right-black.svg'} alt='стрелка направо (кнопка добавить в корзину)' width={32} height={10} color='#000' /></button>
                    <p>134 990 ₽</p>
                </div>
            </div>
        </div>
    )
}

export default Product