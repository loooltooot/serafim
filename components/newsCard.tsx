import Image from "next/image";
import Link from "next/link";
import Card from "./card";
import styles from './card.module.scss'

interface INewsCard {
    title: string
    date: string
    img: string
    href: string
}

export default function NewsCard({title, date, img, href}: INewsCard) {
    return (
        <Link href={'/news/' + href}>
            <Card className={styles.card__interactive}>
                <h3>{title}</h3>
                <span>{date}</span>
                <Image 
                    src='/img/arrowButtonWhite.svg'
                    width={22}
                    height={22}
                    alt='Подробнее'
                    className={styles.arrow}
                    loading="lazy"
                />
                <Image 
                    src={'/img/newsBgs/' + img}
                    width={315}
                    height={477}
                    alt='Обложка новости'
                    className={styles.bg}
                    loading="lazy"
                />
            </Card>
        </Link>
    )
}