import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  chakra,
  useColorModeValue
} from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import NextLink from 'next/link'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import BIRDS from 'vanta/dist/vanta.birds.min.js'
import { BioSection, BioYear } from '../components/bio.js'
import Paragraph from '../components/paragraph.js'
import Section from '../components/section.js'
import profilePictures from '../image/pp.jpg'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
  const { t } = useTranslation('common')

  const [vantaEffect, setVantaEffect] = useState(0)
  const vantaRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
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
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.600', 'whiteAlpha.200')}
        p={3}
        mb={6}
        mt={8}
        align="center"
      >
        {t('first-intro')}
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box display flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Quentin Pellosse
          </Heading>
          <p>{t('description')}</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <ProfileImage
            src={profilePictures}
            alt="Profile Pictures"
            borderRadius="full"
            width="100"
            height="100"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Introduction
        </Heading>
        <Paragraph>{t('introduction')}</Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/work"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            {t('my-works')}
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2004</BioYear>
          {t('born')}
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          {t('bac')}
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ❤️
        </Heading>
        <Paragraph>
          {' '}
          <Link href="https://open.spotify.com/playlist/3d5KE5nlaCJ90cpjd59lap?si=e13b919b29ca498f">
            {t('music')}
          </Link>
          , Football ⚽, Anime, Manga
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Home
