import Footer from './Footer'
import Header from './Header'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'

export default function Layout({ children, title }) {

    
    return(
        <>
            <Head>
                <title>{ title }</title>
                <meta charset="UTF-8" />
                <meta property="description" content="alls" />
                <meta property="keywords" content="alls, a lifelong learning society, สังคมแห่งการเรียนรู้ตลอดชีวิต, สรุปวิชา, มสธ." />
                <meta property="author" content="Khomsan Khamprom" />
                <meta property="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Box py="2" px="2" w="100%" h="90px" bg="gray.300">
                <Header />
            </Box>
           
            <Box py="2" px="2" style={{minHeight: 'calc(100vh - 190px)'}}>
                { children }
            </Box>
            <Box py="2" px="2" w="100%" h="100px" bg="gray.500">
                <Footer  />
            </Box>
        </>
    )
}