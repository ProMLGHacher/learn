import Product from '@/components/product/Product'
import styles from './Page.module.scss'
import Cart from '@/components/cart/Cart'
import Select from '@/components/select/Select'
import { BASE_URL } from '@/utils/conts'
import { redirect } from 'next/navigation'




const getProducts = async (category: string, filter: string | undefined) => {

    

    const data = await fetch(`${BASE_URL}/api/products?deviceModel=${filter || category}`, {
        next: {
            revalidate: 86_400,
            tags: ['products']
        }
    })
    console.log(data);

    const json: Array<any> = await data.json()
    if (json.length == 0) {

        return redirect('/')
    }

    return json

    // return { "shop": [{ "title": "iphone 14" }, { "title": "iphone 15" }] }
}

const getFilters = async (category: string) => {
    const data = await fetch(`${BASE_URL}/api/deviceModels?categoryName=${category}`, {
        next: {
            revalidate: 86_400,
            tags: ['filters']
        }
    })

    if (!(data.status === 200)) {
        throw new Error('')
    }
    const json: Array<any> = await data.json()
    if (json.length == 0) {
        return redirect('/')
    }
    return json
}

const Page = async ({
    params
}:
    {
        params: {
            filter: [string, string]
        }
    }) => {

    console.log(params.filter);


    // const data = await getData(params.filter ? params.filter[0] : "all")
    const getFiltersData = getFilters(params.filter[0])
    const getProductsData = getProducts(params.filter[0], params.filter[1])

    const [products, filters] = await Promise.all([getProductsData, getFiltersData])

    const getName = (param: string) => {
        switch (param) {
            case 'iPhone':
                return 'iPhone'
            case 'AirPods':
                return 'AirPods'
            case 'Watch':
                return 'Watch'
            case 'Mac':
                return 'Mac'
            case 'iPad':
                return 'iPad'
            case 'accessories':
                return 'Акссессуары'
            case 'consoles':
                return 'Консоли'
            case 'Dyson':
                return 'Dyson'
            default:
                return ''
        }
    }

    return (
        <main style={{
            backgroundColor: '#F1F1F1',
            paddingBottom: '32px'
        }}>
            <Cart />
            <div className={styles.header}>
                <p>Главная {'>'} Каталог {'>'} {getName(decodeURI(`${params.filter[0]}`))}</p>
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