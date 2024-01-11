import Product from '@/components/product/Product'
import styles from './Page.module.scss'
import Image from 'next/image'

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
            category: string
        }
    }) => {

    const data = await getData(params.category || "all")


    return (
        <main>
            <div className={styles.header}>
                <p>Главная {'>'} Каталог {'>'} iPhone</p>
                <select className={styles.categoryFilter}>
                    <Image src={'/dropdown-icon.svg'} alt='стрелка на право (фильтры категории)' width={20} height={20} />
                    <option>iPhone 15</option>
                </select>
            </div>
            <div style={{
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