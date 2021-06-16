const detailList = (list) => 
<div className="detail">
    {list.map(({url, description}, index) =>
     <a href={url} className="detail-title">{description}</a>
    )}
</div>

export default detailList