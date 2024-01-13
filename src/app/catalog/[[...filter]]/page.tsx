import Product from '@/components/product/Product'
import styles from './Page.module.scss'
import Image from 'next/image'
import Cart from '@/components/cart/Cart'
import Order from '@/components/order/Order'
import Select from '@/components/select/Select'

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

export const revalidate = 1000

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
                <Select />
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