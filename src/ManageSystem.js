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

    //增加员工模块
    addStaffItem(item){
        this.setState({
            staff: this.state.staff.addStaffItem(item)
        });
    }
    //搜索员工信息模块
    searchStaff(word){
        this.setState({
            staff: this.state.staff.searchStaff(word)
        });
    }

    render(){
        return (
            <div>
                <StaffHeader searchStaff={this.searchStaff.bind(this)}/>
                <StaffItemPanel items={this.state.staff.staff}/>
                <StaffFooter addStaffItem={this.addStaffItem.bind(this)}/>
                <StaffDetail/>
            </div>
        );
    }
}

React.render(<App />,document.getElementById('app'));