import Footer from './Footer'
import Header from './Header'
import Head from 'next/head'

export default function Layout({ children, title }) {
    return(
        <>
            <Head>
                <title>{ title }</title>
                <meta charset="UTF-8" />
                <meta property="description" content="KKBlog" />
                <meta property="keywords" content="KKBlog, kkblog, stou, study" />
                <meta property="author" content="Khomsan Khamprom" />
                <meta property="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Header />
            { children }
            <Footer  />
        </>
    )
}