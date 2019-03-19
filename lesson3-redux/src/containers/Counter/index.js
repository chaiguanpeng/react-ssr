import React,{Component} from "react";
import {connect} from 'react-redux';
import actions from '../../store/actions/counter'
class Counter extends Component{
    state = {
        number:0
    }
    render(){
        return (
            <div>
                <p>{this.props.number}</p>
                <button onClick={()=>{console.log(this.props);this.props.increment()}}>+</button>
            </div>
        )
    }
}
export default connect(state=>state.counter,actions)(Counter)
