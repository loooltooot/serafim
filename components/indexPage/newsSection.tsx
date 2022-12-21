// получаем список последних новостей с сервера
import { latestNews } from "../../data/news"; 

import CoolButton from "../coolButton";
import NewsCard from "../newsCard";
import styles from './newsSection.module.scss'

export default function NewsSection() {
    return (
        <section className={styles.section}>
            <div>
                <h2>Новости</h2>
                <p>Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например</p>
                <CoolButton title="Подробнее" href="/novosti" />
            </div>
            <ul className={styles.latestNews}>
                {latestNews.map((item, index) => (
                    <li key={index}>
                        <NewsCard title={item.title} date={item.date} img={item.img} id={item.id} />
                    </li>
                ))}
            </ul>
        </section>
    )
}