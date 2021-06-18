import React from 'react'
import SideBar from './sidebar'
import Contents from './contents'
import data from '../data/data'

class Wrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sidebarHidden: false,
            list: data
        }
        this.onHideSidebar = this.onHideSidebar.bind(this)
    }

    onHideSidebar() {
        let {sidebarHidden} = this.state
        sidebarHidden = sidebarHidden ? false : true
        this.setState({sidebarHidden})
    }

    render() {
        const {onHideSidebar} = this
        const {state} = this
        return (
            <div id="wrapper">
                <SideBar onHideSidebar={onHideSidebar} {...state}/>
                <Contents />
            </div>
        ) 
    }
}

export default Wrapper