import React from 'react'
import { Link } from "react-router-dom"
import {
  Box,
  Flex,
  HStack,
  Text,
} from '@chakra-ui/react'

import { Divide as Hamburder} from 'hamburger-react'

import { MenuLink } from '@/common/types'

type Props = {
  links: MenuLink[];
  onClose(): void;
}

const Bar = (props: Props) => {
  const links = props.links
  const onClose = props.onClose

  return (
    <Box borderWidth={'1px'}>
      <Flex
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        px={'20px'}
      >
        <HStack spacing={8} alignItems={'center'}></HStack>
        <HStack spacing={8} alignItems={'center'}>
          <HStack
            as={'nav'}
            h={4}
            alignItems={'center'}
            display={{ base: 'none', md: 'flex' }}
          >
            {links.map((link, index) => {
              return(
                <Link
                  to={link.to}
                  onClick={onClose}
                  key={`nav-link-${index}`}
                >
                  <Text fontSize="20px">
                    {link.label}
                  </Text>
                </Link>
              )
            })}
          </HStack>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Bar