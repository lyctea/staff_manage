'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//每一个人员条目单独作为一个staffItem类
var staffItem = function staffItem(item) {
    _classCallCheck(this, staffItem);

    this.info = {};
    this.info.name = item.name;
    this.info.age = item.age || 0;
    this.info.sex = item.sex;
    this.info.id = item.id;
    this.info.descrip = item.descrip || '';
    this.key = ++staffItem.key;
};

staffItem.key = 0;

var STAFF = function () {
    //创建了2个实例变量，一个是allStaff，其中存储所有staffItem；
    function STAFF() {
        _classCallCheck(this, STAFF);

        this.allStaff = [new staffItem(STAFF.rawData[0]), new staffItem(STAFF.rawData[1]), new staffItem(STAFF.rawData[2]), new staffItem(STAFF.rawData[3]), new staffItem(STAFF.rawData[4]), new staffItem(STAFF.rawData[5]), new staffItem(STAFF.rawData[6]), new staffItem(STAFF.rawData[7]), new staffItem(STAFF.rawData[8]), new staffItem(STAFF.rawData[9]), new staffItem(STAFF.rawData[10])];
        // 一个是staff，它是最终需要给React展示的数据，是经过用户筛选操作、关键字搜索操作之后得到的人员数组
        this.staff = [];
        this.sortType = 0; //0-身份 1-年龄升 2-年龄降
        this.filtType = 0; //0-all 1-主任 2-老师 3-学生 4-实习
        this.word = ''; //搜索关键字
        this._sortStaff(this.sortType); //默认按身份排序
        this._filtStaff(this.filtType); //默认全部显示
    }
    //增加员工


    _createClass(STAFF, [{
        key: 'addStaffItem',
        value: function addStaffItem(item) {
            var newItem = new staffItem(item);
            this.allStaff.push(newItem);
            //员工增加之后进行排序 筛选 搜索过滤
            this._sortStaff(this.sortType);
            this._filtStaff(this.filtType);
            this._searchStaff(this.word);

            return this;
        }

        //删除员工

    }, {
        key: 'removeStaffItem',
        value: function removeStaffItem(key) {
            //返回一个不包含删除key的item数组
            var newStaff = this.allStaff.filter(function (item) {
                return item.key != key;
            });
            this.allStaff = newStaff;

            this._filtStaff(this.filtType);
            this._searchStaff(this.word);
            return this;
        }
        //改

    }, {
        key: 'editStaffItem',
        value: function editStaffItem(item) {
            this.allStaff.forEach(function (staffItem) {
                if (staffItem.key == item.key) {
                    staffItem.info.name = item.name;
                    staffItem.info.sex = item.sex;
                    staffItem.info.age = item.age;
                    staffItem.info.id = item.id;
                    staffItem.info.descrip = item.descrip;
                }
            });
            this._sortStaff(this.sortType);
            this._filtStaff(this.filtType);
            this._searchStaff(this.word);
            //返回整个STAFF类
            return this;
        }

        //筛选

    }, {
        key: '_filtStaff',
        value: function _filtStaff(filtType) {
            this.filtType = filtType;
            switch (parseInt(filtType)) {
                case 0:
                    this.staff = this.allStaff;
                    break;
                case 1:
                    this.staff = this.allStaff.filter(function (item) {
                        return item.info.id == '主任';
                    });
                    break;
                case 2:
                    this.staff = this.allStaff.filter(function (item) {
                        return item.info.id == '老师';
                    });
                    break;
                case 3:
                    this.staff = this.allStaff.filter(function (item) {
                        return item.info.id == '学生';
                    });
                    break;
                case 4:
                    this.staff = this.allStaff.filter(function (item) {
                        return item.info.id == '实习';
                    });
                    break;
                default:
                    break;
            }
        }

        //排序

    }, {
        key: '_sortStaff',
        value: function _sortStaff(sortType) {
            this.sortType = sortType;
            switch (parseInt(sortType)) {
                case 0:
                    //身份
                    //将字符串id转成整型数便于排序
                    this.allStaff.forEach(function (item) {
                        switch (item.info.id) {
                            case '主任':
                                item.info.id = 1;break;
                            case '老师':
                                item.info.id = 2;break;
                            case '学生':
                                item.info.id = 3;break;
                            case '实习':
                                item.info.id = 4;break;
                            default:
                                break;
                        }
                    });
                    //按照id的大小排序
                    this.allStaff.sort(function (item1, item2) {
                        if (item1.info.id < item2.info.id) return -1;else if (item1.info.id > item2.info.id) return 1;else return 0;
                    });
                    //排序好之后转成字符串
                    this.allStaff.forEach(function (item) {
                        switch (item.info.id) {
                            case 1:
                                item.info.id = '主任';break;
                            case 2:
                                item.info.id = '老师';break;
                            case 3:
                                item.info.id = '学生';break;
                            case 4:
                                item.info.id = '实习';break;
                            default:
                                break;
                        }
                    });
                    break;
                case 1:
                    //年龄升
                    this.allStaff.sort(function (item1, item2) {
                        if (item1.info.age < item2.info.age) return -1;else if (item1.info.age > item2.info.age) return 1;else return 0;
                    });
                    break;
                case 2:
                    //年龄降
                    this.allStaff.sort(function (item1, item2) {
                        if (item1.info.age < item2.info.age) return 1;else if (item1.info.age > item2.info.age) return -1;else return 0;
                    });
                    break;
                default:
                    break;
            }
        }

        //搜索员工

    }, {
        key: '_searchStaff',
        value: function _searchStaff(word) {
            this.word = word;
            //在staff中搜索
            //对数组中的每个元素都执行一次指定的函数（callback），并且创建一个新的数组
            this.staff = this.staff.filter(function (item) {
                return item.info.name.indexOf(word) != -1 || (item.info.age + '').indexOf(word) != -1 || item.info.id.indexOf(word) != -1 || item.info.sex.indexOf(word) != -1;
            });
        }
    }, {
        key: 'filtStaff',
        value: function filtStaff(filtType) {
            this._filtStaff(filtType);
            this._searchStaff(this.word);
            return this;
        }
    }, {
        key: 'sortStaff',
        value: function sortStaff(sortType) {
            this._sortStaff(sortType);
            this._filtStaff(this.filtType);
            this._searchStaff(this.word);
            return this;
        }
    }, {
        key: 'searchStaff',
        value: function searchStaff(word) {
            this._filtStaff(this.filtType);
            this._searchStaff(word);
            return this;
        }
    }]);

    return STAFF;
}();

exports.default = STAFF;

STAFF.rawData = [{ descrip: '我是一匹来自远方的狼。', sex: '男', age: 20, name: '张三', id: '主任' }, { descrip: '我是一匹来自远方的狼。', sex: '女', age: 21, name: '赵静', id: '学生' }, { descrip: '我是一匹来自远方的狼。', sex: '女', age: 22, name: '王二麻', id: '学生' }, { descrip: '我是一匹来自远方的狼。', sex: '女', age: 24, name: '李晓婷', id: '实习' }, { descrip: '我是一匹来自远方的狼。', sex: '男', age: 23, name: '张春田', id: '实习' }, { descrip: '我是一匹来自远方的狼。', sex: '男', age: 22, name: '刘建国', id: '学生' }, { descrip: '我是一匹来自远方的狼。', sex: '男', age: 24, name: '张八', id: '主任' }, { descrip: '我是一匹来自远方的狗。', sex: '男', age: 35, name: '李四', id: '老师' }, { descrip: '我是一匹来自远方的猪。', sex: '男', age: 42, name: '王五', id: '学生' }, { descrip: '我是一匹来自远方的牛。', sex: '男', age: 50, name: '赵六', id: '实习' }, { descrip: '我是一匹来自远方的马。', sex: '男', age: 60, name: '孙七', id: '实习' }];
//# sourceMappingURL=STAFF.js.map