import styles from './card.module.scss'
import Card from "./card";
import Link from 'next/link';
import Image from 'next/image';

interface IChildCard {
    name: string
    age: number
    dream: string
    id: string
}

export default function ChildCard({name, age, dream, id}: IChildCard) {
    return (
        <Link href={'/deti/' + id}>
            <Card className={styles.card__interactive + ' ' + styles.childCard}>
                <h3>{name + ` (${age} лет)`}</h3>
                <span>{dream}</span>
                <Image 
                    src='/img/arrowButton.svg'
                    width={22}
                    height={22}
                    alt='Подробнее'
                    className={styles.arrow}
                    loading="lazy"
                />
                <Image 
                    src={'/img/children/' + id + '.png'}
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