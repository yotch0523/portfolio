import React from 'react'
import {
    FaRegIdCard,
    FaBookOpen,
    FaHome
} from 'react-icons/fa'
import { Link } from "react-router-dom"
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
} from '@chakra-ui/react'

const Menu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

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
                    <HamburgerIcon fontSize="2.4rem" />
                </Button>
            </Flex>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Contents</DrawerHeader>
                    <DrawerBody>
                        <List spacing={3}>
                            {pages.map((page, index) => {
                                return(
                                    <ListItem key={`menu-item-${index}`}>
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
                </DrawerContent>
                <DrawerFooter>
                    Youki YOSHIOKA
                </DrawerFooter>
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
        {
            "to": `/blogs`,
            "icon": FaBookOpen,
            "label": "Blogs"
        }
    ]
}

export default Menu