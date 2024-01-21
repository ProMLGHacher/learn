import Product from '@/components/product/Product'
import styles from './Page.module.scss'
import Cart from '@/components/cart/Cart'
import Select from '@/components/select/Select'
import { BASE_URL } from '@/utils/conts'
import { redirect } from 'next/navigation'




const getProducts = async (category: string, filter: string | undefined) => {

    const data = await fetch(`${BASE_URL}/api/products?deviceModel=${filter || category}`, {
        next: {
            revalidate: 10
        }
    })
    const json: Array<any> = await data.json()
    if (json.length == 0) {
        redirect('/')
    }

    console.log(json);
    
    
    return json

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
    const json: Array<any> = await data.json()
    return json

    // return { "shop": [{ "title": "iphone 14" }, { "title": "iphone 15" }] }
}

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
                <p>Главная {'>'} Каталог {'>'} {decodeURI(`${params.filter[0]}`)}</p>
                <Select caregory={decodeURI(`${params.filter[0]}`)} filters={filters} />
            </div>
            <div className={styles.wrap} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '32px'
            }}>
                {
                    products.map((el: any) => <Product key={el.productId} product={el} />)
                }
            </div>
        </main>
    )
}

export default Page