
import React from 'react'
import { NextSeo } from 'next-seo'
import NextLink from 'next/link'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Link,
  Code,
  Button
} from '@chakra-ui/react'

import Container from '../components/Container'
import Subscribe from '../components/Subscribe'
import ExperienceBox from '../components/ExperienceBox'
import FeaturedProjectCard from '../components/FeaturedProjectCard'
import IndexHeading from '../components/IndexHeading'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import BlogPost from '../components/BlogPost'

const url = 'https://adinyahya.com/hello'
const title = 'Home – Adin Yahya'
const description = 'Developer and creator. Browse my latest projects, and stats.'

export default function Index() {
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
        <IndexHeading />
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

            {/* Hero Section */}
            <Heading
              letterSpacing="normal"
              mb={4}
              as="h1"
              size="xl"
              visibility={['visible', 'visible', 'hidden']}
            >
              Hai! I'm Adin Yahya, a newbie web developer.
            </Heading>
            <Text
              color={colorSecondary[colorMode]}
              mt={[0, 0, 12]}
            >
              I’m a newbie developer and creator. On this site you will find
            my projects, gear, writing, and much more. Feel free to reach out via <Link href="mailto:hai@adinyahya.com" color="pink.500">email</Link> or any social media to say hai!
            </Text>

            {/* Experience Section */}
            {/* <Heading mt={8} mb={4} as="h2" size="xl">
            Recent Projects
            </Heading>
            <ExperienceBox
              name="Dinas Perhubungan Kabupaten Jombang"
              years="November 2020"
              pos="Web Developer"
            >
              Membangun sebuah website Sistem Pencapaian Kinerja Pegawai Dinas Perhubungan Kabupaten Jombang.
            </ExperienceBox>
            <ExperienceBox
              name="Dinas Kependudukan Pencatatan Sipil Kabupaten Jombang"
              years="September 2020"
              pos="Web Developer"
            >
              Membangun sebuah website Sistem Pengukuran Kinerja Pegawai Dinas Kependudukan Dan Pencatatan Sipil Kabupaten Jombang.
            </ExperienceBox>
            <ExperienceBox
              name="Kecamatan Peterongan Kabupaten Jombang"
              years="Juli 2020"
              pos="Web Developer"
            >
              Membangun sebuah website Sistem Pemantauan Hasil Evaluasi Kinerja Pegawai Kecamatan Peterongan.
            </ExperienceBox>
            <br></br>
            <Flex justify="center" width="100%">
              <NextLink href="/projects" passHref>
                <Link _hover="none">
                  <Button rightIcon={<ArrowForwardIcon />} colorScheme="pink" variant="outline">
                    View All Projects
                        </Button>
                </Link>
              </NextLink>
            </Flex> */}
            

            {/* Blog Section */}
            {/* <Heading mt={8} mb={4} as="h2" size="xl">
              Top Blog Posts
                </Heading>
            
            <BlogPost
              title="How Tik Tok Gave Me The Perfect Coding Side Project"
              summary="I got an idea for a weekend coding project from Tik Tok."
              slug="tik-tok-coding-idea"
            />
            <BlogPost
              title="Add A Firebase Backend To Your Flutter App Fast!"
              summary="Learn how to integrate Google's Firebase into your Flutter App."
              slug="connect-flutter-to-firebase"
            />
            <BlogPost
              title="Using JavaScript To Scramble A Rubik’s Cube: An Improved Algorithm"
              summary="I am making a web app that required me to make a rubiks cube scramble. I will show you how to implement this algorithm in JavaScript."
              slug="using-javascript-to-scramble-a-rubiks-cube-2"
            /> */}

            {/* <BlogPost {...FlutterToFirebase} />
            <BlogPost {...JavaScriptCube} /> */}
            {/* <Flex justify="center" width="100%">
              <NextLink href="/blog" passHref>
                <Link _hover="none">
                  <Button rightIcon={<ArrowForwardIcon />} colorScheme="pink" variant="outline">
                    View All Posts
                        </Button>
                </Link>
              </NextLink>
            </Flex> */}

            {/* Project Section */}
            <Heading letterSpacing="tight" mt={8} size="xl" fontWeight={700} as="h2">
            Recent Projects
            </Heading>
            <FeaturedProjectCard
                        title="Suksespedia Inspire Success"
                        years="April 2021 - Now"
                        href="http://suksespedia.id"
                        src="https://yt3.ggpht.com/ytc/AAUvwnhdeEjE1bGuOkxvbyHPZceyW9D7tGpBTea3F3kDMg=s900-c-k-c0x00ffffff-no-rj"
                        color={iconColor[colorMode]}
                        >
                            Develop a Website educational and inspirational success referral platform in Indonesia.
                        </ FeaturedProjectCard>
            <FeaturedProjectCard
                title="Dinas Perhubungan Kabupaten Jombang"
                years="December 2020"
                href="http://dishub.sansthink.com"
                src="/images/ddhub.png"
                color={iconColor[colorMode]}
            >
                Develop a Website Employee Performance Achievement System Dinas Perhubungan Kabupaten Jombang.
            </ FeaturedProjectCard>
            <FeaturedProjectCard
                title="Dinas Kependudukan Pencatatan Sipil Kabupaten Jombang"
                years="September 2020"
                href="https://dukcapil.jombangkab.go.id/pengukuran"
                src="/images/o.png"
                color={iconColor[colorMode]}
            >
                Develop a Website Employee Performance Measurement System Dinas Kependudukan Dan Pencatatan Sipil Kabupaten Jombang.
            </ FeaturedProjectCard>
          
            
            <Flex justify="center" width="100%">
              <NextLink href="/projects" passHref>
                <Link _hover="none" mt={8}>
                  <Button rightIcon={<ArrowForwardIcon />} colorScheme="pink" variant="outline">
                    View All Projects
                </Button>
                </Link>
              </NextLink>
            </Flex>

            {/* More On This Site Section */}
            <Heading letterSpacing="tight" mt={8} mb={2} size="xl" fontWeight={700} as="h2">
              More On This Site
           </Heading>
            <Text mb={2} color={colorSecondary[colorMode]}>Be sure to check out all the pages on this site!</Text>

            <Flex wrap="wrap">
              <Link href="/hello" _hover="none"><Button rightIcon={<ArrowForwardIcon />} colorScheme="pink" variant="outline" mr={2} mt={4}>Home</Button></Link>
              <Link href="/projects" _hover="none"><Button rightIcon={<ArrowForwardIcon />} colorScheme="pink" variant="outline" mr={2} mt={4}>Projects</Button></Link>
              {/* <Link href="/blog" _hover="none"><Button rightIcon={<ArrowForwardIcon />} colorScheme="pink" variant="outline" mr={2} mt={4}>Blog</Button></Link> */}
              {/* <Link href="/statistics" _hover="none"><Button rightIcon={<ArrowForwardIcon />} colorScheme="pink" variant="outline" mr={2} mt={4}>Statistics</Button></Link> */}
              <Link href="/about" _hover="none"><Button rightIcon={<ArrowForwardIcon />} colorScheme="pink" variant="outline" mr={2} mt={4}>About</Button></Link>
              <Link href="/gear" _hover="none"><Button rightIcon={<ArrowForwardIcon />} colorScheme="pink" variant="outline" mr={2} mt={4}>Gear</Button></Link>
              {/* <Link href="/hello" _hover="none"><Button rightIcon={<ArrowForwardIcon />} colorScheme="pink" variant="outline" mr={2} mt={4}>Hello</Button></Link> */}
              <Link href="/thanks" _hover="none"><Button rightIcon={<ArrowForwardIcon />} colorScheme="pink" variant="outline" mr={2} mt={4}>Thanks</Button></Link>
            </Flex>
          </Flex>

          {/* Subscribe Section */}
          {/* <Subscribe /> */}
        </Stack>
      </Container>
    </>
  )
}