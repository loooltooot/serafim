import Link from "next/link";
import styles from './coolButton.module.scss'

interface ICoolButton {
    title: string
    href: string
}

export default function CoolButton({title, href}: ICoolButton) {
    return (
        <button className={styles.button}>
            <Link href={href}>{title}</Link>
        </button>
    )
}