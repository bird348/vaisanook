import { Center, Text, Box } from "@chakra-ui/react"

export default function Footer() {
    return(
        <>
            <Box fontSize={["10px", "15px"]}>
                <Text  textAlign="center">
                    By: {" "}
                    <Text as="span" color="green.400">ALLS</Text>
                </Text>
                <Text textAlign="center">
                    email: {" "}
                    <Text as="span" color="yellow.400">alifelonglearningsociety@gmail.com</Text>
                </Text>
            </Box>
            <Center pt="3">
                <Text fontSize="xs" color="white" bg="black" pb="2" borderRadius="md" p="1">
                    Deployed by ▲ Vercel
                </Text>
            </Center>
        </>
    )
}