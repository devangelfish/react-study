import React from 'react'
import Sidebar from './sidebar'
import Container from './container'
import './css/common.css'

const App = () => 
    <div id="wrapper" className="full-screen">
        <Sidebar />
        <Container />
    </div>

export default App