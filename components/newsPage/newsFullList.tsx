import { latestNews } from "../../data/news";
import NewsCard from "../newsCard";
import styles from "./newsFullList.module.scss";

interface INewsFullList {
	start?: number;
	end?: number;
}

export default function NewsFullList({ start, end }: INewsFullList) {
	const news = latestNews.slice(start ?? 0, end);

	return (
		<ul className={styles.list}>
			{news.map((post, index) => (
				<li key={index}>
					<NewsCard
						title={post.title}
						date={post.date}
						img={post.img}
						id={post.id}
					/>
				</li>
			))}
		</ul>
	);
}
