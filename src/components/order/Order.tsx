'usr client';

import styles from './Order.module.scss'
import Link from 'next/link';
import Image from 'next/image';

const Order = (props: {
    cart:
    {
        name: string,
        config: {
            configurationId: string;
            totalPrice: number;
            characteristics: {
                name: string;
                type: "Color" | "Text";
                value: string;
            }[]
        },
        img: string,
        count: number | undefined
    }[]
}) => {

    return (
        <>
            <div id='order' className={styles.wrapper}>
                <div className={styles.modal}>
                    <div className={styles.head}>
                        <a href={'#'}><Image src={'/exit.svg'} alt='close modal' width={20} height={20} /></a>
                    </div>
                    <div className={styles.main}>
                        <form>
                            <h4 className={styles.tlte}>Оформить заказ</h4>
                            <div className={styles.edit}>
                                <p>Ваше ФИО<span className={styles.red}>*</span></p>
                                <input type="text" required />
                            </div>
                            <div className={styles.edit}>
                                <p>Телефон<span className={styles.red}>*</span></p>
                                <input required minLength={11} maxLength={11} type="tel" />
                            </div>
                            <div className={styles.edit}>
                                <p>E-mail</p>
                                <input type="email" />
                            </div>
                            <div className={styles.edit}>
                                <p>Как с вами связаться?</p>
                                <select name="" id="">
                                    <option value="Перезвонить">Перезвонить</option>
                                    <option value="Написать">Написать</option>
                                </select>
                            </div>
                            <div className={styles.edit}>
                                <p>Коментарий</p>
                                <input type="text" />
                            </div>
                            <button className={`${styles.submit} tap`} type='submit'>Отправить <Image src={'/arrow-right-black.svg'} alt='отправить стрелка' width={32} height={7} /></button>
                            <p className={styles.personalData}>Нажимая на кнопку, вы даете согласие на обработку <Link href={''}>персональных данных</Link></p>
                        </form>
                        <div className={styles.reverse}>
                            <h4 className={styles.tlte}>Оформить заказ</h4>
                            <div className={styles.products}>
                                {
                                    props.cart.map((prod, index: number) =>
                                        <div className={styles.product} key={prod.config.configurationId}>
                                            <div className={styles.info}>
                                                <img src={prod.img} alt="" />
                                                <div>
                                                    <h5>{prod.name}</h5>
                                                    <p>{prod.config.characteristics.reduce((acc, el, index) => {
                                                        if (index != 0) acc += ", "
                                                        return acc += el.value
                                                    }, "")}</p>
                                                    <div className={styles.counter}>
                                                        <button onClick={() => {
                                                            let arr: Array<any> = JSON.parse(sessionStorage.getItem("cart") || "[]")
                                                            const index = arr.findIndex(el => el.config.configurationId == prod.config.configurationId)

                                                            if (index >= 0) {

                                                                if (arr[index].count <= 1) {
                                                                    arr = arr.filter(fel => fel.config.configurationId != prod.config.configurationId)
                                                                } else {
                                                                    arr[index].count--
                                                                }

                                                            }
                                                            sessionStorage.setItem("cart", JSON.stringify(arr))
                                                            window.dispatchEvent(new Event("storage"));
                                                        }}>-</button>
                                                        <p>{prod.count}</p>
                                                        <button onClick={() => {
                                                            const arr: Array<any> = JSON.parse(sessionStorage.getItem("cart") || "[]")
                                                            const index = arr.findIndex(el => el.config.configurationId == prod.config.configurationId)

                                                            if (index >= 0) {
                                                                arr[index].count++
                                                            }
                                                            sessionStorage.setItem("cart", JSON.stringify(arr))
                                                            window.dispatchEvent(new Event("storage"));
                                                        }}>+</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.pricedelete}>
                                                <button onClick={() => {
                                                    let arr = JSON.parse(sessionStorage.getItem("cart") || "[]")
                                                    if (Array.isArray(arr)) {
                                                        console.log(arr);
                                                        console.log(prod);

                                                        arr = arr.filter(fel => fel.config.configurationId != prod.config.configurationId)
                                                    }
                                                    sessionStorage.setItem("cart", JSON.stringify(arr))
                                                    window.dispatchEvent(new Event("storage"));
                                                }}><Image src={'/exit.svg'} alt='удалить товар' width={15} height={15} /></button>
                                                <p>{prod.config.totalPrice} ₽</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className={styles.divider}></div>
                            <div className={styles.finalPrice}>
                                <p>Итого:</p>
                                <p>{props.cart.reduce((acc, el) => acc+=el.config.totalPrice * (el.count ? el.count : 0), 0)} ₽</p>
                            </div>
                            <div className={styles.promoCode}>
                                <input type="text" placeholder='Промокод' />
                                <button className='tap'>Применить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order