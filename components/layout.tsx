import Head from "next/head"
import Footer from "./footer"
import Header from "./header"

interface ILayout {
    children: React.ReactNode
    headerHasBackground?: boolean
    isHomePage?: boolean
    title: string
}

export default function Layout({ children, headerHasBackground, isHomePage, title }: ILayout) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header hasBackground={headerHasBackground} isHomePage={isHomePage} />
            <main>{children}</main>
            <Footer />
        </>
    )
}