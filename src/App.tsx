import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Helmet } from 'react-helmet-async'

import Default from './Default'
import { useViewport } from '@/hooks/useViewport'

const App = () => {
  const { viewport } = useViewport()

  return (
    <>
      <Helmet>
        <meta name="viewport" content={viewport} />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Default />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App