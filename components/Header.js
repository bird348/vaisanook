import React,{ useRef } from "react"
import Link from "next/link"
import courseData from "./data/CourseData"
import {
    Box, 
    Heading, 
    Text,
    Button,
    Image,
    ListItem, 
    UnorderedList,
    Flex, 
    Spacer, 
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
    AccordionIcon
  } from "@chakra-ui/react"


export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    function Menu() {
      
        return (
          <>
            <Button size="md" ref={btnRef} colorScheme="" onClick={onOpen}>
              <img src="https://img.icons8.com/ios-filled/40/000000/menu--v5.png"/>
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
                  <Heading as="h3" size="lg">VaiSanook.com</Heading>
                </DrawerHeader>
                <hr />
                <DrawerBody bg="gray.100">
                  <Accordion allowToggle>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box flex="1" textAlign="left">
                            เลือกชุดวิชา
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <UnorderedList>
                          {courseData.map((data) => {
                            return(
                              <ListItem key={data.course}>
                                <Link href={{
                                  pathname: data.coursePath,
                                  query: {
                                    course: data.course, 
                                    unit: data.unit, 
                                    courseName: data.courseName
                                  }
                                }}>
                                  <a>
                                    <Text color="gray.500" onClick={onClose}>
                                      {data.courseName} ({data.course})
                                    </Text>
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
                            เกี่ยวกับ VaiSanook.com
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
        <Flex bg="gray.300" mb="5">
            <Box h="50px" p="2">
              <Link href="/">
                <a>
                  <Image src="https://img.icons8.com/ios-filled/40/000000/home.png" alt="KKBlog" />
                </a>
              </Link>
            </Box>
            <Box p="2">
              <Heading as="h2" size="xl">
                VaiSanook.com
              </Heading>
            </Box>
            <Spacer />
            <Box p="2">
                {Menu()}
            </Box>
        </Flex>
        
    )
}