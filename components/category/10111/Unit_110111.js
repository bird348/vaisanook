import { 
    Box,
    Heading,
    Text
 } from "@chakra-ui/react";

export default function Unit_110111() {

    return(
        <>
            <Heading size="md" pl="2" pb="2" mb="2" borderBottomColor="red.500" borderBottomWidth="2px">
                Unit 1
            </Heading>
            <Heading size="sm" pl="2" mb="2" borderLeftColor="yellow.400" borderLeftWidth="10px">
                การทักทายทั่วไป
            </Heading>
            <Text color="gray.500" pb="2" pl="5">
                <Text as="span" color="green.500">
                    Good morning.{" "}
                </Text>
                 (เช้าถึง 12:00 น.)
                <br />
		        <Text as="span" color="green.500">
                    Good afternoon.{" "}
                </Text>
                 (บ่ายถึง 18:00 น.)
                <br />
                <Text as="span" color="green.500">
                    Good evening.{" "}
                </Text>
		         (ประมาณ 18:00 น. เป็นต้นไป)
            </Text>


            <Heading size="sm" pl="2" mb="2" borderLeftColor="yellow.400" borderLeftWidth="10px">
                การทักทายแบบเป็นกันเอง
            </Heading>
            <Text as="i">
                Hi/Hello ตามด้วยชื่อ และถามทุกข์สุขโดยใช้คำถาม เช่น
            </Text>
            <Text pl="5" pb="2">
                <Text as="span" color="red.500">
                    Hi,{" "}
                </Text>
                <Text as="span" color="green.500">
                    Somchai. How are you?{" "}
                </Text>
                <br />
                <Text as="span" color="red.500">
                    Hello,{" "}
                </Text>
                <Text as="span" color="green.500">
                    Somsak. How are you doing?{" "}
                </Text>
                <br />
                <Text as="span" color="red.500">
                    Hello,{" "}
                </Text>
                <Text as="span" color="green.500">
                    Sunee. How is it going?{" "}
                </Text>
            </Text>
            <Text as="i">
                การตอบคำทักทาย เช่น
            </Text>
            <Text pl="5">
                <Text as="span" color="green.500">
                    Fine/Good, thanks.
                    <br />
                    Not too bad, thanks.
                    <br />
                    Pretty good.
                </Text>
            </Text>
            <Text pl="5">
                <Text as="span" color="green.500">
                    And how are you?
                    <br />
                    What/How about you?
                    <br />
                    How about yourself?
                </Text>
            </Text>
            <Text pl="5">
                <Text as="span" color="green.500">
                    (It’s) good/nice to see you again.
                </Text>
            </Text>
            <Text as="i">
            แต่สำหรับผู้ที่เคยพบกันครั้งแรกให้ใช้เหมือนประโยคข้างบนแต่ไม่มีคำว่า <Text as="span" color="red.500"></Text>
            </Text>
            <Text pl="5" pb="2">
                <Text as="span" color="green.500">
                    (It’s) good/nice to see you.
                </Text>
            </Text>


            <Heading size="sm" pl="2" mb="2" borderLeftColor="yellow.400" borderLeftWidth="10px">
                การแนะนำตัวเอง
            </Heading>
            <Text pl="5">
                <Text as="span" color="green.500">
                    Good morning. My name is …(name).
		            Hello I’m …(name).
                </Text>
            </Text>
            <Text as="i">
                กรณีเกริ่นนำก่อนบอกชื่อ(ไม่แน่ใจว่าเคยเจอกันมาก่อนหรือเปล่า) เช่น
            </Text>
            <Text pl="5">
                <Text as="span" color="green.500">
                Hi! I don’t think we’ve met. I’m …(name).
                </Text>
            </Text>
        </>
    )
}