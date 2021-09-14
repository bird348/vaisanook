import { 
    Heading,
    Text,
    Box,
    Center,
    Flex,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,

 } from "@chakra-ui/react"


export default function Unit_210111() {
    return(
        <>
            <Heading size="md" pb="2" mb="2" borderBottomColor="red.500" borderBottomWidth="2px">Unit 2</Heading>
            <Heading size="sm" pl="2" py="2" my="2" borderLeftColor="yellow.400" borderLeftWidth="10px">วิธีการแสดงความรู้สีกทั้งด้านบวก ด้านลบ และกลางๆ</Heading>
            <Text fontStyle="italic">Positive (ด้านบวก) เช่น</Text>
            <Text pl="5" mb="1" color="green.500">
                I’m happy.<br />
                I feel fine.<br />
                I’m encouraged.<br />
                I’m satisfied.
            </Text>
            <Text fontStyle="italic">Neutral (กลางๆ) เช่น</Text>
            <Text pl="5" mb="1" color="yellow.400">I feel OK.</Text>
            <Text fontStyle="italic">Negative (ด้านลบ) เช่น</Text>
            <Text pl="5" color="red.500">
                I’m unhappy.<br />
                I’m feel bad.<br />
                I’m discouraged.<br />
                I’m frustrated.<br />
                I’m disappointed.<br />
                I’m dissatisfied.
            </Text>


            <Heading size="sm" pl="2" py="2" my="2" borderLeftColor="yellow.400" borderLeftWidth="10px">การบอกความถี่ว่าทำอะไร บ่อยแค่ไหน</Heading>
            <Text pl="5" mb="1" color="gray.500">
                <Text as="span" color="green.500" mr="1">Never</Text>
                (ไม่เคย)<br />
                <Text as="span" color="green.500" mr="1">Almost never/Rarely</Text>
                (แทบจะไม่เคย/นานๆ ครั้ง)<br />
                <Text as="span" color="green.500" mr="1">Seldom</Text>
                (ไม่ค่อย, ไม่ใคร่)<br />
                <Text as="span" color="green.500" mr="1">Sometimes</Text>
                (บางครั้ง)<br />
                <Text as="span" color="green.500" mr="1">Almost always</Text>
                (เกือบตลอดเวลา)<br />
                <Text as="span" color="green.500" mr="1">Always</Text>
                (เสมอ)
            </Text>

            <Text pl="5">ตัวอย่าง</Text>
                <Text pl="5" color="gray.500">
                    <Text as="span" color="green.500">I have</Text>
                    <Text as="span" color="red.500" mx="1">never</Text>
                    <Text as="span" color="green.500" mr="1">failed any English course.</Text>
                    (ฉันไม่เคยสอบตกวิชาภาษาอังกฤษเลย)
                </Text>
                <Text pl="5" color="gray.500">
                    <Text as="span" color="green.500">I</Text>
                    <Text as="span" color="red.500" mx="1">rarely</Text>
                    <Text as="span" color="green.500" mr="1">read the book twice.</Text>
                    (ฉันเทบจะไม่อ่านหนังสือสองรอบ)
                </Text>
                <Text pl="5" color="gray.500">
                    <Text as="span" color="green.500">I</Text>
                    <Text as="span" color="red.500" mx="1">seldom</Text>
                    <Text as="span" color="green.500" mr="1">read books at night.</Text>
                    (ฉันไม่ใคร่จะอ่านหนังสือตอนกลางคืน)
                </Text>
                <Text pl="5" color="gray.500">
                    <Text as="span" color="green.500">I</Text>
                    <Text as="span" color="red.500" mx="1">sometimes</Text>
                    <Text as="span" color="green.500" mr="1">go to school on Saturday.</Text>
                    (บางทีฉันก็ไปโรงเรียนในวันเสาร์)
                </Text>
                <Text pl="5" color="gray.500">
                    <Text as="span" color="green.500">I</Text>
                    <Text as="span" color="red.500" mx="1">almost always</Text>
                    <Text as="span" color="green.500" mr="1">wake up very early in the morning.</Text>
                    (ฉันตื่นเช้ามากแทบจะทุกวัน)
                </Text>
                <Text pl="5" color="gray.500">
                    <Text as="span" color="green.500">I</Text>
                    <Text as="span" color="red.500" mx="1">always</Text>
                    <Text as="span" color="green.500" mr="1">study early in the morning.</Text>
                    (ฉันมักจะอ่านหนังสือตอนเช้ามืดเสมอๆ)
                </Text>


                <Heading size="sm" pl="2" py="2" my="2" borderLeftColor="yellow.400" borderLeftWidth="10px">โครงสร้างประโยคแสดงความรู้สึก</Heading>
                <Text fontStyle="italic">Subject + BE + Adj เช่น</Text>
                <Text pl="5" mb="1" color="green.500">
                    I am OK. <br />
                    I am happy. <br />
                    I am unhappy. <br />
                    I am worried. <br />
                    I am frustrated.
                </Text>
                <Text fontStyle="italic">Subject + feel + Adj เช่น</Text>
                <Text pl="5" color="green.500">
                    I feel bad. <br />
		            I feel discouraged. <br />
		            I feel unhappy.
                </Text>


                <Heading size="sm" pl="2" py="2" my="2" borderLeftColor="yellow.400" borderLeftWidth="10px">การแนะนำ</Heading>
                <Text fontStyle="italic">การแนะนำอาจใช้ should (ควรจะ) และ could (อาจจะ) เช่น </Text>
                <Text pl="5" color="gray.500">
                    <Text as="span" color="green.500">You</Text>
                    <Text as="span" color="red.500" mx="1">should</Text>
                    <Text as="span" color="green.500" mr="1">go to the library.</Text>
                    (คุณควรจะไปที่ห้องสมุด) <br />
                    <Text as="span" color="green.500">You</Text>
                    <Text as="span" color="red.500" mx="1">could</Text>
                    <Text as="span" color="green.500" mr="1">speak to your friends.</Text>
                    (คุณอาจจพูดคุยกับเพื่อนๆ ได้)
                </Text>


                <Heading size="sm" pl="2" py="2" my="2" borderLeftColor="yellow.400" borderLeftWidth="10px">การบอกความจำเป็นใช้ must, need to</Heading>
                <Text pl="5" color="gray.500" mb="1">
                    <Text as="span" color="green.500">I</Text>
                    <Text as="span" color="red.500" mx="1">need to</Text>
                    <Text as="span" color="green.500" mr="1">improve my pronunciation.</Text>
                    (ฉันจำเป็นต้องปรับปรุงการออกเสียง) <br />
                    <Text as="span" color="green.500">I</Text>
                    <Text as="span" color="red.500" mx="1">must</Text>
                    <Text as="span" color="green.500" mr="1">read more.</Text>
                    (ฉันต้องอ่านหนังสือมากขึ้น) <br />
                    <Text as="span" color="green.500">I</Text>
                    <Text as="span" color="red.500" mx="1">need to</Text>
                    <Text as="span" color="green.500" mr="1">practice more.</Text>
                    (ฉันจำเป็นต้องฝึกฝนมากว่านี้) <br />
                    <Text as="span" color="green.500">I</Text>
                    <Text as="span" color="red.500" mx="1">must</Text>
                    <Text as="span" color="green.500" mr="1">memorize these words.</Text>
                    (ฉันต้องท่องจำคำศัพท์เหล่านี้)
                </Text>
                <Text fontStyle="italic">โครงสร้างของภาษาที่ใช้ในการแนะนำและบอกความจำเป็น</Text>
                <Flex>
                    <Center w="70px">
                        <Text as="span" color="green.500" mr="5%">Subject</Text>
                    </Center>
                    <Center>
                        {"+"}
                    </Center>
                    <Box w="70px" mx="2" textAlign="center">
                        <Text as="span" color="red.500">must</Text> <br />
                        <Text as="span" color="red.500">need to</Text> <br />
                        <Text as="span" color="red.500">should</Text> <br />
                        <Text as="span" color="red.500">could</Text> <br />
                    </Box>
                    <Center>
                        {"+"}
                    </Center>
                    <Center w="90px">
                        <Text as="span" color="green.500" ml="2">V base form</Text> <br />
                    </Center>
                </Flex>


                <Heading size="sm" pl="2" py="2" my="2" borderLeftColor="yellow.400" borderLeftWidth="10px">Grammar</Heading>
                <Text fontStyle="italic"><Text as="span" color="red.500">คำนาม (Noun)</Text> คือ คำบอกถึงคน สัตว์ สิ่งของ สิ่งที่ต้องสนใจในการใช้คำนาม คือ การใช้คำกำกับนาม เช่น</Text>
                <Text pl="5" color="green.500" mb="1">
                    <Text as="span" mr="20%">a, an, the</Text><Text as="span">much, many</Text> <br />
                    <Text as="span" mr="10%">this, that, these, those</Text><Text as="span">all, both, half</Text> <br />
                    <Text as="span" mr="20%">a few, a little</Text><Text as="span">some, any</Text>
                </Text>
                <Text fontStyle="italic"><Text as="span" color="red.500">คำสรรพนาม (Pronoun)</Text> คือ คำที่อ้างถึง คน สัตว์ สิ่งของ เช่น </Text>
                <Text pl="5" color="gray.500" mb="1">
                    personal pronoun เช่น <br />
                    <Text as="span" color="red.500">subject: </Text>
                    <Text as="span" color='green.500'>I, he, she, it, they, you, we </Text> <br />
                    <Text as="span" color="red.500">object: </Text>
                    <Text as="span" color='green.500'>me, him ,her, it, them, you, us </Text>
                    reflexive pronoun เช่น <br />
                    <Text as="span" color='green.500'>myself, himself, herself, itself, themselves, yourself, yourselves, ourselves</Text>
                    possessive pronoun เช่น <br />
                    <Text as="span" color='green.500'>mine, his, hers, its, theirs, ours, yours </Text>
                    relative pronoun เช่น <br />
                    <Text as="span" color='green.500'>wh-word, that </Text>
                    interrogative pronouns เช่น <br />
                    <Text as="span" color='green.500'>who, whom, whose, which, what </Text>
                </Text>
                <Text fontStyle="italic"><Text as="span" color="red.500">คำกริยา (verb)</Text> แสดงการกระทำ แบ่งออกเป็น</Text>
                <Text pl="5" color="gray.500" mb="1">
                    กริยาช่วย มีจำนวนจำกัด เช่น <br />
                    <Text as="span" color='green.500'> Do, Have, BE </Text> <br />
                    กริยา modals เช่น
                    <Text as="span" color='green.500'> can, may, shall, will, must, could, might, should, would </Text> <br />
                    คำกริยาที่ตามหลัง modals อยู่ในรูป<Text as="span" color='red.500'> base form (ไม่ผัน) </Text>  <br/>
                    กริยาแท้ คือ กริยาทั่วไป ต้องการกรรม เช่น 
                    <Text as="span" color='green.500' mb="1"> I eat an apple.</Text>
                </Text>
                <Text pl="5">สิ่งที่ต้องสนใจ คือ รูปของกริยา เช่น </Text> <br />
                <Box w={[300, 400, 500]} overflowX="auto" mx="1" mb="1">
                    <Table size="sm" >
                        <Thead>
                            <Tr>
                            <Th fontSize="10px">Base form</Th>
                            <Th fontSize="10px">Past</Th>
                            <Th fontSize="10px">Part participle</Th>
                            <Th fontSize="10px">present participle</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                            <Td fontSize="10px">be</Td>
                            <Td fontSize="10px">was/were</Td>
                            <Td fontSize="10px">been</Td>
                            <Td fontSize="10px">being</Td>
                            </Tr>
                        </Tbody>
                        <Tbody>
                            <Tr>
                            <Td fontSize="10px">walk</Td>
                            <Td fontSize="10px">walked </Td>
                            <Td fontSize="10px">walked </Td>
                            <Td fontSize="10px">walking</Td>
                            </Tr>
                        </Tbody>
                        <Tbody>
                            <Tr>
                            <Td fontSize="10px">speak</Td>
                            <Td fontSize="10px">spoke</Td>
                            <Td fontSize="10px">spoken</Td>
                            <Td fontSize="10px">speakimg</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>
                <Text pl="5"><Text as="span" fontWeight="bold">active/passive voice </Text>ประธานเป็นผู้กระทำหรือถูกกระทำในประโยค </Text>
                <Text pl="5" color="gray.500">
                    active voice:
                    <Text as="span" color="green.500"> I eat an apple.</Text> <br />
                    passive voice:
                    <Text as="span" color="green.500"> An apple was eaten by me.</Text>
                </Text>

        </>
    )
}