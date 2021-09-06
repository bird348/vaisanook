import { Center, Text } from "@chakra-ui/react"

export default function Footer() {
    return(
        <Center bg="gray.500" w="100%" p={4} color="white" mt="5">
            <Text fontSize="xs">
                <span style={{color: "black", marginRight: "5px"}}>By</span> VaiSanook.com <span style={{color: "black", marginRight: "5px", marginLeft: "15px"}}>email:</span>  vaisanook@gmail.com
            </Text>
        </Center>
    )
}