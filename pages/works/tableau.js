import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Badge,
  Box,
  Button,
  Container,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'
import NextLink from 'next/link'
import Layout from '../../components/layout/article'
import P from '../../components/paragraph'
import { Meta, Title } from '../../components/work'

const Work = () => {
  const { t } = useTranslation('common')
  return (
    <Layout title="Tableau Périodique Intéractifs">
      <Container>
        <Title>
          Tableau Périodique <Badge>2024</Badge>
        </Title>
        <P>
          {t('tableau-intro')}{' '}
          <Link href="https://www.python.org/">Python</Link>{' '}
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.python.org/">
              https://www.python.org/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/Dwikso/Tetris">
              https://github.com/Dwikso/Tetris <ExternalLinkIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>STACK</Meta>
            <span>Python, PyGame</span>
          </ListItem>
        </List>
        <Box my={6} align="center">
          <Button as={NextLink} href="/" colorScheme="teal">
            {t('home')}
          </Button>
        </Box>
      </Container>
    </Layout>
  )
}

export default Work
