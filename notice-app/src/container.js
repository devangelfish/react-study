import { connect } from "react-redux"
import NoticeWrapper from "./components/notice-wrapper"
import Notice from "./components/notice"
import Sidebar from "./components/sidebar"
import { fetchCategories, onHideSidebar, onHideNotice } from "./action"
import { categories } from "./reducers"

export const SidebarContainer = connect(
    state => ({
        hidden: state.hidden,
        categories: state.categories
    }),
    dispatch => ({
        onHideSidebar() {
            dispatch(onHideSidebar())
        }
    })
)(Sidebar)

export const NoticeWrapperCotainer = connect(
    (state, ownProps) => ({
        categoryNo: state.categories[0].categoryNo,
        categoryName: state.categories[0].categoryName,
        writings: state.categories[0].writings,
        hidden: state.categories[0].hidden
    }),
    dispatch => ({
        onHideNotice(categoryNo) {
            dispatch(onHideNotice(categoryNo))
        }
    })
)(NoticeWrapper)

export const NoticeContainer = connect(
    (state, ownProps) => ({
        writings: state.categories[0].writings,
        hidden: state.hidden
    }),
    null
)(Notice)