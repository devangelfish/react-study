import React from 'react'
import MenuList from './menuList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons'

// const sideBar = ({data}) =>
// <div id="side-bar" className="full-height margin-anim">
//     <i className="fas fa-grip-lines-vertical"></i>
//     <ul>
//         {data.map((detail, index) => 
//             <MenuList key={index} {...detail} />
//         )}
//     </ul>
// </div>

const style = {
    ul: {
        listStyle: 'none',
        margin: '0',
        padding: '0'
    },
    sideBar: {
        width: '300px',
        boxSizing: 'border-box',
        padding: '20px',
        position: 'absolute',
        backgroundColor: '#191D1F',
        height: '100vh'
    },
    icon: {
        margin: '10px 10px 0 0',
        top: '0',
        right: '-28px',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '2em',
        position: 'absolute'
    }
}

class SideBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hide: false
        }
        this.change = this.change.bind(this)
    }

    change() {
        if(!this.state.hide) {
            this.setState({hide: true})
        } else {
            this.setState({hide: false})
        }
    }

    render() {
        const {hide} = this.state 
        return (
            <div id="side-bar" className="full-height margin-anim" style={style.sideBar} status={this.state.hide}>
                <FontAwesomeIcon icon={faGripLinesVertical} style={style.icon} onClick={() => this.change()} />
                <ul style={style.ul}>
                    {this.props.data.map((detail, index) => 
                        <MenuList key={index} {...detail} />
                    )}
                </ul>
            </div>
        )
    }
}

export default SideBar