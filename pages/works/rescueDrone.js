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
    <Layout title="Search Rescue Drone">
      <Container>
        <Title>
          Search-Rescue Drone <Badge>2021</Badge>
        </Title>
        <P>

        G-SAR is a simulation of a drone with an attached camera being used for the search and rescue of one or more subjects.
        The onboard camera is used to take aerial pictures of a landscape, a sub-application analyzes the images using image filtering, 
        and when the subject is detected in an image the coordinates of the subject are sent to the drone for investigation. 
        
        Once the drone has found the subject, a larger rescue done is sent to the coordinates of the drone to rescue the subject.
        The rescued subject is then flown to a local hospital.
 
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source Code: </Meta>
            <Link href="https://github.com/lauraAriasFdez/SearchRescueDrone/">
              My Github Project<ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Docker: </Meta>
            <Link href="https://hub.docker.com/u/larfer2001/contributed">
              Container
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Authors: </Meta>
            Laura Arias Fernandez, Michael Weiner, and Malik <br /> &emsp; &emsp; &emsp; &emsp;Khadar (CSCI 3081W)
          </ListItem>
        </List>
  
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/J7z4CRA-ys8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        
        </AspectRatio>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'