import './css/read-section.css'
import { useSelector } from 'react-redux';

const Read = () => {
    const { contents } = useSelector(state => state.contents)
    return (<div id="read-section">
        <h1>{contents}</h1>
    </div>)
}


export default Read