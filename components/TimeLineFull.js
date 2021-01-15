import React from 'react'
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    List,
    ListItem,
    Icon,
    Stack,
    Divider,
    Link
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

const YearDivider = () => {
    const { colorMode } = useColorMode()
    const borderColor = {
        light: 'gray.200',
        dark: 'gray.600'
    }

    return <Divider borderColor={borderColor[colorMode]} my={8} w="100%" />
}

const TimelineStep = ({ title, children }) => {
    const { colorMode } = useColorMode()
    const color = {
        light: 'gray.700',
        dark: 'gray.400'
    }
    const checkColor = {
        light: 'black.700',
        dark: 'white.400'
    }

    return (
        <ListItem>
            <Stack ml={2} mb={4}>
                <Flex align="center">
                    <CheckIcon mr={2} color={checkColor[colorMode]} />
                    <Text fontWeight="medium">{title}</Text>
                </Flex>
                <Text color={color[colorMode]} ml={6}>
                    {children}
                </Text>
            </Stack>
        </ListItem>
    )
}

const TimelineFull = () => (
    <>
        <Heading
            as="h3"
            size="lg"
            fontWeight="bold"
            my={4}
            letterSpacing="tighter"
        >
            2021
      </Heading>
        <List>
            <TimelineStep title="Worked beginning of the month in the new year 👔">
           
            </TimelineStep>
        </List>

        <YearDivider />
        <Heading
            as="h3"
            size="lg"
            fontWeight="bold"
            my={4}
            letterSpacing="tighter"
        >
            2020
      </Heading>
        <List>
            <TimelineStep title="Freelance Programmer 🐱‍💻">
                Because of the pandemic, I decided to work at home and become freelance, then looked for several projects from clients.
            </TimelineStep>
            <TimelineStep title="Started A Facebook Channel Gaming 📹">
                I made a <Link href="https://www.facebook.com/gaming/riceknow" color="red.500" isExternal>Facebook channel</Link> to live streaming play games!
            </TimelineStep>
        </List>

        <YearDivider />
        <Heading
            as="h3"
            size="lg"
            fontWeight="bold"
            my={4}
            letterSpacing="tighter"
        >
            2018 - 2019
      </Heading>
        <List>
            <TimelineStep title="Started A YouTube Channel 📹">
                I made a <Link href="https://youtube.com/c/adinyahya" color="red.500" isExternal>YouTube channel</Link> to save my game activity!
            </TimelineStep>
            <TimelineStep title="Graduated College 🎓">
            Graduate from college to earn a Bachelor's Degree Informatics Engineering.
            </TimelineStep>
            <TimelineStep title="Building Blockchain Cryptocurrency">
            Creative Design Produk (LOGO), Sponsor, Listing Token NEURAL PROTOCOL and Build a Website Official
            </TimelineStep>
        </List>

        <YearDivider />
        <Heading
            as="h3"
            size="lg"
            fontWeight="bold"
            mb={4}
            letterSpacing="tighter"
        >
            2016 - 2017
      </Heading>
        <List>
            <TimelineStep title="Working on an IT project the first time 😎">
                I build an operational website at the Company Lembaga Manajemen Infaq Surabaya.
            </TimelineStep>
            <TimelineStep title="Build a simple Applications">
                I used Java to create app dekstop and PHP to create a website. I learned in College, Watching YouTube Videos and Searching the web for anything I could find on the topic.
            </TimelineStep>
        </List>

        <YearDivider />
        <Heading
            as="h3"
            size="lg"
            fontWeight="bold"
            mb={4}
            letterSpacing="tighter"
        >
            2014
        </Heading>
        <List>
            <TimelineStep title="Started college 🏫">
            Started college at Institute Adhi Tama Surabaya Indonesia.
            </TimelineStep>
            <TimelineStep title="Graduated high school 🎓">
            Graduated from high school at Telkom Darul Ulum Jombang Indonesia.
            </TimelineStep>
        </List>

        <YearDivider />
        <Heading
            as="h3"
            size="lg"
            fontWeight="bold"
            mb={4}
            letterSpacing="tighter"
        >
            1996
      </Heading>
        <List>
            <TimelineStep title="Born 👶"></TimelineStep>
        </List>
    </>
)

export default TimelineFull