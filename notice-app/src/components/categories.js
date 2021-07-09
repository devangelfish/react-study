import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchinitialDataAsync } from '../action';
import Category from './category';

const Categories = () => {
    const data = useSelector(state => state.data)
    const dispatch = useDispatch()

    useEffect(() => {
        fetchinitialDataAsync().then((result) => {
            dispatch(result)
        })
    }, [])

    return (<ul>
        {data.map(category =>
            <Category key={category.no} category={category} />
        )}
    </ul>)
}

export default Categories
