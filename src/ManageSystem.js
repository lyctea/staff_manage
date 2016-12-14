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
            //存放详情页
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
    //删除员工模块
    removeStaffItem(key){
        this.setState({
            staff: this.state.staff.removeStaffItem(key)
        });
    }

    //通过ID过滤员工信息
    filtStaff(filtType){
        this.setState({
            staff: this.state.staff.filtStaff(filtType)
        });
    }

    //排序
    sortStaff(sortType){
        this.setState({
            staff: this.state.staff.sortStaff(sortType)
        });
    }
    //打开detail
    detailStaffItem(key){
        console.log("detailStaffItem" + key);
        //返回key相等的数组的第一个元素
        this.setState({
            StaffDetail: this.state.staff.staff.filter(item => {
                return item.key == key;
            })[0]
        });
        console.log(this.state.StaffDetail);
    }
    //关闭detail
    closeDetail(){
        this.setState({
            StaffDetail : null
        })
    }
    //编辑detail
    editDetail(item){
        this.setState({
            staff: this.state.staff.editStaffItem(item)
        })
    }


    render(){
        return (
            <div>
                <StaffHeader searchStaff={this.searchStaff.bind(this)}
                             filtStaff={this.filtStaff.bind(this)}
                             sortStaff={this.sortStaff.bind(this)}
                />
                <StaffItemPanel items={this.state.staff.staff}
                                removeStaffItem={this.removeStaffItem.bind(this)}
                                detailStaffItem={this.detailStaffItem.bind(this)}
                />
                <StaffFooter addStaffItem={this.addStaffItem.bind(this)}/>

                <StaffDetail staffDetail={this.state.StaffDetail}
                             closeDetail={this.closeDetail.bind(this)}
                             editDetail={this.editDetail.bind(this)}
                />
                <StaffDetail/>
            </div>
        );
    }
}

React.render(<App />,document.getElementById('app'));