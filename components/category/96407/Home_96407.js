import Unit_196407 from './Unit_196407';
import Unit_296407 from './Unit_296407';
import { Box, Heading } from '@chakra-ui/react';



export default function Home_96407({unit}) {
    return(
        <>
            <Heading mb="3" size="lg" fontWeight="bold" color="blue.400">
                การพัฒนาระบบสารสนเทศ
            </Heading>
            <Box>
                {unit == "1" && <Unit_196407 />}
                {unit == "2" && <Unit_296407 />}
            </Box>
        </>
    )
}
