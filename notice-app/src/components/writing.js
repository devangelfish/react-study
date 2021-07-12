import React, { useRef, useState, useEffect } from 'react'
import './css/writing.css'

// class Writing extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             height: 0,
//         }
//     }

//     componentDidMount() {
//         this.setState({
//             height: this.box.clientHeight
//         })
//     }

//     render() {
//         const { writing, fold } = this.props
//         const { height } = this.state
//         return (
//             <div id="writing" className={fold ? "closed-height anim" : "anim"}
//                 style={height === 0 ? null : { 'height': height }} ref={ref => this.box = ref}>
//                 {writing.map(({ no, title }) =>
//                     <div key={no} id="writing-title" className='ellipsis'>{title}</div>
//                 )}
//             </div>
//         )
//     }
// }

const Writing = ({ writing, fold }) => {
    const [ height, setHeight ] = useState(0)
    const writingEl = useRef()

    useEffect(() => {
        setHeight(writingEl.current.clientHeight)
    }, [height])
    
    return (
        <div id="writing" className={fold ? "closed-height height-anim" : "height-anim"}
            style={height === 0 ? null : { 'height': height }} ref={writingEl}>
            {writing.map(({ no, title }) =>
                <div key={no} id="writing-title" className='ellipsis'>{title}</div>
            )}
        </div>
    )
}

export default Writing