import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layout/article'
  
  const Work = () => (
    <Layout title="Visually Imparired Grocery Shopping">
      <Container>
        <Title>
          Visually Imparired Grocery Shopping <Badge>2021-2022</Badge>
        </Title>
        <P>
          The aim of the project is to develop a robust program that aids visually impaired individuals shop at a grocery store. 
          More specifically, the goal is to develop two different tools: (1) an object recognition interface that is able to distinguish 
          between different grocery items, and indicates to the user which product is in front of them., and (2) a barcode scanner, such 
          that when a product is scanned the user can hear the different ingredients of the product through a speech interface. 
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source Code: </Meta>
            <Link href="https://github.com/lauraAriasFdez/barcodeDetector/">
              My Github Project<ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>UROP Paper: </Meta>
            <Link href="https://www.overleaf.com/read/vdhgckrntmxf">
              Paper explaining my research
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Research Publication: </Meta>
            <br />
            &emsp; 
            <Link href="https://drive.google.com/file/d/1_8F_41TLjfKA8EyDeEhD4MY2j_beOCZQ/view?usp=sharing">
              Paper
              <ExternalLinkIcon mx="2px" />
            </Link>
            
            <br />
           <P> 
            Workshop Submission (<em>Accepted</em>)
            <Link href ="https://kdd.cs.ksu.edu/Workshops/AAMAS-AIDBEI-2022/#AcceptedPapers" target="_blank"> AAMAS-AIDBEI-2022 <ExternalLinkIcon mx="2px" /></Link>
           </P>
          </ListItem>
          <ListItem>
            <Meta>Awards: </Meta>
              Undergraduate Research Scholarship (UROP)
          </ListItem>
          <ListItem>
            <Meta>Demo: </Meta>
              Video demo of one of the components of the project
          </ListItem>
        </List>
  
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/z4ixJT4SuLI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </AspectRatio>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'