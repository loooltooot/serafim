import styles from './charityCounter.module.scss'

interface ICharityCounter {
    className?: string
}

export default function CharityCounter({ className }: ICharityCounter) {
    // принимаем число с сервера, прибавляем к нему символ рубля
    const amount = '45961₽'
    const classes = [styles.counter, className]

    return (
        <div className={classes.join(' ')} id='charityCounter'>
            <div className={styles.amount}>
                {amount.split('').map((letter, index) => (
                    <span key={index}>{letter}</span>
                ))}
            </div>
            <span>ваша доброта</span>
        </div>
    )
}