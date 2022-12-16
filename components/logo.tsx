import styles from './logo.module.scss'

interface ILogo {
    className?: string
}

export default function Logo({ className }: ILogo) {
    const classes = [styles.logo, className]

    return (
        <div className={classes.join(' ')}>
            <h1>“Серафим”</h1>
            <span>детский православный приют</span>
        </div>
    )
}