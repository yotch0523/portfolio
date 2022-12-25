import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { chakra } from '@chakra-ui/system'

import Menu from '@/components/Menu'
import Footer from '@/components/Footer'

const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))

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
        <Suspense fallback="...">
          <Routes>
            <Route path={`/`} element={<Home />} />
            <Route path={`/about`} element={<About />} />
          </Routes>
        </Suspense>
      </chakra.div>
      <Footer />
    </>
  )
}

export default Default