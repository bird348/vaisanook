import { 
    Heading,
    Text,
    Box,
    SimpleGrid,
    Divider
 } from "@chakra-ui/react";


export default function Unit_110111() {
    return(
        <>
            <Heading size="md" pb="2" mb="2" borderBottomColor="red.500" borderBottomWidth="2px">Unit 1</Heading>
            <Heading size="sm" pl="2" py="2" my="2" borderLeftColor="yellow.400" borderLeftWidth="10px">การทักทายทั่วไป</Heading>
            <Text pl="5" color="gray.500">
                <Text as="span" mr="1" color="green.500">Good morning.</Text>
                (เช้าถึง 12:00 น.)<br />
		        <Text as="span" mr="1" color="green.500">Good afternoon.</Text>
                (บ่ายถึง 18:00 น.)<br />
                <Text as="span" mr="1" color="green.500">Good evening.</Text>
		        (ประมาณ 18:00 น. เป็นต้นไป)
            </Text>


            <Heading size="sm" pl="2" py="2" my="2" borderLeftColor="yellow.400" borderLeftWidth="10px">การทักทายแบบเป็นกันเอง</Heading>
            <Text fontStyle="italic">Hi/Hello ตามด้วยชื่อ และถามทุกข์สุขโดยใช้คำถาม เช่น</Text>
            <Text pl="5" mb="1">
                <Text as="span" color="red.500">Hi,</Text>
                <Text as="span" color="green.500" mx="1">Somchai. How are you?</Text>
                <br />
                <Text as="span" color="red.500">Hello,</Text>
                <Text as="span" color="green.500" mx="1">Somsak. How are you doing?</Text>
                <br />
                <Text as="span" color="red.500">Hello,</Text>
                <Text as="span" color="green.500" mx="1">Sunee. How is it going?</Text>
            </Text>
            <Text fontStyle="italic">การตอบคำทักทาย เช่น</Text>
            <Text pl="5" mb="1" color="green.500">
                Fine/Good, thanks.<br />
                Not too bad, thanks.<br />
                Pretty good.
            </Text>
            <Text fontStyle="italic">หลังจากนั้นควรถามกลับ เช่น</Text>
            <Text pl="5" mb="1" color="green.500">
                And how are you?<br />
                What/How about you?<br />
                How about yourself?
            </Text>
            <Text fontStyle="italic">บางอาจแสดงความดีใจที่ได้พบกันอีก เช่น</Text>
            <Text pl="5" mb="1" color="green.500">(It’s) good/nice to see you again.</Text>
            <Text fontStyle="italic" mr="1">แต่สำหรับผู้ที่เคยพบกันครั้งแรกให้ใช้เหมือนประโยคข้างบนแต่ไม่มีคำว่า<Text as="span" color='red.500'>again</Text></Text>
            <Text pl="5" color="green.500">(It’s) good/nice to see you.</Text>


            <Heading size="sm" pl="2" py="2" my="2" borderLeftColor="yellow.400" borderLeftWidth="10px">การแนะนำตัวเอง</Heading>
            <Text pl="5" mb="1" color="green.500">
                Good morning. My name is …(name).<br />
                Hello I’m …(name).
            </Text>
            <Text fontStyle="italic">กรณีเกริ่นนำก่อนบอกชื่อ(ไม่แน่ใจว่าเคยเจอกันมาก่อนหรือเปล่า) เช่น</Text>
            <Text pl="5" color="green.500">Hi! I don’t think we’ve met. I’m …(name).</Text>

            <Text mx="10%" mt="2" p="2" color="red.500" borderWidth="1px" borderColor="gray.500">
                * เครื่องหมาย <Text as="span" color="green.500">/</Text> ให้เลือกใช้คำใดคำหนึ่ง <br />
                * คำใน  <Text as="span" color="green.500">()</Text> จะใส่หรือไม่ใส่ก็ได้
            </Text>


            <Heading size="sm" pl="2" py="2" my="2" borderLeftColor="yellow.400" borderLeftWidth="10px">การสอบถามและให้ข้อมูลส่วนตัว</Heading>
            <Text pl="5">
                <Text as="span" color="green.500" mr="1">What’s your name?</Text>
                <Text as="span" color="red.500">My name’s …(name).</Text>
                <br />
                <Text as="span" color="green.500" mr="1">How old are you?</Text>
                <Text as="span" color="red.500">I’m …(age) years old.</Text>
                <br />
                <Text as="span" color="green.500" mr="1">Where do you live?</Text>
                <Text as="span" color="red.500">I live in Buriram. หรือ I live on Petchkasem Road.</Text>
                <br />
                <Text as="span" color="green.500" mr="1">Where are you from?</Text>
                <Text as="span" color="red.500">I come from Thailand. หรือ I was born in Thailand.</Text>
                <br />
                <Text as="span" color="green.500" mr="1">What do you do?</Text>
                <Text as="span" color="red.500">I’m a teacher. หรือ I work for an accounting company.</Text>
                <br />
                <Text as="span" color="green.500" mr="1">What are your interests?</Text>
                <Text as="span" color="red.500">Football and basketball.</Text>
                <br />
                <Text as="span" color="green.500" mr="1">What are your hobbies?</Text>
                <Text as="span" color="red.500">Football and basketball.</Text>
                <br />
                <Text as="span" color="green.500" mr="1">What do you like to do in your free time?</Text>
                <Text as="span" color="red.500">I like shopping and watching TV.</Text>
                <br />
                <Text as="span" color="green.500" mr="1">What is your favorite food?</Text>
                <Text as="span" color="red.500">Stir-fried vegetables.</Text>
            </Text>


            <Heading size="sm" pl="2" py="2" my="2" borderLeftColor="yellow.400" borderLeftWidth="10px">คำถาม คำตอบ Yes-no questions</Heading>
            <Text pl="5" pb="2">
                Q: <Text as="span" color="green.500" ml="1">Do you live at home with your parents?</Text><br />
                A: <Text as="span" color="red.500" ml="1">Yes, I do</Text><Text as="span" color="gray.500" mx="1">หรือ</Text><Text as="span" color="red.500">No, I live in an apartment.</Text><br />
                Q: <Text as="span" color="green.500" ml="1">Do you visit your family often?</Text><br />
                A: <Text as="span" color="red.500" ml="1">Yes, I visit them every weekend.</Text><Text as="span" color="gray.500" mx="1">หรือ</Text><Text as="span" color="red.500">No, I visit them once a year.</Text><br />
                Q: <Text as="span" color="green.500" ml="1">Are you the oldest among your brothers and sisters?</Text><br />
                A: <Text as="span" color="red.500" ml="1">Yes, I am.</Text><Text as="span" color="gray.500" mx="1">หรือ</Text><Text as="span" color="red.500">No, I have one older brother and two older sisters.</Text><br />
                Q: <Text as="span" color="green.500" ml="1">Are there a lot of people in your family?</Text><br />
                A: <Text as="span" color="red.500" ml="1">Yes, there are 7 people in my family.</Text><Text as="span" color="gray.500" mx="1">หรือ</Text><Text as="span" color="red.500">No, only my parents and me.</Text>
            </Text>


            <Heading size="sm" pl="2" py="2" my="2" borderLeftColor="yellow.400" borderLeftWidth="10px">การใช้คำย่อ<Text as="span" color="red.500" ml="1">(ในวงเล็บ คือ คำเต็ม)</Text></Heading>
            <Text pl="5" pb="2">
                <Text as="span" color="green.500">My name'</Text>
                <Text as="span" color="red.500" mr="1">s</Text>
                <Text as="span" color="green.500">Suree and I'</Text>
                <Text as="span" color="red.500" mr="1">m</Text>
                <Text as="span" color="green.500">the second youngest in my family.</Text>
                <Text as="span" color="red.500" ml="1">(is, am)</Text>
                <br />
                <Text as="span" color="green.500">Siroj met Sira at the university and they’</Text>
                <Text as="span" color="red.500" mr="1">re</Text>
                <Text as="span" color="green.500">friends now.</Text>
                <Text as="span" color="red.500" ml="1">(are)</Text>
                <br />
                <Text as="span" color="green.500">Ken'</Text>
                <Text as="span" color="red.500" mr="1">s</Text>
                <Text as="span" color="green.500">studied at STOU.</Text>
                <Text as="span" color="red.500" ml="1">(has)</Text>
                <br />
                <Text as="span" color="green.500">I'</Text>
                <Text as="span" color="red.500" mr="1">ve</Text>
                <Text as="span" color="green.500">got an elder brother.</Text>
                <Text as="span" color="red.500" ml="1">(have)</Text>
                <br />
                <Text as="span" color="green.500">We'</Text>
                <Text as="span" color="red.500" mr="1">d</Text>
                <Text as="span" color="green.500">been there before he arrived.</Text>
                <Text as="span" color="red.500" ml="1">(had)</Text>
                <br />
                <Text as="span" color="green.500">What'</Text>
                <Text as="span" color="red.500"mr="1">d</Text>
                <Text as="span" color="green.500">you do yesterday?</Text>
                <Text as="span" color="red.500" ml="1">(did)</Text>
                <br />
                <Text as="span" color="green.500">She'</Text>
                <Text as="span" color="red.500" mr="1">ll</Text>
                <Text as="span" color="green.500">be here soon.</Text>
                <Text as="span" color="red.500" ml="1">(will)</Text>
                <br />
                <Text as="span" color="green.500">John'</Text>
                <Text as="span" color="red.500" mr="1">d</Text>
                <Text as="span" color="green.500">like to meet you.</Text>
                <Text as="span" color="red.500" ml="1">(would)</Text>
            </Text>
            
            
            <Heading size="sm" pl="2" py="2" my="2" borderLeftColor="yellow.400" borderLeftWidth="10px">คำศัพท์เกี่ยวกับสมาชิกครอบครัว</Heading>
            <SimpleGrid columns={[1, null, 3]} spacing="10px" px="5" mb="1">
                <Box bg="gray.100" px="3" py="2">
                    <Text color="green.500">
                        great grandparents<Text as="span" pl="2" color="gray.500">(ทวด)</Text><br />
                        great grandmother<Text as="span" pl="2" color="gray.500">(ยาย/ย่าทวด)</Text><br />
                        great grandfather<Text as="span" pl="2" color="gray.500">(ตา/ทวด)</Text><br />
                        grandmother<Text as="span" pl="2" color="gray.500">(ยาย/ย่า)</Text><br />
                        grandfather<Text as="span" pl="2" color="gray.500">(ตา/ปู่)</Text><br />
                        grandmother<Text as="span" pl="2" color="gray.500">(หลานสาว(ลูกของลูก))</Text><br />
                        grandson<Text as="span" pl="2" color="gray.500">(หลานชาย(ลูกของลูก))</Text>
                    </Text>
                </Box>
                <Box bg="gray.100" px="3" py="2">
                    <Text color="green.500">
                        parents<Text as="span" pl="2" color="gray.500">(บิดา/มารดา)</Text><br />
                        mother<Text as="span" pl="2" color="gray.500">(มารดา)</Text><br />
                        father<Text as="span" pl="2" color="gray.500">(บิดา)</Text><br />
                        daughter<Text as="span" pl="2" color="gray.500">(ลูกสาว)</Text><br />
                        son<Text as="span" pl="2" color="gray.500">(ลูกชาย)</Text><br />
                        sister<Text as="span" pl="2" color="gray.500">(พี่สาว/น้องสาว)</Text><br />
                        brother<Text as="span" pl="2" color="gray.500">(พี่ชาย/น้องชาย)</Text>
                    </Text>
                </Box>
                <Box bg="gray.100" px="3" py="2">
                    <Text color="green.500">
                        aunt<Text as="span" pl="2" color="gray.500">(ป้า/น้า/อา)</Text><br />
                        uncle<Text as="span" pl="2" color="gray.500">(ลุง/น้า/อา)</Text><br />
                        cousin<Text as="span" pl="2" color="gray.500">(ลูกพี่ลูกน้อง)</Text><br />
                        niece<Text as="span" pl="2" color="gray.500">(หลานสาว(ลูกของพี่หรือน้อง))</Text><br />
                        nephew<Text as="span" pl="2" color="gray.500">(หลานชาย(ลูกของพี่หรือน้อง))</Text><br />
                        relative<Text as="span" pl="2" color="gray.500">(ญาติ)</Text><br />
                    </Text>
                </Box>
            </SimpleGrid>
            <Text fontStyle="italic">
                ส่วนขยายข้างหน้าและข้างหลัง เช่น
            </Text>
            <Text pl="5" color="gray.500">
                <Text as="span" color="green.500" mr="1">half-</Text>
                (สายเลือดเดียวกันครึ่งหนึ่ง) เช่น 
                <Text as="span" color="green.500" mx="1">half-sister, half-brother</Text>
                (พี่น้องต่างบิดาหรือมารดา)
                <br />
                <Text as="span" color="green.500" mr="1">step-</Text>
                (ไม่มีความเกี่ยวพันทางสายเลือด) เช่น 
                <Text as="span" color="green.500" mx="1">step-father</Text>
                (พ่อเลี้ยง)
                <br />
                <Text as="span" color="green.500" mr="1">-in-law</Text>
                (มีความเกี่ยวพันจากการแต่งงาน) เช่น 
                <Text as="span" color="green.500" mx="1">mother-in-law</Text>
                (แม่ยายหรือแม่สามี) 
                <Text as="span" color="green.500" mx="1">daughter-in-law</Text>
                (ลูกสะใภ้)
            </Text>


            <Heading size="sm" pl="2" py="2" my="2" borderLeftColor="yellow.400" borderLeftWidth="10px">คำถาม-คำตอบ เกี่ยวกับกิจวัตรประจำว้น</Heading>
            <Text pl="5" pb="2">
                Q: <Text as="span" color="green.500" ml="1">How do you start the day?</Text><br />
                A: <Text as="span" color="red.500" ml="1">I usually wake up at 7 a.m. and then have breakfast and go to work</Text><br />
                Q: <Text as="span" color="green.500" ml="1">How does your routine differ from weekdays to weekends?</Text><br />
                A: <Text as="span" color="red.500" ml="1">During the week, I wake up at 7 a.m. every day to go to work and come home at 7 p.m. after I have finished. On weekends I have no set routine so I can relax and do whatever comes up.</Text><br />
                Q: <Text as="span" color="green.500" ml="1">What is the most enjoyable time of week for you?</Text><br />
                A: <Text as="span" color="red.500" ml="1">The weekend, as I do not have to work and can relax.</Text><br />
                Q: <Text as="span" color="green.500" ml="1">What time do you start and finish work?</Text><br />
                A: <Text as="span" color="red.500" ml="1">I start work at 8:30 a.m. and finish at 5 p.m.</Text><br />
                Q: <Text as="span" color="green.500" ml="1">What do you do in the evenings?</Text><br />
                A: <Text as="span" color="red.500" ml="1">I either watch TV or do homework.</Text><br />
                Q: <Text as="span" color="green.500" ml="1">What do you do during the week?</Text><br />
                A: <Text as="span" color="red.500" ml="1">I work.</Text>
            </Text>


            <Heading size="sm" pl="2" py="2" my="2" borderLeftColor="yellow.400" borderLeftWidth="10px">Grammar: Present simple tense</Heading>
            <Text fontStyle="italic" pl="5">
                รูปของกริยาใน tens
                <Text as="span" color="red.500" px="1">ถ้าประธานเป็นเอกพจน์บุรุษที่ 3 กริยาต้องเติม s</Text>
                เช่น<br />
                <Text as="span" color="green.500" pr="1">He/She/It/Peter/My mother works.</Text>
                ส่วน
                <Text as="span" color="red.500" px="1">I,You, We, They</Text>
                ไม่ต้องเติม s
            </Text>


            <Heading size="sm" pl="2" py="2" my="2" borderLeftColor="yellow.400" borderLeftWidth="10px">คำศัพท์เกี่ยวกับงานบ้าน</Heading>
            <Box bg="gray.100" mx="5" px="3" py="2">
                <Text color="green.500">
                    cook<Text as="span" pl="2" color="gray.500">ทำอาหาร</Text><br />
                    do/wash the dishes<Text as="span" pl="2" color="gray.500">ล้างจาน</Text><br />
                    dust (V)<Text as="span" pl="2" color="gray.500">ปัดฝุ่น</Text><br />
                    vacuum the carpet<Text as="span" pl="2" color="gray.500">ดูดฝุ่นพรม</Text><br />
                    sweep the floor<Text as="span" pl="2" color="gray.500">กวาดพื้น</Text><br />
                    mop the floor<Text as="span" pl="2" color="gray.500">ถูพื้น</Text><br />
                    do laundry<Text as="span" pl="2" color="gray.500">ซักผ้า</Text><br />
                    iron clothes<Text as="span" pl="2" color="gray.500">รีดผ้า</Text><br />
                    clean the bathroom<Text as="span" pl="2" color="gray.500">ล้างห้องน้ำ</Text><br />
                    polish the silverware<Text as="span" pl="2" color="gray.500">ขัดเครื่องเงิน</Text><br />
                    mow the lawn<Text as="span" pl="2" color="gray.500">ตัดหญ้า</Text><br />
                    rake the leaves<Text as="span" pl="2" color="gray.500">กวาดใบ้ไม้</Text><br />
                    water the plants<Text as="span" pl="2" color="gray.500">รดน้ำต้นไม้</Text><br />
                    wash the car<Text as="span" pl="2" color="gray.500">ล้างรถ</Text>
                </Text>
            </Box>
            <Text textAlign="center" textColor="red.500" my="5">*** END ***</Text>
            <Divider />
        </>
    )
}