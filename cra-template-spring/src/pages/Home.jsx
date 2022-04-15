//connect是一个高阶函数，用于包装一个组件，返回一个新的组件
import {connect} from "react-redux"  
import {increament, decreament } from "../redux/actions/count"
import React,{ Component } from 'react';
import { Button } from 'antd'
const mapStateToProps = state =>{
    return {
        count :state.count
    }
}
//将store当中的所有的actionCreator放入actionCreators
const mapDispatchToProps = () => {
    return{
        increament: increament,
        decreament: decreament
    }
}

@connect(mapStateToProps,mapDispatchToProps)
class Home extends Component {
    increament =() => {
        this.props.increament(10)
    }
    decreament =() => {
        this.props.decreament(10)
    }
    click = () =>{
        console.log('点击')
    }
    render() {
        return (
            <div>
                <p style={{marginTop: 10, textAlign:'center'}}>我是HOME组件,仓库中的count值为{this.props.count}</p>
                <div style={{marginTop: 10, textAlign:'center'}}>
                    <Button onClick={this.increament}>增加</Button>
                </div>
                <div style={{marginTop: 10, textAlign:'center'}}>
                    <Button onClick={this.decreament}>减少</Button>
                </div>
                <div style={{marginTop: 10, textAlign:'center'}}>
                    <Button type="primary" onClick={this.click}>测试antd</Button>
                </div>
            </div>
        )
    }

}

export default Home