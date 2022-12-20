import CoolButton from "../coolButton";
import NewsCard from "../newsCard";
import styles from './newsSection.module.scss'

export default function NewsSection() {
    // получаем список последних новостей с сервера
    const latestNews = [
        {
            title: 'НУЖНО КАЖДЫЙ ДЕНЬ!',
            date: '01.09.22',
            img: '1.png',
            id: '111'
        },
        {
            title: 'ДВАЖДЫ ДВА — ЧЕТЫРЕ',
            date: '09.09.22',
            img: '2.png',
            id: '222'
        },
        {
            title: 'СКОРО КАНИКУЛЫ',
            date: '26.09.22',
            img: '3.png',
            id: '333'
        },
    ]

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
                        <NewsCard title={item.title} date={item.date} img={item.img} href={item.id} />
                    </li>
                ))}
            </ul>
        </section>
    )
}