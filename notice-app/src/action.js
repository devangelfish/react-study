import axios from 'axios'
import C from './const'

export const fetchinitialDataAsync = async () => {
    const { data } = await axios.get(`${C.API_URL}/api/Category`)
    return {
        type: C.FETCH_INITIAL_DATA,
        data: data?.map((category) => ({
            ...category
        }))
    }
}

export const getAuthToken = async (loginInfo) => {
    const { data: token } = await axios({
        method: 'post',
        url: `${C.API_URL}/api/Login`,
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(loginInfo)
    })
    const { id } = loginInfo
    return {
        type: C.AUTH_USER,
        auth: {
            id,
            token
        }
    }
}

export const onHideSidebar = (isActive) => ({
    type: C.HIDE_SIDEBAR,
    sidebar: isActive
})