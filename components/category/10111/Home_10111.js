
import Unit_110111 from "./Unit_110111"
import Unit_210111 from "./Unit_210111"
import { Box, Divider, Heading} from "@chakra-ui/layout"

export default function Home_10111({unit}) {
    return(
        <Box>
            <Heading mb="3" size="lg">ภาษาอังกฤษเพื่อการสื่อสาร</Heading>
            <Divider mb="3" />
            <Box>
                {unit == "1" && <Unit_110111 />}
                {unit == "2" && <Unit_210111 />}
            </Box>
        </Box>
    )
}