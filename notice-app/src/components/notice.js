import React from 'react'
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
        const { writings, hidden } = this.props
        const { height } = this.state
        return (
            <div id="detail" className={hidden ? "closed-height" : null}
                style={height === 0 ? null : { 'height': height }} ref={ref => this.box = ref}>
                {writings.map(({ writingNo, title }) =>
                    <div key={writingNo} id="detail-title">{title}</div>
                )}
            </div>
        )
    }
}

export default Notice