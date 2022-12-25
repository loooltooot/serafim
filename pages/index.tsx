import Disclaimer from "../components/disclaimer";
import CharitySection from "../components/indexPage/charitySection";
import ChildrenSection from "../components/indexPage/childrenSection";
import NewsSection from "../components/indexPage/newsSection";
import ShelterSection from "../components/indexPage/shelterSection";
import VideoSection from "../components/indexPage/videoSection";
import Layout from "../components/layout";

export default function Home() {
	return (
		<Layout isHomePage title="Главная">
			{/* Это компонент, который отображает предупреждение. */}
			<Disclaimer />

			{/* Секция благотворительности */}
			<CharitySection />

			{/* Это компонент, который отображает список новостей. */}
			<NewsSection />

			{/* Секция "Наши воспитанники" */}
			<ChildrenSection />

			{/* Секция с фактами о приюте */}
			<ShelterSection />

			{/* Секция "Поздравительное видео" */}
			<VideoSection />
		</Layout>
	);
}
