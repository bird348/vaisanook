import { Box, Heading, Text, UnorderedList, OrderedList, ListItem } from "@chakra-ui/react"

export default function Unit_196407() {

    return(
        <>
            <Heading size="md" pb="2" mb="2" borderBottomColor="red.500" borderBottomWidth="2px">หน่วยที่ 1</Heading>

            <Heading size="sm" pl="2" py="2" my="2" borderLeftColor="yellow.400" borderLeftWidth="10px">
                ความรู้เบื้องต้นเกี่ยวกับการพัฒนาระบบสารสนเทศ
            </Heading>
            <Heading size="xs">เหตุผลและแนวทางในการพัฒนาระบบสารสนเทศ</Heading>
            <Box pl="5" mt="1">
                <Text fontStyle="italic">
                    ความจำเป็นและเหตุผลในการพัฒนาระบบสารสนเทศ
                </Text>
                <OrderedList pl="3" color="gray.500">
                    <ListItem>การเปลี่ยนแปลงของกระบวนการบริหารและการปฏิบัติงาน</ListItem>
                    <ListItem>การเปลี่ยนแปลงหรือพัฒนาการทางด้านเทคโนโลยี</ListItem>
                    <ListItem>การปรับองค์กรและการสร้างความได้เปรียบในการแข่งขัน</ListItem>
                </OrderedList>
                <Text fontStyle="italic" >
                    ส่วนประกอบของการพัฒนาระบบสารสนเทศ
                </Text>
                <OrderedList pl="3" color="gray.500">
                    <ListItem>กระบวนการทางธุรกิจ (business process)</ListItem>
                    <ListItem>บุคลากร (people)</ListItem>
                    <ListItem>วิธีการและเทคนิค (methodology and technique)</ListItem>
                    <ListItem>เทคโนโลยี (technology)</ListItem>
                    <ListItem>งบประมาณ (budget)</ListItem>
                    <ListItem>ข้อมูลและโครงสร้างพื้นฐานในองค์กร (infrastructure)</ListItem>
                    <ListItem>การบริหารโครงการ (project management)</ListItem>
                </OrderedList>
                <Text fontStyle="italic">
                    แนวทางในการพัฒนาระบบสารสนเทศ
                </Text>
                <OrderedList pl="3" color="gray.500">
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
            <Box pl="5" mt="1">
                <Text fontStyle="italic">1. คณะกรรมการดำเนินงาน (steering committee)</Text>
                <Text pl="3" color="gray.500">
                    เป็นผู้วางนโยบายและกลยุทธ์ในการพัฒนาระบบสารสนเทศให้สอดคล้องหรือเป็นใปตามเป้าหมายขององค์กร
                </Text>
                <Text fontStyle="italic">2. ผู้บริหารหรือผู้จัดการโครงการ (project manager)</Text>
                <Text pl="3" color="gray.500">
                    เป็นผู้ที่ต้องรับผิดชอบในการสร้างความมั่นใจว่า 
                    โครงการจะเสร็จสมบูรณ์ไดภายใต้ระยะเวลาและงบประมาณที่กำหนด 
                    บทบาทของผู้จัดการโครงการจึงประกอบด้วย การบริหารจัดการทีมงาน 
                    การวางแผนโครงการ การกำหนดแหล่งข้อมูล รวมถึงการควบคุมการดำเนินโครงการ
                </Text>
                <Text fontStyle="italic">3. ผู้บริหารหน่วยงานด้านสารสนเทศ (MIS manager)</Text>
                <Text pl="3" color="gray.500">
                    ทำหน้าที่ให้ความรู้ความเข้าใจในระบบงานองค์กร รับนโยบายจากผู้บริหารระดับสูงมาดำเนินการดูแล 
                    และประสานงานในการวางแผนโครงการต่างๆ
                </Text>
                <Text fontStyle="italic">4. นักวิเคราะห์ด้านธุรกิจ (business analyst)</Text>
                <Text pl="3" color="gray.500">
                    มีหน้าที่มุ่งเน้นใปทีปัญหาทางธุรกิจโดยรวมของทั้งระบบ รวมถึงมูลค่าทางธุรกิจที่คาดว่าระบบ่จะสร้างให้
                </Text>
                <Text fontStyle="italic">5. นักวิเคราะหห์ระบบ (system analyst)</Text>
                <Text pl="3" color="gray.500">
                    ทำหน้าที่วิเคราะห์และออกแบบระบบ โดยเป็นตัวกลางในการติดต่อสื่อสารระหว่างผู้และกลุ่มผู้ที่เกี่ยวข้องกับระบบสารสนเทศ
                </Text>
                <Text fontStyle="italic">6. นักวิเคราะห์โครงสร้างพื้นฐาน (infrastructure analyst)</Text>
                <Text pl="3" color="gray.500">
                    มุ่งเน้นไปที่ปัญหาทางด้านเทคนิคและระบบสารสนเทศโดยรวมทั้งระบบ
                </Text>
                <Text fontStyle="italic">7. นักวิเคราะห์การจัดการการเปลี่ยนแปลง (change management analyst)</Text>
                <Text pl="3" color="gray.500">
                    มุ่งเน้นแัญหาเรื่องบุคลากรและปัญหารในการจัดการพื้นที่ในการติดตั้งระบบ
                </Text>
                <Text fontStyle="italic">8. วิศวกรระบบ (system engineer)</Text>
                <Text pl="3" color="gray.500">
                    ผู้เชี่ยวชาญด้านระบบคอมพิวเตอร์ การสื่อสารและระบบเครือข่ายคอมพิวเตอร์
                </Text>
                <Text fontStyle="italic">9. ผู้สนับสนุนผ่ายเทคนิคหรือผู้ขำนาญการทางด้านเทคนิค (technical support)</Text>
                <Text fontStyle="italic">10. โปรแกรมเมอร์หรือนักเขียนโปรแกรม (programmer)</Text>
                <Text fontStyle="italic">11. เจ้าหน้าที่รวบรวม่ข้อมูล (information center personal)</Text>
                <Text fontStyle="italic">12. ผู้ใช้และผู้จัดการทั่วไป (user and general manager)</Text>
            </Box>
            

            <Heading size="sm" pl="2" py="2" my="2" borderLeftColor="yellow.400" borderLeftWidth="10px">
                แนวคิดเกี่ยวกับการพัฒนาระบบสารสนเทศ
            </Heading>
            <Heading size="xs">ปัจจัยที่มีผลต่อการพัฒนาระบบสารสนเทศ</Heading>
            <Box pl="5" mt="1">
                <Text fontStyle="italic">ปัจจัยที่ส่งผลต่อความต้องการในการพัฒนาระบบใหม่</Text>
                <Text fontStyle="italic" pl="3">ปัจจัยภายใน</Text>
                <OrderedList pl="3" color="gray.500">
                    <ListItem>การร้องขอจากผู้ใช้ (user request)</ListItem>
                    <ListItem>การสั่งการจากผู้บริหารระดับสูง (top manager)</ListItem>
                    <ListItem>การพบข้อผิดพลาดหรือปัญหาที่เกิดขึ้นจากระบบงานปัจจุบัน (existing system and data)</ListItem>
                    <ListItem>การผลักดันจากภายนอก</ListItem>
                    <ListItem>การแนะนำให้มีการปรับปรุงระบบจากส่วนบริการสารสนเทศ</ListItem>
                </OrderedList>
                <Text fontStyle="italic" pl="3">ปัจจัยภายนอก</Text>
                <OrderedList pl="3" color="gray.500">
                    <ListItem>เทคโนโลยี (technology)</ListItem>
                    <ListItem>ผู้ขายปัจจัยการผลิต (supplier)</ListItem>
                    <ListItem>ลูกค้า (customer)</ListItem>
                    <ListItem>คู่แข่งขัน (competitor)</ListItem>
                    <ListItem>เศรษฐกิจ (economy)</ListItem>
                    <ListItem>รัฐยาล (government)</ListItem>
                </OrderedList>
                <Text fontStyle="italic">แนวคิดที่มีผลต่อความต้องการพัฒนาระบบใหม่</Text>
                 <Text fontStyle="italic" pl="3">แนวคิดของการแจกแจงความต้องการระบบงานใหม่ 6 ประการ 
                    <Text as="span" fontWeight="bold" color="red.500"> PIECES</Text>
                </Text>
                <Text pl="6" color="gray.500">
                    <Text as="span" fontWeight="bold" color="red.500">P (Performance) </Text>
                    ความต้องการให้มีการปรับปรุงในด้านการปฏิบัติงาน <br />
                    <Text as="span" fontWeight="bold" color="red.500">I (Information) </Text>
                    ความต้องการให้มีการปรับปรุงด้านข้อมูลและสารสนเทศ <br />
                    <Text as="span" fontWeight="bold" color="red.500">E (Economic) </Text>
                    ความต้องการให้มีระบบการควบคุมด้านต้นทุน <br />
                    <Text as="span" fontWeight="bold" color="red.500">C (Control) </Text>
                    ความต้องการให้ระบบการควบคุบและรักษาความปลอดภัยที่ดี <br />
                    <Text as="span" fontWeight="bold" color="red.500">E (Efficiency) </Text>
                    ความต้องการให้ผู้ใช้และระบบงานสามารถทำงานร่วมกันได้อย่างมีประสิทธิภาพ <br />
                    <Text as="span" fontWeight="bold" color="red.500">S (Service) </Text>
                    ความต้องการให้มีการปรับปรุงงานด้านบริการ ทั้งต่อพนักงานในองค์กรและผู้รับการบริการหรือลูกค้าให้ดียื่งขึ้น
                </Text>
                <Text fontStyle="italic" pl="3">ปัญหา (problem)</Text>
                <UnorderedList pl="5" color="gray.500">
                    <ListItem>การครวจสอบปัญหาจากการปฏิบัติงานที่ดำเนินการอยู่เป็นประจำ</ListItem>
                    <ListItem>การสังเกตพฤติกรรมการทำงานของบุุคลากร</ListItem>
                    <ListItem>ผลย้อนกลับ (feedback)</ListItem>
                </UnorderedList>
                <Text fontStyle="italic" pl="3">โอกาส (opportunity)</Text>
                <UnorderedList pl="5" color="gray.500">
                    <ListItem>ประเด็นของโอกาสในการปรับปรุงระบบใหม่</ListItem>
                </UnorderedList>
            </Box>
            <Heading size="xs" mt="2">การกำหนดและเลือกสรรโครงการพัฒนาระบบสารสนเทศ</Heading>
            <Box pl="5" mt="1">
                <Text fontStyle="italic">การค้นหาระบบงานที่จำเป็นต้องพัฒนา</Text>
                <OrderedList pl="3" color="gray.500">
                    <ListItem>การศึกษาระบบงานที่ใช้อยู่ในปัจจุบัน</ListItem>
                    <ListItem>การกำหนดขอบเขตของปัญหาและข้อจำกัดของระบบ</ListItem>
                    <ListItem>การรวบรวมปัญหาและความต้องการ</ListItem>
                    <ListItem>การกำหนดวัตถุประสงค์หรือเป้าหมายของสิ่งที่ต้องการทำเพื่อแก้ใขปัญหา</ListItem>
                    <ListItem>การกำหนดผลประโยชน์ที่จะได้รับ</ListItem>
                    <ListItem>การทำรายงานผลการศึกษา</ListItem>
                </OrderedList>
                <Text fontStyle="italic">การจำแนกหรือจัดกลุ่มโครงการที่ค้นหามา</Text>
                <OrderedList pl="3" color="gray.500">
                    <ListItem>ความสอดคล้องกับกิจกรรมขององค์กร</ListItem>
                    <ListItem>ความสอดคล้องกับกลยุทธ์ขององค์กร</ListItem>
                    <ListItem>ผลตอบแทนที่คาดว่าจะได้รับ</ListItem>
                    <ListItem>แหล่งทรัพยากรที่สามารถนำมาดำเนินการได้</ListItem>
                    <ListItem>ขนาดและระยะเวลาในการดำเนินโครงการ</ListItem>
                    <ListItem>ความเป็นไปได้ในทางเทคนิคและความเสี่ยง</ListItem>
                </OrderedList>
                <Text fontStyle="italic">การเลือกโครงการที่ควรต้องได้รับการพัฒนา</Text>
                <Box pl="3" color="gray.500">
                    1 การนำแผนกลยุทธ์ขององค์กรมาใช้กำหนดทิศทางการเลือกโครงการ
                    <UnorderedList pl="3">
                        <ListItem>การทำความเข้าใจสถานะปัจจุบันขององค์กร</ListItem>
                        <ListItem>การพิจารณาถึงสถานะในอนาคตขององค์กร</ListItem>
                        <ListItem>การวางแผนกลยุทธ์</ListItem>
                    </UnorderedList>
                    2 การวางแผนงานระบบสารสนเทศ แบ่งเป็น 3 ขั้นตอน
                    <UnorderedList pl="3">
                        <ListItem>การประเมินความต้องการสารสนเทศในปัจจุบันขององค์กร</ListItem>
                        <ListItem>การกำหนดจุดมุ่งหมาย</ListItem>
                        <ListItem>การพัฒนากลยุทธ์และการวางแผน</ListItem>
                    </UnorderedList>
                    ผลลัพธ์ที่เป้นไปได้ในการตัดสินใจเลือกโครงการ ตือ 
                    การยอมรับโครงการ การปฏิเสธโครงการ การขะลอโครงการ 
                    การให้ผู้ใช้พัฒนาระบบเอง การให้ทบทวนโครงการ
                </Box>
            </Box>
            <Heading size="xs" mt="2">การศึกษาความเป็นไปได้และการจัดทำรายงานการศึกษาความเป็นไปได้</Heading>
            <Box pl="5" mt="1">
                <Text fontStyle="italic">การศุึกษา่่ความเป็นไปได้ของโครงการพัฒนาระบบสารสนเทศ</Text>
                <Text pl="3">
                    1 การศึกษาความเป็นไปได้ทางด้านเทคนิค (technical feasibility)
                </Text>
                <Text pl="5" color="gray.500">
                    เพื่อการทำความเข้าใจความสามารถขององค์กรในการพัฒนาระบบ 
                    เป็นการพิจารณาถึงความเป็นไปได้เกี่ยวกับเทคนิค 
                    เทคโนโลยี วิธีการ รวมทั้งอุปกรณ์ฮาร์ดแวร์ ซอฟต์แวร์ เครื่องมือเครื่องใช้ต่างๆ ที่จะนำมาใช้กับระบบสารสนเทศใหม่
                </Text>
                <Text pl="3">
                    2 การศึกษาความเป็นไปได้ทางเศรษฐศาสตร์ (economical feasibility) 
                    หรือความเป็นไปได้ทางการเงิน หรือ การวิเคราะห์ต้นทุน-ผลตอบแทน
                </Text>
                <Text pl="5" color="gray.500">
                    เป็นการศึกษาถึงผลตอบแทนทางการเงิน และต้นทุนที่เกิดขึ้นจากการพัฒนาระบบ 
                    เป็นการศึกษาถึงต้นทุนค่าใช้จ่ายของระบบที่ปรับปรุงใหม่เปรียบเทียบกับระบบงานเดิม
                </Text>
                <Text pl="3">
                    3 การศึกษาความเป็นไปได้ทางด้านองค์กร (organizational feasibility)
                </Text>
                <Text pl="5" color="gray.500">
                    เป้าหมาย คือ ระบบสารสนเทศที่เสนอมานั้นสอดคล้องกับวัตถุประสงค์ขององค์กรและแผนกลยุทธ์ด้านระบบสารสนเทศหรือไม่
                </Text>
                <Text fontStyle="italic">การจัดทำรายงานการศึกษาความเป็นไปได้ของโครงการ</Text>
                <OrderedList pl="5" color="gray.500">
                    <ListItem>การกำหนดและระบุปัญหาของระบบงาน</ListItem>
                    <ListItem>การกำหนดขอบเขตและวัตถุประสงค์ของระบบงานใหม่</ListItem>
                    <ListItem>การเสนอทางเลือกต่างๆ ในการพัฒนาระบบ</ListItem>
                    <ListItem>การประมาณค่าใช้จ่ายที่คาดว่าจะเกิดขึ้น</ListItem>
                    <ListItem>ผลประโยชน์ที่คาดว่าจะได้รับ</ListItem>
                    <ListItem>การจัดทำบทสรุปหรือข้อเสนอแนะ</ListItem>
                </OrderedList>
            </Box>
            <Heading size="xs" mt="2">การจัดทำโครงการเพื่อการพัฒนาระบบสารสนเทศ</Heading>
            <Box pl="5" mt="1">
                <Text fontStyle="italic">การเริ่มต้นโครงการ</Text>
                <Text pl="3">ขั้นตอนการวิเคราะห์ระบบ</Text>
                <OrderedList pl="5" color="gray.500">
                    <ListItem>ศีกษาแนวทางที่ได้เสนอไว้ในการศึกษาเบื้องต้น และทบทวนวัตถุประสงค์และเป้าหมายของการวิเคราะห์ระบบ</ListItem>
                    <ListItem>ศึกษารวบรวมเอกสาร รายงาน และกฎระเบียบต่างๆ ที่เกี่ยวข้องกับระบบ</ListItem>
                    <ListItem>ศึกษาและสำรวจความต้องการของผู้บริหารและผู้ปฏิบัติงาน</ListItem>
                    <ListItem>ศึกษาสภาพการปฏิบัติงานจริงขององค์กร</ListItem>
                    <ListItem>จำแนกแจกแจงปัญหาของระบบในปัจจุบัน กำหนดแนวทางการแก้ไขปัญหา และกำหนดโครงร่างของระบบใหม่</ListItem>
                    <ListItem>ทำการจัดสรรทรัพยากรต่างๆ สำหรับการพัฒนา และกำหนดความต้องการทางด้านระบบข่าวสารข้อมูล</ListItem>
                    <ListItem>จัดทำเอกสารรายงานการวิเคราะห์ระบบ</ListItem>
                </OrderedList>
                <Text fontStyle="italic">แนวทางเลือกในการนำระบบใหม่มาใช้งาน</Text>
                <Text pl="3">1 การค้นหาและสร้างแนวทางเลือกในการนำระบบใหม่มาใช้งาน</Text>
                <Text pl="3">2 การเลือกทางเลือกที่ดีที่สุด</Text>
                <UnorderedList pl="5" color="gray.500">
                    <ListItem>ทางเลือกระดับล่าง คือ ทางเลือกที่แตกต่างจากระบบเดิมไม่มากนัก</ListItem>
                    <ListItem>ทางเลือกระดับสูง คือ ทางเลือกที่นำเสนอการใช้เทคโนโลยีที่ทันสมัยล้ำยุค</ListItem>
                    <ListItem>ทางเลือกระดับกลาง คือ ทางเลือกที่นำเสนอการใช้เทคโนโลยีที่เป้นการผสมผสานระหว่างทางเลือกระดับล่างและระดับสูง</ListItem>
                </UnorderedList>
                <Text fontStyle="italic">การพัฒนาแผนการทำงาน</Text>
                <Text pl="3">
                    การวางแผนโครงการจัดเป็นกระบวนการพื้นฐานบนความเข้าใจอย่างชัดเจนว่า 
                    ทำไมจึงต้องมีการพัฒนาระบบใหม่หรือปรับปรุงระบบปัจจุบัน ดังนั้น 
                    ในการวางแผนและจัดทำโครงการจึงควรต้องใช้ภาษาที่ตรงไปตรงมา และหลีกเลี่ยงสำนวนที่เข้าใจยาก 
                    ในการวางแผนโครงการควรประกอบด้วยกิจกรรมต่างๆ ดังนี้
                </Text>
                <UnorderedList pl="5" color="gray.500">
                    <ListItem>การแสดงรายละเอียดขอบเขตของโครงการ</ListItem>
                    <ListItem>การรายงานการศึกษาความเป็นไปได้และการประมาณการใช้งบประมาณ</ListItem>
                    <ListItem>การประมาณการใช้แหล่งทรัพยากรและการวางแผนการใช้ทรัพยากร</ListItem>
                    <ListItem>การจำแนกกิจกรรมในการดำเนินการพัฒนาระบบ</ListItem>
                    <ListItem>การจัดทำตารางระยะเวลาดำเนินการในเบื้องต้น</ListItem>
                    <ListItem>การวางแผนการติดต่อสื่อสารกับผู้เกี่ยวข้องในระหว่างการพัฒนาระบบ</ListItem>
                    <ListItem>การจัดทำมาตรฐานในการดำเนินงาน</ListItem>
                    <ListItem>การระบุและประเมินความเสี่ยง</ListItem>
                    <ListItem>การจัดทำรายงานแสดงสถานะของงาน</ListItem>
                    <ListItem>การจัดทำแผนงานโครงการ</ListItem>
                </UnorderedList>
            </Box>

            <Text textAlign="center" textColor="red.500" my="5">*** END ***</Text>
        </>
    )
}