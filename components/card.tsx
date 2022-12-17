import styles from './card.module.scss'

interface ICard {
    children: React.ReactNode
    className?: string
}

export default function Card({ children, className }: ICard) {
    const classes = [styles.card, className]

    return (
        <div className={classes.join(' ')}>
            {children}
        </div>
    )
}