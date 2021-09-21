import { Text, Box } from "@chakra-ui/react"

export default function Footer() {
    return(
        <Box>
            <Text  textAlign="center" fontSize={["10px", "15px", "15px"]}>
                By: {" "}
                <Text as="span" color="green.400">ALLS</Text>
            </Text>
            <Text textAlign="center" fontSize={["10px", "15px", "15px"]}>
                email: {" "}
                <Text as="span" color="yellow.400">alifelonglearningsociety@gmail.com</Text>
            </Text>
            <Box mt="2">
                <Text textAlign="center" color="white" bg="black" borderRadius="md" mx= "35%" py="1" fontSize={["10px", "15px", "15px"]}>
                    Deployed by ▲ Vercel
                </Text>
            </Box>
        </Box>
    )
}