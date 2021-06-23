import React from 'react'
import { SidebarContainer } from '../container'
import Contents from './contents'

// class App extends React.Component {
//     render() {
//         return (
//             <div id="wrapper">
//                 <SideBar onHideSidebar={onHideSidebar} onHideNotice={onHideNotice} {...state}/>
//                 <Contents />
//             </div>
//         ) 
//     }
// }

const App = () =>
    <div id="wrapper">
        <SidebarContainer />
        <Contents />
    </div>
    

export default App