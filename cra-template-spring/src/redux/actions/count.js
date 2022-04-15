import {INCREAMENT, DECREAMENT} from "../constants"

// 创建一个同步action
export const increament = data => ({type: INCREAMENT, data})
export const decreament = data => ({type: DECREAMENT, data})

// 创建一个异步action
export const increamentAsync = data => {
    return (dispatch) => {
        // 异步任务在此执行
        setTimeout(()=> {
            dispatch(increament(data))
        }, 1000)
    }
}