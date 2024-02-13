import Footer from '@/components/landing/footer/Footer'
import Near from '@/components/landing/near/Near'
import styles from './page.module.scss'
import { BASE_URL } from '@/utils/conts'
import Image from 'next/image'
import React from 'react'

const getPost = async (id: string): Promise<{
    name: string,
    shortDescription: string,
    description: string
} | undefined> => {
    const data = await fetch(`${BASE_URL}/api/blog?blogId=${id}`, {
        method: "GET",
        mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        },
        next: {
            revalidate: 86400,
            tags: ['blog']
        }
    })

    console.log(`${BASE_URL}/api/blog?blogId=${id}`);
    
    console.log(data);
    

    if (!(data.status === 200)) {
        return undefined
    }
    const res = await data.json()
    return res
}

const page = async ({
    params
}:
    {
        params: {
            id: string
        }
    }) => {

    const post = await getPost(params.id)

    console.log(post);
    

    return (

        <div>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <Image src={'/world.svg'} width={41} height={41} alt='Блог икнока' />
                    <h4>Блог</h4>
                </div>
                <div className={styles.main}>
                    <div key={post?.name}>
                        <h5>{post?.name}</h5>
                        <p style={{
                            whiteSpace: 'pre-line'
                        }}>{post?.description}</p>
                    </div>
                </div>
            </div>
            <Near />
            <Footer />
        </div>
    )
}

export default page