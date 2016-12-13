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
        this.staff = this.allStaff;
    }
    //增加员工


    _createClass(STAFF, [{
        key: 'addStaffItem',
        value: function addStaffItem(item) {
            var newItem = new staffItem(item);
            this.allStaff.push(newItem);
            this.staff = this.allStaff;

            return this;
        }

        //搜索员工

    }, {
        key: 'searchStaff',
        value: function searchStaff(word) {
            this.word = word;
            this.staff = this.allStaff;
            //在staff中搜索
            //对数组中的每个元素都执行一次指定的函数（callback），并且创建一个新的数组
            this.staff = this.staff.filter(function (item) {
                return item.info.name.indexOf(word) != -1 || (item.info.age + '').indexOf(word) != -1 || item.info.id.indexOf(word) != -1 || item.info.sex.indexOf(word) != -1;
            });
            return this;
        }
    }]);

    return STAFF;
}();

exports.default = STAFF;

STAFF.rawData = [{ descrip: '我是一匹来自远方的狼。', sex: '男', age: 20, name: '张三', id: '主任' }, { descrip: '我是一匹来自远方的狼。', sex: '女', age: 21, name: '赵静', id: '学生' }, { descrip: '我是一匹来自远方的狼。', sex: '女', age: 22, name: '王二麻', id: '学生' }, { descrip: '我是一匹来自远方的狼。', sex: '女', age: 24, name: '李晓婷', id: '实习' }, { descrip: '我是一匹来自远方的狼。', sex: '男', age: 23, name: '张春田', id: '实习' }, { descrip: '我是一匹来自远方的狼。', sex: '男', age: 22, name: '刘建国', id: '学生' }, { descrip: '我是一匹来自远方的狼。', sex: '男', age: 24, name: '张八', id: '主任' }, { descrip: '我是一匹来自远方的狗。', sex: '男', age: 35, name: '李四', id: '老师' }, { descrip: '我是一匹来自远方的猪。', sex: '男', age: 42, name: '王五', id: '学生' }, { descrip: '我是一匹来自远方的牛。', sex: '男', age: 50, name: '赵六', id: '实习' }, { descrip: '我是一匹来自远方的马。', sex: '男', age: 60, name: '孙七', id: '实习' }];
//# sourceMappingURL=STAFF.js.map