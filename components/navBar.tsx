import Link from "next/link"
import DropdownMenu from "./dropdownMenu"
import styles from './navBar.module.scss'

interface INavBar {
    ulNavClass?: string
}

export default function NavBar({ ulNavClass }: INavBar) {
    return (
        <nav className={styles.nav}>
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
                <DropdownMenu />
                <li><Link href=''>Принимаем детей</Link></li>
                <li><Link href=''>Как помочь</Link></li>
                <li><Link href=''>Как нас найти</Link></li>
                <li><Link href=''>Наши дети</Link></li>
            </ul>
        </nav>
    )
}