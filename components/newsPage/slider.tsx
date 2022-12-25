import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { Transform } from "stream";
import { latestNews } from "../../data/news";
import NewsFullList from "./newsFullList";
import styles from "./slider.module.scss";

export default function Slider() {
	// считаем количество страниц в слайдере
	const numberOfPages = Math.ceil(latestNews.length / 8);
	const slides = generateSlides(numberOfPages);
	const [page, setPage] = useState(0);
	const pageButtons = generatePageButtons(numberOfPages, setPage);

	/* Это хук, который возвращает кешированное значение. 
	Он вызывается только при изменении 'page'. */
	const innerTranslate = useMemo(() => {
		return `translateX(-${68.75 * page}vw)`;
	}, [page]);

	return (
		<div className={styles.slider}>
			<div
				className={styles.inner}
				style={{
					transform: innerTranslate,
					transition: "transform .3s ease",
					willChange: "transform",
				}}
			>
				{/* выводим список слайдов */}
				{slides.map((slide) => slide)}
			</div>
			<div className={styles.controls}>
				<button
					className={styles.arrowButton}
					onClick={() => minusPage()}
				></button>

				<ul>
					{/* выводим сгенерированные кнопки 
					для перехода по страницам */}
					{pageButtons.map((button) => button)}
				</ul>

				<button
					className={styles.arrowButton}
					onClick={() => plusPage()}
				></button>
			</div>
		</div>
	);

	function plusPage() {
		if (page + 1 < numberOfPages) setPage(page + 1);
	}

	function minusPage() {
		if (page - 1 >= 0) setPage(page - 1);
	}
}

function generateSlides(numberOfPages: number) {
	let output = [];

	for (let i = 0; i < numberOfPages; i++) {
		output.push(
			<div className={styles.slide}>
				<NewsFullList start={8 * i} end={8 * i + 8} />
			</div>
		);
	}

	return output;
}

function generatePageButtons(
	numberOfPages: number,
	onCoolClick: Dispatch<SetStateAction<number>>
) {
	let output = [];

	for (let i = 0; i < numberOfPages; i++) {
		output.push(
			<li key={i}>
				<button
					className={styles.pageButton}
					onClick={() => onCoolClick(i)}
				>
					{i + 1}
				</button>
			</li>
		);
	}

	return output;
}
