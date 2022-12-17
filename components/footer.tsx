import Link from 'next/link'
import styles from './footer.module.scss'
import Image from 'next/image'
import Credits from './credit'
import NavBar from './navBar'
import Logo from './logo'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.top + ' side__padding'}>
                <Logo />
                <div>
                    <NavBar />
                    <div className={styles.contacts}>
                        <span>440008, г. Пенза, ул. Захарова, 6</span>
                        <span>8-927-374-47-00</span>
                        <span>serafim-deti@mail.ru</span>
                    </div>
                </div>
            </div>
            <div className={styles.credits + ' side__padding'}>
                <Credits />
            </div>
            <div className={styles.bg__left}></div>
            <div className={styles.bg__right}></div>
        </footer>
    )
}