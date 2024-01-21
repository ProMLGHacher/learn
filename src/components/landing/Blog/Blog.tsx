import Image from 'next/image'
import styles from './Blog.module.scss'
import Link from 'next/link'
import { BASE_URL } from '@/utils/conts'

const getPosts = async (): Promise<{
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
            "count": 3,
            "loadPosition": 0
        }),
        next: {
            revalidate: 10,
            tags: ['blog']
        }
    })

    if (!(data.status === 200)) {
        return undefined
    }
    return data.json()
}

const Blog = async () => {

    const blog = await getPosts()

    return (
        <>
            {
                blog && <div className={styles.wrapper}>
                    <div className={styles.title}>
                        <Image src={'/world.svg'} width={41} height={41} alt='Блог икнока' />
                        <h4>Блог</h4>
                    </div>
                    <div className={styles.main}>
                        {
                            blog.map((el, index: number) => <div key={el.name + index}>
                                    <h5>{el.name}</h5>
                                    <p>{el.shortDescription}</p>
                                    <a className={`tap`}>Смотреть <Image src={'/arrow-right-black.svg'} alt='стрлка вправо (смотреть пост)' width={32} height={5} /></a>
                                </div>)
                        }
                    </div>
                    <div className={styles.viewAll}>
                        <Link className={`tap`} href={'/'}>Посмотреть все</Link>
                    </div>
                </div>
            }
        </>
    )
}

export default Blog