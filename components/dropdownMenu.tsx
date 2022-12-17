import Link from "next/link";
import { useMemo, useState } from "react";
import styles from './dropdownMenu.module.scss'

export default function DropdownMenu() {
    const [dropdown, setDropdown] = useState(false)

    const classes: [string] = useMemo(() => {
        return dropdown
            ? [styles.show]
            : ['']
    }, [dropdown])

    return (
        <li className={styles.dropdown}
            onMouseOver={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
        >
            <h4>О приюте</h4>
            <ul className={classes.join(' ')}>
                <li><Link href=''>О нас</Link></li>
                <li><Link href=''>Отчеты</Link></li>
                <li><Link href=''>Официальные документы</Link></li>
                <li><Link href=''>Реквизиты</Link></li>
                <li><Link href=''>Сотрудники</Link></li>
            </ul>
        </li>
    )
}