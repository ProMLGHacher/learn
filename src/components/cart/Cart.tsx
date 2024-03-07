'use client';

import Image from 'next/image'
import styles from './Cart.module.scss'
import { useEffect, useState } from 'react'
import Order from '../order/Order';
import noSSR from '@/utils/noSsr';

const Cart = () => {

    const [cart, setCart] = useState<any[]>(JSON.parse(sessionStorage.getItem("cart") || "[]"))
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        const func = () => {
            setCart(JSON.parse(sessionStorage.getItem("cart") || "[]"))
            setAnimate(false)
            setAnimate(true)
            setTimeout(() => {
                setAnimate(false)
            }, 200);
        }
        window.addEventListener('storage', func)
        return () => {
            window.removeEventListener("storage", func)
        }
    }, [])

    return (
        <>
            <Order cart={cart} />
            {Boolean(cart.length) && <div style={{
            }} className={styles.wrp}>
                <a href='#order' className={`${styles.cart} ${animate ? styles.anim : ""}`}>
                    <div className={styles.tooltip}>
                        <p>{cart.reduce((acc, el) => acc += el.count, 0)}</p>
                    </div>
                    <Image src={'/cart.svg'} alt='корзина иконка' width={27} height={27} />
                </a>
            </div>}
        </>
    )
}

export default noSSR(Cart)