import React from 'react';
import StaffHeader from './StaffHeader';
import StaffItemPanel from './StaffItemPanel';
import StaffFooter from './StaffFooter';
import StaffDetail from './StaffDetail';

import STAFF from './STAFF';

class App extends React.Component{

    constructor(){
        super();
        this.state = {
            staff: new STAFF,
            StaffDetail: null
        }
    }

    //增加人员
    addStaffItem(item){
        this.setState({
            staff: this.state.staff.addStaffItem(item)
        });
    }

    render(){
        return (
            <div>
                <StaffHeader/>
                <StaffItemPanel items={this.state.staff.staff}/>
                <StaffFooter addStaffItem={this.addStaffItem.bind(this)}/>
                <StaffDetail/>
            </div>
        );
    }
}

React.render(<App />,document.getElementById('app'));