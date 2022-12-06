import React from 'react'
import { Link } from "react-router-dom"
import { useWindowSize } from "react-use"
import {
  Fade,
  Flex,
  useDisclosure,
  Text,
} from '@chakra-ui/react'

import Bar from '@/components/Menu/Bar'
import MyHamburger from '@/components/Menu/MyHamburger'
import { MenuLink } from '@/common/types'

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { width, height } = useWindowSize()
  const links = getLinks()

  const MOBILE_DEVICE_WIDTH = 480
  const showHamburger = width <= MOBILE_DEVICE_WIDTH

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
          bg={'black'}
          color={'white'}
          display={isOpen ? 'flex' : 'none'}
          flexFlow={'column'}
          height={height}
          justifyContent="center"
          margin="auto"
          opacity={'.8'}
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