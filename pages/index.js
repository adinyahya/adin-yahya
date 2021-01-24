import React from 'react'
import { NextSeo } from 'next-seo'
import {
    Stack,
    Flex,
    Heading,
    Avatar,
    Text
} from '@chakra-ui/react'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'

import SocialLink from '../components/SocialLink'
import Container from '../components/Container'
import { TwitterIcon, YoutubeIcon, GitHubIcon, MailIcon, CodeIcon } from '../components/CustomIcons'

const url = 'https://adinyahya.com/'
const titleSEO = 'Hai – Adin Yahya'
const description = 'I am a developer and creator. Here are some of my links.'

const Hello = () => {

    const { data } = useSWR('/api/links', fetcher)
    const title = data?.title

    return (
        <>
            <NextSeo
                title={titleSEO}
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
                        width={['100%', '500px', '700px']}
                    >
                        <Avatar
                            size='2xl'
                            name="Adin Yahya"
                            src="../images/dp1.jpeg"
                            mr={2}
                            alignSelf="center"
                            my={5}
                        />
                        <Heading letterSpacing="tight" mb={6} as="h1" size="xl" alignSelf="center">
                            Hai 👋, I'm Adin 
                        </Heading>
                        <Text alignSelf="center" textAlign="center" mb={4}>I’m a newbie developer, creator, and satay seller :D. Use the links below to learn more.</Text>
                        
                        <SocialLink name="Check Out My Website!" href="/hello" icon={CodeIcon} />
                        <SocialLink name="View My Github!" href="https://github.com/adinyahya?tab=repositories" icon={GitHubIcon} />
                        {/* <SocialLink name="Subscribe to my newsletter" href="https://buttondown.email/adinyahya" icon={MailIcon} /> */}
                        {/* <SocialLink name="Sponsor me on GitHub!" href="https://github.com/sponsors/bjcarlson42" icon={GitHubIcon} /> */}
                        {/* <SocialLink name="Subscribe To My YouTube Channel!" href="https://www.youtube.com/channel/UC3loqtJQMuPWu-dg5byMrcQ?sub_confirmation=1" icon={YoutubeIcon} /> */}
                        {/* <SocialLink name="Follow Me On Facebook Channel!" href="https://www.facebook.com/gaming/riceknow" icon={YoutubeIcon}/> */}
                        {/* <SocialLink name="Follow Me On Twitter!" href="https://twitter.com/adinyahya" icon={TwitterIcon} /> */}
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}

export default Hello
