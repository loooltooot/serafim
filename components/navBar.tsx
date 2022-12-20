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
                <li><Link href='/prinimaem-detey'>Принимаем детей</Link></li>
                <li><Link href='/kak-pomoch'>Как помочь</Link></li>
                <li><Link href='/kak-nayti'>Как нас найти</Link></li>
                <li><Link href='/nashi-deti'>Наши дети</Link></li>
            </ul>
        </nav>
    )
}