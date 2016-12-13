'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StaffHeader = require('./StaffHeader');

var _StaffHeader2 = _interopRequireDefault(_StaffHeader);

var _StaffItemPanel = require('./StaffItemPanel');

var _StaffItemPanel2 = _interopRequireDefault(_StaffItemPanel);

var _StaffFooter = require('./StaffFooter');

var _StaffFooter2 = _interopRequireDefault(_StaffFooter);

var _StaffDetail = require('./StaffDetail');

var _StaffDetail2 = _interopRequireDefault(_StaffDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//原始数据
var rawData = [{ info: { descrip: '我是一匹来自远方的狼。', sex: '男', age: 20, name: '张三', id: '主任' } }, { info: { descrip: '我是一匹来自远方的狼。', sex: '女', age: 21, name: '赵静', id: '学生' } }, { info: { descrip: '我是一匹来自远方的狼。', sex: '女', age: 22, name: '王二麻', id: '学生' } }, { info: { descrip: '我是一匹来自远方的狼。', sex: '女', age: 24, name: '李晓婷', id: '实习' } }, { info: { descrip: '我是一匹来自远方的狼。', sex: '男', age: 23, name: '张春田', id: '实习' } }, { info: { descrip: '我是一匹来自远方的狼。', sex: '男', age: 22, name: '刘建国', id: '学生' } }, { info: { descrip: '我是一匹来自远方的狼。', sex: '男', age: 24, name: '张八', id: '主任' } }, { info: { descrip: '我是一匹来自远方的狗。', sex: '男', age: 35, name: '李四', id: '老师' } }, { info: { descrip: '我是一匹来自远方的猪。', sex: '男', age: 42, name: '王五', id: '学生' } }, { info: { descrip: '我是一匹来自远方的牛。', sex: '男', age: 50, name: '赵六', id: '实习' } }, { info: { descrip: '我是一匹来自远方的马。', sex: '男', age: 60, name: '孙七', id: '实习' } }];

var App = function (_React$Component) {
                _inherits(App, _React$Component);

                function App() {
                                _classCallCheck(this, App);

                                return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
                }

                return App;
}(_react2.default.Component);
//# sourceMappingURL=ManageSystem.js.map