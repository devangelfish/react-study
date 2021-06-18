import data from "../data/data"
import menuList from "./menuList"

const sideBar = ({data}) =>
<div id="side-bar" class="full-height margin-anim">
    <i class="fas fa-grip-lines-vertical"></i>
    <ul>
        {data.map((detail) => 
            <menuList {...detail} />
        )}
    </ul>
</div>

export default sidebar