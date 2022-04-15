//combineReducers用于将多个reducer进行合并为一个reducer
import {combineReducers} from "redux"

import count from "./count"
import list from "./list"

export default combineReducers({
    count,
    list,
})
