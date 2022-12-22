import Slider from "./slider";
import styles from "./allNewsSection.module.scss";

export default function AllNewsSection() {
	return (
		<section className={styles.section}>
			<h2>Новости</h2>
			<Slider />
		</section>
	);
}
