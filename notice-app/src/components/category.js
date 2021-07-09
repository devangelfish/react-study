import React, { useCallback, useState } from 'react'
import Writing from './writing'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons"
import './css/common.css'
import './css/category.css'

const Category = ({category}) => {
    const [ isFold, setIsFold ] = useState(false)

    const onClickArrow = useCallback(() => setIsFold(!isFold), [isFold])

    return (<li>
        <div id='category' key={category.no}>{category.name}<FontAwesomeIcon className='anim' id='up-arrow' style={isFold ? {transform: 'rotate(180deg)'}: null} icon={faAngleDoubleUp} onClick={onClickArrow} /></div>
        <Writing writing={category.writing} fold={isFold} />
    </li>)
}

const MemorizedCategory = React.memo(Category)

export default MemorizedCategory