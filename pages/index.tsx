import CharitySection from "../components/indexPage/charitySection";
import ChildrenSection from "../components/indexPage/childrenSection";
import NewsSection from "../components/indexPage/newsSection";
import Layout from "../components/layout";

export default function Home() {
    return (
        <Layout isHomePage title="Главная">
            <CharitySection />
            <NewsSection />
            <ChildrenSection />
        </Layout>
    )
}
