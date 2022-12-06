import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Default from './Default'
import { useViewport } from '@/hooks/useViewport'

const App = () => {
  const { viewport } = useViewport()

  return (
    <>
      <head>
        <meta name="viewport" content={viewport} />
      </head>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Default />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App