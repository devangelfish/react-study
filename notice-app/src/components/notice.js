import React, { useEffect ,useState } from 'react'
import { useDispatch } from 'react-redux'
import './css/notice.css'

class Notice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            height: 0,
        }
    }

    componentDidMount() {
        this.setState({
            height: this.box.clientHeight
        })
    }

    render() {
        const { writing, fold } = this.props
        const { height } = this.state
        return (
            <div id="detail" className={fold ? "closed-height" : null}
                style={height === 0 ? null : { 'height': height }} ref={ref => this.box = ref}>
                {writing.map(({ no, title }) =>
                    <div key={no} id="detail-title">{title}</div>
                )}
            </div>
        )
    }
}

export default Notice