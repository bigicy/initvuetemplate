import { UNSHIFTLIST} from "../constants"

export default function setList(pre=[], action) {
    const {type, data} = action

    switch (type) {
        case UNSHIFTLIST:
            return [data, ...pre]
    
        default:
            return pre
    }
}