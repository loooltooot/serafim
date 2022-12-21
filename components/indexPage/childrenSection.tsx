// получаем список детей с сервера
import { children } from "../../data/children";

import ChildCard from "../childCard";
import CoolButton from "../coolButton";
import styles from './childrenSection.module.scss'

export default function ChildrenSection() {
    return (
        <section className={styles.section}>
            <header>
                <h2>Наши дети</h2>
                <CoolButton title="ПОДРОБНЕЕ" href="/nashi-deti" />
            </header>
            <ul>
                {children.map((child, index) => (
                    <li key={index}>
                        <ChildCard 
                            name={child.name} 
                            age={child.age} 
                            dream={child.dream} 
                            id={child.id} 
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}