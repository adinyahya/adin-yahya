import React from 'react'
import { NextSeo } from 'next-seo'
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Stack,
    List,
    ListItem,
    ListIcon,
    Link
} from '@chakra-ui/react'

import Container from '../components/Container'
import { StarIcon } from '@chakra-ui/icons'

const url = 'https://adinyahya.com/thanks'
const title = 'Thanks – Adin Yahya'
const description = 'These are the individuals who have helped me with ideas for this site.'


const Thanks = () => {
    const { colorMode } = useColorMode()

    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400'
    }

    return (
        <>
            <NextSeo
                title={title}
                description={description}
                canonical={url}
                openGraph={{
                    url,
                    title,
                    description
                }}
            />
            <Container>
                <Stack
                    as="main"
                    spacing={8}
                    justifyContent="center"
                    alignItems="flex-start"
                    m="0 auto 4rem auto"
                    maxWidth="700px"
                    px={2}
                >
                    <Flex
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        maxWidth="700px"
                    >
                        <Heading letterSpacing="tight" mb={4} as="h1" size="2xl">
                            Thanks
                        </Heading>
                        <Text color={colorSecondary[colorMode]} mb={4}>
                        Thank you for visiting my website, this website is part of my personal data, and I would like to thank u these people who have inspired me to create this website.
                        </Text>
                        <List spacing={3}>
                            <ListItem>
                                <ListIcon as={StarIcon} color="yellow.300" />
                                <Link isExternal href="https://github.com/bjcarlson42" color="red.500">Benjamin Carlson</Link>
                            </ListItem>
                            <ListItem>
                                <ListIcon as={StarIcon} color="yellow.300" />
                                <Link isExternal href="https://github.com/grikomsn" color="red.500">Griko Nibras</Link>
                            </ListItem>
                            <ListItem>
                                <ListIcon as={StarIcon} color="yellow.300" />
                                <Link isExternal href="https://github.com/hafidu" color="red.500">Mohammad hafidu</Link>
                            </ListItem>
                        </List>
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}

export default Thanks