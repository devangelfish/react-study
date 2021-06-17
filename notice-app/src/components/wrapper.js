import React from 'react'
import SideBar from './sidebar'

// const wrapper = ({title, contents, data}) =>
// <div id="wrapper" style={wrapper.height} >
//     <Sidebar data={data} />
//     <Contents contents={contents} />
// </div>

class Wrapper extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <SideBar data={this.props.data}/>
        ) 
    }
}

export default Wrapper