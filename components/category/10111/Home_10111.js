
import Unit_110111 from "./Unit_110111"
import Unit_210111 from "./Unit_210111"
import { Box, Heading} from "@chakra-ui/react"

export default function Home_10111({unit}) {
    return(
        <Box>
            <Heading mb="3" size="lg" fontWeight="bold" color="blue.400">
                ภาษาอังกฤษเพื่อการสื่อสาร
            </Heading>
            <Box>
                {unit == "1" && <Unit_110111 />}
                {unit == "2" && <Unit_210111 />}
            </Box>
        </Box>
    )
}