import HeaderWithButton from "../headerWithButton";
import styles from "./videoSection.module.scss";

export default function VideoSection() {
	return (
		<section className={styles.videoSection}>
			<HeaderWithButton
				title="Видео"
				content="Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например"
				href="/video"
			/>
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/AawLM81gIHo?autoplay=1&mute=1"
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
			<HeaderWithButton
				title="С Новым 2020 годом!"
				content="Пусть немного с опозданием, но от всей души поздравляем всех с Новым годом! Мира, Добра и Радости!!!"
				href="https://www.youtube.com/watch?v=AawLM81gIHo"
				buttonTitle="ПОСМОТРЕТЬ"
			/>
		</section>
	);
}
