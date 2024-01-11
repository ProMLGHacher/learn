import { createPortal } from 'react-dom'
import styles from './Order.module.scss'

const Order = () => {

    return (
        <>
            <div id='order' className={styles.wrapper}>
                <div className={styles.modal}>
                    <a href="#">close</a>
                </div>
            </div>
        </>
    )
}

export default Order