import React from 'react';
export default class StaffHeader extends React.Component {

    //通过props属性传入的回调函数searchStaff
    handlerSearch(){
        let bar = React.findDOMNode(this.refs.searchBar);
        let value = bar.value;
        this.props.searchStaff(value);
    }

    render(){
        return (
            <div>
                <h3 style={{'text-align' : 'center'}}>人员管理系统</h3>
                <table className="optHeader">
                    <tbody>
                        <tr>
                            <td className="headerTd"><input ref="searchBar" onChange={this.handlerSearch.bind(this)} type='text' placeholder="Search..."/></td>
                            <td className="headerTd">
                                {/*for 属性规定 label 与哪个表单元素绑定。*/}
                                <label for="idSelect">人员筛选</label>
                                <select id="idSelect">
                                    <option value="0">全部</option>
                                    <option value="1">主任</option>
                                    <option value="2">老师</option>
                                    <option value="3">学生</option>
                                    <option value="4">实习</option>
                                </select>
                            </td>
                            <td>
                                <label className="orderSelect">排列方式</label>
                                <select id="orderSelect">
                                    <option value="0">身份</option>
                                    <option value="1">年龄升</option>
                                    <option value="2">年龄降</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}