'use client';

import Image from 'next/image'
import styles from './Select.module.scss'
import { usePathname } from 'next/navigation';

const Select = (props: {
    caregory: string,
    filters: Array<string>
}) => {

    const pathname = usePathname()
    const filter = (pathname.split('/')[3] || 'all').replace('%20', ' ')


    return (
        <div className={styles.dropdown}>
            <Image src={'/dropdown-icon.svg'} alt='стрелка на право (фильтры категории)' width={20} height={20} />
            <select onChange={(e) => {
                location.pathname = `/catalog/${props.caregory}/${e.target.value}`
            }} defaultValue={filter} className={styles.categoryFilter}>
                <option value={""}>Всё</option>
                {
                    props.filters.map(el => <>
                        <option key={el} value={el}>{el}</option>
                    </>)
                }
            </select>
        </div>
    )
}

export default Select