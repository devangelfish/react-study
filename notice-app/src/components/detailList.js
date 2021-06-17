const style = {
    detail: {
        padding: '3px 14px',
        overflow: 'hidden'
    },
    detailTitle: {
        display: 'block',
	    overflow: 'hidden',
	    textOverflow: 'ellipsis',
	    whiteSpace: 'nowrap'
    },
}

const detailList = ({list}) => 
<div className="detail" style={style.detail}>
    {list.map(({url, description}, index) =>
        <a href={url} key={index} className="detail-title" style={style.detailTitle}>{description}</a>
    )}
</div>

export default detailList