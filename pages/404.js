import { Box, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Layout from '../components/Layout';


export default function ErrorPage() {
    return(
        <Layout title="404 Not Found">
            <Box textAlign="center" mt="5">
                <Heading size="lg"> </Heading>
                <Heading size="sm" color="red" my="3">ไม่พบหน้าเว็บเพจที่คุณต้องการ</Heading>
                <Text fontSize="sm">หน้าที่คุณต้องการค้นหาอาจไม่มีอยู่จริง หรือ อาจย้ายไปอยู่ที่อื่น</Text>
                <Text fontSize="sm" color="blue.500" mt="5">
                    <Link href="/">
                        <a>กลับไปหน้าหลัก...</a>
                    </Link>
                </Text>
            </Box>
        </Layout>
    )
}