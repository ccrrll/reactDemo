import React, { Component } from 'react';
import bg from '../../asserts/image/bg.jpg';
import './home.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="home">
                <img src={bg} alt="bg" />
            </div>
         );
    }
}
 
export default Home;