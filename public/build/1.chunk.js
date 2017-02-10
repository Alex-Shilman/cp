webpackJsonp([1,2],{

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var Container = function Container(_ref) {
	    var title = _ref.title,
	        classname = _ref.classname,
	        children = _ref.children;
	
	    return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)('container', _defineProperty({}, classname, !!classname)) },
	        _react2.default.createElement(
	            'h2',
	            null,
	            title
	        ),
	        children
	    );
	};
	
	exports.default = Container;

/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _react2 = __webpack_require__(1);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _reactTransformHmr3 = __webpack_require__(23);
	
	var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Container = __webpack_require__(97);
	
	var _Container2 = _interopRequireDefault(_Container);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	    NotFound: {
	        displayName: 'NotFound'
	    }
	};
	
	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	    filename: '/Users/alexshilman/Sites/CarPatron/shared/containers/NotFound/components/index.js',
	    components: _components,
	    locals: [module],
	    imports: [_react3.default]
	});
	
	function _wrapComponent(id) {
	    return function (Component) {
	        return _reactTransformHmr2(Component, id);
	    };
	}
	
	var NotFound = _wrapComponent('NotFound')(function (_Component) {
	    _inherits(NotFound, _Component);
	
	    function NotFound() {
	        _classCallCheck(this, NotFound);
	
	        return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
	    }
	
	    _createClass(NotFound, [{
	        key: 'render',
	        value: function render() {
	            return _react3.default.createElement(
	                _Container2.default,
	                {
	                    className: 'cp-NotFound',
	                    title: '404 - Page not found' },
	                _react3.default.createElement(
	                    'p',
	                    null,
	                    'The page you are looking for cannot be found!'
	                )
	            );
	        }
	    }]);
	
	    return NotFound;
	}(_react2.Component));
	
	module.exports = NotFound;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)(module)))

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaGFyZWQvY29tcG9uZW50cy9jb21tb24vQ29udGFpbmVyL2luZGV4LmpzP2U0OWMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL2NvbnRhaW5lcnMvTm90Rm91bmQvY29tcG9uZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJ0aXRsZSIsImNsYXNzbmFtZSIsImNoaWxkcmVuIiwibW9kdWxlIiwiZXhwb3J0cyIsIk5vdEZvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O0FBR0EsS0FBTUEsWUFBWSxTQUFaQSxTQUFZLE9BSVo7QUFBQSxTQUhGQyxLQUdFLFFBSEZBLEtBR0U7QUFBQSxTQUZGQyxTQUVFLFFBRkZBLFNBRUU7QUFBQSxTQURGQyxRQUNFLFFBREZBLFFBQ0U7O0FBQ0YsWUFDSTtBQUFBO0FBQUEsV0FBSyxXQUFXLDBCQUFHLFdBQUgsc0JBQWtCRCxTQUFsQixFQUE4QixDQUFDLENBQUNBLFNBQWhDLEVBQWhCO0FBQ0k7QUFBQTtBQUFBO0FBQU1EO0FBQU4sVUFESjtBQUVNRTtBQUZOLE1BREo7QUFNSCxFQVhEOzttQkFhZUgsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdZO0FBQ0osb0JBQ0U7QUFBQTtBQUFBO0FBQ0ksZ0NBQVUsYUFEZDtBQUVJLDRCQUFNLHNCQUZWO0FBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKLGNBREY7QUFPSDs7Ozs7O0FBR0xJLFFBQU9DLE9BQVAsR0FBaUJDLFFBQWpCLEMiLCJmaWxlIjoiMS5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5cblxuY29uc3QgQ29udGFpbmVyID0gKHtcbiAgICB0aXRsZSxcbiAgICBjbGFzc25hbWUsXG4gICAgY2hpbGRyZW5cbn0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2NvbnRhaW5lcicsIHtbY2xhc3NuYW1lXTogISFjbGFzc25hbWV9KX0+XG4gICAgICAgICAgICA8aDI+eyB0aXRsZSB9PC9oMj5cbiAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaGFyZWQvY29tcG9uZW50cy9jb21tb24vQ29udGFpbmVyL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21tb24vQ29udGFpbmVyJztcblxuY2xhc3MgTm90Rm91bmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjcC1Ob3RGb3VuZFwiXG4gICAgICAgICAgICAgIHRpdGxlPVwiNDA0IC0gUGFnZSBub3QgZm91bmRcIj5cbiAgICAgICAgICAgICAgPHA+VGhlIHBhZ2UgeW91IGFyZSBsb29raW5nIGZvciBjYW5ub3QgYmUgZm91bmQhPC9wPlxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb3RGb3VuZDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaGFyZWQvY29udGFpbmVycy9Ob3RGb3VuZC9jb21wb25lbnRzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==