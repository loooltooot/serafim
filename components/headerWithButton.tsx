import CoolButton from "./coolButton";
import styles from "./headerWithButton.module.scss";

interface IHeaderWithButton {
	title: string;
	content: string | React.ReactNode;
	href: string;
	buttonTitle?: string;
}

export default function HeaderWithButton({
	title,
	content,
	href,
	buttonTitle,
}: IHeaderWithButton) {
	return (
		<div className={styles.header}>
			<h2>{title}</h2>
			<p>{content}</p>
			<CoolButton title={buttonTitle ?? "Подробнее"} href={href} />
		</div>
	);
}
