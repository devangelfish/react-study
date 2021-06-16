import React from 'react'
import { render } from 'react-dom'
import sidebar from './components/sidebar'
import data from './data/data'

window.React = React

render(
    <sidebar data={data} />,
    document.getElementById("react-container")
)