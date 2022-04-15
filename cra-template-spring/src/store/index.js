import {createStore} from 'redux'
//引入为Count组件服务的reducer
import countReducer from './count_reducer'
//暴露store
export default createStore(countReducer)


export const createIncrementAction = data => ({type: 'increment',data})
export const createDecrementAction = data => ({type: 'decrement',data})