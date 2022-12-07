import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { chakra } from '@chakra-ui/system'

import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import About from '@/pages/About'

const Default = () => {
  return (
    <>
      <Menu />
      <chakra.div
        maxW={[null, null, null, "1280px"]}
        mx="auto"
        px={{ base: '0', sm: '20px' }}
        py={{ base: '0', sm: '12px' }}
      >
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/about`} element={<About />} />
        </Routes>
      </chakra.div>
      <Footer />
    </>
  )
}

export default Default