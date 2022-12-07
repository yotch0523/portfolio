import React from 'react'
import {
  Box,
} from '@chakra-ui/react'

import { Divide as Hamburder} from 'hamburger-react'

type Props = {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
  style: { [key: string]: string }
}

const MyHamburger = (props: Props) => {
  const isOpen = props.isOpen
  const onOpen = props.onOpen
  const onClose = props.onClose
  const style = props.style

  return (
    <Box
      _focus={{ boxShadow: 'none' }}
      bg="transparent"
      p={'36px'}
      style={style}
      zIndex={100}
    >
      <Hamburder
        color={ isOpen ? 'white' : 'black'}
        toggle={() => {
          if (!isOpen) {
            onOpen()
          } else {
            onClose()
          }
        }}
        toggled={isOpen}
        rounded
        size={54}
      />
    </Box>
  )
}

export default MyHamburger