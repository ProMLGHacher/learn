import Product from '@/components/product/Product'
import styles from './Page.module.scss'
import Cart from '@/components/cart/Cart'
import Select from '@/components/select/Select'
import { BASE_URL } from '@/utils/conts'

const getProducts = async (category: string, filter: string) => {

    const data = await fetch(`${BASE_URL}/api/products?deviceModel=${category}`, {
        next: {
            revalidate: 10
        }
    })

    if (!(data.status === 200)) {
        throw new Error('WTF')
    }
    return data.json()

    // return { "shop": [{ "title": "iphone 14" }, { "title": "iphone 15" }] }
}

const getFilters = async (category: string) => {

    if (category === 'all') {
        throw new Error('WTF')
    }

    const data = await fetch(`${BASE_URL}/api/deviceModels?categoryName=${category}`, {
        next: {
            revalidate: 2
        }
    })

    if (!(data.status === 200)) {
        throw new Error('WTF')
    }
    return data.json()

    // return { "shop": [{ "title": "iphone 14" }, { "title": "iphone 15" }] }
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

    // const data = await getData(params.filter ? params.filter[0] : "all")
    const getProductsData = getProducts(params.filter[0], params.filter[1])
    const getFiltersData = getFilters(params.filter[0])

    const [products, filters] = await Promise.all([getProductsData, getFiltersData])

    return (
        <main>
            <Cart />
            <div className={styles.header}>
                <p>Главная {'>'} Каталог {'>'} iPhone</p>
                <Select caregory={params.filter[0]} filters={filters} />
            </div>
            <div className={styles.wrap} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '32px'
            }}>
                {
                    products.map((el: any) => <Product key={el.name} product={el} />)
                }
            </div>
        </main>
    )
}

export default Page