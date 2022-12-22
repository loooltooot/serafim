import Layout from "../components/layout";
import AllNewsSection from "../components/newsPage/allNewsSection";

export default function NewsPage() {
	return (
		<Layout title="Новости" headerHasBackground>
			<AllNewsSection />
		</Layout>
	);
}
