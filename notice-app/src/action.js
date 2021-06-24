import axios from 'axios'
import C from './const'


export const fetchContents = (contents) => ({
    type: C.FETCH_CONTENTS,
    contents
})

export const fetchinitialData = (data) => ({
    type: C.FETCH_INITIAL_DATA,
    data: data.map((categories) => ({
        ...categories,
        fold: false
    }))
})

// export const fetchinitialData = () => ({
//     type: C.FETCH_INITIAL_DATA,
//     data: [
//         {
//             categoryNo: 1,
//             categoryName: "심사내역",
//             fold: false,
//             writings: [
//                 {
//                     writingNo: "1",
//                     title: "2021년 심사 HOT ISSUE",
//                     contents: "empty",
//                     timstamp: ""
//                 },
//                 {
//                     writingNo: "2",
//                     title: "2020년 심사 HOT ISSUE",
//                     contents: "empty",
//                     timstamp: ""
//                 },
//                 {
//                     writingNo: "3",
//                     title: "2019년 심사 HOT ISSUE",
//                     contents: "empty",
//                     timstamp: ""
//                 }
//             ]
//         },
//         {
//             categoryNo: 2,
//             categoryName: "프로그램내역",
//             fold: false,
//             writings: [
//                 {
//                     writingNo: "4",
//                     title: "2021년 심사 HOT ISSUE",
//                     contents: "empty",
//                     timstamp: ""
//                 },
//                 {
//                     writingNo: "5",
//                     title: "2020년 심사 HOT ISSUE",
//                     contents: "empty",
//                     timstamp: ""
//                 },
//                 {
//                     writingNo: "6",
//                     title: "2019년 심사 HOT ISSUE",
//                     contents: "empty",
//                     timstamp: ""
//                 }
//             ]
//         },
//         {
//             categoryNo: 3,
//             categoryName: "기타내역",
//             fold: false,
//             writings: [
//                 {
//                     writingNo: "7",
//                     title: "2021년 심사 HOT ISSUE",
//                     contents: "empty",
//                     timstamp: ""
//                 },
//                 {
//                     writingNo: "8",
//                     title: "2020년 심사 HOT ISSUE",
//                     contents: "empty",
//                     timstamp: ""
//                 },
//                 {
//                     writingNo: "9",
//                     title: "2019년 심사 HOT ISSUE",
//                     contents: "empty",
//                     timstamp: ""
//                 }
//             ]
//         }
//     ]
// })

export const foldCategory = (category, fold) => ({
    type: C.FOLD_CATEGORY,
    category: {
        ...category,
        fold
    }
})

export const onHideSidebar = (isActive) => ({
    type: C.HIDE_SIDEBAR,
    sidebar: isActive
})