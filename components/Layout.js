import Footer from './Footer'
import Header from './Header'
import Head from 'next/head'
import { Box, Divider, VStack } from '@chakra-ui/react'

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
            <VStack align="stretch">
                <Box h="90px">
                    <Header />
                </Box>
            
                <Box style={{minHeight: 'calc(100vh - 227px)'}}>
                    { children }
                </Box>
                <Divider />
                <Box h="110px" pt="3">
                    <Footer  />
                </Box>
            </VStack>
            
        </>
    )
}