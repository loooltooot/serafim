import styles from './charityCounter.module.scss'

interface ICharityCounter {
    className?: string
}

export default function CharityCounter({ className }: ICharityCounter) {
    const amount = '45961₽'
    const classes = [styles.counter, className]

    return (
        <div className={classes.join(' ')} id='charityCounter'>
            <div className={styles.amount}>
                {amount.split('').map((letter) => (
                    <span>{letter}</span>
                ))}
            </div>
            <span>ваша доброта</span>
        </div>
    )
}