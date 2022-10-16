import { Container, Button, Link,Box,SimpleGrid, Heading, chakra, useColorModeValue } from "@chakra-ui/react"
import Image from 'next/image'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'

import Section from '../components/section.js'
import Paragraph from '../components/paragraph'
import { WorkGridItem } from '../components/grid-items'
import Layout from '../components/layout/article'


import researchThumbnail from '../public/images/cookie_prediction.png'
import rescueDrone from '../public/images/rescueDrone.jpg'
import thumbFourPainters from '../public/images/rescueDrone.jpg'
import MNISTThmbnail from '../public/images/mnist.png'

import sentimentAnalysis from "../public/images/sentiment-analysis.jpeg"

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
  })

  
const Page = () =>{
    return(
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={3} mb="6" align="center">
                Hello, I&apos;m a student at the University of Minnesota
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">Laura Arias Fernandez</Heading>
                    <p>Master Application in progress...</p>
                </Box>

                <Box flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        <ProfileImage
                        src="/images/lauraAriasFdez.jfif"
                        alt="Profile image"
                        borderRadius="full"
                        width="100%"
                        height="100%"
                        />
                    </Box>

                </Box>
            </Box>
        
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                Work
                </Heading>
                <Paragraph>

                Currently studying for my Bachelor's of Science in Computer Science from the University of Minnesota. (May 2023). 
                I am a self-driven student with a passion for using artificial intelligence and data science to solve real world problems.
                My experience includes being an intern at Goldman Sachs as a technology analyst, a teaching assistant,
                 and a research assistant focus on developing an app to help visually impaired individuals grocery shop.

                I have been the recipient of the 
                <NextLink href="https://ugresearch.umn.edu/springsymposium/2022/Arias-Fernandez" passHref>
                <Link target="_blank"> UMN undergrad research scholarships </Link>
                </NextLink>
                 and my research has been published in the 
                
                <NextLink href="https://kdd.cs.ksu.edu/Workshops/AAMAS-AIDBEI-2022/#AcceptedPapers" passHref>
                <Link target="_blank"> AAMAS 2022 Workshop on Diversity in Artificial Intelligence.</Link>
                </NextLink>
          
                </Paragraph>
                <Box align="center" my={4}>
                <a target="_blank" href="https://docs.google.com/document/d/1eogUUZKdkkBdQSRHtFbyWoi23mrAGJFH/edit?usp=sharing&ouid=103847552264769017755&rtpof=true&sd=true" passHref scroll={false}>
                    <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                    My Resume
                    </Button>
                </a>
                </Box>

            </Section>


            <Layout title="">
            <Heading as="h3" variant="section-title">
                Projects
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>

                <Section>
                    <WorkGridItem id="undergraduateResearch" title="Visually Imparired Grocery Shopping" thumbnail={researchThumbnail}>
                        The aim of the project is to develop a robust program that aids visually impaired individuals shop at a grocery store.
                    </WorkGridItem>
                </Section>

                <Section>
                    <WorkGridItem
                        id="rescueDrone"
                        title="Search/Rescue Drone Simulation"
                        thumbnail={rescueDrone}
                    >
                        A drone simulation that uses computer vision object detection algorithm to find a robot in a 3d rendered map of the UMN campus.

                    </WorkGridItem>
                </Section>

                <Section delay={0.1}>
                    <WorkGridItem
                        id="sentimentAnalysis"
                        title="Compare Sentiment Analysis Methods"
                        thumbnail={sentimentAnalysis}
                    >
                         Compare the feature extraction techniques  and machine learning models
                         in sentiment analysis.
                    </WorkGridItem>
                </Section>

                <Section delay={0.1}>
                    <WorkGridItem id="MNIST_CNN" thumbnail={MNISTThmbnail} title="MNIST CNN">
                             Neural Network model implementations to classify a 28x28 pixel image of a handwritten digit sourced from the MNIST database.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
            </Layout>
        </Container>
    )
}

export default Page
