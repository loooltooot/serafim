import Link from "next/link";
import CoolButton from "../components/coolButton";

export default function NotFound() {
    return (
        <section id="error404">
            <div>
                <h2>
                    Страница не найдена
                </h2>
                <span>404</span>
            </div>
            <CoolButton title="Вернуться на главную" href="/" />
        </section>
    )
}