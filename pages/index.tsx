import CharitySection from "../components/indexPage/charitySection";
import ChildrenSection from "../components/indexPage/childrenSection";
import NewsSection from "../components/indexPage/newsSection";
import ShelterSection from "../components/indexPage/shelterSection";
import VideoSection from "../components/indexPage/videoSection";
import Layout from "../components/layout";

export default function Home() {
	return (
		<Layout isHomePage title="Главная">
			<CharitySection />
			<NewsSection />
			<ChildrenSection />
			<ShelterSection />
			<VideoSection />
		</Layout>
	);
}
