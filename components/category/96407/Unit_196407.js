import { Box, Heading, Text, UnorderedList, OrderedList, ListItem } from "@chakra-ui/react"

export default function Unit_196407() {

    return(
        <>
            <Heading size="md" pb="2" mb="2" borderBottomColor="red.500" borderBottomWidth="2px">หน่วยที่ 1</Heading>
            <Heading size="sm" pl="2" py="2" my="2" borderLeftColor="yellow.400" borderLeftWidth="10px">ความรู้เบื้องต้นเกี่ยวกับการพัฒนาระบบสารสนเทศ</Heading>
            <Heading size="xs">เหตุผลและแนวทางในการพัฒนาระบบสารสนเทศ</Heading>
            <Text pl="5" fontStyle="italic" mt="1">
             ความจำเป็นและเหตุผลในการพัฒนาระบบสารสนเทศ
            </Text>
            <Box pl="8" color="gray.500">
                <OrderedList>
                    <ListItem>การเปลี่ยนแปลงของกระบวนการบริหารและการปฏิบัติงาน</ListItem>
                    <ListItem>การเปลี่ยนแปลงหรือพัฒนาการทางด้านเทคโนโลยี</ListItem>
                    <ListItem>การปรับองค์กรและการสร้างความได้เปรียบในการแข่งขัน</ListItem>
                </OrderedList>
            </Box>
            <Text pl="5" fontStyle="italic" mt="1">
                ส่วนประกอบของการพัฒนาระบบสารสนเทศ
            </Text>
            <Box pl="8" color="gray.500">
                <OrderedList>
                    <ListItem>กระบวนการทางธุรกิจ (business process)</ListItem>
                    <ListItem>บุคลากร (people)</ListItem>
                    <ListItem>วิธีการและเทคนิค (methodology and technique)</ListItem>
                    <ListItem>เทคโนโลยี (technology)</ListItem>
                    <ListItem>งบประมาณ (budget)</ListItem>
                    <ListItem>ข้อมูลและโครงสร้างพื้นฐานในองค์กร (infrastructure)</ListItem>
                    <ListItem>การบริหารโครงการ (project management)</ListItem>
                </OrderedList>
            </Box>
            <Text pl="5" fontStyle="italic" mt="1">
                แนวทางในการพัฒนาระบบสารสนเทศ
            </Text>
            <Box pl="8" color="gray.500">
                <OrderedList>
                    <ListItem>การพัฒนาระบบสารสนเทศ โดยผู้ใช้ (end-user development)</ListItem>
                    <ListItem>การพัฒนาระบบสารสนเทศ โดยการว่าจ้างบริษัทที่ปริกษาหรือบุคคลจากหน่วยงานภายนอก (outsourcing)</ListItem>
                    <ListItem>การพัฒนาระบบสารสนเทศ โดยการใช้ซอฟต์แวร์สำเร็จ (application software package)</ListItem>
                </OrderedList>
            </Box>


            <Heading size="xs" mt="2">หลักการพัฒนาระบบสารสนเทศ</Heading>
            <Box pl="5" color="gray.500" mt="1">
                <OrderedList>
                    <ListItem>คำนึงถึงความพึงพอใจของเจ้าของระบบและผู้ใช้ระบบ</ListItem>
                    <ListItem>พยายามเข้าถึงปัญหาที่ต้องการแก้ใขให้ตรงจุด</ListItem>
                    <ListItem>กำหนดขั้นตอนหรือกิจกรรมการทำงานที่ชัดเจน</ListItem>
                    <ListItem>กำหนดมาตรฐานในระหว่างการพัฒนาระบบและจัดทำเอกสารประกอบในทุุกขั้นตอน</ListItem>
                    <ListItem>การพัฒนาระบบ</ListItem>
                    <ListItem>เตรียมพร้อมหากแผนงานหรือโครงการต้องถูกยกเลิกหรือต้องมีการทบทวนใหม่</ListItem>
                    <ListItem>ทำการแตกระบบใหญ่ให้เป็นระบบย่อย</ListItem>
                    <ListItem>การออกแบบระบบเพื่อรองรับการเติบโตและการเปลี่ยนแปลงในอนาคต</ListItem>
                </OrderedList>
            </Box>


            <Heading size="xs" mt="2">บุคลากรที่เกี่ยวข้องกับการพัฒนาระบบสารสนเทศ</Heading>
            <Text pl="5" mt="1">คณะกรรมการดำเนินงาน (steering committee)</Text>
            <Text pl="8" color="gray.500">
                เป็นผู้วางนโยบายและกลยุทธ์ในการพัฒนาระบบสารสนเทศให้สอดคล้องหรือเป็นใปตามเป้าหมายขององค์กร
            </Text>
            
        </>
    )
}