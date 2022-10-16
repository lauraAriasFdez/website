import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'

  import Image from 'next/image'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layout/article'
  
  import sentimentAnalysisResults from '../../public/images/sentiment-analysis-resutls.png'

  const Work = () => (
    <Layout title="Sentiment Analysis Method Comparison">
      <Container>
        <Title>
            Sentiment Analysis Method's Comparison <Badge>2020-2021</Badge>
        </Title>
        <P>
            There are two main components to sentiment analysis in natural language processing: feature extraction,
            and the machine learning model. In this project, I examine sentiment analysis on Twitter data. Specifically,
            I explore the use of different feature extraction techniques (3-grams, 4-grams, bag of words, and
            tf-idf) and different machine learning models (naive Bayes classifiers, SVM, logistic regression) to
            compare the model accuracy.

        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source Code: </Meta>
            <Link href="https://github.com/lauraAriasFdez/SentimentAnalysis/tree/main">
              My Github Project<ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Paper: </Meta>
            <Link href="https://drive.google.com/file/d/1pzkBE7QZaL-QcH3uLsvomT4-GZOj1sZc/view?usp=sharing">
              Paper
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
          <Meta>Results: </Meta>
            <Image   width="850" height="250" src={sentimentAnalysisResults} alt='results sentiment analysis'/>
          </ListItem>

        </List>

      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'