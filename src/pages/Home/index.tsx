import React from 'react'
import {
  AspectRatio,
  Box,
  Heading,
  HStack,
  Link,
} from '@chakra-ui/react'
import GithubIcon from '@patternfly/react-icons/dist/esm/icons/github-icon'
import TwitterIcon from '@patternfly/react-icons/dist/esm/icons/twitter-icon'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import HeadBlock from '@/components/Common/HeadBlock'

import { ServiceLink } from '@/common/types'
import { commonStyles } from '@/common/consts/common-styles'
import linkData from '@/data/serviceLinks.json'
import eyeCatchImage from '@/images/home/eyecatch.jpg'

type IconPropertiers = {
  name: string;
  color: string;
}

const Home = () => {
  const links: ServiceLink[] = linkData.data

  return (
    <>
      <HeadBlock title={'Home | Youki'} />
      <Box
        py={{ base: '0', sm: '20px' }}
        m="auto"
        height="auto"
        width={{ base: '100%', sm: '60%' }}
      >
        <AspectRatio ratio={ 16 / 9 }>
          <LazyLoadImage src={eyeCatchImage} />
        </AspectRatio>
      </Box>

      {/* contents */}
      <Box px={commonStyles.contentWrap.paddingX} py={commonStyles.contentWrap.paddingY}>
        <Heading as="h1" size="2xl">Youki</Heading>

        {/* links */}
        <HStack pt={commonStyles.innerContentWrap.paddingTop} spacing={4}>
          {links.map((link, _) => {
            return(
              <Link href={link.to} isExternal={true} key={`icon-link-${link.name}`}>
                <GetIcon name={link.name} color={link.color} />
              </Link>
            )
          })}
        </HStack>
      </Box>
    </>
  )
}

const GetIcon = (properties: IconPropertiers) => {
  const iconSize = 'lg'
  const name = properties.name
  const color = properties.color

  switch (name) {
    case "GitHub":
      return(<GithubIcon color={color} size={iconSize} />)
    case "Twitter":
      return(<TwitterIcon color={color} size={iconSize} />)
  }
  return(<></>)
}

export default Home