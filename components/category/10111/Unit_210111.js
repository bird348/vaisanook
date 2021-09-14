import { 
    Heading,
    Text,
    Box
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
        </>
    )
}