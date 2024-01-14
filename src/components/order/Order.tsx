'usr client';

import { createPortal } from 'react-dom'
import styles from './Order.module.scss'
import Link from 'next/link';
import Image from 'next/image';

const Order = (props: {
    cart: any
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
                            <button className={styles.submit} type='submit'>Отправить <Image src={'/arrow-right-black.svg'} alt='отправить стрелка' width={32} height={7} /></button>
                            <p className={styles.personalData}>Нажимая на кнопку, вы даете согласие на обработку <Link href={''}>персональных данных</Link></p>
                        </form>
                        <div className={styles.reverse}>
                            <h4 className={styles.tlte}>Оформить заказ</h4>
                            <div className={styles.products}>
                                {
                                    props.cart.map((el: any, index: number) =>
                                        <div className={styles.product} key={el + index}>
                                            <div className={styles.info}>
                                                <img src="/airpods.png" alt="" />
                                            <div>
                                                    <h5>Apple iPhone 15 Pro</h5>
                                                    <p>128 ГБ, Титановый синий</p>
                                                    <div className={styles.counter}>
                                                        <p>-</p>
                                                        <p>1</p>
                                                        <p>+</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.pricedelete}>
                                                <button onClick={() => {
                                                    let arr = JSON.parse(localStorage.getItem("cart") || "[]")
                                                    if (Array.isArray(arr)) {
                                                        console.log(arr);
                                                        console.log(el);

                                                        arr = arr.filter(fel => fel.id != el.id)
                                                    }
                                                    localStorage.setItem("cart", JSON.stringify(arr))
                                                    window.dispatchEvent(new Event("storage"));
                                                }}><Image src={'/exit.svg'} alt='удалить товар' width={15} height={15} /></button>
                                                <p>114 990 ₽</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className={styles.divider}></div>
                            <div className={styles.finalPrice}>
                                <p>Итого:</p>
                                <p>114 990 ₽</p>
                            </div>
                            <div className={styles.promoCode}>
                                <input type="text" placeholder='Промокод' />
                                <button>Применить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order