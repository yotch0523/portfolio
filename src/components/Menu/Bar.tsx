import React from 'react'
import { Link } from "react-router-dom"
import {
  Box,
  Flex,
  HStack,
  Text,
} from '@chakra-ui/react'

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
        px={'28px'}
      >
        <HStack spacing={8} alignItems={'center'}></HStack>
        <HStack
          as={'nav'}
          alignItems={'start'}
          display={{ base: 'none', sm: 'flex' }}
          spacing={8}
        >
          {links.map((link, index) => {
            return(
              <Link
                to={link.to}
                onClick={onClose}
                key={`nav-link-${index}`}
              >
                <Text fontSize={{ base: '20px', sm: '24px', md: '28px' }}>
                  {link.label}
                </Text>
              </Link>
            )
          })}
        </HStack>
      </Flex>
    </Box>
  )
}

export default Bar