import Footer from './Footer'
import Header from './Header'
import Head from 'next/head'
import { Box } from '@chakra-ui/layout'

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
            <Box py="5" px="3" w="100%" h="90px" bg="gray.300">
                <Header />
            </Box>
           
            <Box py="5" px="3" style={{minHeight: 'calc(100vh - 180px)'}}>
                { children }
            </Box>
            <Box py="5" px="3" w="100%" h="90px" bg="gray.500">
                <Footer  />
            </Box>
        </>
    )
}