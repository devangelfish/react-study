import DetailList from "./detailList"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons"

const style = {
    li: {
        marginBottom: '20px',
	    borderRadius: '5px 5px 0 0',
	    position: 'relative',
	    backgroundColor: '#F0FFFF'
    },
    tapTile: {
        borderRadius: '5px 5px 0 0',
        padding: '3px 14px',
        position: 'relative',
        color: '#265CC0',
        fontWeight: 'bold',
        background: '#D1D1D1'
    },
    icon: {
        marginTop: '-7px',
        fontSize: '14px',
        color: '#767676',
        cursor: 'pointer',
        position: 'absolute',
        right: '10px',
        top: '50%'
    }
}

const menuList = ({title, list}) =>
<li style={style.li}>
    <div id="tap-title" style={style.tapTile}>{title}<FontAwesomeIcon icon={faAngleDoubleDown} style={style.icon} /></div>
    <DetailList list={list} />
</li>

export default menuList