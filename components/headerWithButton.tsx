import CoolButton from "./coolButton";
import styles from './headerWithButton.module.scss'

interface IHeaderWithButton {
    title: string
    content: string | React.ReactNode
    href: string
}

export default function HeaderWithButton({title, content, href}: IHeaderWithButton) {
    return (
        <div className={styles.header}>
            <h2>{title}</h2>
            <p>{content}</p>
            <CoolButton title="Подробнее" href={href} />
        </div>
    )
}