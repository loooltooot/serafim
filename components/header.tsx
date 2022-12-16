import CharityCounter from "./charityCounter";
import Logo from "./logo";
import styles from './header.module.scss'
import Link from "next/link";

interface IHeader {
    hasBackground?: boolean
    isHomePage?: boolean
}

export default function Header({ hasBackground, isHomePage }: IHeader) {
    let headerClasses = [styles.header]
    if (isHomePage) headerClasses.push(styles.home)
    if (hasBackground) headerClasses.push(styles.background)

    let ulNavClass = isHomePage ? styles.home : ''

    return (
        <header className={headerClasses.join(' ')}>
            <div className={[styles.top, 'side__padding'].join(' ')}>
                <ul className={styles.contacts}>
                    <li>440008, г. Пенза, ул. Захарова, 6</li>
                    <li>8-927-374-47-00</li>
                    <li>serafim-deti@mail.ru</li>
                </ul>
                {!isHomePage
                    ? <CharityCounter />
                    : ''
                }
            </div>
            <div className={[styles.bottom, 'side__padding'].join(' ')}>
                {!isHomePage
                    ? <Logo />
                    : ''
                }
                <nav>
                    <ul className={ulNavClass}>
                        <li>
                            <Link href='/'>
                                Главная
                            </Link>
                        </li>
                        <li>
                            <Link href='/novosti'>
                                Новости
                            </Link>
                        </li>
                        <li className={styles.dropdown}>
                            <h4>О приюте</h4>
                            <ul>
                                <li><Link href=''>О нас</Link></li>
                                <li><Link href=''>Отчеты</Link></li>
                                <li><Link href=''>Официальные документы</Link></li>
                                <li><Link href=''>Реквизиты</Link></li>
                                <li><Link href=''>Сотрудники</Link></li>
                            </ul>
                        </li>
                        <li><Link href=''>Принимаем детей</Link></li>
                        <li><Link href=''>Как помочь</Link></li>
                        <li><Link href=''>Как нас найти</Link></li>
                        <li><Link href=''>Наши дети</Link></li>
                    </ul>
                </nav>
                {isHomePage
                    ? <CharityCounter className={styles.home__charity} />
                    : ''
                }
            </div>
            {isHomePage
                ? <Logo className={"side__padding " + styles.home__logo} />
                : ''
            }
        </header>
    )
}