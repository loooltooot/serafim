import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./dropdownMenu.module.scss";

export default function DropdownMenu() {
	const [dropdown, setDropdown] = useState(false);

	// динамически меняем класс выпадающего меню,
	// чтобы управлять его отображением
	const classes: [string] = useMemo(() => {
		return dropdown ? [styles.show] : [""];
	}, [dropdown]);

	return (
		<li
			className={styles.dropdown}
			onMouseOver={() => setDropdown(true)}
			onMouseLeave={() => setDropdown(false)}
		>
			<h4>О приюте</h4>
			<ul className={classes.join(" ")}>
				<li>
					<Link href="/onas">О нас</Link>
				</li>
				<li>
					<Link href="/otchety">Отчеты</Link>
				</li>
				<li>
					<Link href="/documenty">Официальные документы</Link>
				</li>
				<li>
					<Link href="/recvizity">Реквизиты</Link>
				</li>
				<li>
					<Link href="/sotrudniki">Сотрудники</Link>
				</li>
			</ul>
		</li>
	);
}
