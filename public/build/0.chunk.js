webpackJsonp([0,3],{

/***/ 356:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react2 = __webpack_require__(1);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _reactTransformHmr3 = __webpack_require__(11);
	
	var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _reactRouter = __webpack_require__(171);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	    Sidebar: {
	        displayName: 'Sidebar'
	    }
	};
	
	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	    filename: '/Users/alexshilman/Sites/CarPatron/shared/containers/User/components/Profile/Sidebar/index.js',
	    components: _components,
	    locals: [module],
	    imports: [_react3.default]
	});
	
	function _wrapComponent(id) {
	    return function (Component) {
	        return _reactTransformHmr2(Component, id);
	    };
	}
	
	var Sidebar = _wrapComponent('Sidebar')(function (_Component) {
	    _inherits(Sidebar, _Component);
	
	    function Sidebar() {
	        _classCallCheck(this, Sidebar);
	
	        return _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).apply(this, arguments));
	    }
	
	    _createClass(Sidebar, [{
	        key: 'render',
	        value: function render() {
	            return _react3.default.createElement(
	                'div',
	                { className: 'cp-Profile__Sidebar' },
	                _react3.default.createElement(
	                    'ul',
	                    { style: { lineHeight: '40px' } },
	                    _react3.default.createElement(
	                        'li',
	                        null,
	                        _react3.default.createElement(
	                            _reactRouter.Link,
	                            {
	                                to: 'user/profile',
	                                activeStyle: { color: '#ff690f' } },
	                            'My Profile'
	                        )
	                    ),
	                    _react3.default.createElement(
	                        'li',
	                        null,
	                        _react3.default.createElement(
	                            _reactRouter.Link,
	                            {
	                                to: 'user/media',
	                                activeStyle: { color: '#ff690f' } },
	                            'Photos and Video'
	                        )
	                    ),
	                    _react3.default.createElement(
	                        'li',
	                        null,
	                        _react3.default.createElement(
	                            _reactRouter.Link,
	                            {
	                                to: 'user/security',
	                                activeStyle: { color: '#ff690f' } },
	                            'Trust and Verification'
	                        )
	                    )
	                ),
	                _react3.default.createElement(
	                    _reactRouter.Link,
	                    {
	                        to: 'user/profile',
	                        activeClassName: 'btn btn-block',
	                        style: { border: '1px solid #ff690f', color: '#ff690f', marginTop: 20 } },
	                    'View Profile'
	                )
	            );
	        }
	    }]);

	    return Sidebar;
	}(_react2.Component));

	exports.default = Sidebar;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ },

/***/ 357:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react2 = __webpack_require__(1);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _reactTransformHmr3 = __webpack_require__(11);
	
	var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Panel = __webpack_require__(625);
	
	var _Panel2 = _interopRequireDefault(_Panel);
	
	var _PanelGroup = __webpack_require__(626);
	
	var _PanelGroup2 = _interopRequireDefault(_PanelGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _components = {
	    Profile: {
	        displayName: 'Profile'
	    }
	};
	
	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	    filename: '/Users/alexshilman/Sites/CarPatron/shared/containers/User/components/Profile/index.js',
	    components: _components,
	    locals: [module],
	    imports: [_react3.default]
	});
	
	function _wrapComponent(id) {
	    return function (Component) {
	        return _reactTransformHmr2(Component, id);
	    };
	}
	
	var Profile = _wrapComponent('Profile')(function (_Component) {
	    _inherits(Profile, _Component);
	
	    function Profile() {
	        _classCallCheck(this, Profile);
	
	        return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
	    }
	
	    _createClass(Profile, [{
	        key: 'render',
	        value: function render() {
	            return _react3.default.createElement(
	                'div',
	                { className: 'cp-Profile' },
	                _react3.default.createElement(
	                    _PanelGroup2.default,
	                    null,
	                    _react3.default.createElement(
	                        _Panel2.default,
	                        { header: 'Account Settings' },
	                        'Hello There'
	                    ),
	                    _react3.default.createElement(
	                        _Panel2.default,
	                        { header: 'Optional' },
	                        'Hello There'
	                    )
	                )
	            );
	        }
	    }]);

	    return Profile;
	}(_react2.Component));

	exports.default = Profile;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ },

/***/ 625:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _objectWithoutProperties = __webpack_require__(14)['default'];
	
	var _extends = __webpack_require__(6)['default'];
	
	var _interopRequireDefault = __webpack_require__(5)['default'];
	
	exports.__esModule = true;
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styleMaps = __webpack_require__(43);
	
	var _utilsBootstrapUtils = __webpack_require__(12);
	
	var _Collapse = __webpack_require__(269);
	
	var _Collapse2 = _interopRequireDefault(_Collapse);
	
	var Panel = _react2['default'].createClass({
	  displayName: 'Panel',
	
	  propTypes: {
	    collapsible: _react2['default'].PropTypes.bool,
	    onSelect: _react2['default'].PropTypes.func,
	    header: _react2['default'].PropTypes.node,
	    id: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
	    footer: _react2['default'].PropTypes.node,
	    defaultExpanded: _react2['default'].PropTypes.bool,
	    expanded: _react2['default'].PropTypes.bool,
	    eventKey: _react2['default'].PropTypes.any,
	    headerRole: _react2['default'].PropTypes.string,
	    panelRole: _react2['default'].PropTypes.string,
	
	    onEnter: _Collapse2['default'].propTypes.onEnter,
	    onEntering: _Collapse2['default'].propTypes.onEntering,
	    onEntered: _Collapse2['default'].propTypes.onEntered,
	    onExit: _Collapse2['default'].propTypes.onExit,
	    onExiting: _Collapse2['default'].propTypes.onExiting,
	    onExited: _Collapse2['default'].propTypes.onExited
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      defaultExpanded: false
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      expanded: this.props.defaultExpanded
	    };
	  },
	
	  handleSelect: function handleSelect(e) {
	    e.persist();
	    e.selected = true;
	
	    if (this.props.onSelect) {
	      this.props.onSelect(this.props.eventKey, e);
	    } else {
	      e.preventDefault();
	    }
	
	    if (e.selected) {
	      this.handleToggle();
	    }
	  },
	
	  handleToggle: function handleToggle() {
	    this.setState({ expanded: !this.state.expanded });
	  },
	
	  isExpanded: function isExpanded() {
	    return this.props.expanded != null ? this.props.expanded : this.state.expanded;
	  },
	
	  render: function render() {
	    var _props = this.props;
	    var headerRole = _props.headerRole;
	    var panelRole = _props.panelRole;
	
	    var props = _objectWithoutProperties(_props, ['headerRole', 'panelRole']);
	
	    return _react2['default'].createElement(
	      'div',
	      _extends({}, props, {
	        className: _classnames2['default'](this.props.className, _utilsBootstrapUtils.getClassSet(this.props)),
	        id: this.props.collapsible ? null : this.props.id, onSelect: null
	      }),
	      this.renderHeading(headerRole),
	      this.props.collapsible ? this.renderCollapsibleBody(panelRole) : this.renderBody(),
	      this.renderFooter()
	    );
	  },
	
	  renderCollapsibleBody: function renderCollapsibleBody(panelRole) {
	    var collapseProps = {
	      onEnter: this.props.onEnter,
	      onEntering: this.props.onEntering,
	      onEntered: this.props.onEntered,
	      onExit: this.props.onExit,
	      onExiting: this.props.onExiting,
	      onExited: this.props.onExited,
	      'in': this.isExpanded()
	    };
	    var props = {
	      className: _utilsBootstrapUtils.prefix(this.props, 'collapse'),
	      id: this.props.id,
	      ref: 'panel',
	      'aria-hidden': !this.isExpanded()
	    };
	    if (panelRole) {
	      props.role = panelRole;
	    }
	
	    return _react2['default'].createElement(
	      _Collapse2['default'],
	      collapseProps,
	      _react2['default'].createElement(
	        'div',
	        props,
	        this.renderBody()
	      )
	    );
	  },
	
	  renderBody: function renderBody() {
	    var _this = this;
	
	    var allChildren = this.props.children;
	    var bodyElements = [];
	    var panelBodyChildren = [];
	    var bodyClass = _utilsBootstrapUtils.prefix(this.props, 'body');
	
	    function getProps() {
	      return { key: bodyElements.length };
	    }
	
	    function addPanelChild(child) {
	      bodyElements.push(_react.cloneElement(child, getProps()));
	    }
	
	    function addPanelBody(children) {
	      bodyElements.push(_react2['default'].createElement(
	        'div',
	        _extends({ className: bodyClass }, getProps()),
	        children
	      ));
	    }
	
	    function maybeRenderPanelBody() {
	      if (panelBodyChildren.length === 0) {
	        return;
	      }
	
	      addPanelBody(panelBodyChildren);
	      panelBodyChildren = [];
	    }
	
	    // Handle edge cases where we should not iterate through children.
	    if (!Array.isArray(allChildren) || allChildren.length === 0) {
	      if (this.shouldRenderFill(allChildren)) {
	        addPanelChild(allChildren);
	      } else {
	        addPanelBody(allChildren);
	      }
	    } else {
	      allChildren.forEach(function (child) {
	        if (_this.shouldRenderFill(child)) {
	          maybeRenderPanelBody();
	
	          // Separately add the filled element.
	          addPanelChild(child);
	        } else {
	          panelBodyChildren.push(child);
	        }
	      });
	
	      maybeRenderPanelBody();
	    }
	
	    return bodyElements;
	  },
	
	  shouldRenderFill: function shouldRenderFill(child) {
	    return _react2['default'].isValidElement(child) && child.props.fill != null;
	  },
	
	  renderHeading: function renderHeading(headerRole) {
	    var header = this.props.header;
	
	    if (!header) {
	      return null;
	    }
	
	    if (!_react2['default'].isValidElement(header) || Array.isArray(header)) {
	      header = this.props.collapsible ? this.renderCollapsibleTitle(header, headerRole) : header;
	    } else {
	      var className = _classnames2['default'](_utilsBootstrapUtils.prefix(this.props, 'title'), header.props.className);
	
	      if (this.props.collapsible) {
	        header = _react.cloneElement(header, {
	          className: className,
	          children: this.renderAnchor(header.props.children, headerRole)
	        });
	      } else {
	        header = _react.cloneElement(header, { className: className });
	      }
	    }
	
	    return _react2['default'].createElement(
	      'div',
	      { className: _utilsBootstrapUtils.prefix(this.props, 'heading') },
	      header
	    );
	  },
	
	  renderAnchor: function renderAnchor(header, headerRole) {
	    return _react2['default'].createElement(
	      'a',
	      {
	        href: '#' + (this.props.id || ''),
	        'aria-controls': this.props.collapsible ? this.props.id : null,
	        className: this.isExpanded() ? null : 'collapsed',
	        'aria-expanded': this.isExpanded(),
	        'aria-selected': this.isExpanded(),
	        onClick: this.handleSelect,
	        role: headerRole
	      },
	      header
	    );
	  },
	
	  renderCollapsibleTitle: function renderCollapsibleTitle(header, headerRole) {
	    return _react2['default'].createElement(
	      'h4',
	      { className: _utilsBootstrapUtils.prefix(this.props, 'title'), role: 'presentation' },
	      this.renderAnchor(header, headerRole)
	    );
	  },
	
	  renderFooter: function renderFooter() {
	    if (!this.props.footer) {
	      return null;
	    }
	
	    return _react2['default'].createElement(
	      'div',
	      { className: _utilsBootstrapUtils.prefix(this.props, 'footer') },
	      this.props.footer
	    );
	  }
	});
	
	var PANEL_STATES = _styleMaps.State.values().concat(_styleMaps.DEFAULT, _styleMaps.PRIMARY);
	
	exports['default'] = _utilsBootstrapUtils.bsStyles(PANEL_STATES, _styleMaps.DEFAULT, _utilsBootstrapUtils.bsClass('panel', Panel));
	module.exports = exports['default'];

/***/ },

/***/ 626:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _objectWithoutProperties = __webpack_require__(14)['default'];
	
	var _extends = __webpack_require__(6)['default'];
	
	var _interopRequireDefault = __webpack_require__(5)['default'];
	
	exports.__esModule = true;
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsBootstrapUtils = __webpack_require__(12);
	
	var _utilsValidComponentChildren = __webpack_require__(44);
	
	var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);
	
	var PanelGroup = _react2['default'].createClass({
	  displayName: 'PanelGroup',
	
	  propTypes: {
	    accordion: _react2['default'].PropTypes.bool,
	    activeKey: _react2['default'].PropTypes.any,
	    className: _react2['default'].PropTypes.string,
	    children: _react2['default'].PropTypes.node,
	    defaultActiveKey: _react2['default'].PropTypes.any,
	    onSelect: _react2['default'].PropTypes.func
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      accordion: false
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    var defaultActiveKey = this.props.defaultActiveKey;
	
	    return {
	      activeKey: defaultActiveKey
	    };
	  },
	
	  render: function render() {
	    var classes = _utilsBootstrapUtils.getClassSet(this.props);
	    var _props = this.props;
	    var className = _props.className;
	
	    var props = _objectWithoutProperties(_props, ['className']);
	
	    if (this.props.accordion) {
	      props.role = 'tablist';
	    }
	    return _react2['default'].createElement(
	      'div',
	      _extends({}, props, { className: _classnames2['default'](className, classes), onSelect: null }),
	      _utilsValidComponentChildren2['default'].map(props.children, this.renderPanel)
	    );
	  },
	
	  renderPanel: function renderPanel(child, index) {
	    var activeKey = this.props.activeKey != null ? this.props.activeKey : this.state.activeKey;
	
	    var props = {
	      bsStyle: child.props.bsStyle || this.props.bsStyle,
	      key: child.key ? child.key : index,
	      ref: child.ref
	    };
	
	    if (this.props.accordion) {
	      props.headerRole = 'tab';
	      props.panelRole = 'tabpanel';
	      props.collapsible = true;
	      props.expanded = child.props.eventKey === activeKey;
	      props.onSelect = this.handleSelect;
	    }
	
	    return _react.cloneElement(child, props);
	  },
	
	  shouldComponentUpdate: function shouldComponentUpdate() {
	    // Defer any updates to this component during the `onSelect` handler.
	    return !this._isChanging;
	  },
	
	  handleSelect: function handleSelect(key, e) {
	    e.preventDefault();
	
	    if (this.props.onSelect) {
	      this._isChanging = true;
	      this.props.onSelect(key, e);
	      this._isChanging = false;
	    }
	
	    if (this.state.activeKey === key) {
	      key = null;
	    }
	
	    this.setState({
	      activeKey: key
	    });
	  }
	});
	
	exports['default'] = _utilsBootstrapUtils.bsClass('panel-group', PanelGroup);
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaGFyZWQvY29udGFpbmVycy9Vc2VyL2NvbXBvbmVudHMvUHJvZmlsZS9TaWRlYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NoYXJlZC9jb250YWluZXJzL1VzZXIvY29tcG9uZW50cy9Qcm9maWxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9QYW5lbC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvUGFuZWxHcm91cC5qcyJdLCJuYW1lcyI6WyJsaW5lSGVpZ2h0IiwiY29sb3IiLCJib3JkZXIiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdZO0FBQ0osb0JBQ0k7QUFBQTtBQUFBLG1CQUFLLFdBQVUscUJBQWY7QUFDRTtBQUFBO0FBQUEsdUJBQUksT0FBTyxFQUFDQSxZQUFXLE1BQVosRUFBWDtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUNJLHFDQUFHLGNBRFA7QUFFSSw4Q0FBYSxFQUFDQyxPQUFPLFNBQVIsRUFGakI7QUFBQTtBQUFBO0FBREosc0JBREo7QUFRSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFDSSxxQ0FBRyxZQURQO0FBRUksOENBQWEsRUFBQ0EsT0FBTyxTQUFSLEVBRmpCO0FBQUE7QUFBQTtBQURKLHNCQVJKO0FBZUk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQ0kscUNBQUcsZUFEUDtBQUVJLDhDQUFhLEVBQUNBLE9BQU8sU0FBUixFQUZqQjtBQUFBO0FBQUE7QUFESjtBQWZKLGtCQURGO0FBeUJFO0FBQUE7QUFBQTtBQUNJLDZCQUFHLGNBRFA7QUFFSSwwQ0FBZ0IsZUFGcEI7QUFHSSxnQ0FBTyxFQUFDQyxRQUFRLG1CQUFULEVBQThCRCxPQUFPLFNBQXJDLEVBQWdERSxXQUFXLEVBQTNE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QUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQixVQUFVLHlFQUF5RTtBQUNwRztBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsRUFBQzs7QUFFRDtBQUNBLHFDIiwiZmlsZSI6IjAuY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9ICAgICAgICAgICAgIGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGViYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcC1Qcm9maWxlX19TaWRlYmFyXCI+XG4gICAgICAgICAgICAgIDx1bCBzdHlsZT17e2xpbmVIZWlnaHQ6JzQwcHgnfX0+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG89XCJ1c2VyL3Byb2ZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVTdHlsZT17e2NvbG9yOiAnI2ZmNjkwZid9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgTXkgUHJvZmlsZVxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG89XCJ1c2VyL21lZGlhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlU3R5bGU9e3tjb2xvcjogJyNmZjY5MGYnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFBob3RvcyBhbmQgVmlkZW9cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvPVwidXNlci9zZWN1cml0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVN0eWxlPXt7Y29sb3I6ICcjZmY2OTBmJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICBUcnVzdCBhbmQgVmVyaWZpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgdG89XCJ1c2VyL3Byb2ZpbGVcIlxuICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiYnRuIGJ0bi1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e2JvcmRlcjogJzFweCBzb2xpZCAjZmY2OTBmJywgY29sb3I6ICcjZmY2OTBmJywgbWFyZ2luVG9wOiAyMH19PlxuICAgICAgICAgICAgICAgICAgVmlldyBQcm9maWxlXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zaGFyZWQvY29udGFpbmVycy9Vc2VyL2NvbXBvbmVudHMvUHJvZmlsZS9TaWRlYmFyL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQYW5lbCAgICAgICAgICAgICAgICBmcm9tICdyZWFjdC1ib290c3RyYXAvbGliL1BhbmVsJztcbmltcG9ydCBQYW5lbEdyb3VwICAgICAgICAgICBmcm9tICdyZWFjdC1ib290c3RyYXAvbGliL1BhbmVsR3JvdXAnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcC1Qcm9maWxlXCI+XG4gICAgICAgICAgICAgICAgPFBhbmVsR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxQYW5lbCBoZWFkZXI9XCJBY2NvdW50IFNldHRpbmdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBIZWxsbyBUaGVyZVxuICAgICAgICAgICAgICAgICAgICA8L1BhbmVsPlxuXG4gICAgICAgICAgICAgICAgICAgIDxQYW5lbCBoZWFkZXI9XCJPcHRpb25hbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgSGVsbG8gVGhlcmVcbiAgICAgICAgICAgICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgICAgICAgICA8L1BhbmVsR3JvdXA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2hhcmVkL2NvbnRhaW5lcnMvVXNlci9jb21wb25lbnRzL1Byb2ZpbGUvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0LXdpdGhvdXQtcHJvcGVydGllcycpWydkZWZhdWx0J107XG5cbnZhciBfZXh0ZW5kcyA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJylbJ2RlZmF1bHQnXTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHQnKVsnZGVmYXVsdCddO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3N0eWxlTWFwcyA9IHJlcXVpcmUoJy4vc3R5bGVNYXBzJyk7XG5cbnZhciBfdXRpbHNCb290c3RyYXBVdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMvYm9vdHN0cmFwVXRpbHMnKTtcblxudmFyIF9Db2xsYXBzZSA9IHJlcXVpcmUoJy4vQ29sbGFwc2UnKTtcblxudmFyIF9Db2xsYXBzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Db2xsYXBzZSk7XG5cbnZhciBQYW5lbCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUGFuZWwnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGNvbGxhcHNpYmxlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgICBoZWFkZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubm9kZSxcbiAgICBpZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLCBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIGZvb3RlcjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ub2RlLFxuICAgIGRlZmF1bHRFeHBhbmRlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICAgIGV4cGFuZGVkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgZXZlbnRLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55LFxuICAgIGhlYWRlclJvbGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIHBhbmVsUm9sZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICBvbkVudGVyOiBfQ29sbGFwc2UyWydkZWZhdWx0J10ucHJvcFR5cGVzLm9uRW50ZXIsXG4gICAgb25FbnRlcmluZzogX0NvbGxhcHNlMlsnZGVmYXVsdCddLnByb3BUeXBlcy5vbkVudGVyaW5nLFxuICAgIG9uRW50ZXJlZDogX0NvbGxhcHNlMlsnZGVmYXVsdCddLnByb3BUeXBlcy5vbkVudGVyZWQsXG4gICAgb25FeGl0OiBfQ29sbGFwc2UyWydkZWZhdWx0J10ucHJvcFR5cGVzLm9uRXhpdCxcbiAgICBvbkV4aXRpbmc6IF9Db2xsYXBzZTJbJ2RlZmF1bHQnXS5wcm9wVHlwZXMub25FeGl0aW5nLFxuICAgIG9uRXhpdGVkOiBfQ29sbGFwc2UyWydkZWZhdWx0J10ucHJvcFR5cGVzLm9uRXhpdGVkXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlZmF1bHRFeHBhbmRlZDogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBleHBhbmRlZDogdGhpcy5wcm9wcy5kZWZhdWx0RXhwYW5kZWRcbiAgICB9O1xuICB9LFxuXG4gIGhhbmRsZVNlbGVjdDogZnVuY3Rpb24gaGFuZGxlU2VsZWN0KGUpIHtcbiAgICBlLnBlcnNpc3QoKTtcbiAgICBlLnNlbGVjdGVkID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KHRoaXMucHJvcHMuZXZlbnRLZXksIGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKGUuc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuaGFuZGxlVG9nZ2xlKCk7XG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZVRvZ2dsZTogZnVuY3Rpb24gaGFuZGxlVG9nZ2xlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBleHBhbmRlZDogIXRoaXMuc3RhdGUuZXhwYW5kZWQgfSk7XG4gIH0sXG5cbiAgaXNFeHBhbmRlZDogZnVuY3Rpb24gaXNFeHBhbmRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5leHBhbmRlZCAhPSBudWxsID8gdGhpcy5wcm9wcy5leHBhbmRlZCA6IHRoaXMuc3RhdGUuZXhwYW5kZWQ7XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGhlYWRlclJvbGUgPSBfcHJvcHMuaGVhZGVyUm9sZTtcbiAgICB2YXIgcGFuZWxSb2xlID0gX3Byb3BzLnBhbmVsUm9sZTtcblxuICAgIHZhciBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnaGVhZGVyUm9sZScsICdwYW5lbFJvbGUnXSk7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6IF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBfdXRpbHNCb290c3RyYXBVdGlscy5nZXRDbGFzc1NldCh0aGlzLnByb3BzKSksXG4gICAgICAgIGlkOiB0aGlzLnByb3BzLmNvbGxhcHNpYmxlID8gbnVsbCA6IHRoaXMucHJvcHMuaWQsIG9uU2VsZWN0OiBudWxsXG4gICAgICB9KSxcbiAgICAgIHRoaXMucmVuZGVySGVhZGluZyhoZWFkZXJSb2xlKSxcbiAgICAgIHRoaXMucHJvcHMuY29sbGFwc2libGUgPyB0aGlzLnJlbmRlckNvbGxhcHNpYmxlQm9keShwYW5lbFJvbGUpIDogdGhpcy5yZW5kZXJCb2R5KCksXG4gICAgICB0aGlzLnJlbmRlckZvb3RlcigpXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJDb2xsYXBzaWJsZUJvZHk6IGZ1bmN0aW9uIHJlbmRlckNvbGxhcHNpYmxlQm9keShwYW5lbFJvbGUpIHtcbiAgICB2YXIgY29sbGFwc2VQcm9wcyA9IHtcbiAgICAgIG9uRW50ZXI6IHRoaXMucHJvcHMub25FbnRlcixcbiAgICAgIG9uRW50ZXJpbmc6IHRoaXMucHJvcHMub25FbnRlcmluZyxcbiAgICAgIG9uRW50ZXJlZDogdGhpcy5wcm9wcy5vbkVudGVyZWQsXG4gICAgICBvbkV4aXQ6IHRoaXMucHJvcHMub25FeGl0LFxuICAgICAgb25FeGl0aW5nOiB0aGlzLnByb3BzLm9uRXhpdGluZyxcbiAgICAgIG9uRXhpdGVkOiB0aGlzLnByb3BzLm9uRXhpdGVkLFxuICAgICAgJ2luJzogdGhpcy5pc0V4cGFuZGVkKClcbiAgICB9O1xuICAgIHZhciBwcm9wcyA9IHtcbiAgICAgIGNsYXNzTmFtZTogX3V0aWxzQm9vdHN0cmFwVXRpbHMucHJlZml4KHRoaXMucHJvcHMsICdjb2xsYXBzZScpLFxuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICByZWY6ICdwYW5lbCcsXG4gICAgICAnYXJpYS1oaWRkZW4nOiAhdGhpcy5pc0V4cGFuZGVkKClcbiAgICB9O1xuICAgIGlmIChwYW5lbFJvbGUpIHtcbiAgICAgIHByb3BzLnJvbGUgPSBwYW5lbFJvbGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgX0NvbGxhcHNlMlsnZGVmYXVsdCddLFxuICAgICAgY29sbGFwc2VQcm9wcyxcbiAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIHRoaXMucmVuZGVyQm9keSgpXG4gICAgICApXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJCb2R5OiBmdW5jdGlvbiByZW5kZXJCb2R5KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgYWxsQ2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIHZhciBib2R5RWxlbWVudHMgPSBbXTtcbiAgICB2YXIgcGFuZWxCb2R5Q2hpbGRyZW4gPSBbXTtcbiAgICB2YXIgYm9keUNsYXNzID0gX3V0aWxzQm9vdHN0cmFwVXRpbHMucHJlZml4KHRoaXMucHJvcHMsICdib2R5Jyk7XG5cbiAgICBmdW5jdGlvbiBnZXRQcm9wcygpIHtcbiAgICAgIHJldHVybiB7IGtleTogYm9keUVsZW1lbnRzLmxlbmd0aCB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFBhbmVsQ2hpbGQoY2hpbGQpIHtcbiAgICAgIGJvZHlFbGVtZW50cy5wdXNoKF9yZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGdldFByb3BzKCkpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRQYW5lbEJvZHkoY2hpbGRyZW4pIHtcbiAgICAgIGJvZHlFbGVtZW50cy5wdXNoKF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgX2V4dGVuZHMoeyBjbGFzc05hbWU6IGJvZHlDbGFzcyB9LCBnZXRQcm9wcygpKSxcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgICkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1heWJlUmVuZGVyUGFuZWxCb2R5KCkge1xuICAgICAgaWYgKHBhbmVsQm9keUNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFkZFBhbmVsQm9keShwYW5lbEJvZHlDaGlsZHJlbik7XG4gICAgICBwYW5lbEJvZHlDaGlsZHJlbiA9IFtdO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBlZGdlIGNhc2VzIHdoZXJlIHdlIHNob3VsZCBub3QgaXRlcmF0ZSB0aHJvdWdoIGNoaWxkcmVuLlxuICAgIGlmICghQXJyYXkuaXNBcnJheShhbGxDaGlsZHJlbikgfHwgYWxsQ2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAodGhpcy5zaG91bGRSZW5kZXJGaWxsKGFsbENoaWxkcmVuKSkge1xuICAgICAgICBhZGRQYW5lbENoaWxkKGFsbENoaWxkcmVuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZFBhbmVsQm9keShhbGxDaGlsZHJlbik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsbENoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmIChfdGhpcy5zaG91bGRSZW5kZXJGaWxsKGNoaWxkKSkge1xuICAgICAgICAgIG1heWJlUmVuZGVyUGFuZWxCb2R5KCk7XG5cbiAgICAgICAgICAvLyBTZXBhcmF0ZWx5IGFkZCB0aGUgZmlsbGVkIGVsZW1lbnQuXG4gICAgICAgICAgYWRkUGFuZWxDaGlsZChjaGlsZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFuZWxCb2R5Q2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBtYXliZVJlbmRlclBhbmVsQm9keSgpO1xuICAgIH1cblxuICAgIHJldHVybiBib2R5RWxlbWVudHM7XG4gIH0sXG5cbiAgc2hvdWxkUmVuZGVyRmlsbDogZnVuY3Rpb24gc2hvdWxkUmVuZGVyRmlsbChjaGlsZCkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uaXNWYWxpZEVsZW1lbnQoY2hpbGQpICYmIGNoaWxkLnByb3BzLmZpbGwgIT0gbnVsbDtcbiAgfSxcblxuICByZW5kZXJIZWFkaW5nOiBmdW5jdGlvbiByZW5kZXJIZWFkaW5nKGhlYWRlclJvbGUpIHtcbiAgICB2YXIgaGVhZGVyID0gdGhpcy5wcm9wcy5oZWFkZXI7XG5cbiAgICBpZiAoIWhlYWRlcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCFfcmVhY3QyWydkZWZhdWx0J10uaXNWYWxpZEVsZW1lbnQoaGVhZGVyKSB8fCBBcnJheS5pc0FycmF5KGhlYWRlcikpIHtcbiAgICAgIGhlYWRlciA9IHRoaXMucHJvcHMuY29sbGFwc2libGUgPyB0aGlzLnJlbmRlckNvbGxhcHNpYmxlVGl0bGUoaGVhZGVyLCBoZWFkZXJSb2xlKSA6IGhlYWRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKF91dGlsc0Jvb3RzdHJhcFV0aWxzLnByZWZpeCh0aGlzLnByb3BzLCAndGl0bGUnKSwgaGVhZGVyLnByb3BzLmNsYXNzTmFtZSk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmNvbGxhcHNpYmxlKSB7XG4gICAgICAgIGhlYWRlciA9IF9yZWFjdC5jbG9uZUVsZW1lbnQoaGVhZGVyLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgICAgY2hpbGRyZW46IHRoaXMucmVuZGVyQW5jaG9yKGhlYWRlci5wcm9wcy5jaGlsZHJlbiwgaGVhZGVyUm9sZSlcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoZWFkZXIgPSBfcmVhY3QuY2xvbmVFbGVtZW50KGhlYWRlciwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiBfdXRpbHNCb290c3RyYXBVdGlscy5wcmVmaXgodGhpcy5wcm9wcywgJ2hlYWRpbmcnKSB9LFxuICAgICAgaGVhZGVyXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJBbmNob3I6IGZ1bmN0aW9uIHJlbmRlckFuY2hvcihoZWFkZXIsIGhlYWRlclJvbGUpIHtcbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnYScsXG4gICAgICB7XG4gICAgICAgIGhyZWY6ICcjJyArICh0aGlzLnByb3BzLmlkIHx8ICcnKSxcbiAgICAgICAgJ2FyaWEtY29udHJvbHMnOiB0aGlzLnByb3BzLmNvbGxhcHNpYmxlID8gdGhpcy5wcm9wcy5pZCA6IG51bGwsXG4gICAgICAgIGNsYXNzTmFtZTogdGhpcy5pc0V4cGFuZGVkKCkgPyBudWxsIDogJ2NvbGxhcHNlZCcsXG4gICAgICAgICdhcmlhLWV4cGFuZGVkJzogdGhpcy5pc0V4cGFuZGVkKCksXG4gICAgICAgICdhcmlhLXNlbGVjdGVkJzogdGhpcy5pc0V4cGFuZGVkKCksXG4gICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlU2VsZWN0LFxuICAgICAgICByb2xlOiBoZWFkZXJSb2xlXG4gICAgICB9LFxuICAgICAgaGVhZGVyXG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJDb2xsYXBzaWJsZVRpdGxlOiBmdW5jdGlvbiByZW5kZXJDb2xsYXBzaWJsZVRpdGxlKGhlYWRlciwgaGVhZGVyUm9sZSkge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICdoNCcsXG4gICAgICB7IGNsYXNzTmFtZTogX3V0aWxzQm9vdHN0cmFwVXRpbHMucHJlZml4KHRoaXMucHJvcHMsICd0aXRsZScpLCByb2xlOiAncHJlc2VudGF0aW9uJyB9LFxuICAgICAgdGhpcy5yZW5kZXJBbmNob3IoaGVhZGVyLCBoZWFkZXJSb2xlKVxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyRm9vdGVyOiBmdW5jdGlvbiByZW5kZXJGb290ZXIoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmZvb3Rlcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogX3V0aWxzQm9vdHN0cmFwVXRpbHMucHJlZml4KHRoaXMucHJvcHMsICdmb290ZXInKSB9LFxuICAgICAgdGhpcy5wcm9wcy5mb290ZXJcbiAgICApO1xuICB9XG59KTtcblxudmFyIFBBTkVMX1NUQVRFUyA9IF9zdHlsZU1hcHMuU3RhdGUudmFsdWVzKCkuY29uY2F0KF9zdHlsZU1hcHMuREVGQVVMVCwgX3N0eWxlTWFwcy5QUklNQVJZKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gX3V0aWxzQm9vdHN0cmFwVXRpbHMuYnNTdHlsZXMoUEFORUxfU1RBVEVTLCBfc3R5bGVNYXBzLkRFRkFVTFQsIF91dGlsc0Jvb3RzdHJhcFV0aWxzLmJzQ2xhc3MoJ3BhbmVsJywgUGFuZWwpKTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1ib290c3RyYXAvbGliL1BhbmVsLmpzXG4vLyBtb2R1bGUgaWQgPSA2MjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdC13aXRob3V0LXByb3BlcnRpZXMnKVsnZGVmYXVsdCddO1xuXG52YXIgX2V4dGVuZHMgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpWydkZWZhdWx0J107XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0JylbJ2RlZmF1bHQnXTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF91dGlsc0Jvb3RzdHJhcFV0aWxzID0gcmVxdWlyZSgnLi91dGlscy9ib290c3RyYXBVdGlscycpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbiA9IHJlcXVpcmUoJy4vdXRpbHMvVmFsaWRDb21wb25lbnRDaGlsZHJlbicpO1xuXG52YXIgX3V0aWxzVmFsaWRDb21wb25lbnRDaGlsZHJlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG52YXIgUGFuZWxHcm91cCA9IF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUGFuZWxHcm91cCcsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgYWNjb3JkaW9uOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG4gICAgYWN0aXZlS2V5OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmFueSxcbiAgICBjbGFzc05hbWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm5vZGUsXG4gICAgZGVmYXVsdEFjdGl2ZUtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuY1xuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhY2NvcmRpb246IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICB2YXIgZGVmYXVsdEFjdGl2ZUtleSA9IHRoaXMucHJvcHMuZGVmYXVsdEFjdGl2ZUtleTtcblxuICAgIHJldHVybiB7XG4gICAgICBhY3RpdmVLZXk6IGRlZmF1bHRBY3RpdmVLZXlcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBjbGFzc2VzID0gX3V0aWxzQm9vdHN0cmFwVXRpbHMuZ2V0Q2xhc3NTZXQodGhpcy5wcm9wcyk7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWU7XG5cbiAgICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2NsYXNzTmFtZSddKTtcblxuICAgIGlmICh0aGlzLnByb3BzLmFjY29yZGlvbikge1xuICAgICAgcHJvcHMucm9sZSA9ICd0YWJsaXN0JztcbiAgICB9XG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBfZXh0ZW5kcyh7fSwgcHJvcHMsIHsgY2xhc3NOYW1lOiBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXShjbGFzc05hbWUsIGNsYXNzZXMpLCBvblNlbGVjdDogbnVsbCB9KSxcbiAgICAgIF91dGlsc1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10ubWFwKHByb3BzLmNoaWxkcmVuLCB0aGlzLnJlbmRlclBhbmVsKVxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyUGFuZWw6IGZ1bmN0aW9uIHJlbmRlclBhbmVsKGNoaWxkLCBpbmRleCkge1xuICAgIHZhciBhY3RpdmVLZXkgPSB0aGlzLnByb3BzLmFjdGl2ZUtleSAhPSBudWxsID8gdGhpcy5wcm9wcy5hY3RpdmVLZXkgOiB0aGlzLnN0YXRlLmFjdGl2ZUtleTtcblxuICAgIHZhciBwcm9wcyA9IHtcbiAgICAgIGJzU3R5bGU6IGNoaWxkLnByb3BzLmJzU3R5bGUgfHwgdGhpcy5wcm9wcy5ic1N0eWxlLFxuICAgICAga2V5OiBjaGlsZC5rZXkgPyBjaGlsZC5rZXkgOiBpbmRleCxcbiAgICAgIHJlZjogY2hpbGQucmVmXG4gICAgfTtcblxuICAgIGlmICh0aGlzLnByb3BzLmFjY29yZGlvbikge1xuICAgICAgcHJvcHMuaGVhZGVyUm9sZSA9ICd0YWInO1xuICAgICAgcHJvcHMucGFuZWxSb2xlID0gJ3RhYnBhbmVsJztcbiAgICAgIHByb3BzLmNvbGxhcHNpYmxlID0gdHJ1ZTtcbiAgICAgIHByb3BzLmV4cGFuZGVkID0gY2hpbGQucHJvcHMuZXZlbnRLZXkgPT09IGFjdGl2ZUtleTtcbiAgICAgIHByb3BzLm9uU2VsZWN0ID0gdGhpcy5oYW5kbGVTZWxlY3Q7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKTtcbiAgfSxcblxuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpIHtcbiAgICAvLyBEZWZlciBhbnkgdXBkYXRlcyB0byB0aGlzIGNvbXBvbmVudCBkdXJpbmcgdGhlIGBvblNlbGVjdGAgaGFuZGxlci5cbiAgICByZXR1cm4gIXRoaXMuX2lzQ2hhbmdpbmc7XG4gIH0sXG5cbiAgaGFuZGxlU2VsZWN0OiBmdW5jdGlvbiBoYW5kbGVTZWxlY3Qoa2V5LCBlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIHRoaXMuX2lzQ2hhbmdpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChrZXksIGUpO1xuICAgICAgdGhpcy5faXNDaGFuZ2luZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZUtleSA9PT0ga2V5KSB7XG4gICAgICBrZXkgPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlS2V5OiBrZXlcbiAgICB9KTtcbiAgfVxufSk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IF91dGlsc0Jvb3RzdHJhcFV0aWxzLmJzQ2xhc3MoJ3BhbmVsLWdyb3VwJywgUGFuZWxHcm91cCk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9QYW5lbEdyb3VwLmpzXG4vLyBtb2R1bGUgaWQgPSA2MjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==