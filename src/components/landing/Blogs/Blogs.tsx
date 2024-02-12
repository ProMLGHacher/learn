import Image from 'next/image'
import styles from './Blogs.module.scss'
import Link from 'next/link'
import { BASE_URL } from '@/utils/conts'
import Near from '../near/Near'
import Footer from '../footer/Footer'

const getPosts = async (): Promise<{
    id: string,
    name: string,
    shortDescription: string,
    description: string
}[] | undefined> => {
    const data = await fetch(`${BASE_URL}/api/blogs`, {
        method: "POST",
        mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "count": 9999999,
            "loadPosition": 0
        }),
        next: {
            revalidate: 86400,
            tags: ['blog']
        }
    })

    if (!(data.status === 200)) {
        return undefined
    }
    return data.json()
}

const Blogs = async () => {

    const blog = await getPosts()

    return (
        <>
            {
                blog && blog?.length != 0 ? <div className={styles.wrapper}>
                    <div className={styles.title}>
                        <Image src={'/world.svg'} width={41} height={41} alt='Блог икнока' />
                        <h4>Блог</h4>
                    </div>
                    <div className={styles.main}>
                        {
                            blog.map((el, index: number) => <div key={el.name + index}>
                                    <h5>{el.name}</h5>
                                    <p style={{
                                        whiteSpace: 'pre-line'
                                    }}>{el.shortDescription}</p>
                                    <a className={`tap`} href={`/blog/${el.id}`}>Смотреть <Image src={'/arrow-right-black.svg'} alt='стрлка вправо (смотреть пост)' width={32} height={5} /></a>
                                </div>)
                        }
                    </div>
                </div> : <></>
            }
            <Near />
            <Footer />
        </>
    )
}

export default Blogs