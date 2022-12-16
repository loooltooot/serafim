import Footer from "./footer"
import Header from "./header"

interface ILayout {
    children: React.ReactNode
    headerHasBackground?: boolean
    isHomePage?: boolean
}

export default function Layout({ children, headerHasBackground, isHomePage }: ILayout) {
    return (
        <>
            <Header hasBackground={headerHasBackground} isHomePage={isHomePage} />
            <main>{children}</main>
            <Footer />
        </>
    )
}