import axios from 'axios'
import C from './const'

export const fetchCategories = () => {
    axios.get('http://localhost:50247/api/Category').then(response => {
        console.log(response)
    })
    
    return ({
        type: C.FETCH_CATEGORIES,
        categories: [
            {
                categoryNo: 1,
                categoryName: "심사내역",
                hidden: false,
                writings: [
                    {
                        writingNo: "1",
                        title: "2021년 심사 HOT ISSUE",
                        contents: "empty",
                        timstamp: ""
                    },
                    {
                        writingNo: "2",
                        title: "2020년 심사 HOT ISSUE",
                        contents: "empty",
                        timstamp: ""
                    },
                    {
                        writingNo: "3",
                        title: "2019년 심사 HOT ISSUE",
                        contents: "empty",
                        timstamp: ""
                    }
                ]
            },
            {
                categoryNo: 2,
                categoryName: "프로그램내역",
                hidden: false,
                writings: [
                    {
                        writingNo: "4",
                        title: "2021년 심사 HOT ISSUE",
                        contents: "empty",
                        timstamp: ""
                    },
                    {
                        writingNo: "5",
                        title: "2020년 심사 HOT ISSUE",
                        contents: "empty",
                        timstamp: ""
                    },
                    {
                        writingNo: "6",
                        title: "2019년 심사 HOT ISSUE",
                        contents: "empty",
                        timstamp: ""
                    }
                ]
            },
            {
                categoryNo: 3,
                categoryName: "기타내역",
                hidden: false,
                writings: [
                    {
                        writingNo: "7",
                        title: "2021년 심사 HOT ISSUE",
                        contents: "empty",
                        timstamp: ""
                    },
                    {
                        writingNo: "8",
                        title: "2020년 심사 HOT ISSUE",
                        contents: "empty",
                        timstamp: ""
                    },
                    {
                        writingNo: "9",
                        title: "2019년 심사 HOT ISSUE",
                        contents: "empty",
                        timstamp: ""
                    }
                ]
            }
        ],
        hidden: false
    })
}

export const onHideSidebar = () => ({
    type: C.HIDE_SIDEBAR,
    hidden: true
})

export const onHideNotice = () => ({
    type: C.HIDE_NOTICE,
    hidden: true
})