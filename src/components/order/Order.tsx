import styles from './Order.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { BASE_URL } from '@/utils/conts';
import { useRouter } from 'next/navigation';

type PromoCodeType = "DiscountAmount" | "DiscountPercentage"

type Promocode = {
    type?: PromoCodeType | undefined,
    code?: string | undefined,
    value?: number | undefined,
    dateExpiration?: string | undefined,
    error?: boolean | undefined
}

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


    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [communicationMethod, setCommunicationMethod] = useState("Phone")
    const [comment, setComment] = useState("")
    const [promoCode, setPromoCode] = useState("")
    const [promoCodeStatus, setPromoCodeStaus] = useState<Promocode>({})

    const router = useRouter()

    const [price, setPrice] = useState(props.cart.reduce((acc, el) => acc += el.config.totalPrice * (el.count ? el.count : 0), 0))

    

    useEffect(() => {
        setPrice(props.cart.reduce((acc, el) => acc += el.config.totalPrice * (el.count ? el.count : 0), 0))
        if (!promoCodeStatus.error && promoCodeStatus.value) {
            if (promoCodeStatus.type == "DiscountAmount") {
                setPrice(prev => prev - promoCodeStatus.value!)
            }
            if (promoCodeStatus.type == "DiscountPercentage") {
                setPrice(prev => prev - (prev / 100 * promoCodeStatus.value!))
            }
        }
    }, [promoCodeStatus.error, promoCodeStatus.type, promoCodeStatus.value, props.cart])


    const checkPromocode = useCallback(async () => {
        const data = await fetch(BASE_URL + '/api/promocode?code=' + promoCode)
        if (data.status == 200) {
            const promo = await data.json()
            setPromoCodeStaus({
                ...promo,
                error: false
            })
        } else {
            setPromoCode('')
            setPromoCodeStaus({
                error: true
            })
        }
    }, [promoCode])


    const submit = useCallback(async (e: any) => {
        e?.preventDefault()
        console.log(props.cart.length);

        if (!name) return
        if (!phone) return
        if (props.cart.length == 0) return

        const data = await fetch(BASE_URL + '/api/order', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            mode: 'cors',
            body: JSON.stringify({
                "fullname": name,
                "phone": phone,
                "email": email,
                "communicationMethod": communicationMethod,
                "comment": comment,
                "promoCode": promoCodeStatus.code,
                "configurations": props.cart.map(el => {
                    return {
                        configurationId: el.config.configurationId,
                        count: el.count
                    }
                })
            })
        })

        if (data.status == 200) {
            sessionStorage.clear()
            router.push('/')
        }

    }, [comment, communicationMethod, email, name, phone, promoCodeStatus.code, props.cart, router])

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
                                <input value={name} onChange={(e) => {
                                    setName(e.target.value)
                                }} type="name" required autoComplete='name' />
                            </div>
                            <div className={styles.edit}>
                                <p>Телефон<span className={styles.red}>*</span></p>
                                <input value={phone} onChange={(e) => {
                                    setPhone(e.target.value)
                                }} required minLength={11} maxLength={11} type="tel" />
                            </div>
                            <div className={styles.edit}>
                                <p>E-mail</p>
                                <input value={email} onChange={(e) => {
                                    setEmail(e.target.value)
                                }} type="email" />
                            </div>
                            <div className={styles.edit}>
                                <p>Как с вами связаться?</p>
                                <div style={{
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <select value={communicationMethod} onChange={(e) => {
                                        setCommunicationMethod(e.target.value)
                                    }} name="" id="">
                                        <option value="Phone">Перезвонить</option>
                                        <option value="Email">Написать</option>
                                    </select>
                                    <Image style={{
                                        position: 'absolute',
                                        right: '10px',
                                        objectPosition: 'center',
                                        pointerEvents: 'none'
                                    }} src={'/dropdown-icon.svg'} alt='' width={16} height={16} />
                                </div>
                            </div>
                            <div className={styles.edit}>
                                <p>Коментарий</p>
                                <input value={comment} onChange={(e) => {
                                    setComment(e.target.value)
                                }} type="text" />
                            </div>
                            <button onClick={submit} className={`${styles.submit} tap`} type='submit'>Отправить <Image src={'/arrow-right-black.svg'} alt='отправить стрелка' width={32} height={7} /></button>
                            <p className={styles.personalData}>Нажимая на кнопку, вы даете согласие на обработку <Link href={'/policy.pdf'}>персональных данных</Link></p>
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
                                                <p>{prod.config.totalPrice == 0 ? 'Под заказ' : `${prod.config.totalPrice} ₽`}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className={styles.divider}></div>
                            <div className={styles.finalPrice}>
                                <p>Итого:</p>
                                <p>{price} ₽ {props.cart.some(e => e.config.totalPrice == 0) && `(+ товары под заказ)`}</p>
                            </div>
                            <div className={styles.promoCode}>
                                <input value={promoCode} onChange={(e) => {
                                    if (promoCodeStatus.error || promoCodeStatus.value) {
                                        setPromoCodeStaus({
                                            code: undefined,
                                            dateExpiration: undefined,
                                            type: undefined,
                                            value: undefined,
                                            error: undefined
                                        })
                                    }
                                    setPromoCode(e.target.value)
                                }} type="text" placeholder='Промокод' />
                                <button onClick={checkPromocode} className='tap'>Применить</button>
                            </div>
                            <div style={{
                                marginTop: '10px',
                                gap: '12px',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <Image src={'/search.svg'} alt='нашли цену ниже иконка' width={16} height={16} />
                                <a href={'#foundalowerprice'} style={{
                                    color: 'rgba(0, 0, 0, 0.4)'
                                }}>Нашли цену ниже?</a>
                            </div>
                            {
                                promoCodeStatus.error == true && <p className={styles.promoStatus}>{`${"Промокод не существует"}`}</p>
                            }
                            {
                                promoCodeStatus.error == false && <p className={styles.promoStatus}>{`Промокод успешно применен`}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order