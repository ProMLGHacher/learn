'use client';

import Image from 'next/image'
import styles from './Select.module.scss'
import { usePathname } from 'next/navigation';

const Select = () => {

    const pathname = usePathname()
    const filter = (pathname.split('/')[2] || 'all').replace('%20', ' ')


    return (
        <div className={styles.dropdown}>
            <Image src={'/dropdown-icon.svg'} alt='стрелка на право (фильтры категории)' width={20} height={20} />
            <select onChange={(e) => {
                location.pathname = `/catalog/${e.target.value}`
            }} defaultValue={filter} className={styles.categoryFilter}>
                <option value={"all"}>Всё</option>
                <option value={"iPhone 15"}>iPhone 15</option>
                <option value={"iPhone 14"}>iPhone 14</option>
                <option value={"iPhone 13"}>iPhone 13</option>
                <option value={"iPhone 12"}>iPhone 12</option>
                <option value={"iPhone 11"}>iPhone 11</option>
                <option value={"iPhone 10"}>iPhone 10</option>
            </select>
        </div>
    )
}

export default Select