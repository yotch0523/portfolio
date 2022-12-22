import React from 'react'
import {
  Box,
  Heading,
  HStack,
  Image,
  Link,
} from '@chakra-ui/react'
import {
  SiGithub,
  SiLinkedin,
  SiZenn,
} from 'react-icons/si'

import HeadBlock from '@/components/Common/HeadBlock'

import { ServiceLink } from '@/common/types'
import { commonStyles } from '@/common/consts/common-styles'
import linkData from '@/data/serviceLinks.json'
import eyeCatchImage from '@/images/home/eyecatch.jpg'

type IconPropertiers = {
  icon: string;
  color: string;
}

const Home = () => {
  const links: ServiceLink[] = linkData.data

  return (
    <>
      <HeadBlock title={'Home | Youki'} />
      <Image
        py={{ base: '0', sm: '20px' }}
        m="auto"
        src={eyeCatchImage}
        width={{ base: '100%', sm: '60%' }}
      />

      {/* contents */}
      <Box px={commonStyles.contentWrap.paddingX} py={commonStyles.contentWrap.paddingY}>
        <Heading as="h1" size="2xl">Youki</Heading>

        {/* links */}
        <HStack pt={commonStyles.innerContentWrap.paddingTop} spacing={4}>
          {links.map((link, _) => {
            return(
              <Link href={link.to} isExternal={true} key={`icon-link-${link.name}`}>
                <GetIcon icon={link.icon} color={link.color} />
              </Link>
            )
          })}
        </HStack>
      </Box>
    </>
  )
}

const GetIcon = (properties: IconPropertiers) => {
  const iconSize = 32
  const icon = properties.icon
  const color = properties.color

  switch (icon) {
    case "SiGitHub":
      return(
        <SiGithub color={color} size={iconSize} />
      )
    case "SiZenn":
      return(
        <SiZenn color={color} size={iconSize} />
      )
    case "SiLinkedin":
      return(
        <SiLinkedin color={color} size={iconSize} />
      )
  }
  return(<></>)
}

export default Home