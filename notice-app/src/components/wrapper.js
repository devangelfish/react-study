import React from 'react'
import SideBar from './sidebar'
import Contents from './contents'
import data from '../data/data'

// const wrapper = ({title, contents, data}) =>
// <div id="wrapper" style={wrapper.height} >
//     <Sidebar data={data} />
//     <Contents contents={contents} />
// </div>

class Wrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sidebarHidden: false,
            list: data
        }
        this.onHide = this.onHide.bind(this)
    }

    onHide() {
        let {sidebarHidden} = this.state
        sidebarHidden = sidebarHidden ? false : true
        this.setState({sidebarHidden})
    }

    render() {
        const {onHide} = this
        const {state} = this
        return (
            <div id="wrapper">
                <SideBar onHide={onHide} {...state}/>
                <Contents />
            </div>
        ) 
    }
}

export default Wrapper