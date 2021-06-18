import React from 'react'
import NoticeLink from "./notice-link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons"
import './css/notice-group.css'

class NoticeGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            noticeLinkHidden: false
        }
        this.onHideNoticeLink = this.onHideNoticeLink.bind(this)
    }

    onHideNoticeLink() {
        let {noticeLinkHidden} = this.state
        noticeLinkHidden = noticeLinkHidden ? false : true
        this.setState({noticeLinkHidden})
    }

    render() {
        const {title, list} = this.props;
        const {noticeLinkHidden} = this.state;

        return (
            <li>
                <div id="tap-title">{title}<FontAwesomeIcon id="down-arrow" icon={faAngleDoubleDown} onClick={this.onHideNoticeLink} /></div>
                <NoticeLink list={list} noticeLinkHidden={noticeLinkHidden} />
            </li>
        ) 
    }
}

export default NoticeGroup