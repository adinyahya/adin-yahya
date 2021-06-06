import React from 'react'
import {
    Heading,
    Flex,
    Icon,
    Link
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const IndexHeading = () => {
    return (
        <Flex
            h='20vh'
            alignSelf="center"
            w="55%"
            justifyContent="center"
            flexDirection="column"
            display={['none', 'none', 'flex']}
            mb={-10}
        >
            <Heading mb={15} as="h2" fontSize={["20px", "30px", "40px"]}>
                Hai! I'm Adin Yahya, a newbie <Flex display="inline" color="pink.500">web developer</Flex>.
                
            </Heading>
            {/* <Link alignSelf="center" href="#main" mt={20}>
                <ChevronDownIcon w="40px" height="40px" />
            </Link> */}
            {/* <Flex id="main"></Flex> */}
        </Flex>
    )
}

export default IndexHeading