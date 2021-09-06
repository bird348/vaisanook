import { 
    Container,
    Heading,
    Text
 } from "@chakra-ui/react";

export default function Unit_110111() {
    return(
        <Container maxW="xl">
            <Heading as="h3" size="lg" pb="2">
                Unit 1
            </Heading>
            <hr />
            <Heading as="h4" size="md" pb="2" pt="2">
                การทักทายทั่วไป
            </Heading>
            <Text color="gray.500" pb="2" pl="5">
                Good morning. (เช้าถึง 12:00 น.)
                <br />
		        Good afternoon. (บ่ายถึง 18:00 น.)
                <br />
		        Good evening. (ประมาณ 18:00 น. เป็นต้นไป)
            </Text>
            <Heading as="h4" size="md" pb="2">
                การทักทายแบบเป็นกันเอง
            </Heading>
            <Text as="i">
            Hi/Hello ตามด้วยชื่อ และถามทุกข์สุขโดยใช้คำถาม เช่น
            </Text>
            <Text color="gray.500" pl="5" pb="2">
                Hi, Somchai. How are you?
                <br />
                Hello, Somsak. How are you doing?
                <br />
                Hello, Sunee. How is it going?
            </Text>
            <Text as="i">
                การตอบคำทักทาย เช่น
            </Text>
            <Text color="gray.500" pl="5">
                Fine/Good, thanks.
                <br />
                Not too bad, thanks.
                <br />
                Pretty good.
            </Text>
        </Container>
    )
}