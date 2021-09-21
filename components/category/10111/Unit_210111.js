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
                {"I’m happy."}<br />
                I feel fine.<br />
                {"I’m encouraged."}<br />
                {"I’m satisfied."}
            </Text>
            <Text fontStyle="italic">Neutral (กลางๆ) เช่น</Text>
            <Text pl="5" mb="1" color="yellow.400">I feel OK.</Text>
            <Text fontStyle="italic">Negative (ด้านลบ) เช่น</Text>
            <Text pl="5" color="red.500">
                {"I’m unhappy."}<br />
                {"I’m feel bad."}<br />
                {"I’m discouraged."}<br />
                {"I’m frustrated."}<br />
                {"I’m disappointed."}<br />
                {"I’m dissatisfied."}
            </Text>


            <Heading size="sm" pl="2" py="2" my="2" borderLeftColor="yellow.400" borderLeftWidth="10px">การบอกความถี่ว่าทำอะไร บ่อยแค่ไหน</Heading>
            <Text pl="5" mb="1" color="gray.500">
                <Text as="span" color="green.500">Never </Text>
                (ไม่เคย)<br />
                <Text as="span" color="green.500">Almost never/Rarely </Text>
                (แทบจะไม่เคย/นานๆ ครั้ง)<br />
                <Text as="span" color="green.500">Seldom </Text>
                (ไม่ค่อย, ไม่ใคร่)<br />
                <Text as="span" color="green.500">Sometimes </Text>
                (บางครั้ง)<br />
                <Text as="span" color="green.500">Almost always </Text>
                (เกือบตลอดเวลา)<br />
                <Text as="span" color="green.500">Always </Text>
                (เสมอ)
            </Text>

            <Text pl="5">ตัวอย่าง</Text>
                <Text pl="5" color="gray.500">
                    <Text as="span" color="green.500">I have</Text>
                    <Text as="span" color="red.500"> never </Text>
                    <Text as="span" color="green.500">failed any English course. </Text>
                    (ฉันไม่เคยสอบตกวิชาภาษาอังกฤษเลย)
                </Text>
                <Text pl="5" color="gray.500">
                    <Text as="span" color="green.500">I</Text>
                    <Text as="span" color="red.500"> rarely </Text>
                    <Text as="span" color="green.500">read the book twice. </Text>
                    (ฉันเทบจะไม่อ่านหนังสือสองรอบ)
                </Text>
                <Text pl="5" color="gray.500">
                    <Text as="span" color="green.500">I</Text>
                    <Text as="span" color="red.500"> seldom </Text>
                    <Text as="span" color="green.500">read books at night. </Text>
                    (ฉันไม่ใคร่จะอ่านหนังสือตอนกลางคืน)
                </Text>
                <Text pl="5" color="gray.500">
                    <Text as="span" color="green.500">I</Text>
                    <Text as="span" color="red.500"> sometimes </Text>
                    <Text as="span" color="green.500">go to school on Saturday. </Text>
                    (บางทีฉันก็ไปโรงเรียนในวันเสาร์)
                </Text>
                <Text pl="5" color="gray.500">
                    <Text as="span" color="green.500">I</Text>
                    <Text as="span" color="red.500"> almost always </Text>
                    <Text as="span" color="green.500">wake up very early in the morning. </Text>
                    (ฉันตื่นเช้ามากแทบจะทุกวัน)
                </Text>
                <Text pl="5" color="gray.500">
                    <Text as="span" color="green.500">I</Text>
                    <Text as="span" color="red.500"> always </Text>
                    <Text as="span" color="green.500">study early in the morning. </Text>
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
                    <Text as="span" color="red.500"> should </Text>
                    <Text as="span" color="green.500">go to the library. </Text>
                    (คุณควรจะไปที่ห้องสมุด) <br />
                    <Text as="span" color="green.500">You</Text>
                    <Text as="span" color="red.500"> could </Text>
                    <Text as="span" color="green.500">speak to your friends. </Text>
                    (คุณอาจจพูดคุยกับเพื่อนๆ ได้)
                </Text>


                <Heading size="sm" pl="2" py="2" my="2" borderLeftColor="yellow.400" borderLeftWidth="10px">การบอกความจำเป็นใช้ must, need to</Heading>
                <Text pl="5" color="gray.500" mb="1">
                    <Text as="span" color="green.500">I</Text>
                    <Text as="span" color="red.500"> need to </Text>
                    <Text as="span" color="green.500">improve my pronunciation. </Text>
                    (ฉันจำเป็นต้องปรับปรุงการออกเสียง) <br />
                    <Text as="span" color="green.500">I</Text>
                    <Text as="span" color="red.500"> must </Text>
                    <Text as="span" color="green.500">read more. </Text>
                    (ฉันต้องอ่านหนังสือมากขึ้น) <br />
                    <Text as="span" color="green.500">I</Text>
                    <Text as="span" color="red.500"> need to </Text>
                    <Text as="span" color="green.500">practice more. </Text>
                    (ฉันจำเป็นต้องฝึกฝนมากว่านี้) <br />
                    <Text as="span" color="green.500">I</Text>
                    <Text as="span" color="red.500"> must </Text>
                    <Text as="span" color="green.500">memorize these words. </Text>
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
                <Text fontStyle="italic">
                    <Text as="span" color="red.500">คำนาม (Noun)</Text>
                    คือ คำบอกถึงคน สัตว์ สิ่งของ สิ่งที่ต้องสนใจในการใช้คำนาม คือ การใช้คำกำกับนาม เช่น
                </Text>
                <Text pl="5" color="green.500" mb="1">
                    <Text as="span" mr="20%">a, an, the</Text>
                    <Text as="span">much, many</Text> <br />
                    <Text as="span" mr="10%">this, that, these, those</Text>
                    <Text as="span">all, both, half</Text> <br />
                    <Text as="span" mr="20%">a few, a little</Text>
                    <Text as="span">some, any</Text>
                </Text>
                <Text fontStyle="italic">
                    <Text as="span" color="red.500">คำสรรพนาม (Pronoun)</Text>
                    คือ คำที่อ้างถึง คน สัตว์ สิ่งของ เช่น 
                </Text>
                <Text pl="5" color="gray.500" mb="1">
                    personal pronoun เช่น <br />
                    <Text as="span" color="red.500" pl="3">subject: </Text>
                    <Text as="span" color='green.500'>I, he, she, it, they, you, we </Text> <br />
                    <Text as="span" color="red.500" pl="3">object: </Text>
                    <Text as="span" color='green.500'>me, him ,her, it, them, you, us </Text> <br />
                    reflexive pronoun เช่น <br />
                    <Text as="span" color='green.500' pl="3">myself, himself, herself, itself, themselves, yourself, yourselves, ourselves</Text> <br />
                    possessive pronoun เช่น <br />
                    <Text as="span" color='green.500' pl="3">mine, his, hers, its, theirs, ours, yours </Text> <br />
                    relative pronoun เช่น <br />
                    <Text as="span" color='green.500' pl="3">wh-word, that </Text> <br />
                    interrogative pronouns เช่น <br />
                    <Text as="span" color='green.500' pl="3">who, whom, whose, which, what </Text>
                </Text>
                <Text fontStyle="italic">
                    <Text as="span" color="red.500">คำกริยา (Verb)</Text>
                    แสดงการกระทำ แบ่งออกเป็น
                </Text>
                <Text pl="5" color="gray.500" mb="1">
                    กริยาช่วย มีจำนวนจำกัด เช่น <br />
                    <Text as="span" color='green.500' pl="3"> Do, Have, BE </Text> <br />
                    กริยา modals เช่น <br />
                    <Text as="span" color='green.500' pl="3"> can, may, shall, will, must, could, might, should, would </Text> <br />
                    คำกริยาที่ตามหลัง modals อยู่ในรูป <br />
                    <Text as="span" color='red.500' pl="3"> base form (ไม่ผัน) </Text>  <br/>
                    กริยาแท้ คือ กริยาทั่วไป ต้องการกรรม เช่น <br />
                    <Text as="span" color='green.500' pl="3" mb="1"> I eat an apple.</Text>
                </Text>
                <Text pl="5" color="gray.500">สิ่งที่ต้องสนใจ คือ รูปของกริยา เช่น </Text> <br />
                <Box w={[250, 350, 450]} overflowX="auto"ml="5" mb="1">
                    <Table size="sm" >
                        <Thead>
                            <Tr>
                            <Th fontSize={["10px", "12px", "15px"]}>Base form</Th>
                            <Th fontSize={["10px", "12px", "15px"]}>Past</Th>
                            <Th fontSize={["10px", "12px", "15px"]}>Part participle</Th>
                            <Th fontSize={["10px", "12px", "15px"]}>present participle</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                            <Td fontSize={["10px", "12px", "15px"]}>be</Td>
                            <Td fontSize={["10px", "12px", "15px"]}>was/were</Td>
                            <Td fontSize={["10px", "12px", "15px"]}>been</Td>
                            <Td fontSize={["10px", "12px", "15px"]}>being</Td>
                            </Tr>
                        </Tbody>
                        <Tbody>
                            <Tr>
                            <Td fontSize={["10px", "12px", "15px"]}>walk</Td>
                            <Td fontSize={["10px", "12px", "15px"]}>walked </Td>
                            <Td fontSize={["10px", "12px", "15px"]}>walked </Td>
                            <Td fontSize={["10px", "12px", "15px"]}>walking</Td>
                            </Tr>
                        </Tbody>
                        <Tbody>
                            <Tr>
                            <Td fontSize={["10px", "12px", "15px"]}>speak</Td>
                            <Td fontSize={["10px", "12px", "15px"]}>spoke</Td>
                            <Td fontSize={["10px", "12px", "15px"]}>spoken</Td>
                            <Td fontSize={["10px", "12px", "15px"]}>speakimg</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>
                <Text pl="5" color="gray.500">
                    <Text as="span" fontWeight="bold">active/passive voice </Text>
                    ประธานเป็นผู้กระทำหรือถูกกระทำในประโยค 
                </Text>
                <Text pl="5" mb="1">
                    active voice:
                    <Text as="span" color="green.500"> I eat an apple.</Text> <br />
                    passive voice:
                    <Text as="span" color="green.500"> An apple was eaten by me.</Text>
                </Text>
                <Text fontStyle="italic">
                    <Text as="span" color="red.500">คำคุณศัพท์ (Adjective)</Text>
                    ขยายคำนามหรือสรรพนาม เช่น บอกสี บอกขนาด บอกคุณลักษณะของคำนามนั้นๆ สิ่งที่ต้องสนใจในการใช้คำคุณศัพท์ คือ ลำดับที่ของคำคุณศัพท์ที่มาก่อนหน้าคำนาม เช่น
                </Text>
                <Text pl="8" color="green.500">
                    a
                    <Text as="span" color="red.500"> red </Text>
                    book
                </Text>
                <Text pl="5" color="gray.500" mb="1">
                    หรือตามหลัง BE เช่น <br />
                    <Text as="span" color='green.500' pl="3"> I am</Text>
                    <Text as="span" color='red.500'> happy.</Text> <br />
                    linking verb เช่น <br />
                    <Text as="span" color='green.500' pl="3"> I feel</Text>
                    <Text as="span" color='red.500'> good.</Text> <br />
                    <Text as="span" color='green.500' pl="3"> The cake tastes</Text>
                    <Text as="span" color='red.500'> good.</Text> <br />
                    <Text as="span" color='green.500' pl="3"> That looks</Text>
                    <Text as="span" color='red.500'> wonderful.</Text> <br />
                </Text>
                <Text fontStyle="italic">
                    นอกจากนี้ยังต้องสนใจการเปรียบเทียบคำคุณศัพท์ขั้นกว่า หรือ ขั้นสูงสุด ว่าเปลี่ยนรูปอย่างไร เช่น
                </Text>
                <Text pl="5" color="green.500" mb="1">
                    Pim is
                    <Text as="span" color='red.500'> taller than </Text>
                    Dara. <br />
                    Dara is
                    <Text as="span" color='red.500'> more beautiful than </Text>
                    Pim. <br />
                    Suda is
                    <Text as="span" color='red.500'> the most beautiful </Text>
                    girl in this class.
                </Text>
                <Text fontStyle="italic">
                    <Text as="span" color="red.500">คำกริยาวิเศษณ์ (Adverb) </Text>
                    ขยายคำกริยา มักลงท้ายด้วย ly เช่น
                </Text>
                <Text pl="8" color="green.500">
                    I read this book
                    <Text as="span" color='red.500'> slowly. </Text> <br />
                </Text>
                <Text pl="5" color="gray.500" mb="1">
                    และแบบที่มีรูปเหมือนคำคุณศัพท์ เช่น <br />
                    <Text as="span" color='green.500' pl="3"> fast, hard </Text>
                </Text>
                <Text pl="5" color="gray.500" mb="1">
                    ขยายคำคุณศัพท์ เช่น <br />
                    <Text as="span" color='red.500' pl="3">extremely </Text>
                    <Text as="span" color='green.500'>dangerous</Text> <br />
                    <Text as="span" color='red.500' pl="3">really </Text>
                    <Text as="span" color='green.500'>pretty</Text> <br />
                    <Text as="span" color='red.500' pl="3">deeply </Text>
                    <Text as="span" color='green.500'>concerned</Text> <br />
                    <Text as="span" color='red.500' pl="3">very </Text>
                    <Text as="span" color='green.500'>quick</Text>
                </Text>
                <Text fontStyle="italic">
                    <Text as="span" color="red.500">คำสันธาน (Conjunction) </Text>
                    เขี่อมคำ เชื่อมข้อความ เช่น and, but, however มึจำนวนจำกัด เช่น
                </Text>
                <Text pl="5" color="green.500">
                    Dara sings
                    <Text as="span" color='red.500'> and </Text>
                    plays the guitar at the party. <br />
                    Dara did not go to Natta’s birthday party;
                    <Text as="span" color='red.500'> however, </Text>
                    she sent a bouquet of flowers.
                </Text>
                <Text pl="5" color="gray.500" mb="1">
                    นอกจากนี้ควรทราบวิธีใช้
                    <Text as="span" color='green.500'> either … or …, neither … nor …, both … and ... </Text>
                </Text>
                <Text fontStyle="italic">
                    <Text as="span" color="red.500">คำบุพบท (Preposition) </Text>
                    จะมีจำนวนจำกัด
                </Text>
                <Text pl="5" color="gray.500" mb="1">
                    บอกตำแหน่ง เช่น
                    <Text as="span" color='green.500'> in, on, at</Text> <br />
                    บอกเวลา เช่น
                    <Text as="span" color='red.500'> at</Text>
                    <Text as="span" color='green.500'> 9:00 o’clock</Text>,
                    <Text as="span" color='red.500'> on </Text>
                    <Text as="span" color='green.500'>Monday</Text>
                </Text>
                <Text fontStyle="italic">
                    <Text as="span" color="red.500">คำอุทาน (Interjection) </Text>
                    บอกอารมณ์ความรู้สึก ดีใจ เสียใจ ตกใจ เช่น
                    <Text as="span" color="red.500"> Oh, Well, Ah </Text> <br />
                </Text>
                <Text pl="5" color="gray.500">
                    ตัวอย่าง เช่น
                    <Text as="span" color='red.500'> Oh! </Text>
                    <Text as="span" color='green.500'> didn’t know that.</Text>
                </Text>

                <Text textAlign="center" textColor="red.500" my="5">*** END ***</Text>
        </>
    )
}