import React from 'react'
import {
  Box,
  Heading,
  HStack,
  Image,
} from '@chakra-ui/react'

import HeadBlock from '@/components/Common/HeadBlock'
import IconLink from '@/components/Common/IconLink'

import { ServiceLink } from '@/common/types'
import { commonStyles } from '@/common/consts/common-styles'
import linkData from '@/data/serviceLinks.json'
import eyeCatchImage from '@/images/home/eyecatch.jpg'

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
              <IconLink
                name={link.name}
                icon={link.icon}
                to={link.to}
                color={link.color}
                key={`icon-link-${link.name}`}
                size={32}
              />
            )
          })}
        </HStack>
      </Box>
    </>
  )
}

export default Home