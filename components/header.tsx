import CharityCounter from "./charityCounter";
import Logo from "./logo";
import styles from "./header.module.scss";
import Link from "next/link";
import DropdownMenu from "./dropdownMenu";
import NavBar from "./navBar";

interface IHeader {
	hasBackground?: boolean;
	isHomePage?: boolean;
}

export default function Header({ hasBackground, isHomePage }: IHeader) {
	let headerClasses = [styles.header];
	if (isHomePage) headerClasses.push(styles.home);
	if (hasBackground) headerClasses.push(styles.background);

	let ulNavClass = isHomePage ? styles.home : "";

	return (
		<header className={headerClasses.join(" ")}>
			<div className={[styles.top, "side__padding"].join(" ")}>
				<ul className={styles.contacts}>
					<li>440008, г. Пенза, ул. Захарова, 6</li>
					<li>8-927-374-47-00</li>
					<li>serafim-deti@mail.ru</li>
				</ul>

				{/* Шапка на главной странице и шапка на других страницах отличается, 
                поэтому необходимо осуществлять проверки и перемещать компоненты */}
				{!isHomePage ? <CharityCounter /> : ""}
			</div>
			<div className={[styles.bottom, "side__padding"].join(" ")}>
				{!isHomePage ? <Logo /> : ""}

				{/* Панель навигации */}
				<NavBar ulNavClass={ulNavClass} />
				{isHomePage ? (
					<CharityCounter className={styles.home__charity} />
				) : (
					""
				)}
			</div>
			{isHomePage ? (
				<Logo className={"side__padding " + styles.home__logo} />
			) : (
				""
			)}
		</header>
	);
}
