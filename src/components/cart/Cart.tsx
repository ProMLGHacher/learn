'use client';

import Image from 'next/image'
import styles from './Cart.module.scss'
import { useEffect, useState } from 'react'

const Cart = () => {

    const [tooltip, setTooltip] = useState(0)

    useEffect(() => {
        const func = () => {
            setTooltip(JSON.parse(localStorage.getItem("cart") || "[]"))
        }
        window.addEventListener('storage', func)
        return () => {
            window.removeEventListener("storage", func)
        }
    }, [])

    return (
        <button onClick={() => {
            const arr = JSON.parse(localStorage.getItem("cart") || "[]")
            arr.push("okok")
            localStorage.setItem("cart", JSON.stringify(arr))
            window.dispatchEvent(new Event("storage"));
        }} className={styles.cart}>
            <div className={styles.tooltip}>
                <p>{JSON.parse(localStorage.getItem("cart") || "[]").length}</p>
            </div>
            <Image src={'/cart.svg'} alt='корзина иконка' width={27} height={27} />
        </button>
    )
}

export default Cart