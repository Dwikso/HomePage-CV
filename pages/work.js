import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  SimpleGrid
} from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'
import NextLink from 'next/link'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import BIRDS from 'vanta/dist/vanta.birds.min.js'
import Gif from '../components/gif'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'
import picturesprofile from '../image/works/Tetris.jpeg'
import pictureswork from '../image/works/tableauchimie.jpg'

const Works = () => {
  const { t } = useTranslation('common')

  const [vantaEffect, setVantaEffect] = useState(0)
  const vantaRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          backgroundAlpha: 0.0,
          THREE
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <Container ref={vantaRef}>
      <Gif />
      <Heading mt={10} as="h3" fontSize={20} mb={3}>
        {t('works')}
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="tetris" title="Tetris" thumbnail={picturesprofile}>
            {t('tetris-intro')}{' '}
            <Link href="https://www.python.org/">Python</Link>
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="tableau"
            title="Tableau Périodique"
            thumbnail={pictureswork}
          >
            {t('tableau-intro')}{' '}
            <Link href="https://www.python.org/">Python</Link>
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          {t('home')}
        </Button>
      </Box>
    </Container>
  )
}

export default Works
