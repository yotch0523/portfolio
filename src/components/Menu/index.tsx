import React from 'react'
import {
    FaRegIdCard,
    FaHome
} from 'react-icons/fa'
import { Link } from "react-router-dom"
import { useWindowSize } from "react-use"
import { HamburgerIcon } from '@chakra-ui/icons'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Flex,
    List,
    ListIcon,
    ListItem,
    Spacer,
    useDisclosure,
    Divider,
} from '@chakra-ui/react'

const Menu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const height = useWindowSize()
    const pages = getPages()

    return (
        <>
            <Flex
                as="header"
                bg="transparent"
                px="8px"
                py="4px"
                w="100%"
            >
                <Spacer />
                <Button
                    onClick={onOpen}
                    bg="transparent"
                    position="fixed"
                    right="20px"
                    top="12px"
                >
                    <HamburgerIcon
                        _focus={ { boxShadow: 'none' } }
                        fontSize="2.4rem"
                    />
                </Button>
            </Flex>

            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                placement="bottom"
                size="full"
            >
                <DrawerOverlay />
                <DrawerContent maxH={`${height}px`}>
                    <DrawerCloseButton p="28px" fontSize={['2.0rem', '1.2rem', '1.2rem', '1.2rem']} />
                    <DrawerHeader fontSize={['4.0rem', '2.8rem', '2.8rem', '2.8rem']}>Contents</DrawerHeader>
                    <DrawerBody>
                        <List spacing={3}>
                            {pages.map((page, index) => {
                                return(
                                    <ListItem fontSize={['2.8rem', '1.8rem', '1.8rem', '1.8rem']} key={`menu-item-${index}`}>
                                        <Link
                                            to={page.to}
                                            onClick={onClose}
                                        >
                                            <ListIcon as={page.icon} />
                                            {page.label}
                                        </Link>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </DrawerBody>
                    <Divider />
                    <DrawerFooter justifyContent="start">
                        Youki.Y
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

const getPages = () => {
    return [
        {
            "to": `/`,
            "icon": FaHome,
            "label": "Home"
        },
        {
            "to": `/about`,
            "icon": FaRegIdCard,
            "label": "About"
        },
    ]
}

export default Menu