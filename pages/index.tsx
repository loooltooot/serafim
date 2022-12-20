import CharitySection from "../components/indexPage/charitySection";
import NewsSection from "../components/indexPage/newsSection";
import Layout from "../components/layout";

export default function Home() {
    return (
        <Layout isHomePage>
            <CharitySection />
            <NewsSection />
        </Layout>
    )
}
