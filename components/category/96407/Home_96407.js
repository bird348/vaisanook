import Unit_196407 from './Unit_196407';
import Unit_296407 from './Unit_296407';
import Unit_396407 from './Unit_396407';
import Unit_496407 from './Unit_496407';
import Unit_596407 from './Unit_596407';
import Unit_696407 from './Unit_696407';
import Unit_796407 from './Unit_796407';
import Unit_896407 from './Unit_896407';
import Unit_996407 from './Unit_996407';
import Unit_1096407 from './Unit_1096407';
import Unit_1196407 from './Unit_1196407';
import Unit_1296407 from './Unit_1296407';
import Unit_1396407 from './Unit_1396407';
import Unit_1496407 from './Unit_1496407';
import Unit_1596407 from './Unit_1596407';

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
                {unit == "3" && <Unit_396407 />}
                {unit == "4" && <Unit_496407 />}
                {unit == "5" && <Unit_596407 />}
                {unit == "6" && <Unit_696407 />}
                {unit == "7" && <Unit_796407 />}
                {unit == "8" && <Unit_896407 />}
                {unit == "9" && <Unit_996407 />}
                {unit == "10" && <Unit_1096407 />}
                {unit == "11" && <Unit_1196407 />}
                {unit == "12" && <Unit_1296407 />}
                {unit == "13" && <Unit_1396407 />}
                {unit == "14" && <Unit_1496407 />}
                {unit == "15" && <Unit_1596407 />}
            </Box>
        </>
    )
}
