import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from "../components/Layout";
import { useMediaQuery } from "@chakra-ui/react"
import unitSelectData from '../components/data/UnitSelectData';


import Home_10103 from '../components/category/10103/Home_10103';
import Home_10111 from '../components/category/10111/Home_10111';
import Home_10131 from '../components/category/10131/Home_10131';
import Home_10141 from '../components/category/10141/Home_10141';
import Home_10151 from '../components/category/10151/Home_10151';
import Home_13413 from '../components/category/13413/Home_13413';
import Home_96101 from '../components/category/96101/Home_96101';
import Home_96102 from '../components/category/96102/Home_96102';
import Home_96304 from '../components/category/96304/Home_96304';
import Home_96305 from '../components/category/96305/Home_96305';
import Home_96404 from '../components/category/96404/Home_96404';
import Home_96407 from '../components/category/96407/Home_96407';
import Home_96408 from '../components/category/96408/Home_96408';
import Home_96411 from '../components/category/96411/Home_96411';
import Home_96412 from '../components/category/96412/Home_96412';
import Home_96413 from '../components/category/96413/Home_96413';
import Home_96414 from '../components/category/96414/Home_96414';
import Home_96415 from '../components/category/96415/Home_96415';
import Home_99201 from '../components/category/99201/Home_99201';
import Home_99202 from '../components/category/99202/Home_99202';
import Home_99301 from '../components/category/99301/Home_99301';
import Home_99321 from '../components/category/99321/Home_99321';
import Home_99402 from '../components/category/99402/Home_99402';
import Home_99409 from '../components/category/99409/Home_99409';

import { 
    Center,
    Box, 
    Heading,
    Button,
    UnorderedList,
    ListItem,
    Divider,
    Flex,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    useDisclosure
} from '@chakra-ui/react';



export default function Sheets() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const router = useRouter()
    const { course, unit, courseName } = router.query
    const [isLargerThan600] = useMediaQuery("(min-width: 600px)")

    const unitList = () => {
        return(
            <Box>
                <Heading size="xs" textAlign="center" color="green.500">{course} <br /> {courseName}</Heading> <br />
                <Divider />
                <Center pt="3">
                    <UnorderedList>
                        {unitSelectData.map((data) => {
                            return(
                                <ListItem fontSize="sm" onClick={onClose} key={data.unitNo}   >
                                    <Link href={{
                                        pathname: data.unitPath,
                                        query: {course: course, unit: data.unitNo, courseName: courseName}
                                    }} 
                                    >
                                        <a>
                                            {data.unitList}
                                        </a>
                                    </Link>
                                </ListItem>
                            )
                        })}
                    </UnorderedList>
                </Center>
            </Box>
        )
    }
    
    const unitSelect = () => {
        
        return(
            <Center>
                <Button colorScheme="messenger" w="100%" size="sm" onClick={onOpen}>
                    เลือกหน่วย
                </Button>
                <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerHeader borderBottomWidth="1px">
                            <Center fontSize="md">
                                {course} {courseName}
                            </Center>
                        </DrawerHeader>
                        <DrawerBody>
                            <Center>
                                <UnorderedList>
                                {unitSelectData.map((data) => {
                                    return(
                                        <ListItem fontSize="sm" onClick={onClose} key={data.unitNo}>
                                            <Link href={{
                                                pathname: data.unitPath,
                                                query: {course: course, unit: data.unitNo, courseName: courseName}
                                            }} >
                                                <a>
                                                    {data.unitList}
                                                </a>
                                            </Link>
                                        </ListItem>
                                    )
                                })}
                                </UnorderedList>
                            </Center>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Center>
        )
    }

    return(
        <Layout title="สรุปวิชา">
            <Box mx="3" pos="sticky" top="0">
                {isLargerThan600 ? null: unitSelect()}
            </Box>
            <Center>
                <Flex> 
                    {
                        isLargerThan600 ? 
                        <Box h="400px" pos="sticky" top="0" w="200px" ml="3" my="3" pt="2">
                            { unitList() }
                        </Box>
                        : null
                    }
                        <Box my="3" px="3" fontSize={["10px", "12px", "12px"]} w={{sm: "100%", md: "540px", lg: "800px"}}
                        borderLeftWidth={isLargerThan600 ? "2px" : null} 
                        borderLeftColor={isLargerThan600 ? "green.400": null}
                        userSelect="none"
                        >
                            {course == "10103" && <Home_10103 unit={unit} />}
                            {course == "10111" && <Home_10111 unit={unit} />}
                            {course == "10131" && <Home_10131 unit={unit} />}
                            {course == "10141" && <Home_10141 unit={unit} />}
                            {course == "10151" && <Home_10151 unit={unit} />}
                            {course == "13413" && <Home_13413 unit={unit} />}
                            {course == "96101" && <Home_96101 unit={unit} />}
                            {course == "96102" && <Home_96102 unit={unit} />}
                            {course == "96304" && <Home_96304 unit={unit} />}
                            {course == "96305" && <Home_96305 unit={unit} />}
                            {course == "96404" && <Home_96404 unit={unit} />}
                            {course == "96407" && <Home_96407 unit={unit} />}
                            {course == "96408" && <Home_96408 unit={unit} />}
                            {course == "96411" && <Home_96411 unit={unit} />}
                            {course == "96412" && <Home_96412 unit={unit} />}
                            {course == "96413" && <Home_96413 unit={unit} />}
                            {course == "96414" && <Home_96414 unit={unit} />}
                            {course == "96415" && <Home_96415 unit={unit} />}
                            {course == "99201" && <Home_99201 unit={unit} />}
                            {course == "99202" && <Home_99202 unit={unit} />}
                            {course == "99301" && <Home_99301 unit={unit} />}
                            {course == "99321" && <Home_99321 unit={unit} />}
                            {course == "99402" && <Home_99402 unit={unit} />}
                            {course == "99409" && <Home_99409 unit={unit} />}
                        </Box>
                </Flex>
           </Center>
        </Layout>
    )
}