import { INCREAMENT, DECREAMENT} from "../constants"

//第一个参数是初始化仓库状态的初始值，第二个参数是action对象
export default function setCount(pre= 1, action) {
    const {type, data} = action
    switch (type) {
        case INCREAMENT:
            return pre + data
        case DECREAMENT:
            return pre - data
        
        default:
            return pre
    }
}