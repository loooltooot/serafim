import Image from "next/image";
import Link from "next/link";
import Card from "./card";
import styles from './charityCard.module.scss'

export default function CharityCard() {
    return (
        <Card className={styles.card}>
            <h2>"Название благотворительного фонда"</h2>
            <p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.."</p>
            <button>
                <Link href='/charity'>
                    <span>ПОЖЕРТВОВАТЬ</span>
                    <Image
                        src='/img/arrow.svg'
                        width={79}
                        height={16}
                        alt='Пожертвовать'
                    />
                    <Image
                        src='/img/wallet.svg'
                        width={108}
                        height={112}
                        alt='Пожертвовать'
                    />
                </Link>
            </button>
        </Card>
    )
}