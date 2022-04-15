//用于创建store
import { applyMiddleware, createStore } from "redux"  
import allReducer from "./reducers"//将多个reducer合并为一个
import thunk from "redux-thunk"  //引入异步模块
import {composeWithDevTools} from "redux-devtools-extension"

//创建并导出store对象
export default createStore(
    allReducer, composeWithDevTools(applyMiddleware(thunk))
)