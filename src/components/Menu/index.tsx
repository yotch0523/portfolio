import React from 'react'
import { Link } from 'react-router-dom'
import {
  Fade,
  Flex,
  useDisclosure,
  Text,
} from '@chakra-ui/react'

import Bar from '@/components/Menu/Bar'
import MyHamburger from '@/components/Menu/MyHamburger'
import { commonStyles } from '@/common/consts/common-styles'
import { MenuLink } from '@/common/types'
import useWindowSize from '@/hooks/useWindowSize'

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { width } = useWindowSize()
  const links = getLinks()

  const showHamburger = width <= commonStyles.mobileDeviceWidth

  const HamburgerMenu = () => {
    if (!showHamburger) return(<></>)

    return (
      <MyHamburger
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        style={{
          position: "fixed",
          bottom: "0",
          right: "0",
        }}
      />
    )
  }

  const MenuBar = () => {
    if (showHamburger) return(<></>)

    return (
      <Bar links={links} onClose={onClose} />
    )
  }

  return (
    <>
      <MenuBar />
      <HamburgerMenu />

      <Fade in={isOpen}>
        <Flex
          bg={"rgba(0, 0, 0, .8)"}
          color={'white'}
          display={isOpen ? 'flex' : 'none'}
          flexFlow={'column'}
          justifyContent="center"
          margin="auto"
          position="fixed"
          top="0"
          bottom="0"
          left="0"
          right="0"
        >
          {links.map((page, index) => {
            return(
              <Link
                to={page.to}
                onClick={onClose}
                key={`menu-item-${index}`}
              >
                <Text
                  align="center"
                  fontSize={'2.0rem'}
                  fontWeight="bold"
                >
                  {page.label}
                </Text>
              </Link>
            )
          })}
        </Flex>
      </Fade>
    </>
  )
}

const getLinks = (): MenuLink[] => {
  return [
    {
      to: `/`,
      label: "Home"
    },
    {
      to: `/about`,
      label: "About"
    },
  ]
}

export default Menu