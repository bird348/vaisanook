import { Center, Text, VStack } from "@chakra-ui/react"

export default function Footer() {
    return(
        <VStack bg="gray.500" mt="3" align="stretch">
            <Center w="100%" p="2" color="white">
                <Text fontSize="xs">
                    <span style={{color: "black", marginRight: "5px"}}>By</span> Share to friends <span style={{color: "black", marginRight: "5px", marginLeft: "15px"}}>email:</span>  sharetofriends.wb@gmail.com
                </Text>
            </Center>
            <Center>
                <Text fontSize="xs" color="white" bg="black" mb="2" borderRadius="md" p="1">
                    Deployed by ▲ Vercel
                </Text>
            </Center>
        </VStack>
    )
}