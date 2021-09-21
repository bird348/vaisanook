import { useRef } from "react"
import Link from "next/link"
import courseData from "./data/CourseData"
import {
    Box, 
    Flex,
    Spacer,
    Center,
    Heading, 
    Text,
    Button,
    ListItem, 
    UnorderedList,
    Image,
    useDisclosure, 
    DrawerHeader, 
    DrawerBody,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Accordion, 
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Divider
  } from "@chakra-ui/react"


export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    function Menu() {
      
        return (
          <>
            <Button size="md" ref={btnRef} colorScheme="whiteAlpha" onClick={onOpen}>
              <Image src="https://img.icons8.com/ios-filled/30/000000/menu--v5.png" alt="สังคมแห่งการเรียนรู้ตลอดชีวิต" />
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <Box color="red.500">
                    <DrawerCloseButton />
                </Box>
                
                <DrawerHeader bg="gray.100">
                  <Heading size="lg" color="green.500">ALLS</Heading>
                  <Text fontSize="md" color="gray.500">
                    สังคมแห่งการเรียนรู้ตลอดชีวิต
                  </Text>
                </DrawerHeader>
                <hr />
                <DrawerBody bg="gray.100">
                  <Accordion allowToggle>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box flex="1" textAlign="left">
                            ชุดวิชา
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <UnorderedList>
                          {courseData.map((data) => {
                            return(
                              <ListItem key={data.course} onClick={onClose}>
                                <Link href={{
                                  pathname: data.coursePath,
                                  query: {
                                    course: data.course, 
                                    unit: data.unit, 
                                    courseName: data.courseName
                                  }
                                }}>
                                  <a>
                                      {data.courseName} ({data.course})
                                  </a>
                                </Link>
                              </ListItem>
                            )
                          })}
                        </UnorderedList>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box flex="1" textAlign="left">
                            เกี่ยวกับ ALLS
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        ความเป็นมา
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        )
      }

    return(
      <>
        <Center>
          <Flex p="1" w={["100%", "768px", "1200px"]}>
            <Box py="1" pl="3" w={["90%", "400px", "600px"]} isTruncated>
              <Heading size="xl" color="green.500" w="700px">
                <Link href="/">
                  <a>
                    ALLS {" "}
                  </a>
                </Link>
                <Text as="span" fontSize="sm" color="yellow.500" >
                A Lifelong Learning Society
                </Text>
              </Heading>
              <Text fontSize="sm" color="gray.500">
                สังคมแห่งการเรียนรู้ตลอดชีวิต
              </Text>
            </Box>
            <Spacer />
            <Center pb="3">
              {Menu()}
            </Center>
          </Flex>
          
        </Center>
        <Divider />
      </>
    )
}