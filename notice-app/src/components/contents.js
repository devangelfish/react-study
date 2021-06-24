import './css/contents.css'
import { HashRouter, Route } from 'react-router-dom'
import Read from './read'
import Write from './write'

const Contents = () =>
<HashRouter>
    <div id="contents">
        <Route exact path='/' component={Read} />
        <Route path='/admin' component={Write} />
    </div>
</HashRouter>

export default Contents