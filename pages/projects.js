import React from 'react'
import { NextSeo } from 'next-seo'
import {
    Link,
    Text,
    Stack,
    Flex,
    Heading,
    useColorMode,
    Code
} from '@chakra-ui/react'

import Container from '../components/Container'
import ProjectListFull from '../components/ProjectListFull'
import FeaturedProjectCard from '../components/FeaturedProjectCard'
import GitHubSponsorCard from '../components/GitHubSponsorCard'

const url = 'https://adinyahya.com/projects'
const title = 'Projects – Adin Yahya'
const description = 'Here are some of the open source projects and GitHub repos I am working on.'

const Projects = () => {
    const { colorMode } = useColorMode()

    const colorSecondary = {
        light: 'gray.700',
        dark: 'gray.400'
    }

    const iconColor = {
        light: 'gray.600',
        dark: 'gray.300'
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
                >
                    <Flex
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        maxWidth="700px"
                        px={2}
                    >
                        <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
                            Projects
                        </Heading>
                        <Text color={colorSecondary[colorMode]}>Between school, work, youtube, and individual curiosity, I have worked on many projects over the years. Below you will find
                        all of them.
                        </Text>
                        <Heading letterSpacing="tight" mt={4} size="xl" fontWeight={700}>
                            Featured Projects
                        </Heading>
                        <FeaturedProjectCard
                        title="Dinas Perhubungan Kabupaten Jombang"
                        href="http://dishub.sansthink.com"
                        src="/images/ddhub.png"
                        color={iconColor[colorMode]}
                        >
                            Build an Website Employee Performance Achievement System Dinas Perhubungan Kabupaten Jombang.
                        </ FeaturedProjectCard>
                        <FeaturedProjectCard
                            title="Dinas Kependudukan Pencatatan Sipil Kabupaten Jombang"
                            href="https://dukcapil.jombangkab.go.id/pengukuran"
                            src="/images/o.png"
                            color={iconColor[colorMode]}
                        >
                            Build an Website Employee Performance Measurement System Dinas Kependudukan Dan Pencatatan Sipil Kabupaten Jombang.
                        </ FeaturedProjectCard>
                        <FeaturedProjectCard
                            title="Kecamatan Peterongan Kabupaten Jombang"
                            href="http://sitahu-terong.freeusebot.site"
                            src="/images/o.png"
                            color={iconColor[colorMode]}
                        >
                            Build an Website for Monitoring Employee Performance Evaluation Results Kecamatan Peterongan Kabupaten Jombang.
                            {/* My personal portfolio website you are on now. Built with <Code>Next.js</Code>, <Code>chakra-ui</Code>, <Code>mdx</Code> pages, and serverless functions for realtime data. */}
                        </FeaturedProjectCard>
                        <FeaturedProjectCard
                            title="BOT Twitter"
                            href="http://freeusebot.site/"
                            src="/images/twitter.png"
                            color={iconColor[colorMode]}
                        >
                            Twitter BOT to Download Videos in twitter posts, Make Image Quotes from a tweet and Love match predictions.
                            {/* My personal portfolio website you are on now. Built with <Code>Next.js</Code>, <Code>chakra-ui</Code>, <Code>mdx</Code> pages, and serverless functions for realtime data. */}
                        </FeaturedProjectCard>
                        <FeaturedProjectCard
                            title="BOT Telegram"
                            href="https://t.me/Pecycoin_Bot"
                            src="/images/telegram.png"
                            color={iconColor[colorMode]}
                        >
                            Telegram BOT to ICO and share Blockchain Token Airdrops to the community.
                            {/* My personal portfolio website you are on now. Built with <Code>Next.js</Code>, <Code>chakra-ui</Code>, <Code>mdx</Code> pages, and serverless functions for realtime data. */}
                        </FeaturedProjectCard>
                        <FeaturedProjectCard
                            title="The Sateku"
                            href="https://github.com/adinyahya/SI_TheSateku"
                            src="/images/sateku.png"
                            color={iconColor[colorMode]}
                        >
                            Website ordering system for Aqiqah / Catering for wedding meals.
                            {/* My personal portfolio website you are on now. Built with <Code>Next.js</Code>, <Code>chakra-ui</Code>, <Code>mdx</Code> pages, and serverless functions for realtime data. */}
                        </FeaturedProjectCard>
                        <FeaturedProjectCard
                            title="Lembaga Manajemen infaq Surabaya"
                            href="https://github.com/adinyahya/Sistem-Informasi-Operasional"
                            src="/images/lmi.png"
                            color={iconColor[colorMode]}
                        >
                            Build an Operational website at the company Lembaga Manajemen Infaq Surabaya.
                            {/* My personal portfolio website you are on now. Built with <Code>Next.js</Code>, <Code>chakra-ui</Code>, <Code>mdx</Code> pages, and serverless functions for realtime data. */}
                        </FeaturedProjectCard>
                        <FeaturedProjectCard
                            title="Tukatuku Marketplace"
                            href="http://tukatuku.net/"
                            src="/images/tukatuku.jpg"
                            color={iconColor[colorMode]}
                        >
                            The Marketplace that is supported by blockchain technology, which makes it easier to find sellers and buyers within a scope of buying and selling goods.
                            {/* My personal portfolio website you are on now. Built with <Code>Next.js</Code>, <Code>chakra-ui</Code>, <Code>mdx</Code> pages, and serverless functions for realtime data. */}
                        </FeaturedProjectCard>
                        {/* <GitHubSponsorCard /> */}
                        {/* <Heading letterSpacing="tight" mb={2} mt={4} size="xl" fontWeight={700}>
                            All Projects
                        </Heading>
                        <ProjectListFull /> */}
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}

export default Projects