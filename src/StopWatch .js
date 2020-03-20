import React, { Component } from 'react';
class StopWatch extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <MajorClock />
                <ControlButtons />
                <SplitTimes></SplitTimes>
            </div>
         );
    }
}
 

const MajorClock = (props) => {
//TODO: 返回数字时钟的JSX
};

const ControlButtons = (props) => {
//TODO: 返回两个按钮的JSX
};

const SplitTimes = (props) => {
//TODO: 返回所有计次时间的JSX
}
export default StopWatch;