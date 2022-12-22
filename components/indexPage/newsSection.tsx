// получаем список последних новостей с сервера
import { latestNews } from "../../data/news";

import CoolButton from "../coolButton";
import HeaderWithButton from "../headerWithButton";
import NewsCard from "../newsCard";
import styles from "./newsSection.module.scss";

export default function NewsSection() {
	const news = latestNews.slice(0, 3);

	return (
		<section className={styles.section}>
			<HeaderWithButton
				title="Новости"
				content="Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например"
				href="/novosti"
			/>
			<ul className={styles.latestNews}>
				{news.map((item, index) => (
					<li key={index}>
						<NewsCard
							title={item.title}
							date={item.date}
							img={item.img}
							id={item.id}
						/>
					</li>
				))}
			</ul>
		</section>
	);
}
