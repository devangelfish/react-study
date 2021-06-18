import React from 'react'
import NoticeGroup from './notice-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons'
import './css/sidebar.css'


const Sidebar = ({sidebarHidden , onHideSidebar, list}) =>
<div id="side-bar" className={sidebarHidden ? 'full-height margin-anim' : 'full-height margin-anim left-hide'}>
    <FontAwesomeIcon id="grip" icon={faGripLinesVertical} onClick={onHideSidebar} />
    <ul>
        {list.map((detail, index) => 
            <NoticeGroup key={index} {...detail} />
        )}
    </ul>
</div>

// class Sidebar extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             groupHidden: true
//         }
//         this.onHideGroup = this.onHideGroup.bind(this)
//     }

//     onHideGroup() {
//         let { groupHidden } = this.state
//         groupHidden = groupHidden ? false : true
//         this.setState({ groupHidden })
//     }

//     render() {
//         const {sidebarHidden , onHideSidebar, list} = this.props
//         return (
//             <div id="side-bar" className={sidebarHidden ? 'full-height margin-anim' : 'full-height margin-anim left-hide'}>
//                 <FontAwesomeIcon id="grip" icon={faGripLinesVertical} onClick={onHideSidebar} />
//                 <ul>
//                     {list.map((detail, index) =>
//                         <NoticeGroup key={index} {...detail} />
//                     )}
//                 </ul>
//             </div>
//         )
//     }
// }

export default Sidebar