import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Default from './Default'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<Default />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App