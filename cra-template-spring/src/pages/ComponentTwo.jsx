import React,{ Component } from 'react';
import { get } from '../server/server';

class ComponentTwo extends Component {

    componentDidMount () {
       get('/api/xuqw').then(res => {
            console.log(res);
        })
    }

    render () {
        return (
            <div>
                <h3>组件22222</h3>
                <div className='lesstest'>测试less</div>
            </div>
        )
    }
}

export default ComponentTwo;