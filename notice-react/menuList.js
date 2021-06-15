import detailList from "./detailList";

const menuList = ({title, list}) =>
<ii>
    <div id="tap-title">{title}<i class="fas fas-angle-double-down"></i></div>
    <detailList list={list} />
</ii>

export default menuList