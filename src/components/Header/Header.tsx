import React from 'react'
import styles from './Header.module.scss'
import MobileHeader from './MobileHeader/MobileHeader'
import PortableHeader from './PortableHeader/PortableHeader'

const Header = () => {
    return (
        <>
            <div className={styles.mobile}>
                <MobileHeader />
            </div>
            <div className={styles.portable}>
                <PortableHeader />
            </div>
        </>
    )
}

export default Header