import './css/common.css'
import './css/contents.css'
import { useSelector } from 'react-redux';

const Contents = () => {
    const sidebar = useSelector(state => state.sidebar)

    return <div id="contents" className={sidebar ? 'margin-anim right-hide full-screen' : 'margin-anim full-screen'}>
    </div>
}


export default Contents