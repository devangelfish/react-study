import './css/common.css'
import './css/container.css'
import { useSelector } from 'react-redux'
import Contents from './contents'

const Container = ({children}) => {
    const sidebar = useSelector(state => state.sidebar)

    return (
            <div id="container" class="full-screen">
                {children}
                <Contents></Contents>
            </div>
        )
}

export default Container