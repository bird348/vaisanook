import { Center, Text, Box } from "@chakra-ui/react"

export default function Footer() {
    return(
        <>
            <Center color="white">
                <Text fontSize={["10px", "15px"]} textAlign="center">
                    <span style={{color: "black", marginRight: "5px"}}>By</span> Share to friends <span style={{color: "black", marginRight: "5px", marginLeft: "15px"}}>email:</span>  sharetofriends.wb@gmail.com
                </Text>
            </Center>
            <Center pt="3">
                <Text fontSize="xs" color="white" bg="black" mb="2" borderRadius="md" p="1">
                    Deployed by ▲ Vercel
                </Text>
            </Center>
        </>
    )
}