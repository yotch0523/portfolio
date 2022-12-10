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
import linkData from '@/data/serviceLinks.json'
import eyeCatchImage from '@/images/home/eyecatch.jpg'

const Home = () => {
  const links: ServiceLink[] = linkData.data

  return (
    <>
      <HeadBlock title={'Home | yotch'} />
      <Image
        py={{ base: '0', sm: '20px' }}
        m="auto"
        src={eyeCatchImage}
        width={{ base: '100%', sm: '60%' }}
      />

      {/* contents */}
      <Box px={'20px'} py={'20px'}>
        <Heading as="h1" size="3xl">yotch</Heading>

        {/* links */}
        <HStack pt={'40px'} spacing={4}>
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