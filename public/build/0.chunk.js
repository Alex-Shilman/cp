webpackJsonp([0,2],{

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

/***/ 100:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(168)();
	// imports
	
	
	// module
	exports.push([module.id, ".text-ellipsis {\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cp-CarCard {\n  width: 100%;\n  text-decoration: none;\n  color: rgba(0, 0, 0, 0.87);\n}\n", ""]);
	
	// exports


/***/ },

/***/ 101:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(168)();
	// imports
	
	
	// module
	exports.push([module.id, ".text-ellipsis {\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cp-Cars {\n  margin: 0 auto;\n  position: relative;\n  width: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-color: #eaeaea;\n}\n.cp-Cars__content {\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  min-width: 300px;\n  max-width: 800px;\n}\n.cp-Cars__grid {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.cp-Cars__car-card {\n  margin: 10px;\n  width: 300px;\n  height: 394px;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react2 = __webpack_require__(1);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _reactTransformHmr3 = __webpack_require__(23);
	
	var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Card = __webpack_require__(630);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	__webpack_require__(344);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	    CarCard: {
	        displayName: 'CarCard'
	    }
	};
	
	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	    filename: '/Users/alexshilman/Sites/CarPatron/shared/containers/Cars/components/CarCard/index.js',
	    components: _components,
	    locals: [module],
	    imports: [_react3.default]
	});
	
	function _wrapComponent(id) {
	    return function (Component) {
	        return _reactTransformHmr2(Component, id);
	    };
	}
	
	var CarCard = _wrapComponent('CarCard')(function (_Component) {
	    _inherits(CarCard, _Component);
	
	    function CarCard() {
	        _classCallCheck(this, CarCard);
	
	        return _possibleConstructorReturn(this, (CarCard.__proto__ || Object.getPrototypeOf(CarCard)).apply(this, arguments));
	    }
	
	    _createClass(CarCard, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                make = _props.make,
	                model = _props.model,
	                year = _props.year,
	                image = _props.image,
	                className = _props.className;
	
	
	            return _react3.default.createElement(
	                _Card.Card,
	                {
	                    shadow: 1,
	                    className: (0, _classnames2.default)('cp-CarCard', className) },
	                _react3.default.createElement(
	                    _Card.CardTitle,
	                    null,
	                    '`$',
	                    year,
	                    ' $',
	                    make,
	                    ' $',
	                    model,
	                    '`'
	                ),
	                _react3.default.createElement(
	                    'div',
	                    null,
	                    _react3.default.createElement('img', {
	                        className: '',
	                        src: image
	                    })
	                ),
	                _react3.default.createElement(
	                    _Card.CardActions,
	                    {
	                        border: true },
	                    'Some actions'
	                )
	            );
	        }
	    }]);
	
	    return CarCard;
	}(_react2.Component));
	
	exports.default = CarCard;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)(module)))

/***/ },

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react2 = __webpack_require__(1);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _reactTransformHmr3 = __webpack_require__(23);
	
	var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _reactRedux = __webpack_require__(145);
	
	var _Spinner = __webpack_require__(631);
	
	var _Spinner2 = _interopRequireDefault(_Spinner);
	
	var _connectDataFetchers = __webpack_require__(310);
	
	var _connectDataFetchers2 = _interopRequireDefault(_connectDataFetchers);
	
	var _carList = __webpack_require__(160);
	
	var _Container = __webpack_require__(97);
	
	var _Container2 = _interopRequireDefault(_Container);
	
	var _CarCard = __webpack_require__(305);
	
	var _CarCard2 = _interopRequireDefault(_CarCard);
	
	var _reactList = __webpack_require__(625);
	
	var _reactList2 = _interopRequireDefault(_reactList);
	
	__webpack_require__(345);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	    Cars: {
	        displayName: 'Cars'
	    }
	};
	
	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	    filename: '/Users/alexshilman/Sites/CarPatron/shared/containers/Cars/components/index.js',
	    components: _components,
	    locals: [module],
	    imports: [_react3.default]
	});
	
	function _wrapComponent(id) {
	    return function (Component) {
	        return _reactTransformHmr2(Component, id);
	    };
	}
	
	var Cars = _wrapComponent('Cars')(function (_Component) {
	    _inherits(Cars, _Component);
	
	    function Cars() {
	        var _ref;
	
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, Cars);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Cars.__proto__ || Object.getPrototypeOf(Cars)).call.apply(_ref, [this].concat(args))), _this), _this._renderCarsGrid = function (items, ref) {
	            return _react3.default.createElement(
	                'div',
	                { className: 'cp-Cars__grid-container', ref: ref },
	                _react3.default.createElement(
	                    'div',
	                    { className: 'cp-Cars__grid' },
	                    items
	                )
	            );
	        }, _this._renderCar = function (index, key) {
	            debugger;
	            var cars = _this.props.data.cars;
	
	            var car = cars[index];
	            return _react3.default.createElement(_CarCard2.default, {
	                className: 'cp-Cars__car-card',
	                make: car.make,
	                model: car.model,
	                year: car.year,
	                image: car.image,
	                key: key
	            });
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    _createClass(Cars, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                data = _props.data,
	                isLoading = _props.isLoading,
	                error = _props.error;
	
	            return _react3.default.createElement(
	                _Container2.default,
	                {
	                    className: 'cp-Cars',
	                    title: 'Car List' },
	                isLoading ? _react3.default.createElement(_Spinner2.default, null) : data && data.cars.length ? _react3.default.createElement(_reactList2.default, {
	                    itemRenderer: this._renderCar,
	                    itemsRenderer: this._renderCarsGrid,
	                    length: data.cars.length,
	                    pageSize: 24,
	                    type: 'simple'
	                }) : 'There is no data'
	            );
	        }
	    }]);
	
	    return Cars;
	}(_react2.Component));
	
	var mapStateToProps = function mapStateToProps(_ref2) {
	    var cars = _ref2.cars;
	    return {
	        data: cars.data,
	        isLoading: cars.isLoading,
	        error: cars.error
	    };
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps)((0, _connectDataFetchers2.default)(Cars, [_carList.loadCarList]));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)(module)))

/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react2 = __webpack_require__(1);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _reactTransformHmr3 = __webpack_require__(23);
	
	var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.default = connectDataFetchers;
	
	var _bluebird = __webpack_require__(47);
	
	var _bluebird2 = _interopRequireDefault(_bluebird);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	    DataFetchersWrapper: {
	        displayName: 'DataFetchersWrapper',
	        isInFunction: true
	    }
	};
	
	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	    filename: '/Users/alexshilman/Sites/CarPatron/shared/lib/connectDataFetchers.js',
	    components: _components,
	    locals: [module],
	    imports: [_react3.default]
	});
	
	function _wrapComponent(id) {
	    return function (Component) {
	        return _reactTransformHmr2(Component, id);
	    };
	}
	
	function connectDataFetchers(Component, actionCreators) {
	    var _class, _temp;
	
	    return _wrapComponent('DataFetchersWrapper')((_temp = _class = function (_Component) {
	        _inherits(DataFetchersWrapper, _Component);
	
	        function DataFetchersWrapper() {
	            _classCallCheck(this, DataFetchersWrapper);
	
	            return _possibleConstructorReturn(this, (DataFetchersWrapper.__proto__ || Object.getPrototypeOf(DataFetchersWrapper)).apply(this, arguments));
	        }
	
	        _createClass(DataFetchersWrapper, [{
	            key: 'componentDidMount',
	            value: function componentDidMount() {
	                var _props = this.props,
	                    dispatch = _props.dispatch,
	                    params = _props.params,
	                    query = _props.location.query;
	
	                DataFetchersWrapper.fetchData(dispatch, params, query);
	            }
	        }, {
	            key: 'render',
	            value: function render() {
	                return _react3.default.createElement(Component, this.props);
	            }
	        }], [{
	            key: 'fetchData',
	            value: function fetchData(dispatch) {
	                var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	                var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	                return _bluebird2.default.all(actionCreators.map(function (actionCreator) {
	                    return dispatch(actionCreator({ params: params, query: query }));
	                }));
	            }
	        }]);
	
	        return DataFetchersWrapper;
	    }(Component), _class.propTypes = {
	        dispatch: _react2.PropTypes.func.isRequired,
	        params: _react2.PropTypes.object.isRequired,
	        location: _react2.PropTypes.shape({
	            pathname: _react2.PropTypes.string.required,
	            search: _react2.PropTypes.string,
	            query: _react2.PropTypes.string.object
	        }).isRequired
	    }, _temp));
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)(module)))

/***/ },

/***/ 316:
/***/ function(module, exports) {

	module.exports = clamp
	
	function clamp(value, min, max) {
	  return min < max
	    ? (value < min ? min : value > max ? max : value)
	    : (value < max ? max : value > min ? min : value)
	}


/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(100);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(286)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(100, function() {
				var newContent = __webpack_require__(100);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(101);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(286)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(101, function() {
				var newContent = __webpack_require__(101);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 625:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(1), __webpack_require__(22)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(module, require('react'), require('react-dom'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod, global.React, global.ReactDOM);
	    global.ReactList = mod.exports;
	  }
	})(this, function (_module2, _react, _reactDom) {
	  'use strict';
	
	  var _module3 = _interopRequireDefault(_module2);
	
	  var _react2 = _interopRequireDefault(_react);
	
	  var _reactDom2 = _interopRequireDefault(_reactDom);
	
	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }
	
	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }
	
	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }
	
	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();
	
	  function _possibleConstructorReturn(self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }
	
	    return call && (typeof call === "object" || typeof call === "function") ? call : self;
	  }
	
	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }
	
	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  }
	
	  var _class, _temp;
	
	  var findDOMNode = _reactDom2.default.findDOMNode;
	
	
	  var CLIENT_SIZE_KEYS = { x: 'clientWidth', y: 'clientHeight' };
	  var CLIENT_START_KEYS = { x: 'clientTop', y: 'clientLeft' };
	  var INNER_SIZE_KEYS = { x: 'innerWidth', y: 'innerHeight' };
	  var OFFSET_SIZE_KEYS = { x: 'offsetWidth', y: 'offsetHeight' };
	  var OFFSET_START_KEYS = { x: 'offsetLeft', y: 'offsetTop' };
	  var OVERFLOW_KEYS = { x: 'overflowX', y: 'overflowY' };
	  var SCROLL_SIZE_KEYS = { x: 'scrollWidth', y: 'scrollHeight' };
	  var SCROLL_START_KEYS = { x: 'scrollLeft', y: 'scrollTop' };
	  var SIZE_KEYS = { x: 'width', y: 'height' };
	
	  var NOOP = function NOOP() {};
	
	  // If a browser doesn't support the `options` argument to
	  // add/removeEventListener, we need to check, otherwise we will
	  // accidentally set `capture` with a truthy value.
	  var PASSIVE = function () {
	    if (typeof window === 'undefined') return false;
	    var hasSupport = false;
	    try {
	      document.createElement('div').addEventListener('test', NOOP, {
	        get passive() {
	          hasSupport = true;
	          return false;
	        }
	      });
	    } catch (e) {}
	    return hasSupport;
	  }() ? { passive: true } : false;
	
	  var UNSTABLE_MESSAGE = 'ReactList failed to reach a stable state.';
	  var MAX_SYNC_UPDATES = 100;
	
	  var isEqualSubset = function isEqualSubset(a, b) {
	    for (var key in b) {
	      if (a[key] !== b[key]) return false;
	    }return true;
	  };
	
	  _module3.default.exports = (_temp = _class = function (_Component) {
	    _inherits(ReactList, _Component);
	
	    function ReactList(props) {
	      _classCallCheck(this, ReactList);
	
	      var _this = _possibleConstructorReturn(this, (ReactList.__proto__ || Object.getPrototypeOf(ReactList)).call(this, props));
	
	      var _this$props = _this.props,
	          initialIndex = _this$props.initialIndex,
	          pageSize = _this$props.pageSize;
	
	      var itemsPerRow = 1;
	
	      var _this$constrain = _this.constrain(initialIndex, pageSize, itemsPerRow, _this.props),
	          from = _this$constrain.from,
	          size = _this$constrain.size;
	
	      _this.state = { from: from, size: size, itemsPerRow: itemsPerRow };
	      _this.cache = {};
	      _this.prevPrevState = {};
	      _this.unstable = false;
	      _this.updateCounter = 0;
	      return _this;
	    }
	
	    _createClass(ReactList, [{
	      key: 'componentWillReceiveProps',
	      value: function componentWillReceiveProps(next) {
	        var _state = this.state,
	            from = _state.from,
	            size = _state.size,
	            itemsPerRow = _state.itemsPerRow;
	
	        this.maybeSetState(this.constrain(from, size, itemsPerRow, next), NOOP);
	      }
	    }, {
	      key: 'componentDidMount',
	      value: function componentDidMount() {
	        this.updateFrame = this.updateFrame.bind(this);
	        window.addEventListener('resize', this.updateFrame);
	        this.updateFrame(this.scrollTo.bind(this, this.props.initialIndex));
	      }
	    }, {
	      key: 'componentDidUpdate',
	      value: function componentDidUpdate() {
	        var _this2 = this;
	
	        // If the list has reached an unstable state, prevent an infinite loop.
	        if (this.unstable) return;
	
	        if (++this.updateCounter > MAX_SYNC_UPDATES) {
	          this.unstable = true;
	          return console.error(UNSTABLE_MESSAGE);
	        }
	
	        if (!this.updateCounterTimeoutId) {
	          this.updateCounterTimeoutId = setTimeout(function () {
	            _this2.updateCounter = 0;
	            delete _this2.updateCounterTimeoutId;
	          }, 0);
	        }
	
	        this.updateFrame();
	      }
	    }, {
	      key: 'maybeSetState',
	      value: function maybeSetState(b, cb) {
	        if (isEqualSubset(this.state, b)) return cb();
	
	        this.setState(b, cb);
	      }
	    }, {
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        window.removeEventListener('resize', this.updateFrame);
	        this.scrollParent.removeEventListener('scroll', this.updateFrame, PASSIVE);
	        this.scrollParent.removeEventListener('mousewheel', NOOP, PASSIVE);
	      }
	    }, {
	      key: 'getOffset',
	      value: function getOffset(el) {
	        var axis = this.props.axis;
	
	        var offset = el[CLIENT_START_KEYS[axis]] || 0;
	        var offsetKey = OFFSET_START_KEYS[axis];
	        do {
	          offset += el[offsetKey] || 0;
	        } while (el = el.offsetParent);
	        return offset;
	      }
	    }, {
	      key: 'getScrollParent',
	      value: function getScrollParent() {
	        var _props = this.props,
	            axis = _props.axis,
	            scrollParentGetter = _props.scrollParentGetter;
	
	        if (scrollParentGetter) return scrollParentGetter();
	        var el = findDOMNode(this);
	        var overflowKey = OVERFLOW_KEYS[axis];
	        while (el = el.parentElement) {
	          switch (window.getComputedStyle(el)[overflowKey]) {
	            case 'auto':case 'scroll':case 'overlay':
	              return el;
	          }
	        }
	        return window;
	      }
	    }, {
	      key: 'getScroll',
	      value: function getScroll() {
	        var scrollParent = this.scrollParent;
	        var axis = this.props.axis;
	
	        var scrollKey = SCROLL_START_KEYS[axis];
	        var actual = scrollParent === window ?
	        // Firefox always returns document.body[scrollKey] as 0 and Chrome/Safari
	        // always return document.documentElement[scrollKey] as 0, so take
	        // whichever has a value.
	        document.body[scrollKey] || document.documentElement[scrollKey] : scrollParent[scrollKey];
	        var max = this.getScrollSize() - this.getViewportSize();
	        var scroll = Math.max(0, Math.min(actual, max));
	        var el = findDOMNode(this);
	        return this.getOffset(scrollParent) + scroll - this.getOffset(el);
	      }
	    }, {
	      key: 'setScroll',
	      value: function setScroll(offset) {
	        var scrollParent = this.scrollParent;
	        var axis = this.props.axis;
	
	        offset += this.getOffset(findDOMNode(this));
	        if (scrollParent === window) return window.scrollTo(0, offset);
	
	        offset -= this.getOffset(this.scrollParent);
	        scrollParent[SCROLL_START_KEYS[axis]] = offset;
	      }
	    }, {
	      key: 'getViewportSize',
	      value: function getViewportSize() {
	        var scrollParent = this.scrollParent;
	        var axis = this.props.axis;
	
	        return scrollParent === window ? window[INNER_SIZE_KEYS[axis]] : scrollParent[CLIENT_SIZE_KEYS[axis]];
	      }
	    }, {
	      key: 'getScrollSize',
	      value: function getScrollSize() {
	        var scrollParent = this.scrollParent;
	        var _document = document,
	            body = _document.body,
	            documentElement = _document.documentElement;
	
	        var key = SCROLL_SIZE_KEYS[this.props.axis];
	        return scrollParent === window ? Math.max(body[key], documentElement[key]) : scrollParent[key];
	      }
	    }, {
	      key: 'hasDeterminateSize',
	      value: function hasDeterminateSize() {
	        var _props2 = this.props,
	            itemSizeGetter = _props2.itemSizeGetter,
	            type = _props2.type;
	
	        return type === 'uniform' || itemSizeGetter;
	      }
	    }, {
	      key: 'getStartAndEnd',
	      value: function getStartAndEnd() {
	        var threshold = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.threshold;
	
	        var scroll = this.getScroll();
	        var start = Math.max(0, scroll - threshold);
	        var end = scroll + this.getViewportSize() + threshold;
	        if (this.hasDeterminateSize()) {
	          end = Math.min(end, this.getSpaceBefore(this.props.length));
	        }
	        return { start: start, end: end };
	      }
	    }, {
	      key: 'getItemSizeAndItemsPerRow',
	      value: function getItemSizeAndItemsPerRow() {
	        var _props3 = this.props,
	            axis = _props3.axis,
	            useStaticSize = _props3.useStaticSize;
	        var _state2 = this.state,
	            itemSize = _state2.itemSize,
	            itemsPerRow = _state2.itemsPerRow;
	
	        if (useStaticSize && itemSize && itemsPerRow) {
	          return { itemSize: itemSize, itemsPerRow: itemsPerRow };
	        }
	
	        var itemEls = findDOMNode(this.items).children;
	        if (!itemEls.length) return {};
	
	        var firstEl = itemEls[0];
	
	        // Firefox has a problem where it will return a *slightly* (less than
	        // thousandths of a pixel) different size for the same element between
	        // renders. This can cause an infinite render loop, so only change the
	        // itemSize when it is significantly different.
	        var firstElSize = firstEl[OFFSET_SIZE_KEYS[axis]];
	        var delta = Math.abs(firstElSize - itemSize);
	        if (isNaN(delta) || delta >= 1) itemSize = firstElSize;
	
	        if (!itemSize) return {};
	
	        var startKey = OFFSET_START_KEYS[axis];
	        var firstStart = firstEl[startKey];
	        itemsPerRow = 1;
	        for (var item = itemEls[itemsPerRow]; item && item[startKey] === firstStart; item = itemEls[itemsPerRow]) {
	          ++itemsPerRow;
	        }return { itemSize: itemSize, itemsPerRow: itemsPerRow };
	      }
	    }, {
	      key: 'updateFrame',
	      value: function updateFrame(cb) {
	        this.updateScrollParent();
	        if (typeof cb != 'function') cb = NOOP;
	        switch (this.props.type) {
	          case 'simple':
	            return this.updateSimpleFrame(cb);
	          case 'variable':
	            return this.updateVariableFrame(cb);
	          case 'uniform':
	            return this.updateUniformFrame(cb);
	        }
	      }
	    }, {
	      key: 'updateScrollParent',
	      value: function updateScrollParent() {
	        var prev = this.scrollParent;
	        this.scrollParent = this.getScrollParent();
	        if (prev === this.scrollParent) return;
	        if (prev) {
	          prev.removeEventListener('scroll', this.updateFrame);
	          prev.removeEventListener('mousewheel', NOOP);
	        }
	        this.scrollParent.addEventListener('scroll', this.updateFrame, PASSIVE);
	        this.scrollParent.addEventListener('mousewheel', NOOP, PASSIVE);
	      }
	    }, {
	      key: 'updateSimpleFrame',
	      value: function updateSimpleFrame(cb) {
	        var _getStartAndEnd = this.getStartAndEnd(),
	            end = _getStartAndEnd.end;
	
	        var itemEls = findDOMNode(this.items).children;
	        var elEnd = 0;
	
	        if (itemEls.length) {
	          var axis = this.props.axis;
	
	          var firstItemEl = itemEls[0];
	          var lastItemEl = itemEls[itemEls.length - 1];
	          elEnd = this.getOffset(lastItemEl) + lastItemEl[OFFSET_SIZE_KEYS[axis]] - this.getOffset(firstItemEl);
	        }
	
	        if (elEnd > end) return cb();
	
	        var _props4 = this.props,
	            pageSize = _props4.pageSize,
	            length = _props4.length;
	
	        var size = Math.min(this.state.size + pageSize, length);
	        this.maybeSetState({ size: size }, cb);
	      }
	    }, {
	      key: 'updateVariableFrame',
	      value: function updateVariableFrame(cb) {
	        if (!this.props.itemSizeGetter) this.cacheSizes();
	
	        var _getStartAndEnd2 = this.getStartAndEnd(),
	            start = _getStartAndEnd2.start,
	            end = _getStartAndEnd2.end;
	
	        var _props5 = this.props,
	            length = _props5.length,
	            pageSize = _props5.pageSize;
	
	        var space = 0;
	        var from = 0;
	        var size = 0;
	        var maxFrom = length - 1;
	
	        while (from < maxFrom) {
	          var itemSize = this.getSizeOf(from);
	          if (itemSize == null || space + itemSize > start) break;
	          space += itemSize;
	          ++from;
	        }
	
	        var maxSize = length - from;
	
	        while (size < maxSize && space < end) {
	          var _itemSize = this.getSizeOf(from + size);
	          if (_itemSize == null) {
	            size = Math.min(size + pageSize, maxSize);
	            break;
	          }
	          space += _itemSize;
	          ++size;
	        }
	
	        this.maybeSetState({ from: from, size: size }, cb);
	      }
	    }, {
	      key: 'updateUniformFrame',
	      value: function updateUniformFrame(cb) {
	        var _getItemSizeAndItemsP = this.getItemSizeAndItemsPerRow(),
	            itemSize = _getItemSizeAndItemsP.itemSize,
	            itemsPerRow = _getItemSizeAndItemsP.itemsPerRow;
	
	        if (!itemSize || !itemsPerRow) return cb();
	
	        var _getStartAndEnd3 = this.getStartAndEnd(),
	            start = _getStartAndEnd3.start,
	            end = _getStartAndEnd3.end;
	
	        var _constrain = this.constrain(Math.floor(start / itemSize) * itemsPerRow, (Math.ceil((end - start) / itemSize) + 1) * itemsPerRow, itemsPerRow, this.props),
	            from = _constrain.from,
	            size = _constrain.size;
	
	        return this.maybeSetState({ itemsPerRow: itemsPerRow, from: from, itemSize: itemSize, size: size }, cb);
	      }
	    }, {
	      key: 'getSpaceBefore',
	      value: function getSpaceBefore(index) {
	        var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	        if (cache[index] != null) return cache[index];
	
	        // Try the static itemSize.
	        var _state3 = this.state,
	            itemSize = _state3.itemSize,
	            itemsPerRow = _state3.itemsPerRow;
	
	        if (itemSize) {
	          return cache[index] = Math.floor(index / itemsPerRow) * itemSize;
	        }
	
	        // Find the closest space to index there is a cached value for.
	        var from = index;
	        while (from > 0 && cache[--from] == null) {}
	
	        // Finally, accumulate sizes of items from - index.
	        var space = cache[from] || 0;
	        for (var i = from; i < index; ++i) {
	          cache[i] = space;
	          var _itemSize2 = this.getSizeOf(i);
	          if (_itemSize2 == null) break;
	          space += _itemSize2;
	        }
	
	        return cache[index] = space;
	      }
	    }, {
	      key: 'cacheSizes',
	      value: function cacheSizes() {
	        var cache = this.cache;
	        var from = this.state.from;
	
	        var itemEls = findDOMNode(this.items).children;
	        var sizeKey = OFFSET_SIZE_KEYS[this.props.axis];
	        for (var i = 0, l = itemEls.length; i < l; ++i) {
	          cache[from + i] = itemEls[i][sizeKey];
	        }
	      }
	    }, {
	      key: 'getSizeOf',
	      value: function getSizeOf(index) {
	        var cache = this.cache,
	            items = this.items;
	        var _props6 = this.props,
	            axis = _props6.axis,
	            itemSizeGetter = _props6.itemSizeGetter,
	            itemSizeEstimator = _props6.itemSizeEstimator,
	            type = _props6.type;
	        var _state4 = this.state,
	            from = _state4.from,
	            itemSize = _state4.itemSize,
	            size = _state4.size;
	
	
	        // Try the static itemSize.
	        if (itemSize) return itemSize;
	
	        // Try the itemSizeGetter.
	        if (itemSizeGetter) return itemSizeGetter(index);
	
	        // Try the cache.
	        if (index in cache) return cache[index];
	
	        // Try the DOM.
	        if (type === 'simple' && index >= from && index < from + size && items) {
	          var itemEl = findDOMNode(items).children[index - from];
	          if (itemEl) return itemEl[OFFSET_SIZE_KEYS[axis]];
	        }
	
	        // Try the itemSizeEstimator.
	        if (itemSizeEstimator) return itemSizeEstimator(index, cache);
	      }
	    }, {
	      key: 'constrain',
	      value: function constrain(from, size, itemsPerRow, _ref) {
	        var length = _ref.length,
	            pageSize = _ref.pageSize,
	            type = _ref.type;
	
	        size = Math.max(size, pageSize);
	        var mod = size % itemsPerRow;
	        if (mod) size += itemsPerRow - mod;
	        if (size > length) size = length;
	        from = type === 'simple' || !from ? 0 : Math.max(Math.min(from, length - size), 0);
	
	        if (mod = from % itemsPerRow) {
	          from -= mod;
	          size += mod;
	        }
	
	        return { from: from, size: size };
	      }
	    }, {
	      key: 'scrollTo',
	      value: function scrollTo(index) {
	        if (index != null) this.setScroll(this.getSpaceBefore(index));
	      }
	    }, {
	      key: 'scrollAround',
	      value: function scrollAround(index) {
	        var current = this.getScroll();
	        var bottom = this.getSpaceBefore(index);
	        var top = bottom - this.getViewportSize() + this.getSizeOf(index);
	        var min = Math.min(top, bottom);
	        var max = Math.max(top, bottom);
	        if (current <= min) return this.setScroll(min);
	        if (current > max) return this.setScroll(max);
	      }
	    }, {
	      key: 'getVisibleRange',
	      value: function getVisibleRange() {
	        var _state5 = this.state,
	            from = _state5.from,
	            size = _state5.size;
	
	        var _getStartAndEnd4 = this.getStartAndEnd(0),
	            start = _getStartAndEnd4.start,
	            end = _getStartAndEnd4.end;
	
	        var cache = {};
	        var first = void 0,
	            last = void 0;
	        for (var i = from; i < from + size; ++i) {
	          var itemStart = this.getSpaceBefore(i, cache);
	          var itemEnd = itemStart + this.getSizeOf(i);
	          if (first == null && itemEnd > start) first = i;
	          if (first != null && itemStart < end) last = i;
	        }
	        return [first, last];
	      }
	    }, {
	      key: 'renderItems',
	      value: function renderItems() {
	        var _this3 = this;
	
	        var _props7 = this.props,
	            itemRenderer = _props7.itemRenderer,
	            itemsRenderer = _props7.itemsRenderer;
	        var _state6 = this.state,
	            from = _state6.from,
	            size = _state6.size;
	
	        var items = [];
	        for (var i = 0; i < size; ++i) {
	          items.push(itemRenderer(from + i, i));
	        }return itemsRenderer(items, function (c) {
	          return _this3.items = c;
	        });
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var _props8 = this.props,
	            axis = _props8.axis,
	            length = _props8.length,
	            type = _props8.type,
	            useTranslate3d = _props8.useTranslate3d;
	        var _state7 = this.state,
	            from = _state7.from,
	            itemsPerRow = _state7.itemsPerRow;
	
	
	        var items = this.renderItems();
	        if (type === 'simple') return items;
	
	        var style = { position: 'relative' };
	        var cache = {};
	        var bottom = Math.ceil(length / itemsPerRow) * itemsPerRow;
	        var size = this.getSpaceBefore(bottom, cache);
	        if (size) {
	          style[SIZE_KEYS[axis]] = size;
	          if (axis === 'x') style.overflowX = 'hidden';
	        }
	        var offset = this.getSpaceBefore(from, cache);
	        var x = axis === 'x' ? offset : 0;
	        var y = axis === 'y' ? offset : 0;
	        var transform = useTranslate3d ? 'translate3d(' + x + 'px, ' + y + 'px, 0)' : 'translate(' + x + 'px, ' + y + 'px)';
	        var listStyle = {
	          msTransform: transform,
	          WebkitTransform: transform,
	          transform: transform
	        };
	        return _react2.default.createElement(
	          'div',
	          { style: style },
	          _react2.default.createElement(
	            'div',
	            { style: listStyle },
	            items
	          )
	        );
	      }
	    }]);
	
	    return ReactList;
	  }(_react.Component), _class.displayName = 'ReactList', _class.propTypes = {
	    axis: _react.PropTypes.oneOf(['x', 'y']),
	    initialIndex: _react.PropTypes.number,
	    itemRenderer: _react.PropTypes.func,
	    itemSizeEstimator: _react.PropTypes.func,
	    itemSizeGetter: _react.PropTypes.func,
	    itemsRenderer: _react.PropTypes.func,
	    length: _react.PropTypes.number,
	    pageSize: _react.PropTypes.number,
	    scrollParentGetter: _react.PropTypes.func,
	    threshold: _react.PropTypes.number,
	    type: _react.PropTypes.oneOf(['simple', 'variable', 'uniform']),
	    useStaticSize: _react.PropTypes.bool,
	    useTranslate3d: _react.PropTypes.bool
	  }, _class.defaultProps = {
	    axis: 'y',
	    itemRenderer: function itemRenderer(index, key) {
	      return _react2.default.createElement(
	        'div',
	        { key: key },
	        index
	      );
	    },
	    itemsRenderer: function itemsRenderer(items, ref) {
	      return _react2.default.createElement(
	        'div',
	        { ref: ref },
	        items
	      );
	    },
	    length: 0,
	    pageSize: 10,
	    threshold: 100,
	    type: 'simple',
	    useStaticSize: false,
	    useTranslate3d: false
	  }, _temp);
	});


/***/ },

/***/ 627:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _clamp = __webpack_require__(316);
	
	var _clamp2 = _interopRequireDefault(_clamp);
	
	var _shadows = __webpack_require__(636);
	
	var _shadows2 = _interopRequireDefault(_shadows);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var propTypes = {
	    className: _react.PropTypes.string,
	    shadow: _react.PropTypes.number
	};
	
	var Card = function Card(props) {
	    var className = props.className,
	        shadow = props.shadow,
	        children = props.children,
	        otherProps = _objectWithoutProperties(props, ['className', 'shadow', 'children']);
	
	    var hasShadow = typeof shadow !== 'undefined';
	    var shadowLevel = (0, _clamp2.default)(shadow || 0, 0, _shadows2.default.length - 1);
	
	    var classes = (0, _classnames2.default)('mdl-card', _defineProperty({}, _shadows2.default[shadowLevel], hasShadow), className);
	
	    return _react2.default.createElement(
	        'div',
	        _extends({ className: classes }, otherProps),
	        children
	    );
	};
	
	Card.propTypes = propTypes;
	
	exports.default = Card;

/***/ },

/***/ 628:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var propTypes = {
	    border: _react.PropTypes.bool,
	    className: _react.PropTypes.string
	};
	
	var CardActions = function CardActions(props) {
	    var className = props.className,
	        border = props.border,
	        children = props.children,
	        otherProps = _objectWithoutProperties(props, ['className', 'border', 'children']);
	
	    var classes = (0, _classnames2.default)('mdl-card__actions', {
	        'mdl-card--border': border
	    }, className);
	
	    return _react2.default.createElement(
	        'div',
	        _extends({ className: classes }, otherProps),
	        children
	    );
	};
	
	CardActions.propTypes = propTypes;
	
	exports.default = CardActions;

/***/ },

/***/ 629:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var propTypes = {
	    className: _react.PropTypes.string,
	    expand: _react.PropTypes.bool
	};
	
	var CardTitle = function CardTitle(props) {
	    var className = props.className,
	        children = props.children,
	        expand = props.expand,
	        otherProps = _objectWithoutProperties(props, ['className', 'children', 'expand']);
	
	    var classes = (0, _classnames2.default)('mdl-card__title', {
	        'mdl-card--expand': expand
	    }, className);
	
	    var title = typeof children === 'string' ? _react2.default.createElement(
	        'h2',
	        { className: 'mdl-card__title-text' },
	        children
	    ) : children;
	
	    return _react2.default.createElement(
	        'div',
	        _extends({ className: classes }, otherProps),
	        title
	    );
	};
	
	CardTitle.propTypes = propTypes;
	
	exports.default = CardTitle;

/***/ },

/***/ 630:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CardMedia = exports.CardActions = exports.CardTitle = exports.CardMenu = exports.CardText = exports.Card = undefined;
	
	var _Card = __webpack_require__(627);
	
	Object.defineProperty(exports, 'Card', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Card).default;
	  }
	});
	
	var _CardTitle = __webpack_require__(629);
	
	Object.defineProperty(exports, 'CardTitle', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CardTitle).default;
	  }
	});
	
	var _CardActions = __webpack_require__(628);
	
	Object.defineProperty(exports, 'CardActions', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CardActions).default;
	  }
	});
	
	var _basicClassCreator = __webpack_require__(635);
	
	var _basicClassCreator2 = _interopRequireDefault(_basicClassCreator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CardText = exports.CardText = (0, _basicClassCreator2.default)('CardText', 'mdl-card__supporting-text');
	var CardMenu = exports.CardMenu = (0, _basicClassCreator2.default)('CardMenu', 'mdl-card__menu');
	var CardMedia = exports.CardMedia = (0, _basicClassCreator2.default)('CardMedia', 'mdl-card__media');

/***/ },

/***/ 631:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _mdlUpgrade = __webpack_require__(143);
	
	var _mdlUpgrade2 = _interopRequireDefault(_mdlUpgrade);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	    className: _react.PropTypes.string,
	    singleColor: _react.PropTypes.bool
	};
	
	// eslint-disable-next-line react/prefer-stateless-function
	
	var Spinner = function (_React$Component) {
	    _inherits(Spinner, _React$Component);
	
	    function Spinner() {
	        _classCallCheck(this, Spinner);
	
	        return _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).apply(this, arguments));
	    }
	
	    _createClass(Spinner, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                className = _props.className,
	                singleColor = _props.singleColor,
	                otherProps = _objectWithoutProperties(_props, ['className', 'singleColor']);
	
	            var classes = (0, _classnames2.default)('mdl-spinner mdl-js-spinner is-active', {
	                'mdl-spinner--single-color': singleColor
	            }, className);
	
	            return _react2.default.createElement('div', _extends({ className: classes }, otherProps));
	        }
	    }]);
	
	    return Spinner;
	}(_react2.default.Component);
	
	Spinner.propTypes = propTypes;
	
	exports.default = (0, _mdlUpgrade2.default)(Spinner);

/***/ },

/***/ 635:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	exports.default = function (displayName, defaultClassName) {
	    var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'div';
	
	    var fn = function fn(props) {
	        var className = props.className,
	            children = props.children,
	            otherProps = _objectWithoutProperties(props, ['className', 'children']);
	
	        return _react2.default.createElement(element, _extends({
	            className: (0, _classnames2.default)(defaultClassName, className)
	        }, otherProps), children);
	    };
	
	    fn.displayName = displayName;
	    fn.propTypes = {
	        className: _react.PropTypes.string
	    };
	
	    return fn;
	};

/***/ },

/***/ 636:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var values = [2, 3, 4, 6, 8, 16, 24];
	exports.default = values.map(function (v) {
	  return "mdl-shadow--" + v + "dp";
	});

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaGFyZWQvY29tcG9uZW50cy9jb21tb24vQ29udGFpbmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NoYXJlZC9jb250YWluZXJzL0NhcnMvY29tcG9uZW50cy9DYXJDYXJkL0NhckNhcmQubGVzcyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvY29udGFpbmVycy9DYXJzL2NvbXBvbmVudHMvQ2Fycy5sZXNzIiwid2VicGFjazovLy8uL3NoYXJlZC9jb250YWluZXJzL0NhcnMvY29tcG9uZW50cy9DYXJDYXJkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NoYXJlZC9jb250YWluZXJzL0NhcnMvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvbGliL2Nvbm5lY3REYXRhRmV0Y2hlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jbGFtcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvY29udGFpbmVycy9DYXJzL2NvbXBvbmVudHMvQ2FyQ2FyZC9DYXJDYXJkLmxlc3M/OWM3NiIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvY29udGFpbmVycy9DYXJzL2NvbXBvbmVudHMvQ2Fycy5sZXNzPzhlZjkiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1saXN0L3JlYWN0LWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tZGwvbGliL0NhcmQvQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1kbC9saWIvQ2FyZC9DYXJkQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LW1kbC9saWIvQ2FyZC9DYXJkVGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tZGwvbGliL0NhcmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tZGwvbGliL1NwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1tZGwvbGliL3V0aWxzL2Jhc2ljQ2xhc3NDcmVhdG9yLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtbWRsL2xpYi91dGlscy9zaGFkb3dzLmpzIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInRpdGxlIiwiY2xhc3NuYW1lIiwiY2hpbGRyZW4iLCJwcm9wcyIsIm1ha2UiLCJtb2RlbCIsInllYXIiLCJpbWFnZSIsImNsYXNzTmFtZSIsIkNhckNhcmQiLCJfcmVuZGVyQ2Fyc0dyaWQiLCJpdGVtcyIsInJlZiIsIl9yZW5kZXJDYXIiLCJpbmRleCIsImtleSIsImNhcnMiLCJkYXRhIiwiY2FyIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJsZW5ndGgiLCJtYXBTdGF0ZVRvUHJvcHMiLCJDYXJzIiwiY29ubmVjdERhdGFGZXRjaGVycyIsIkNvbXBvbmVudCIsImFjdGlvbkNyZWF0b3JzIiwiZGlzcGF0Y2giLCJwYXJhbXMiLCJxdWVyeSIsImxvY2F0aW9uIiwiRGF0YUZldGNoZXJzV3JhcHBlciIsImZldGNoRGF0YSIsImFsbCIsIm1hcCIsImFjdGlvbkNyZWF0b3IiLCJwcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsInNoYXBlIiwicGF0aG5hbWUiLCJzdHJpbmciLCJyZXF1aXJlZCIsInNlYXJjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztBQUdBLEtBQU1BLFlBQVksU0FBWkEsU0FBWSxPQUlaO0FBQUEsU0FIRkMsS0FHRSxRQUhGQSxLQUdFO0FBQUEsU0FGRkMsU0FFRSxRQUZGQSxTQUVFO0FBQUEsU0FERkMsUUFDRSxRQURGQSxRQUNFOztBQUNGLFlBQ0k7QUFBQTtBQUFBLFdBQUssV0FBVywwQkFBRyxXQUFILHNCQUFrQkQsU0FBbEIsRUFBOEIsQ0FBQyxDQUFDQSxTQUFoQyxFQUFoQjtBQUNJO0FBQUE7QUFBQTtBQUFNRDtBQUFOLFVBREo7QUFFTUU7QUFGTixNQURKO0FBTUgsRUFYRDs7bUJBYWVILFM7Ozs7Ozs7QUNqQmY7QUFDQTs7O0FBR0E7QUFDQSwyQ0FBMEMsZ0JBQWdCLHdCQUF3QixxQkFBcUIsNEJBQTRCLEdBQUcs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QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFrQjtBQUNsQjs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2Qyx1Q0FBdUM7QUFDcEY7QUFDQSxVQUFTLFFBQVE7QUFDakI7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWE7O0FBRWIsbUVBQWtFLHFCQUFxQjtBQUN2RjtBQUNBLE1BQUs7O0FBRUw7QUFDQSxFQUFDOztBQUVEOztBQUVBLHNEOzs7Ozs7O0FDckVBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVELG9EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RiwrQ0FBOEMsaUJBQWlCLHFCQUFxQixvQ0FBb0MsNkRBQTZELG9CQUFvQixFQUFFLGVBQWU7O0FBRTFOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEc7Ozs7Ozs7QUN2Q0E7O0FBRUE7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxFQUFDLEUiLCJmaWxlIjoiMC5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5cblxuY29uc3QgQ29udGFpbmVyID0gKHtcbiAgICB0aXRsZSxcbiAgICBjbGFzc25hbWUsXG4gICAgY2hpbGRyZW5cbn0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ2NvbnRhaW5lcicsIHtbY2xhc3NuYW1lXTogISFjbGFzc25hbWV9KX0+XG4gICAgICAgICAgICA8aDI+eyB0aXRsZSB9PC9oMj5cbiAgICAgICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaGFyZWQvY29tcG9uZW50cy9jb21tb24vQ29udGFpbmVyL2luZGV4LmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGV4dC1lbGxpcHNpcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcbi5jcC1DYXJDYXJkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9hdXRvcHJlZml4ZXItbG9hZGVyIS4vfi9sZXNzLWxvYWRlciEuL3NoYXJlZC9jb250YWluZXJzL0NhcnMvY29tcG9uZW50cy9DYXJDYXJkL0NhckNhcmQubGVzc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRleHQtZWxsaXBzaXMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4uY3AtQ2FycyB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XFxufVxcbi5jcC1DYXJzX19jb250ZW50IHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbn1cXG4uY3AtQ2Fyc19fZ3JpZCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmNwLUNhcnNfX2Nhci1jYXJkIHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMzk0cHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9hdXRvcHJlZml4ZXItbG9hZGVyIS4vfi9sZXNzLWxvYWRlciEuL3NoYXJlZC9jb250YWluZXJzL0NhcnMvY29tcG9uZW50cy9DYXJzLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSAgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZFRpdGxlLCBDYXJkQWN0aW9ucyB9IGZyb20gJ3JlYWN0LW1kbC9saWIvQ2FyZCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgJy4vQ2FyQ2FyZC5sZXNzJztcblxuY2xhc3MgQ2FyQ2FyZCBleHRlbmRzIENvbXBvbmVudHtcbiAgICByZW5kZXIoKXtcbiAgICAgICAgY29uc3QgeyBtYWtlLCBtb2RlbCwgeWVhciwgaW1hZ2UsIGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICBzaGFkb3c9ezF9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCgnY3AtQ2FyQ2FyZCcsIGNsYXNzTmFtZSl9PlxuXG4gICAgICAgICAgICAgICAgPENhcmRUaXRsZT5gJHt5ZWFyfSAke21ha2V9ICR7bW9kZWx9YDwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI+XG4gICAgICAgICAgICAgICAgICAgIFNvbWUgYWN0aW9uc1xuICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICk7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhckNhcmQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2hhcmVkL2NvbnRhaW5lcnMvQ2Fycy9jb21wb25lbnRzL0NhckNhcmQvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSAgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9ICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBTcGlubmVyICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdyZWFjdC1tZGwvbGliL1NwaW5uZXInO1xuaW1wb3J0IGNvbm5lY3REYXRhRmV0Y2hlcnMgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL2xpYi9jb25uZWN0RGF0YUZldGNoZXJzJztcbmltcG9ydCB7IGxvYWRDYXJMaXN0IH0gICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2Nhckxpc3QnO1xuaW1wb3J0IENvbnRhaW5lciAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL0NvbnRhaW5lcic7XG5pbXBvcnQgQ2FyQ2FyZCAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9DYXJDYXJkJztcbmltcG9ydCBSZWFjdExpc3QgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdyZWFjdC1saXN0JztcblxuaW1wb3J0ICcuL0NhcnMubGVzcyc7XG5cbmNsYXNzIENhcnMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIF9yZW5kZXJDYXJzR3JpZCA9IChpdGVtcywgcmVmKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcC1DYXJzX19ncmlkLWNvbnRhaW5lclwiIHJlZj17cmVmfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcC1DYXJzX19ncmlkXCI+XG4gICAgICAgICAgICAgICAgICB7IGl0ZW1zIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgX3JlbmRlckNhciA9IChpbmRleCwga2V5KSA9PiB7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICBjb25zdCB7IGRhdGE6IHsgY2FycyB9IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBjYXIgPSBjYXJzW2luZGV4XTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDYXJDYXJkXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3AtQ2Fyc19fY2FyLWNhcmRcIlxuICAgICAgICAgICAgICAgIG1ha2U9e2Nhci5tYWtlfVxuICAgICAgICAgICAgICAgIG1vZGVsPXtjYXIubW9kZWx9XG4gICAgICAgICAgICAgICAgeWVhcj17Y2FyLnllYXJ9XG4gICAgICAgICAgICAgICAgaW1hZ2U9e2Nhci5pbWFnZX1cbiAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBlcnJvciB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICBjbGFzc05hbWU9XCJjcC1DYXJzXCJcbiAgICAgICAgICAgICB0aXRsZT1cIkNhciBMaXN0XCI+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIChpc0xvYWRpbmcpXG4gICAgICAgICAgICAgICAgICAgID8gPFNwaW5uZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgOiAoZGF0YSAmJiBkYXRhLmNhcnMubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyA8UmVhY3RMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVJlbmRlcmVyPXt0aGlzLl9yZW5kZXJDYXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNSZW5kZXJlcj17dGhpcy5fcmVuZGVyQ2Fyc0dyaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoPXtkYXRhLmNhcnMubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplPXsyNH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2ltcGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ1RoZXJlIGlzIG5vIGRhdGEnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7Y2Fyc30pID0+ICh7XG4gICAgZGF0YTogY2Fycy5kYXRhLFxuICAgIGlzTG9hZGluZzogY2Fycy5pc0xvYWRpbmcsXG4gICAgZXJyb3I6IGNhcnMuZXJyb3Jcbn0pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShcbiAgICBjb25uZWN0RGF0YUZldGNoZXJzKENhcnMsIFtsb2FkQ2FyTGlzdF0pKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaGFyZWQvY29udGFpbmVycy9DYXJzL2NvbXBvbmVudHMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSAgIGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9taXNlIGZyb20gJ2JsdWViaXJkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29ubmVjdERhdGFGZXRjaGVycyAoQ29tcG9uZW50LCBhY3Rpb25DcmVhdG9ycyl7XG4gICAgcmV0dXJuIGNsYXNzIERhdGFGZXRjaGVyc1dyYXBwZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgICAgICBkaXNwYXRjaCA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICBwYXJhbXMgICA6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIGxvY2F0aW9uIDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSA6IFByb3BUeXBlcy5zdHJpbmcucmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgc2VhcmNoICAgOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAgICAgICAgIHF1ZXJ5ICAgIDogUHJvcFR5cGVzLnN0cmluZy5vYmplY3RcbiAgICAgICAgICAgIH0pLmlzUmVxdWlyZWRcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyBmZXRjaERhdGEoZGlzcGF0Y2gsIHBhcmFtcyA9IHt9LCBxdWVyeSA9IHt9KXtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChcbiAgICAgICAgICAgICAgICBhY3Rpb25DcmVhdG9ycy5tYXAoYWN0aW9uQ3JlYXRvciA9PiBkaXNwYXRjaChhY3Rpb25DcmVhdG9yKHtwYXJhbXMsICBxdWVyeX0pKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICAgICAgY29uc3QgeyBkaXNwYXRjaCwgcGFyYW1zLCBsb2NhdGlvbjogeyBxdWVyeSB9fSA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICBEYXRhRmV0Y2hlcnNXcmFwcGVyLmZldGNoRGF0YShkaXNwYXRjaCwgIHBhcmFtcywgIHF1ZXJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbmRlcigpe1xuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaGFyZWQvbGliL2Nvbm5lY3REYXRhRmV0Y2hlcnMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGNsYW1wXG5cbmZ1bmN0aW9uIGNsYW1wKHZhbHVlLCBtaW4sIG1heCkge1xuICByZXR1cm4gbWluIDwgbWF4XG4gICAgPyAodmFsdWUgPCBtaW4gPyBtaW4gOiB2YWx1ZSA+IG1heCA/IG1heCA6IHZhbHVlKVxuICAgIDogKHZhbHVlIDwgbWF4ID8gbWF4IDogdmFsdWUgPiBtaW4gPyBtaW4gOiB2YWx1ZSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jbGFtcC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2F1dG9wcmVmaXhlci1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvaW5kZXguanMhLi9DYXJDYXJkLmxlc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2F1dG9wcmVmaXhlci1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvaW5kZXguanMhLi9DYXJDYXJkLmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYXV0b3ByZWZpeGVyLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9pbmRleC5qcyEuL0NhckNhcmQubGVzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zaGFyZWQvY29udGFpbmVycy9DYXJzL2NvbXBvbmVudHMvQ2FyQ2FyZC9DYXJDYXJkLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDM0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2luZGV4LmpzIS4vQ2Fycy5sZXNzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2luZGV4LmpzIS4vQ2Fycy5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2F1dG9wcmVmaXhlci1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvaW5kZXguanMhLi9DYXJzLmxlc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2hhcmVkL2NvbnRhaW5lcnMvQ2Fycy9jb21wb25lbnRzL0NhcnMubGVzc1xuLy8gbW9kdWxlIGlkID0gMzQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbJ21vZHVsZScsICdyZWFjdCcsICdyZWFjdC1kb20nXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KG1vZHVsZSwgcmVxdWlyZSgncmVhY3QnKSwgcmVxdWlyZSgncmVhY3QtZG9tJykpO1xuICB9IGVsc2Uge1xuICAgIHZhciBtb2QgPSB7XG4gICAgICBleHBvcnRzOiB7fVxuICAgIH07XG4gICAgZmFjdG9yeShtb2QsIGdsb2JhbC5SZWFjdCwgZ2xvYmFsLlJlYWN0RE9NKTtcbiAgICBnbG9iYWwuUmVhY3RMaXN0ID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChfbW9kdWxlMiwgX3JlYWN0LCBfcmVhY3REb20pIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBfbW9kdWxlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21vZHVsZTIpO1xuXG4gIHZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG4gIHZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG4gIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9XG5cbiAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICAgIH07XG4gIH0oKTtcblxuICBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gICAgaWYgKCFzZWxmKSB7XG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgICB9XG5cbiAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG4gIH1cblxuICB2YXIgX2NsYXNzLCBfdGVtcDtcblxuICB2YXIgZmluZERPTU5vZGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGU7XG5cblxuICB2YXIgQ0xJRU5UX1NJWkVfS0VZUyA9IHsgeDogJ2NsaWVudFdpZHRoJywgeTogJ2NsaWVudEhlaWdodCcgfTtcbiAgdmFyIENMSUVOVF9TVEFSVF9LRVlTID0geyB4OiAnY2xpZW50VG9wJywgeTogJ2NsaWVudExlZnQnIH07XG4gIHZhciBJTk5FUl9TSVpFX0tFWVMgPSB7IHg6ICdpbm5lcldpZHRoJywgeTogJ2lubmVySGVpZ2h0JyB9O1xuICB2YXIgT0ZGU0VUX1NJWkVfS0VZUyA9IHsgeDogJ29mZnNldFdpZHRoJywgeTogJ29mZnNldEhlaWdodCcgfTtcbiAgdmFyIE9GRlNFVF9TVEFSVF9LRVlTID0geyB4OiAnb2Zmc2V0TGVmdCcsIHk6ICdvZmZzZXRUb3AnIH07XG4gIHZhciBPVkVSRkxPV19LRVlTID0geyB4OiAnb3ZlcmZsb3dYJywgeTogJ292ZXJmbG93WScgfTtcbiAgdmFyIFNDUk9MTF9TSVpFX0tFWVMgPSB7IHg6ICdzY3JvbGxXaWR0aCcsIHk6ICdzY3JvbGxIZWlnaHQnIH07XG4gIHZhciBTQ1JPTExfU1RBUlRfS0VZUyA9IHsgeDogJ3Njcm9sbExlZnQnLCB5OiAnc2Nyb2xsVG9wJyB9O1xuICB2YXIgU0laRV9LRVlTID0geyB4OiAnd2lkdGgnLCB5OiAnaGVpZ2h0JyB9O1xuXG4gIHZhciBOT09QID0gZnVuY3Rpb24gTk9PUCgpIHt9O1xuXG4gIC8vIElmIGEgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgdGhlIGBvcHRpb25zYCBhcmd1bWVudCB0b1xuICAvLyBhZGQvcmVtb3ZlRXZlbnRMaXN0ZW5lciwgd2UgbmVlZCB0byBjaGVjaywgb3RoZXJ3aXNlIHdlIHdpbGxcbiAgLy8gYWNjaWRlbnRhbGx5IHNldCBgY2FwdHVyZWAgd2l0aCBhIHRydXRoeSB2YWx1ZS5cbiAgdmFyIFBBU1NJVkUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIGhhc1N1cHBvcnQgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIE5PT1AsIHtcbiAgICAgICAgZ2V0IHBhc3NpdmUoKSB7XG4gICAgICAgICAgaGFzU3VwcG9ydCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHJldHVybiBoYXNTdXBwb3J0O1xuICB9KCkgPyB7IHBhc3NpdmU6IHRydWUgfSA6IGZhbHNlO1xuXG4gIHZhciBVTlNUQUJMRV9NRVNTQUdFID0gJ1JlYWN0TGlzdCBmYWlsZWQgdG8gcmVhY2ggYSBzdGFibGUgc3RhdGUuJztcbiAgdmFyIE1BWF9TWU5DX1VQREFURVMgPSAxMDA7XG5cbiAgdmFyIGlzRXF1YWxTdWJzZXQgPSBmdW5jdGlvbiBpc0VxdWFsU3Vic2V0KGEsIGIpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gYikge1xuICAgICAgaWYgKGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG4gICAgfXJldHVybiB0cnVlO1xuICB9O1xuXG4gIF9tb2R1bGUzLmRlZmF1bHQuZXhwb3J0cyA9IChfdGVtcCA9IF9jbGFzcyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFJlYWN0TGlzdCwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBSZWFjdExpc3QocHJvcHMpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZWFjdExpc3QpO1xuXG4gICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUmVhY3RMaXN0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmVhY3RMaXN0KSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBpbml0aWFsSW5kZXggPSBfdGhpcyRwcm9wcy5pbml0aWFsSW5kZXgsXG4gICAgICAgICAgcGFnZVNpemUgPSBfdGhpcyRwcm9wcy5wYWdlU2l6ZTtcblxuICAgICAgdmFyIGl0ZW1zUGVyUm93ID0gMTtcblxuICAgICAgdmFyIF90aGlzJGNvbnN0cmFpbiA9IF90aGlzLmNvbnN0cmFpbihpbml0aWFsSW5kZXgsIHBhZ2VTaXplLCBpdGVtc1BlclJvdywgX3RoaXMucHJvcHMpLFxuICAgICAgICAgIGZyb20gPSBfdGhpcyRjb25zdHJhaW4uZnJvbSxcbiAgICAgICAgICBzaXplID0gX3RoaXMkY29uc3RyYWluLnNpemU7XG5cbiAgICAgIF90aGlzLnN0YXRlID0geyBmcm9tOiBmcm9tLCBzaXplOiBzaXplLCBpdGVtc1BlclJvdzogaXRlbXNQZXJSb3cgfTtcbiAgICAgIF90aGlzLmNhY2hlID0ge307XG4gICAgICBfdGhpcy5wcmV2UHJldlN0YXRlID0ge307XG4gICAgICBfdGhpcy51bnN0YWJsZSA9IGZhbHNlO1xuICAgICAgX3RoaXMudXBkYXRlQ291bnRlciA9IDA7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFJlYWN0TGlzdCwgW3tcbiAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dCkge1xuICAgICAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIGZyb20gPSBfc3RhdGUuZnJvbSxcbiAgICAgICAgICAgIHNpemUgPSBfc3RhdGUuc2l6ZSxcbiAgICAgICAgICAgIGl0ZW1zUGVyUm93ID0gX3N0YXRlLml0ZW1zUGVyUm93O1xuXG4gICAgICAgIHRoaXMubWF5YmVTZXRTdGF0ZSh0aGlzLmNvbnN0cmFpbihmcm9tLCBzaXplLCBpdGVtc1BlclJvdywgbmV4dCksIE5PT1ApO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVGcmFtZSA9IHRoaXMudXBkYXRlRnJhbWUuYmluZCh0aGlzKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlRnJhbWUpO1xuICAgICAgICB0aGlzLnVwZGF0ZUZyYW1lKHRoaXMuc2Nyb2xsVG8uYmluZCh0aGlzLCB0aGlzLnByb3BzLmluaXRpYWxJbmRleCkpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAvLyBJZiB0aGUgbGlzdCBoYXMgcmVhY2hlZCBhbiB1bnN0YWJsZSBzdGF0ZSwgcHJldmVudCBhbiBpbmZpbml0ZSBsb29wLlxuICAgICAgICBpZiAodGhpcy51bnN0YWJsZSkgcmV0dXJuO1xuXG4gICAgICAgIGlmICgrK3RoaXMudXBkYXRlQ291bnRlciA+IE1BWF9TWU5DX1VQREFURVMpIHtcbiAgICAgICAgICB0aGlzLnVuc3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihVTlNUQUJMRV9NRVNTQUdFKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy51cGRhdGVDb3VudGVyVGltZW91dElkKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVDb3VudGVyVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpczIudXBkYXRlQ291bnRlciA9IDA7XG4gICAgICAgICAgICBkZWxldGUgX3RoaXMyLnVwZGF0ZUNvdW50ZXJUaW1lb3V0SWQ7XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZUZyYW1lKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnbWF5YmVTZXRTdGF0ZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gbWF5YmVTZXRTdGF0ZShiLCBjYikge1xuICAgICAgICBpZiAoaXNFcXVhbFN1YnNldCh0aGlzLnN0YXRlLCBiKSkgcmV0dXJuIGNiKCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShiLCBjYik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVGcmFtZSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsUGFyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMudXBkYXRlRnJhbWUsIFBBU1NJVkUpO1xuICAgICAgICB0aGlzLnNjcm9sbFBhcmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgTk9PUCwgUEFTU0lWRSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZ2V0T2Zmc2V0JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRPZmZzZXQoZWwpIHtcbiAgICAgICAgdmFyIGF4aXMgPSB0aGlzLnByb3BzLmF4aXM7XG5cbiAgICAgICAgdmFyIG9mZnNldCA9IGVsW0NMSUVOVF9TVEFSVF9LRVlTW2F4aXNdXSB8fCAwO1xuICAgICAgICB2YXIgb2Zmc2V0S2V5ID0gT0ZGU0VUX1NUQVJUX0tFWVNbYXhpc107XG4gICAgICAgIGRvIHtcbiAgICAgICAgICBvZmZzZXQgKz0gZWxbb2Zmc2V0S2V5XSB8fCAwO1xuICAgICAgICB9IHdoaWxlIChlbCA9IGVsLm9mZnNldFBhcmVudCk7XG4gICAgICAgIHJldHVybiBvZmZzZXQ7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZ2V0U2Nyb2xsUGFyZW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQoKSB7XG4gICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgYXhpcyA9IF9wcm9wcy5heGlzLFxuICAgICAgICAgICAgc2Nyb2xsUGFyZW50R2V0dGVyID0gX3Byb3BzLnNjcm9sbFBhcmVudEdldHRlcjtcblxuICAgICAgICBpZiAoc2Nyb2xsUGFyZW50R2V0dGVyKSByZXR1cm4gc2Nyb2xsUGFyZW50R2V0dGVyKCk7XG4gICAgICAgIHZhciBlbCA9IGZpbmRET01Ob2RlKHRoaXMpO1xuICAgICAgICB2YXIgb3ZlcmZsb3dLZXkgPSBPVkVSRkxPV19LRVlTW2F4aXNdO1xuICAgICAgICB3aGlsZSAoZWwgPSBlbC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgc3dpdGNoICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClbb3ZlcmZsb3dLZXldKSB7XG4gICAgICAgICAgICBjYXNlICdhdXRvJzpjYXNlICdzY3JvbGwnOmNhc2UgJ292ZXJsYXknOlxuICAgICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3aW5kb3c7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZ2V0U2Nyb2xsJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTY3JvbGwoKSB7XG4gICAgICAgIHZhciBzY3JvbGxQYXJlbnQgPSB0aGlzLnNjcm9sbFBhcmVudDtcbiAgICAgICAgdmFyIGF4aXMgPSB0aGlzLnByb3BzLmF4aXM7XG5cbiAgICAgICAgdmFyIHNjcm9sbEtleSA9IFNDUk9MTF9TVEFSVF9LRVlTW2F4aXNdO1xuICAgICAgICB2YXIgYWN0dWFsID0gc2Nyb2xsUGFyZW50ID09PSB3aW5kb3cgP1xuICAgICAgICAvLyBGaXJlZm94IGFsd2F5cyByZXR1cm5zIGRvY3VtZW50LmJvZHlbc2Nyb2xsS2V5XSBhcyAwIGFuZCBDaHJvbWUvU2FmYXJpXG4gICAgICAgIC8vIGFsd2F5cyByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W3Njcm9sbEtleV0gYXMgMCwgc28gdGFrZVxuICAgICAgICAvLyB3aGljaGV2ZXIgaGFzIGEgdmFsdWUuXG4gICAgICAgIGRvY3VtZW50LmJvZHlbc2Nyb2xsS2V5XSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbc2Nyb2xsS2V5XSA6IHNjcm9sbFBhcmVudFtzY3JvbGxLZXldO1xuICAgICAgICB2YXIgbWF4ID0gdGhpcy5nZXRTY3JvbGxTaXplKCkgLSB0aGlzLmdldFZpZXdwb3J0U2l6ZSgpO1xuICAgICAgICB2YXIgc2Nyb2xsID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oYWN0dWFsLCBtYXgpKTtcbiAgICAgICAgdmFyIGVsID0gZmluZERPTU5vZGUodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzLmdldE9mZnNldChzY3JvbGxQYXJlbnQpICsgc2Nyb2xsIC0gdGhpcy5nZXRPZmZzZXQoZWwpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3NldFNjcm9sbCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0U2Nyb2xsKG9mZnNldCkge1xuICAgICAgICB2YXIgc2Nyb2xsUGFyZW50ID0gdGhpcy5zY3JvbGxQYXJlbnQ7XG4gICAgICAgIHZhciBheGlzID0gdGhpcy5wcm9wcy5heGlzO1xuXG4gICAgICAgIG9mZnNldCArPSB0aGlzLmdldE9mZnNldChmaW5kRE9NTm9kZSh0aGlzKSk7XG4gICAgICAgIGlmIChzY3JvbGxQYXJlbnQgPT09IHdpbmRvdykgcmV0dXJuIHdpbmRvdy5zY3JvbGxUbygwLCBvZmZzZXQpO1xuXG4gICAgICAgIG9mZnNldCAtPSB0aGlzLmdldE9mZnNldCh0aGlzLnNjcm9sbFBhcmVudCk7XG4gICAgICAgIHNjcm9sbFBhcmVudFtTQ1JPTExfU1RBUlRfS0VZU1theGlzXV0gPSBvZmZzZXQ7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZ2V0Vmlld3BvcnRTaXplJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWaWV3cG9ydFNpemUoKSB7XG4gICAgICAgIHZhciBzY3JvbGxQYXJlbnQgPSB0aGlzLnNjcm9sbFBhcmVudDtcbiAgICAgICAgdmFyIGF4aXMgPSB0aGlzLnByb3BzLmF4aXM7XG5cbiAgICAgICAgcmV0dXJuIHNjcm9sbFBhcmVudCA9PT0gd2luZG93ID8gd2luZG93W0lOTkVSX1NJWkVfS0VZU1theGlzXV0gOiBzY3JvbGxQYXJlbnRbQ0xJRU5UX1NJWkVfS0VZU1theGlzXV07XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZ2V0U2Nyb2xsU2l6ZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2Nyb2xsU2l6ZSgpIHtcbiAgICAgICAgdmFyIHNjcm9sbFBhcmVudCA9IHRoaXMuc2Nyb2xsUGFyZW50O1xuICAgICAgICB2YXIgX2RvY3VtZW50ID0gZG9jdW1lbnQsXG4gICAgICAgICAgICBib2R5ID0gX2RvY3VtZW50LmJvZHksXG4gICAgICAgICAgICBkb2N1bWVudEVsZW1lbnQgPSBfZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgICAgIHZhciBrZXkgPSBTQ1JPTExfU0laRV9LRVlTW3RoaXMucHJvcHMuYXhpc107XG4gICAgICAgIHJldHVybiBzY3JvbGxQYXJlbnQgPT09IHdpbmRvdyA/IE1hdGgubWF4KGJvZHlba2V5XSwgZG9jdW1lbnRFbGVtZW50W2tleV0pIDogc2Nyb2xsUGFyZW50W2tleV07XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnaGFzRGV0ZXJtaW5hdGVTaXplJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNEZXRlcm1pbmF0ZVNpemUoKSB7XG4gICAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGl0ZW1TaXplR2V0dGVyID0gX3Byb3BzMi5pdGVtU2l6ZUdldHRlcixcbiAgICAgICAgICAgIHR5cGUgPSBfcHJvcHMyLnR5cGU7XG5cbiAgICAgICAgcmV0dXJuIHR5cGUgPT09ICd1bmlmb3JtJyB8fCBpdGVtU2l6ZUdldHRlcjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdnZXRTdGFydEFuZEVuZCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U3RhcnRBbmRFbmQoKSB7XG4gICAgICAgIHZhciB0aHJlc2hvbGQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRoaXMucHJvcHMudGhyZXNob2xkO1xuXG4gICAgICAgIHZhciBzY3JvbGwgPSB0aGlzLmdldFNjcm9sbCgpO1xuICAgICAgICB2YXIgc3RhcnQgPSBNYXRoLm1heCgwLCBzY3JvbGwgLSB0aHJlc2hvbGQpO1xuICAgICAgICB2YXIgZW5kID0gc2Nyb2xsICsgdGhpcy5nZXRWaWV3cG9ydFNpemUoKSArIHRocmVzaG9sZDtcbiAgICAgICAgaWYgKHRoaXMuaGFzRGV0ZXJtaW5hdGVTaXplKCkpIHtcbiAgICAgICAgICBlbmQgPSBNYXRoLm1pbihlbmQsIHRoaXMuZ2V0U3BhY2VCZWZvcmUodGhpcy5wcm9wcy5sZW5ndGgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzdGFydDogc3RhcnQsIGVuZDogZW5kIH07XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZ2V0SXRlbVNpemVBbmRJdGVtc1BlclJvdycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SXRlbVNpemVBbmRJdGVtc1BlclJvdygpIHtcbiAgICAgICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgYXhpcyA9IF9wcm9wczMuYXhpcyxcbiAgICAgICAgICAgIHVzZVN0YXRpY1NpemUgPSBfcHJvcHMzLnVzZVN0YXRpY1NpemU7XG4gICAgICAgIHZhciBfc3RhdGUyID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIGl0ZW1TaXplID0gX3N0YXRlMi5pdGVtU2l6ZSxcbiAgICAgICAgICAgIGl0ZW1zUGVyUm93ID0gX3N0YXRlMi5pdGVtc1BlclJvdztcblxuICAgICAgICBpZiAodXNlU3RhdGljU2l6ZSAmJiBpdGVtU2l6ZSAmJiBpdGVtc1BlclJvdykge1xuICAgICAgICAgIHJldHVybiB7IGl0ZW1TaXplOiBpdGVtU2l6ZSwgaXRlbXNQZXJSb3c6IGl0ZW1zUGVyUm93IH07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlbUVscyA9IGZpbmRET01Ob2RlKHRoaXMuaXRlbXMpLmNoaWxkcmVuO1xuICAgICAgICBpZiAoIWl0ZW1FbHMubGVuZ3RoKSByZXR1cm4ge307XG5cbiAgICAgICAgdmFyIGZpcnN0RWwgPSBpdGVtRWxzWzBdO1xuXG4gICAgICAgIC8vIEZpcmVmb3ggaGFzIGEgcHJvYmxlbSB3aGVyZSBpdCB3aWxsIHJldHVybiBhICpzbGlnaHRseSogKGxlc3MgdGhhblxuICAgICAgICAvLyB0aG91c2FuZHRocyBvZiBhIHBpeGVsKSBkaWZmZXJlbnQgc2l6ZSBmb3IgdGhlIHNhbWUgZWxlbWVudCBiZXR3ZWVuXG4gICAgICAgIC8vIHJlbmRlcnMuIFRoaXMgY2FuIGNhdXNlIGFuIGluZmluaXRlIHJlbmRlciBsb29wLCBzbyBvbmx5IGNoYW5nZSB0aGVcbiAgICAgICAgLy8gaXRlbVNpemUgd2hlbiBpdCBpcyBzaWduaWZpY2FudGx5IGRpZmZlcmVudC5cbiAgICAgICAgdmFyIGZpcnN0RWxTaXplID0gZmlyc3RFbFtPRkZTRVRfU0laRV9LRVlTW2F4aXNdXTtcbiAgICAgICAgdmFyIGRlbHRhID0gTWF0aC5hYnMoZmlyc3RFbFNpemUgLSBpdGVtU2l6ZSk7XG4gICAgICAgIGlmIChpc05hTihkZWx0YSkgfHwgZGVsdGEgPj0gMSkgaXRlbVNpemUgPSBmaXJzdEVsU2l6ZTtcblxuICAgICAgICBpZiAoIWl0ZW1TaXplKSByZXR1cm4ge307XG5cbiAgICAgICAgdmFyIHN0YXJ0S2V5ID0gT0ZGU0VUX1NUQVJUX0tFWVNbYXhpc107XG4gICAgICAgIHZhciBmaXJzdFN0YXJ0ID0gZmlyc3RFbFtzdGFydEtleV07XG4gICAgICAgIGl0ZW1zUGVyUm93ID0gMTtcbiAgICAgICAgZm9yICh2YXIgaXRlbSA9IGl0ZW1FbHNbaXRlbXNQZXJSb3ddOyBpdGVtICYmIGl0ZW1bc3RhcnRLZXldID09PSBmaXJzdFN0YXJ0OyBpdGVtID0gaXRlbUVsc1tpdGVtc1BlclJvd10pIHtcbiAgICAgICAgICArK2l0ZW1zUGVyUm93O1xuICAgICAgICB9cmV0dXJuIHsgaXRlbVNpemU6IGl0ZW1TaXplLCBpdGVtc1BlclJvdzogaXRlbXNQZXJSb3cgfTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICd1cGRhdGVGcmFtZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlRnJhbWUoY2IpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTY3JvbGxQYXJlbnQoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjYiAhPSAnZnVuY3Rpb24nKSBjYiA9IE5PT1A7XG4gICAgICAgIHN3aXRjaCAodGhpcy5wcm9wcy50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnc2ltcGxlJzpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZVNpbXBsZUZyYW1lKGNiKTtcbiAgICAgICAgICBjYXNlICd2YXJpYWJsZSc6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVWYXJpYWJsZUZyYW1lKGNiKTtcbiAgICAgICAgICBjYXNlICd1bmlmb3JtJzpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZVVuaWZvcm1GcmFtZShjYik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICd1cGRhdGVTY3JvbGxQYXJlbnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVNjcm9sbFBhcmVudCgpIHtcbiAgICAgICAgdmFyIHByZXYgPSB0aGlzLnNjcm9sbFBhcmVudDtcbiAgICAgICAgdGhpcy5zY3JvbGxQYXJlbnQgPSB0aGlzLmdldFNjcm9sbFBhcmVudCgpO1xuICAgICAgICBpZiAocHJldiA9PT0gdGhpcy5zY3JvbGxQYXJlbnQpIHJldHVybjtcbiAgICAgICAgaWYgKHByZXYpIHtcbiAgICAgICAgICBwcmV2LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMudXBkYXRlRnJhbWUpO1xuICAgICAgICAgIHByZXYucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIE5PT1ApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2Nyb2xsUGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMudXBkYXRlRnJhbWUsIFBBU1NJVkUpO1xuICAgICAgICB0aGlzLnNjcm9sbFBhcmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgTk9PUCwgUEFTU0lWRSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAndXBkYXRlU2ltcGxlRnJhbWUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVNpbXBsZUZyYW1lKGNiKSB7XG4gICAgICAgIHZhciBfZ2V0U3RhcnRBbmRFbmQgPSB0aGlzLmdldFN0YXJ0QW5kRW5kKCksXG4gICAgICAgICAgICBlbmQgPSBfZ2V0U3RhcnRBbmRFbmQuZW5kO1xuXG4gICAgICAgIHZhciBpdGVtRWxzID0gZmluZERPTU5vZGUodGhpcy5pdGVtcykuY2hpbGRyZW47XG4gICAgICAgIHZhciBlbEVuZCA9IDA7XG5cbiAgICAgICAgaWYgKGl0ZW1FbHMubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIGF4aXMgPSB0aGlzLnByb3BzLmF4aXM7XG5cbiAgICAgICAgICB2YXIgZmlyc3RJdGVtRWwgPSBpdGVtRWxzWzBdO1xuICAgICAgICAgIHZhciBsYXN0SXRlbUVsID0gaXRlbUVsc1tpdGVtRWxzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGVsRW5kID0gdGhpcy5nZXRPZmZzZXQobGFzdEl0ZW1FbCkgKyBsYXN0SXRlbUVsW09GRlNFVF9TSVpFX0tFWVNbYXhpc11dIC0gdGhpcy5nZXRPZmZzZXQoZmlyc3RJdGVtRWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsRW5kID4gZW5kKSByZXR1cm4gY2IoKTtcblxuICAgICAgICB2YXIgX3Byb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBwYWdlU2l6ZSA9IF9wcm9wczQucGFnZVNpemUsXG4gICAgICAgICAgICBsZW5ndGggPSBfcHJvcHM0Lmxlbmd0aDtcblxuICAgICAgICB2YXIgc2l6ZSA9IE1hdGgubWluKHRoaXMuc3RhdGUuc2l6ZSArIHBhZ2VTaXplLCBsZW5ndGgpO1xuICAgICAgICB0aGlzLm1heWJlU2V0U3RhdGUoeyBzaXplOiBzaXplIH0sIGNiKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICd1cGRhdGVWYXJpYWJsZUZyYW1lJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVWYXJpYWJsZUZyYW1lKGNiKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5pdGVtU2l6ZUdldHRlcikgdGhpcy5jYWNoZVNpemVzKCk7XG5cbiAgICAgICAgdmFyIF9nZXRTdGFydEFuZEVuZDIgPSB0aGlzLmdldFN0YXJ0QW5kRW5kKCksXG4gICAgICAgICAgICBzdGFydCA9IF9nZXRTdGFydEFuZEVuZDIuc3RhcnQsXG4gICAgICAgICAgICBlbmQgPSBfZ2V0U3RhcnRBbmRFbmQyLmVuZDtcblxuICAgICAgICB2YXIgX3Byb3BzNSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBsZW5ndGggPSBfcHJvcHM1Lmxlbmd0aCxcbiAgICAgICAgICAgIHBhZ2VTaXplID0gX3Byb3BzNS5wYWdlU2l6ZTtcblxuICAgICAgICB2YXIgc3BhY2UgPSAwO1xuICAgICAgICB2YXIgZnJvbSA9IDA7XG4gICAgICAgIHZhciBzaXplID0gMDtcbiAgICAgICAgdmFyIG1heEZyb20gPSBsZW5ndGggLSAxO1xuXG4gICAgICAgIHdoaWxlIChmcm9tIDwgbWF4RnJvbSkge1xuICAgICAgICAgIHZhciBpdGVtU2l6ZSA9IHRoaXMuZ2V0U2l6ZU9mKGZyb20pO1xuICAgICAgICAgIGlmIChpdGVtU2l6ZSA9PSBudWxsIHx8IHNwYWNlICsgaXRlbVNpemUgPiBzdGFydCkgYnJlYWs7XG4gICAgICAgICAgc3BhY2UgKz0gaXRlbVNpemU7XG4gICAgICAgICAgKytmcm9tO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1heFNpemUgPSBsZW5ndGggLSBmcm9tO1xuXG4gICAgICAgIHdoaWxlIChzaXplIDwgbWF4U2l6ZSAmJiBzcGFjZSA8IGVuZCkge1xuICAgICAgICAgIHZhciBfaXRlbVNpemUgPSB0aGlzLmdldFNpemVPZihmcm9tICsgc2l6ZSk7XG4gICAgICAgICAgaWYgKF9pdGVtU2l6ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBzaXplID0gTWF0aC5taW4oc2l6ZSArIHBhZ2VTaXplLCBtYXhTaXplKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzcGFjZSArPSBfaXRlbVNpemU7XG4gICAgICAgICAgKytzaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYXliZVNldFN0YXRlKHsgZnJvbTogZnJvbSwgc2l6ZTogc2l6ZSB9LCBjYik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAndXBkYXRlVW5pZm9ybUZyYW1lJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVVbmlmb3JtRnJhbWUoY2IpIHtcbiAgICAgICAgdmFyIF9nZXRJdGVtU2l6ZUFuZEl0ZW1zUCA9IHRoaXMuZ2V0SXRlbVNpemVBbmRJdGVtc1BlclJvdygpLFxuICAgICAgICAgICAgaXRlbVNpemUgPSBfZ2V0SXRlbVNpemVBbmRJdGVtc1AuaXRlbVNpemUsXG4gICAgICAgICAgICBpdGVtc1BlclJvdyA9IF9nZXRJdGVtU2l6ZUFuZEl0ZW1zUC5pdGVtc1BlclJvdztcblxuICAgICAgICBpZiAoIWl0ZW1TaXplIHx8ICFpdGVtc1BlclJvdykgcmV0dXJuIGNiKCk7XG5cbiAgICAgICAgdmFyIF9nZXRTdGFydEFuZEVuZDMgPSB0aGlzLmdldFN0YXJ0QW5kRW5kKCksXG4gICAgICAgICAgICBzdGFydCA9IF9nZXRTdGFydEFuZEVuZDMuc3RhcnQsXG4gICAgICAgICAgICBlbmQgPSBfZ2V0U3RhcnRBbmRFbmQzLmVuZDtcblxuICAgICAgICB2YXIgX2NvbnN0cmFpbiA9IHRoaXMuY29uc3RyYWluKE1hdGguZmxvb3Ioc3RhcnQgLyBpdGVtU2l6ZSkgKiBpdGVtc1BlclJvdywgKE1hdGguY2VpbCgoZW5kIC0gc3RhcnQpIC8gaXRlbVNpemUpICsgMSkgKiBpdGVtc1BlclJvdywgaXRlbXNQZXJSb3csIHRoaXMucHJvcHMpLFxuICAgICAgICAgICAgZnJvbSA9IF9jb25zdHJhaW4uZnJvbSxcbiAgICAgICAgICAgIHNpemUgPSBfY29uc3RyYWluLnNpemU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubWF5YmVTZXRTdGF0ZSh7IGl0ZW1zUGVyUm93OiBpdGVtc1BlclJvdywgZnJvbTogZnJvbSwgaXRlbVNpemU6IGl0ZW1TaXplLCBzaXplOiBzaXplIH0sIGNiKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdnZXRTcGFjZUJlZm9yZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U3BhY2VCZWZvcmUoaW5kZXgpIHtcbiAgICAgICAgdmFyIGNhY2hlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgICAgICBpZiAoY2FjaGVbaW5kZXhdICE9IG51bGwpIHJldHVybiBjYWNoZVtpbmRleF07XG5cbiAgICAgICAgLy8gVHJ5IHRoZSBzdGF0aWMgaXRlbVNpemUuXG4gICAgICAgIHZhciBfc3RhdGUzID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIGl0ZW1TaXplID0gX3N0YXRlMy5pdGVtU2l6ZSxcbiAgICAgICAgICAgIGl0ZW1zUGVyUm93ID0gX3N0YXRlMy5pdGVtc1BlclJvdztcblxuICAgICAgICBpZiAoaXRlbVNpemUpIHtcbiAgICAgICAgICByZXR1cm4gY2FjaGVbaW5kZXhdID0gTWF0aC5mbG9vcihpbmRleCAvIGl0ZW1zUGVyUm93KSAqIGl0ZW1TaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmluZCB0aGUgY2xvc2VzdCBzcGFjZSB0byBpbmRleCB0aGVyZSBpcyBhIGNhY2hlZCB2YWx1ZSBmb3IuXG4gICAgICAgIHZhciBmcm9tID0gaW5kZXg7XG4gICAgICAgIHdoaWxlIChmcm9tID4gMCAmJiBjYWNoZVstLWZyb21dID09IG51bGwpIHt9XG5cbiAgICAgICAgLy8gRmluYWxseSwgYWNjdW11bGF0ZSBzaXplcyBvZiBpdGVtcyBmcm9tIC0gaW5kZXguXG4gICAgICAgIHZhciBzcGFjZSA9IGNhY2hlW2Zyb21dIHx8IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSBmcm9tOyBpIDwgaW5kZXg7ICsraSkge1xuICAgICAgICAgIGNhY2hlW2ldID0gc3BhY2U7XG4gICAgICAgICAgdmFyIF9pdGVtU2l6ZTIgPSB0aGlzLmdldFNpemVPZihpKTtcbiAgICAgICAgICBpZiAoX2l0ZW1TaXplMiA9PSBudWxsKSBicmVhaztcbiAgICAgICAgICBzcGFjZSArPSBfaXRlbVNpemUyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNhY2hlW2luZGV4XSA9IHNwYWNlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NhY2hlU2l6ZXMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNhY2hlU2l6ZXMoKSB7XG4gICAgICAgIHZhciBjYWNoZSA9IHRoaXMuY2FjaGU7XG4gICAgICAgIHZhciBmcm9tID0gdGhpcy5zdGF0ZS5mcm9tO1xuXG4gICAgICAgIHZhciBpdGVtRWxzID0gZmluZERPTU5vZGUodGhpcy5pdGVtcykuY2hpbGRyZW47XG4gICAgICAgIHZhciBzaXplS2V5ID0gT0ZGU0VUX1NJWkVfS0VZU1t0aGlzLnByb3BzLmF4aXNdO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGl0ZW1FbHMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgICAgICAgY2FjaGVbZnJvbSArIGldID0gaXRlbUVsc1tpXVtzaXplS2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2dldFNpemVPZicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2l6ZU9mKGluZGV4KSB7XG4gICAgICAgIHZhciBjYWNoZSA9IHRoaXMuY2FjaGUsXG4gICAgICAgICAgICBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgICAgIHZhciBfcHJvcHM2ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGF4aXMgPSBfcHJvcHM2LmF4aXMsXG4gICAgICAgICAgICBpdGVtU2l6ZUdldHRlciA9IF9wcm9wczYuaXRlbVNpemVHZXR0ZXIsXG4gICAgICAgICAgICBpdGVtU2l6ZUVzdGltYXRvciA9IF9wcm9wczYuaXRlbVNpemVFc3RpbWF0b3IsXG4gICAgICAgICAgICB0eXBlID0gX3Byb3BzNi50eXBlO1xuICAgICAgICB2YXIgX3N0YXRlNCA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICBmcm9tID0gX3N0YXRlNC5mcm9tLFxuICAgICAgICAgICAgaXRlbVNpemUgPSBfc3RhdGU0Lml0ZW1TaXplLFxuICAgICAgICAgICAgc2l6ZSA9IF9zdGF0ZTQuc2l6ZTtcblxuXG4gICAgICAgIC8vIFRyeSB0aGUgc3RhdGljIGl0ZW1TaXplLlxuICAgICAgICBpZiAoaXRlbVNpemUpIHJldHVybiBpdGVtU2l6ZTtcblxuICAgICAgICAvLyBUcnkgdGhlIGl0ZW1TaXplR2V0dGVyLlxuICAgICAgICBpZiAoaXRlbVNpemVHZXR0ZXIpIHJldHVybiBpdGVtU2l6ZUdldHRlcihpbmRleCk7XG5cbiAgICAgICAgLy8gVHJ5IHRoZSBjYWNoZS5cbiAgICAgICAgaWYgKGluZGV4IGluIGNhY2hlKSByZXR1cm4gY2FjaGVbaW5kZXhdO1xuXG4gICAgICAgIC8vIFRyeSB0aGUgRE9NLlxuICAgICAgICBpZiAodHlwZSA9PT0gJ3NpbXBsZScgJiYgaW5kZXggPj0gZnJvbSAmJiBpbmRleCA8IGZyb20gKyBzaXplICYmIGl0ZW1zKSB7XG4gICAgICAgICAgdmFyIGl0ZW1FbCA9IGZpbmRET01Ob2RlKGl0ZW1zKS5jaGlsZHJlbltpbmRleCAtIGZyb21dO1xuICAgICAgICAgIGlmIChpdGVtRWwpIHJldHVybiBpdGVtRWxbT0ZGU0VUX1NJWkVfS0VZU1theGlzXV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUcnkgdGhlIGl0ZW1TaXplRXN0aW1hdG9yLlxuICAgICAgICBpZiAoaXRlbVNpemVFc3RpbWF0b3IpIHJldHVybiBpdGVtU2l6ZUVzdGltYXRvcihpbmRleCwgY2FjaGUpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbnN0cmFpbicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29uc3RyYWluKGZyb20sIHNpemUsIGl0ZW1zUGVyUm93LCBfcmVmKSB7XG4gICAgICAgIHZhciBsZW5ndGggPSBfcmVmLmxlbmd0aCxcbiAgICAgICAgICAgIHBhZ2VTaXplID0gX3JlZi5wYWdlU2l6ZSxcbiAgICAgICAgICAgIHR5cGUgPSBfcmVmLnR5cGU7XG5cbiAgICAgICAgc2l6ZSA9IE1hdGgubWF4KHNpemUsIHBhZ2VTaXplKTtcbiAgICAgICAgdmFyIG1vZCA9IHNpemUgJSBpdGVtc1BlclJvdztcbiAgICAgICAgaWYgKG1vZCkgc2l6ZSArPSBpdGVtc1BlclJvdyAtIG1vZDtcbiAgICAgICAgaWYgKHNpemUgPiBsZW5ndGgpIHNpemUgPSBsZW5ndGg7XG4gICAgICAgIGZyb20gPSB0eXBlID09PSAnc2ltcGxlJyB8fCAhZnJvbSA/IDAgOiBNYXRoLm1heChNYXRoLm1pbihmcm9tLCBsZW5ndGggLSBzaXplKSwgMCk7XG5cbiAgICAgICAgaWYgKG1vZCA9IGZyb20gJSBpdGVtc1BlclJvdykge1xuICAgICAgICAgIGZyb20gLT0gbW9kO1xuICAgICAgICAgIHNpemUgKz0gbW9kO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgZnJvbTogZnJvbSwgc2l6ZTogc2l6ZSB9O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3Njcm9sbFRvJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzY3JvbGxUbyhpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggIT0gbnVsbCkgdGhpcy5zZXRTY3JvbGwodGhpcy5nZXRTcGFjZUJlZm9yZShpbmRleCkpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3Njcm9sbEFyb3VuZCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2Nyb2xsQXJvdW5kKGluZGV4KSB7XG4gICAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5nZXRTY3JvbGwoKTtcbiAgICAgICAgdmFyIGJvdHRvbSA9IHRoaXMuZ2V0U3BhY2VCZWZvcmUoaW5kZXgpO1xuICAgICAgICB2YXIgdG9wID0gYm90dG9tIC0gdGhpcy5nZXRWaWV3cG9ydFNpemUoKSArIHRoaXMuZ2V0U2l6ZU9mKGluZGV4KTtcbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHRvcCwgYm90dG9tKTtcbiAgICAgICAgdmFyIG1heCA9IE1hdGgubWF4KHRvcCwgYm90dG9tKTtcbiAgICAgICAgaWYgKGN1cnJlbnQgPD0gbWluKSByZXR1cm4gdGhpcy5zZXRTY3JvbGwobWluKTtcbiAgICAgICAgaWYgKGN1cnJlbnQgPiBtYXgpIHJldHVybiB0aGlzLnNldFNjcm9sbChtYXgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2dldFZpc2libGVSYW5nZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmlzaWJsZVJhbmdlKCkge1xuICAgICAgICB2YXIgX3N0YXRlNSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICBmcm9tID0gX3N0YXRlNS5mcm9tLFxuICAgICAgICAgICAgc2l6ZSA9IF9zdGF0ZTUuc2l6ZTtcblxuICAgICAgICB2YXIgX2dldFN0YXJ0QW5kRW5kNCA9IHRoaXMuZ2V0U3RhcnRBbmRFbmQoMCksXG4gICAgICAgICAgICBzdGFydCA9IF9nZXRTdGFydEFuZEVuZDQuc3RhcnQsXG4gICAgICAgICAgICBlbmQgPSBfZ2V0U3RhcnRBbmRFbmQ0LmVuZDtcblxuICAgICAgICB2YXIgY2FjaGUgPSB7fTtcbiAgICAgICAgdmFyIGZpcnN0ID0gdm9pZCAwLFxuICAgICAgICAgICAgbGFzdCA9IHZvaWQgMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IGZyb207IGkgPCBmcm9tICsgc2l6ZTsgKytpKSB7XG4gICAgICAgICAgdmFyIGl0ZW1TdGFydCA9IHRoaXMuZ2V0U3BhY2VCZWZvcmUoaSwgY2FjaGUpO1xuICAgICAgICAgIHZhciBpdGVtRW5kID0gaXRlbVN0YXJ0ICsgdGhpcy5nZXRTaXplT2YoaSk7XG4gICAgICAgICAgaWYgKGZpcnN0ID09IG51bGwgJiYgaXRlbUVuZCA+IHN0YXJ0KSBmaXJzdCA9IGk7XG4gICAgICAgICAgaWYgKGZpcnN0ICE9IG51bGwgJiYgaXRlbVN0YXJ0IDwgZW5kKSBsYXN0ID0gaTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2ZpcnN0LCBsYXN0XTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZW5kZXJJdGVtcycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySXRlbXMoKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgIHZhciBfcHJvcHM3ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGl0ZW1SZW5kZXJlciA9IF9wcm9wczcuaXRlbVJlbmRlcmVyLFxuICAgICAgICAgICAgaXRlbXNSZW5kZXJlciA9IF9wcm9wczcuaXRlbXNSZW5kZXJlcjtcbiAgICAgICAgdmFyIF9zdGF0ZTYgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgZnJvbSA9IF9zdGF0ZTYuZnJvbSxcbiAgICAgICAgICAgIHNpemUgPSBfc3RhdGU2LnNpemU7XG5cbiAgICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgICAgaXRlbXMucHVzaChpdGVtUmVuZGVyZXIoZnJvbSArIGksIGkpKTtcbiAgICAgICAgfXJldHVybiBpdGVtc1JlbmRlcmVyKGl0ZW1zLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgIHJldHVybiBfdGhpczMuaXRlbXMgPSBjO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF9wcm9wczggPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgYXhpcyA9IF9wcm9wczguYXhpcyxcbiAgICAgICAgICAgIGxlbmd0aCA9IF9wcm9wczgubGVuZ3RoLFxuICAgICAgICAgICAgdHlwZSA9IF9wcm9wczgudHlwZSxcbiAgICAgICAgICAgIHVzZVRyYW5zbGF0ZTNkID0gX3Byb3BzOC51c2VUcmFuc2xhdGUzZDtcbiAgICAgICAgdmFyIF9zdGF0ZTcgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgZnJvbSA9IF9zdGF0ZTcuZnJvbSxcbiAgICAgICAgICAgIGl0ZW1zUGVyUm93ID0gX3N0YXRlNy5pdGVtc1BlclJvdztcblxuXG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMucmVuZGVySXRlbXMoKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzaW1wbGUnKSByZXR1cm4gaXRlbXM7XG5cbiAgICAgICAgdmFyIHN0eWxlID0geyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9O1xuICAgICAgICB2YXIgY2FjaGUgPSB7fTtcbiAgICAgICAgdmFyIGJvdHRvbSA9IE1hdGguY2VpbChsZW5ndGggLyBpdGVtc1BlclJvdykgKiBpdGVtc1BlclJvdztcbiAgICAgICAgdmFyIHNpemUgPSB0aGlzLmdldFNwYWNlQmVmb3JlKGJvdHRvbSwgY2FjaGUpO1xuICAgICAgICBpZiAoc2l6ZSkge1xuICAgICAgICAgIHN0eWxlW1NJWkVfS0VZU1theGlzXV0gPSBzaXplO1xuICAgICAgICAgIGlmIChheGlzID09PSAneCcpIHN0eWxlLm92ZXJmbG93WCA9ICdoaWRkZW4nO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLmdldFNwYWNlQmVmb3JlKGZyb20sIGNhY2hlKTtcbiAgICAgICAgdmFyIHggPSBheGlzID09PSAneCcgPyBvZmZzZXQgOiAwO1xuICAgICAgICB2YXIgeSA9IGF4aXMgPT09ICd5JyA/IG9mZnNldCA6IDA7XG4gICAgICAgIHZhciB0cmFuc2Zvcm0gPSB1c2VUcmFuc2xhdGUzZCA/ICd0cmFuc2xhdGUzZCgnICsgeCArICdweCwgJyArIHkgKyAncHgsIDApJyA6ICd0cmFuc2xhdGUoJyArIHggKyAncHgsICcgKyB5ICsgJ3B4KSc7XG4gICAgICAgIHZhciBsaXN0U3R5bGUgPSB7XG4gICAgICAgICAgbXNUcmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgICBXZWJraXRUcmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBzdHlsZTogc3R5bGUgfSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBzdHlsZTogbGlzdFN0eWxlIH0sXG4gICAgICAgICAgICBpdGVtc1xuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUmVhY3RMaXN0O1xuICB9KF9yZWFjdC5Db21wb25lbnQpLCBfY2xhc3MuZGlzcGxheU5hbWUgPSAnUmVhY3RMaXN0JywgX2NsYXNzLnByb3BUeXBlcyA9IHtcbiAgICBheGlzOiBfcmVhY3QuUHJvcFR5cGVzLm9uZU9mKFsneCcsICd5J10pLFxuICAgIGluaXRpYWxJbmRleDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gICAgaXRlbVJlbmRlcmVyOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgaXRlbVNpemVFc3RpbWF0b3I6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBpdGVtU2l6ZUdldHRlcjogX3JlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIGl0ZW1zUmVuZGVyZXI6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBsZW5ndGg6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIHBhZ2VTaXplOiBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBzY3JvbGxQYXJlbnRHZXR0ZXI6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICB0aHJlc2hvbGQ6IF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIHR5cGU6IF9yZWFjdC5Qcm9wVHlwZXMub25lT2YoWydzaW1wbGUnLCAndmFyaWFibGUnLCAndW5pZm9ybSddKSxcbiAgICB1c2VTdGF0aWNTaXplOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgdXNlVHJhbnNsYXRlM2Q6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbFxuICB9LCBfY2xhc3MuZGVmYXVsdFByb3BzID0ge1xuICAgIGF4aXM6ICd5JyxcbiAgICBpdGVtUmVuZGVyZXI6IGZ1bmN0aW9uIGl0ZW1SZW5kZXJlcihpbmRleCwga2V5KSB7XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGtleToga2V5IH0sXG4gICAgICAgIGluZGV4XG4gICAgICApO1xuICAgIH0sXG4gICAgaXRlbXNSZW5kZXJlcjogZnVuY3Rpb24gaXRlbXNSZW5kZXJlcihpdGVtcywgcmVmKSB7XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IHJlZjogcmVmIH0sXG4gICAgICAgIGl0ZW1zXG4gICAgICApO1xuICAgIH0sXG4gICAgbGVuZ3RoOiAwLFxuICAgIHBhZ2VTaXplOiAxMCxcbiAgICB0aHJlc2hvbGQ6IDEwMCxcbiAgICB0eXBlOiAnc2ltcGxlJyxcbiAgICB1c2VTdGF0aWNTaXplOiBmYWxzZSxcbiAgICB1c2VUcmFuc2xhdGUzZDogZmFsc2VcbiAgfSwgX3RlbXApO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtbGlzdC9yZWFjdC1saXN0LmpzXG4vLyBtb2R1bGUgaWQgPSA2MjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfY2xhbXAgPSByZXF1aXJlKCdjbGFtcCcpO1xuXG52YXIgX2NsYW1wMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYW1wKTtcblxudmFyIF9zaGFkb3dzID0gcmVxdWlyZSgnLi4vdXRpbHMvc2hhZG93cycpO1xuXG52YXIgX3NoYWRvd3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhZG93cyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIHByb3BUeXBlcyA9IHtcbiAgICBjbGFzc05hbWU6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNoYWRvdzogX3JlYWN0LlByb3BUeXBlcy5udW1iZXJcbn07XG5cbnZhciBDYXJkID0gZnVuY3Rpb24gQ2FyZChwcm9wcykge1xuICAgIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIHNoYWRvdyA9IHByb3BzLnNoYWRvdyxcbiAgICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgb3RoZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgWydjbGFzc05hbWUnLCAnc2hhZG93JywgJ2NoaWxkcmVuJ10pO1xuXG4gICAgdmFyIGhhc1NoYWRvdyA9IHR5cGVvZiBzaGFkb3cgIT09ICd1bmRlZmluZWQnO1xuICAgIHZhciBzaGFkb3dMZXZlbCA9ICgwLCBfY2xhbXAyLmRlZmF1bHQpKHNoYWRvdyB8fCAwLCAwLCBfc2hhZG93czIuZGVmYXVsdC5sZW5ndGggLSAxKTtcblxuICAgIHZhciBjbGFzc2VzID0gKDAsIF9jbGFzc25hbWVzMi5kZWZhdWx0KSgnbWRsLWNhcmQnLCBfZGVmaW5lUHJvcGVydHkoe30sIF9zaGFkb3dzMi5kZWZhdWx0W3NoYWRvd0xldmVsXSwgaGFzU2hhZG93KSwgY2xhc3NOYW1lKTtcblxuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIF9leHRlbmRzKHsgY2xhc3NOYW1lOiBjbGFzc2VzIH0sIG90aGVyUHJvcHMpLFxuICAgICAgICBjaGlsZHJlblxuICAgICk7XG59O1xuXG5DYXJkLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ2FyZDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtbWRsL2xpYi9DYXJkL0NhcmQuanNcbi8vIG1vZHVsZSBpZCA9IDYyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICAgIGJvcmRlcjogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGNsYXNzTmFtZTogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmdcbn07XG5cbnZhciBDYXJkQWN0aW9ucyA9IGZ1bmN0aW9uIENhcmRBY3Rpb25zKHByb3BzKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgYm9yZGVyID0gcHJvcHMuYm9yZGVyLFxuICAgICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBvdGhlclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbJ2NsYXNzTmFtZScsICdib3JkZXInLCAnY2hpbGRyZW4nXSk7XG5cbiAgICB2YXIgY2xhc3NlcyA9ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoJ21kbC1jYXJkX19hY3Rpb25zJywge1xuICAgICAgICAnbWRsLWNhcmQtLWJvcmRlcic6IGJvcmRlclxuICAgIH0sIGNsYXNzTmFtZSk7XG5cbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBfZXh0ZW5kcyh7IGNsYXNzTmFtZTogY2xhc3NlcyB9LCBvdGhlclByb3BzKSxcbiAgICAgICAgY2hpbGRyZW5cbiAgICApO1xufTtcblxuQ2FyZEFjdGlvbnMucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDYXJkQWN0aW9ucztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtbWRsL2xpYi9DYXJkL0NhcmRBY3Rpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSA2Mjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIHByb3BUeXBlcyA9IHtcbiAgICBjbGFzc05hbWU6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGV4cGFuZDogX3JlYWN0LlByb3BUeXBlcy5ib29sXG59O1xuXG52YXIgQ2FyZFRpdGxlID0gZnVuY3Rpb24gQ2FyZFRpdGxlKHByb3BzKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgZXhwYW5kID0gcHJvcHMuZXhwYW5kLFxuICAgICAgICBvdGhlclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbJ2NsYXNzTmFtZScsICdjaGlsZHJlbicsICdleHBhbmQnXSk7XG5cbiAgICB2YXIgY2xhc3NlcyA9ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoJ21kbC1jYXJkX190aXRsZScsIHtcbiAgICAgICAgJ21kbC1jYXJkLS1leHBhbmQnOiBleHBhbmRcbiAgICB9LCBjbGFzc05hbWUpO1xuXG4gICAgdmFyIHRpdGxlID0gdHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJyA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnaDInLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ21kbC1jYXJkX190aXRsZS10ZXh0JyB9LFxuICAgICAgICBjaGlsZHJlblxuICAgICkgOiBjaGlsZHJlbjtcblxuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIF9leHRlbmRzKHsgY2xhc3NOYW1lOiBjbGFzc2VzIH0sIG90aGVyUHJvcHMpLFxuICAgICAgICB0aXRsZVxuICAgICk7XG59O1xuXG5DYXJkVGl0bGUucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDYXJkVGl0bGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LW1kbC9saWIvQ2FyZC9DYXJkVGl0bGUuanNcbi8vIG1vZHVsZSBpZCA9IDYyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkNhcmRNZWRpYSA9IGV4cG9ydHMuQ2FyZEFjdGlvbnMgPSBleHBvcnRzLkNhcmRUaXRsZSA9IGV4cG9ydHMuQ2FyZE1lbnUgPSBleHBvcnRzLkNhcmRUZXh0ID0gZXhwb3J0cy5DYXJkID0gdW5kZWZpbmVkO1xuXG52YXIgX0NhcmQgPSByZXF1aXJlKCcuL0NhcmQnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdDYXJkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ2FyZCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfQ2FyZFRpdGxlID0gcmVxdWlyZSgnLi9DYXJkVGl0bGUnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdDYXJkVGl0bGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DYXJkVGl0bGUpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX0NhcmRBY3Rpb25zID0gcmVxdWlyZSgnLi9DYXJkQWN0aW9ucycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0NhcmRBY3Rpb25zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ2FyZEFjdGlvbnMpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2Jhc2ljQ2xhc3NDcmVhdG9yID0gcmVxdWlyZSgnLi4vdXRpbHMvYmFzaWNDbGFzc0NyZWF0b3InKTtcblxudmFyIF9iYXNpY0NsYXNzQ3JlYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iYXNpY0NsYXNzQ3JlYXRvcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBDYXJkVGV4dCA9IGV4cG9ydHMuQ2FyZFRleHQgPSAoMCwgX2Jhc2ljQ2xhc3NDcmVhdG9yMi5kZWZhdWx0KSgnQ2FyZFRleHQnLCAnbWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCcpO1xudmFyIENhcmRNZW51ID0gZXhwb3J0cy5DYXJkTWVudSA9ICgwLCBfYmFzaWNDbGFzc0NyZWF0b3IyLmRlZmF1bHQpKCdDYXJkTWVudScsICdtZGwtY2FyZF9fbWVudScpO1xudmFyIENhcmRNZWRpYSA9IGV4cG9ydHMuQ2FyZE1lZGlhID0gKDAsIF9iYXNpY0NsYXNzQ3JlYXRvcjIuZGVmYXVsdCkoJ0NhcmRNZWRpYScsICdtZGwtY2FyZF9fbWVkaWEnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtbWRsL2xpYi9DYXJkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2MzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfbWRsVXBncmFkZSA9IHJlcXVpcmUoJy4vdXRpbHMvbWRsVXBncmFkZScpO1xuXG52YXIgX21kbFVwZ3JhZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWRsVXBncmFkZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2luZ2xlQ29sb3I6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbFxufTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3ByZWZlci1zdGF0ZWxlc3MtZnVuY3Rpb25cblxudmFyIFNwaW5uZXIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhTcGlubmVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFNwaW5uZXIoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTcGlubmVyKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNwaW5uZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTcGlubmVyKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFNwaW5uZXIsIFt7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIHNpbmdsZUNvbG9yID0gX3Byb3BzLnNpbmdsZUNvbG9yLFxuICAgICAgICAgICAgICAgIG90aGVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NsYXNzTmFtZScsICdzaW5nbGVDb2xvciddKTtcblxuICAgICAgICAgICAgdmFyIGNsYXNzZXMgPSAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKCdtZGwtc3Bpbm5lciBtZGwtanMtc3Bpbm5lciBpcy1hY3RpdmUnLCB7XG4gICAgICAgICAgICAgICAgJ21kbC1zcGlubmVyLS1zaW5nbGUtY29sb3InOiBzaW5nbGVDb2xvclxuICAgICAgICAgICAgfSwgY2xhc3NOYW1lKTtcblxuICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdkaXYnLCBfZXh0ZW5kcyh7IGNsYXNzTmFtZTogY2xhc3NlcyB9LCBvdGhlclByb3BzKSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gU3Bpbm5lcjtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cblNwaW5uZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX21kbFVwZ3JhZGUyLmRlZmF1bHQpKFNwaW5uZXIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1tZGwvbGliL1NwaW5uZXIuanNcbi8vIG1vZHVsZSBpZCA9IDYzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZGlzcGxheU5hbWUsIGRlZmF1bHRDbGFzc05hbWUpIHtcbiAgICB2YXIgZWxlbWVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogJ2Rpdic7XG5cbiAgICB2YXIgZm4gPSBmdW5jdGlvbiBmbihwcm9wcykge1xuICAgICAgICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICAgIG90aGVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFsnY2xhc3NOYW1lJywgJ2NoaWxkcmVuJ10pO1xuXG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChlbGVtZW50LCBfZXh0ZW5kcyh7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczIuZGVmYXVsdCkoZGVmYXVsdENsYXNzTmFtZSwgY2xhc3NOYW1lKVxuICAgICAgICB9LCBvdGhlclByb3BzKSwgY2hpbGRyZW4pO1xuICAgIH07XG5cbiAgICBmbi5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgIGZuLnByb3BUeXBlcyA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xuICAgIH07XG5cbiAgICByZXR1cm4gZm47XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1tZGwvbGliL3V0aWxzL2Jhc2ljQ2xhc3NDcmVhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA2MzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgdmFsdWVzID0gWzIsIDMsIDQsIDYsIDgsIDE2LCAyNF07XG5leHBvcnRzLmRlZmF1bHQgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uICh2KSB7XG4gIHJldHVybiBcIm1kbC1zaGFkb3ctLVwiICsgdiArIFwiZHBcIjtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1tZGwvbGliL3V0aWxzL3NoYWRvd3MuanNcbi8vIG1vZHVsZSBpZCA9IDYzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9