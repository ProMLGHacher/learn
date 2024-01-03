import Image from 'next/image'
import styles from './Blog.module.scss'
import Link from 'next/link'

const Blog = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Image src={'/world.svg'} width={41} height={41} alt='Блог икнока' />
                <h4>Блог</h4>
            </div>
            <div className={styles.main}>
                <div>
                    <h5>Как выбрать iPhone?</h5>
                    <p>iPhone, iPhone, iPhone, iPhone, iPhone, iPhone, iPhone, iPhone, iPhone, iPhone, iPhone. </p>
                </div>
                <div>
                    <h5>Как выбрать iPhone?</h5>
                    <p>iPhone, iPhone, iPhone, iPhone, iPhone, iPhone, iPhone, iPhone, iPhone, iPhone, iPhone. </p>
                </div>
                <div>
                    <h5>Как выбрать iPhone?</h5>
                    <p>iPhone, iPhone, iPhone, iPhone, iPhone, iPhone, iPhone, iPhone, iPhone, iPhone, iPhone. </p>
                </div>
            </div>
            <div className={styles.viewAll}>
                <Link href={'/'}>Посмотреть все</Link>
            </div>
        </div>
    )
}

export default Blog