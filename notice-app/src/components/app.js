import React from 'react'
import Sidebar from './sidebar'
import Container from './container'
import './css/common.css'
import Categories from './categories'

const App = () => 
    <div id="wrapper" className="full-screen">
        <Sidebar>
            <Categories />
        </Sidebar>
        <Container />
    </div>

export default App