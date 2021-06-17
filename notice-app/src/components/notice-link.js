import './css/notice-link.css'

const NoticeLink = ({list}) => 
<div id="detail">
    {list.map(({url, description}, index) =>
        <a href={url} key={index} id="detail-title">{description}</a>
    )}
</div>

export default NoticeLink