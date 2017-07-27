'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

require('./index.css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DIS_BG_COLOR = 'rgb(193, 193, 193)';
/*
按钮背景色过渡变化
props:
	text: {!string},
	click: {!fn},
	bgColor: {!color},
	transBgColor: {!color},
	disable: {?boolean},
	disableBgColor: {?color},
	loading: {?boolean}
*/

var TransBtn = function (_Component) {
	(0, _inherits3.default)(TransBtn, _Component);

	function TransBtn(props) {
		(0, _classCallCheck3.default)(this, TransBtn);

		var _this = (0, _possibleConstructorReturn3.default)(this, (TransBtn.__proto__ || (0, _getPrototypeOf2.default)(TransBtn)).call(this, props));

		_this.state = {
			loading: false
		};
		_this.click = _this.click.bind(_this);
		_this.transEnd = _this.transEnd.bind(_this);
		_this.touchStart = _this.touchStart.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(TransBtn, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    text = _props.text,
			    bgColor = _props.bgColor,
			    disableBgColor = _props.disableBgColor,
			    disable = _props.disable;


			if (disable) {
				return _react2.default.createElement(
					'button',
					{
						className: 'trans-btn disabled',
						style: { backgroundColor: disableBgColor || DIS_BG_COLOR } },
					text
				);
			}

			return _react2.default.createElement(
				'button',
				{
					ref: 'btn',
					className: 'trans-btn ' + (this.state.loading ? 'loading' : ''),
					style: { backgroundColor: bgColor },
					onTouchStart: this.touchStart,
					onTransitionEnd: this.transEnd,
					onClick: this.click },
				text
			);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			var _this2 = this;

			if (this.props.loading && !prevProps.loading) {
				setTimeout(function () {
					if (_this2.props.loading) {
						_this2.setState({
							loading: true
						});
					}
				}, 200);
			}

			if (!this.props.loading && prevProps.loading) {
				this.clicking = false;
				this.setState({
					loading: false
				});
			}
		}
	}, {
		key: 'touchStart',
		value: function touchStart() {
			if (this.transing) return;

			this.transing = true;
			this.transTimes = 0;
			this.refs.btn.style.backgroundColor = this.props.transBgColor || this.props.bgColor;
		}
	}, {
		key: 'transEnd',
		value: function transEnd() {
			if (++this.transTimes == 2) {
				this.transing = false;
			}
			this.refs.btn.style.backgroundColor = this.props.bgColor;
		}
	}, {
		key: 'click',
		value: function click(e) {
			e.stopPropagation();

			var loading = this.props.loading;

			if (loading !== undefined && this.clicking) return;

			this.clicking = true;
			this.props.click && this.props.click();
		}
	}]);
	return TransBtn;
}(_react.Component);

exports.default = TransBtn;