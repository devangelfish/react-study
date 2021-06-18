import React from 'react'
import './css/notice-link.css'

class NoticeLink extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            height: 0
        }
    }

    componentDidMount() {
        this.setState({
            height: this.detailBox.clientHeight
        })
    }

    render() {
        const {list, noticeLinkHidden} = this.props
        const {height} = this.state
        return (
            <div id="detail" className = { noticeLinkHidden ? "closed-height" : null} 
            style={height == 0 ? null : {'height': height}} ref={ref => this.detailBox = ref}>
                {list.map(({url, description}, index) =>
                    <a href={url} key={index} id="detail-title">{description}</a>
                )}
            </div>
        )
    }
}

export default NoticeLink