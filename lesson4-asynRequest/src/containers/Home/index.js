import React,{Component} from 'react';
import {connect} from 'react-redux';
import actions from '../../store/actions/home';
class Home extends Component{
    componentDidMount(){
        this.props.getHomeList();
    }
    render(){
        return(
            <div className='row'>
                <div className='col-md-6 col-md-offset-3'>
                    <ul className='list-group'>
                        {
                            this.props.list.map(item=>(
                                <li key={item.id} className='list-group-item'>{item.name}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default connect(state=>state.home,actions)(Home)
