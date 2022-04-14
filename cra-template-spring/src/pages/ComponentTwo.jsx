import React,{ Component } from 'react';
import axios from 'axios';

class ComponentTwo extends Component {

    componentDidMount () {
        axios.get('http://localhost:3000/api/xuqw').then(res => {
            console.log(res);
        })
    }

    render () {
        return (
            <div>
                <h3>组件22222</h3>
            </div>
        )
    }
}

export default ComponentTwo;