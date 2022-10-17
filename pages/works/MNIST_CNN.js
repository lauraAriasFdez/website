import {
    Container,
    Badge,
    List,
    ListItem,
  } from '@chakra-ui/react'

  import { Title, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layout/article'
  
  const Work = () => (
    <Layout title="MNIST-CNN">
      <Container>
        <Title>
            MNIST Conv Neural Network <Badge>2022</Badge>
        </Title>
        <P>

        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source Code: </Meta>
          </ListItem>
          <ListItem>
            <Meta>Paper: </Meta>
          </ListItem>

          <ListItem>
          <Meta>Results: </Meta>
          </ListItem>

        </List>

      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'