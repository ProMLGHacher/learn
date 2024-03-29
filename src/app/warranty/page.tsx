import Footer from '@/components/landing/footer/Footer'
import styles from './page.module.scss'

const Warranty = () => {
    return (
        <>
            <div className={styles.wrp}>
                <h3>Гарантия и возврат</h3>
                <p>Возврат или обмен товара надлежащего качества — в течение 14 дней с момента приобретения, но только в том случае, если товар не был в употреблении (не был активирован, сохранены его товарный вид, свойства, фабричные пломбы, плёнки и ярлыки), а также сохранен товарный чек. Гарантия на всю технику — 1 год с момента приобретения товара, от магазина. Гарантия на аксессуары, не содержащие электронные элементы — 14 дней с момента приобретения товара, от магазина.</p>
                <p>Гарантия распространяется на заводской брак. Причину возникновения дефектов оборудования, а также их характер определяют специалисты собственного гарантийного обслуживания в ходе диагностики; срок проведения диагностики — до 21 дня. При несогласии покупателя с заключением может быть произведена независимая экспертиза в соответствии с законом «О защите прав потребителей». В течение 14 дней с момента покупки покупатель имеет право на обмен товара на новый или возврат денежных средств, но только в том случае, если по результатам диагностики было подтверждено наличие заводского брака.</p>
                <p>По истечении 14 дней с момента покупки неисправное оборудование с заводским браком принимается в гарантийный ремонт, срок проведения ремонта — не более 45 дней. Доставка оборудования на диагностику и гарантийный ремонт осуществляется в офис продавца силами покупателя.Если вы находитесь в другом городе, вам необходимо отправить товар к нам курьерской службой CDEK (доставка до двери или до пункта выдачи).</p>
                <h4>На что не распространяется гарантия?</h4>
                <p>
                    — со следами любого рода вмешательств (попыток вскрытия/разбора/ремонта и т. п.);<br />
                    — со следами попадания внутрь посторонних веществ/предметов/жидкостей и т. п.;<br />
                    — с механическими/тепловыми повреждениями;<br />
                    — с неисправностями, возникшими вследствие появившихся в ходе эксплуатации устройства загрязнений;<br />
                    — с повреждениями, вызванными неправильными подключением, эксплуатацией в нештатном режиме, либо в условиях, не предусмотренных производителем, а также произошедшими вследствие действия сторонних обстоятельств (скачков напряжения электропитания, стихийных бедствий и т. д.);<br />
                    — с неисправностями, возникшими вследствие внесения покупателем в устройство конструкционных, программных и иных изменений;<br />
                    — с «выпадением» точек ЖК-дисплея («битыми пикселями») количеством не более 4-х.<br />
                </p>
                <h4>Какие правила сдачи и приёма устройств на диагностику или ремонт?</h4>
                <p>
                    Пожалуйста, выполните перечисленные ниже действия. Если устройство не включается или не реагирует на команды, постарайтесь выполнить как можно больше из этих действий. По гиперссылкам есть все необходимые инструкции.
                    — сохраните ваши данные* с устройства перед сдачей в ремонт, например, создайте резервную копию: iPhone, iPad, Mac, Watch.<br />
                    — отключите функцию локатор на устройстве, для этого потребуется пароль Apple ID**.<br />
                    — извлеките SIM-карту из устройства с iOS или устройства с iPadOS, если она есть, и храните её в надёжном месте.<br />
                    — снимите с устройства все аксессуары, чехлы, держатели, зарядки, провода, дополнительные накопители и прочее, если они не требуются для диагностики неисправности.
                </p>
                <p>
                    *магазин и/или авторизованный сервисный центр не несут ответственность, если в ходе диагностики и ремонта данные, находящиеся на устройстве, будут утеряны. **если не удается отключить функцию Find My, магазин и/или компания Apple в лице авторизованного сервисного центра не смогут выполнить обслуживание устройства. Это правило установлено для того, чтобы не допустить сторонних лиц к обслуживанию устройства без вашего разрешения. Если вы забыли свой идентификатор Apple ID и пароль, перейдите на веб-сайт <a href="https://iforgot.apple.com/password/verify/appleid?language=ru_RU">iForgot</a>.
                </p>
                <p style={{
                    marginBottom: '40px'
                }}>Совершение покупки означает согласие покупателя с настоящими правилами.</p>
            </div>
            <Footer />
        </>
    )
}

export default Warranty