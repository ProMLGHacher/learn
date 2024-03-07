'use client';
/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';
import styles from './Product.module.scss'
import { useEffect, useRef, useState } from 'react';
import { useContainerDimensions } from '@/app/hooks/useContainerDimentions';
import Link from 'next/link';


export interface Product {
    productId: string
    description: string
    name: string
    filters: Filter[]
    productConfigurations: ProductConfiguration[]
  }
  
  export interface Filter {
    name: string
    type: string
    elems: Elem[]
    selected: number
  }
  
  export interface Elem {
    color: string
    hex: string
    values: string[]
  }
  
  export interface ProductConfiguration {
    configurationId: string
    characteristics: Characteristic[]
    totalPrice: number
  }
  
  export interface Characteristic {
    type: string
    name: string
    value: string
  }

const Product = (
    {
        product
    }: {
        product: Product
    }
) => {

    const [productState, setproductState] = useState(() => {
        product.filters = product.filters.map(el => {
            el.selected = 0
            return el
        })
        return product
    })







    const [imgList, setImgList] = useState<string[]>(() => {
        const color = productState.filters.find(el => el.type == 'Color')
        if (!color) return []
        return color.elems[color.selected].values
    })

    const [selectedConfig, setSelectedConfig] = useState(() => {
        for (let index = 0; index < productState.productConfigurations.length; index++) {
            const productConf = productState.productConfigurations[index];
            const res = []
            for (let charind = 0; charind < productConf.characteristics.length; charind++) {
                const char = productConf.characteristics[charind];
                for (let filterIndex = 0; filterIndex < productState.filters.length; filterIndex++) {
                    const filter = productState.filters[filterIndex];
                    const selected = filter.elems[filter.selected]

                    if (filter.type != char.type) continue
                    if (filter.name != char.name) continue
                    if (filter.type == 'Color') {
                        if (selected.color != char.value) continue
                    }
                    if (filter.type == 'Text') {
                        if (selected.values[0] != char.value) continue
                    }
                    res.push(true)
                }
            }
            if (res.length == productConf.characteristics.length) {
                return productConf
            }
        }
    })

    useEffect(() => {
        for (let index = 0; index < productState.productConfigurations.length; index++) {
            const productConf = productState.productConfigurations[index];
            const res = []
            for (let charind = 0; charind < productConf.characteristics.length; charind++) {
                const char = productConf.characteristics[charind];
                for (let filterIndex = 0; filterIndex < productState.filters.length; filterIndex++) {
                    const filter = productState.filters[filterIndex];
                    const selected = filter.elems[filter.selected]

                    if (filter.type != char.type) continue
                    if (filter.name != char.name) continue
                    if (filter.type == 'Color') {
                        if (selected.color != char.value) continue
                    }
                    if (filter.type == 'Text') {
                        if (selected.values[0] != char.value) continue
                    }
                    res.push(true)
                }
            }
            if (res.length == productConf.characteristics.length) {
                setSelectedConfig(productConf)
                return
            }
        }
    }, [productState])

    useEffect(() => {
        setImgList((_) => {
            const color = productState.filters.find(el => el.type == 'Color')
            if (!color) return []
            return color.elems[color.selected].values
        })
    }, [productState])



    const images = useRef<null | HTMLDivElement>(null)
    const [carousel, setCarousel] = useState(0)
    const { width: imageWidth } = useContainerDimensions(images)

    return (
        <div className={styles.wrapper}>
            <div style={{
                display: 'flex',
                flexDirection: "column",
                alignItems: 'center',
                gap: '20px'
            }}>
                <div className={styles.carousel}>
                    <button onClick={() => {
                        if (carousel == 0) {
                            setCarousel(imgList.length - 1)
                            return
                        }
                        setCarousel(prev => --prev)
                    }} className={`${styles.arrow} tap`}><Image src={'/Arrow-up.svg'} className={styles.arrows} width={40} height={40} alt='стреклка' /></button>
                    <div ref={images} className={styles.imagesWrapper}>
                        <div className={styles.images} style={{
                            // +20 потому что gap
                            transform: `translateX(-${(imageWidth + 20) * carousel}px)`
                        }}>
                            {
                                imgList.map((img) => {
                                    return <img key={img} width={imageWidth} src={img} alt="iphone" />
                                })
                            }
                        </div>
                    </div>
                    <button onClick={() => {
                        if (!images.current) return
                        if (carousel == imgList.length - 1) {
                            setCarousel(0)
                            return
                        }
                        setCarousel(prev => ++prev)
                    }} className={`${styles.arrowRight} ${styles.arrows}`}><Image src={'/Arrow-up.svg'} className={styles.arrows} width={40} height={40} alt='стреклка' /></button>
                </div>
                <div className={styles.dots}>
                    {
                        imgList.map((index, ind) => <div key={index} className={`${ind == carousel ? styles.active : ''}`}></div>)
                    }
                </div>
            </div>
            <div className={styles.main}>
                <h4 className={styles.name}>{product.name}</h4>
                <p className={styles.desc}>{product.description}</p>
                <div className={styles.configuraion}>
                    {
                        productState.filters.map((filter, filterIndex) => {
                            return filter.type == "Text" ?
                                <div key={filter.name}>
                                    <p>{filter.name}</p>
                                    <div className={styles.filters}>
                                        {
                                            filter.elems.map((elem, elemIndex) => {
                                                return <button onClick={() => {
                                                    if (filter.selected == elemIndex) return
                                                    setproductState(prev => {
                                                        const newF = JSON.parse(JSON.stringify(prev))
                                                        newF.filters[filterIndex].selected = elemIndex
                                                        return newF
                                                    })
                                                }} key={elem.values[0]} className={`${styles.filter} ${filter.selected == elemIndex ? styles.selected : ""}`}>{elem.values[0]}</button>
                                            })
                                        }
                                    </div>
                                </div>
                                :
                                filter.elems.filter(fil => fil.color).length != 1 && <div key={filter.name}>
                                    <p>Цвет:</p>
                                    <div className={styles.colorFilters}>
                                        {
                                            filter.elems.map((elem, elemIndex) => {
                                                return <button onClick={() => {
                                                    if (filter.selected == elemIndex) return
                                                    setproductState(prev => {
                                                        const newF = JSON.parse(JSON.stringify(prev))
                                                        newF.filters[filterIndex].selected = elemIndex
                                                        return newF
                                                    })
                                                }} key={filter.name + elem.color} style={{
                                                    backgroundColor: "#" + elem.hex
                                                }} className={`${styles.colorFilter} ${filter.selected == elemIndex ? styles.selected : ""}`}><Image className={styles.rollingStick} src={'/rollingStick.svg'} alt='rollingStick' width={13} height={9} /></button>
                                            })
                                        }
                                    </div>
                                </div>
                        })
                    }
                </div>
                <div className={styles.price}>
                    {
                        selectedConfig?.totalPrice ?
                            <>
                                <a style={{
                                cursor: 'pointer',
                                color: 'black',
                                textDecoration: 'none'
                            }} href='#order' onClick={() => {
                                    const arr: Array<any> = JSON.parse(sessionStorage.getItem("cart") || "[]")
                                    const index = arr.findIndex(el => el.config.configurationId == selectedConfig?.configurationId)

                                    if (index >= 0) {
                                        arr[index].count++
                                    } else {
                                        arr.push({
                                            name: productState.name,
                                            config: selectedConfig,
                                            img: imgList[0]
                                        })
                                        arr[arr.length - 1].count = 1
                                    }
                                    sessionStorage.setItem("cart", JSON.stringify(arr))
                                    window.dispatchEvent(new Event("storage"));
                                }} className={styles.toCart}>В корзину <Image src={'/arrow-right-black.svg'} alt='стрелка направо (кнопка добавить в корзину)' width={32} height={10} color='#000' /></a>
                                <p>{selectedConfig?.totalPrice.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0}).replace(',', '.')} ₽</p>
                            </>
                            : <a style={{
                                cursor: 'pointer',
                                color: 'black',
                                textDecoration: 'none'
                            }} href='#order' onClick={() => {
                                const arr: Array<any> = JSON.parse(sessionStorage.getItem("cart") || "[]")
                                const index = arr.findIndex(el => el.config.configurationId == selectedConfig?.configurationId)

                                if (index >= 0) {
                                    arr[index].count++
                                } else {
                                    arr.push({
                                        name: productState.name,
                                        config: selectedConfig,
                                        img: imgList[0]
                                    })
                                    arr[arr.length - 1].count = 1
                                }
                                sessionStorage.setItem("cart", JSON.stringify(arr))
                                window.dispatchEvent(new Event("storage"));
                            }} className={styles.toCart}>Под заказ <Image src={'/arrow-right-black.svg'} alt='стрелка направо (кнопка добавить в корзину)' width={32} height={10} color='#000' /></a>
                    }
                </div>
            </div>
        </div>
    )
}

export default Product