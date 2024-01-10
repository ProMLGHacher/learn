import Product from '@/components/product/Product'
import React from 'react'

const getData = async (category: string) => {

    const data = await fetch(`http://localhost:3001/${category}`, {
        next: {
            revalidate: 10
        }
    })

    if (!(data.status === 200)) {
        throw new Error('WTF')
    }
    return data.json()
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
            <div style={{
                paddingBlock: '34px',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <p>Главная {'>'} Каталог {'>'} iPhone</p>
                <p>iPhone 15</p>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '32px'
            }}>
                {
                    data.shop.map((el: {
                        title: string
                    }) => <Product key={el.title} />)
                }
            </div>
        </main>
    )
}

export default Page