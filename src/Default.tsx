import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { chakra } from '@chakra-ui/system'

import Menu from './components/Menu'
import Home from './pages/Home'
import About from './pages/About'
import Blogs from './pages/Blogs'

const Default = () => {
    return (
        <>
            <Menu />
            <chakra.div
                maxW={[null, null, null, "1280px"]}
                mx="auto"
                px="20px"
                py="12px"
            >
                <Routes>
                    <Route path={`/`} element={<Home />} />
                    <Route path={`/about`} element={<About />} />
                    <Route path={`/blogs`} element={<Blogs />} />
                </Routes>
            </chakra.div>
        </>
    )
}

export default Default