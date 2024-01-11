import Product from '@/components/product/Product'
import styles from './Page.module.scss'
import Image from 'next/image'
import Cart from '@/components/cart/Cart'
import Order from '@/components/order/Order'

const getData = async (category: string) => {

    // const data = await fetch(`http://localhost:3001/${category}`, {
    //     next: {
    //         revalidate: 10
    //     }
    // })

    // if (!(data.status === 200)) {
    //     throw new Error('WTF')
    // }
    // return data.json()

    return { "shop": [{ "title": "iphone 14" }, { "title": "iphone 15" }] }
}

const Page = async ({
    params
}:
    {
        params: {
            filter: [string, string]
        }
    }) => {

    const data = await getData(params.filter ? params.filter[0] : "all")


    return (
        <main>
            <Cart />
            <div className={styles.header}>
                <p>Главная {'>'} Каталог {'>'} iPhone</p>
                <div className={styles.dropdown}>
                    <Image src={'/dropdown-icon.svg'} alt='стрелка на право (фильтры категории)' width={20} height={20} />
                    <select className={styles.categoryFilter}>
                        <option>iPhone 15</option>
                        <option>iPhone 14</option>
                        <option>iPhone 13</option>
                        <option>iPhone 12</option>
                        <option>iPhone 11</option>
                        <option>iPhone 10</option>
                    </select>
                </div>
            </div>
            <div className={styles.wrap} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '32px'
            }}>
                {
                    data.shop.map((el: {
                        title: string
                    }) => <Product key={el.title} product={el} />)
                }
            </div>
        </main>
    )
}

export default Page