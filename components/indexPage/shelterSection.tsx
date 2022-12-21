import Card from "../card";
import HeaderWithButton from "../headerWithButton";
import styles from './shelterSection.module.scss'

export default function ShelterSection() {
    const ul = (
        <ul className={styles.factsList}>
            <li>Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста</li>
            <li>За прошедшие годы текст Lorem Ipsum получил много версий</li>
            <li>Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).</li>
            <li>Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации</li>
            <li>Если вам нужен Lorem Ipsum для серьёзного проекта</li>
        </ul>
    )

    return (
        <section>
            <Card className={styles.shelter}>
                <HeaderWithButton 
                    title="О приюте"
                    href="/onas"
                    content={ul}
                />
            </Card>
        </section>
    )
}