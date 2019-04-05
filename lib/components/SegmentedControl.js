'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');

var _react2 = _interopRequireDefault(_react);

module.exports = createReactClass({
	displayName: 'SegmentedControl',

	propTypes: {
		className: PropTypes.string,
		equalWidthSegments: PropTypes.bool,
		onChange: PropTypes.func.isRequired,
		options: PropTypes.array.isRequired,
		type: PropTypes.oneOf(['default', 'muted', 'danger', 'info', 'primary', 'success', 'warning']),
		value: PropTypes.string
	},

	getDefaultProps: function getDefaultProps() {
		return {
			type: 'default'
		};
	},

	onChange: function onChange(value) {
		this.props.onChange(value);
	},

	render: function render() {
		var _this = this;

		var componentClassName = (0, _classnames2['default'])('SegmentedControl', 'SegmentedControl--' + this.props.type, {
			'SegmentedControl--equal-widths': this.props.equalWidthSegments
		}, this.props.className);

		var options = this.props.options.map(function (op) {

			var buttonClassName = (0, _classnames2['default'])('SegmentedControl__button', {
				'is-selected': op.value === _this.props.value
			});

			return _react2['default'].createElement(
				'span',
				{ key: 'option-' + op.value, className: 'SegmentedControl__item' },
				_react2['default'].createElement(
					'button',
					{ type: 'button', onClick: _this.onChange.bind(_this, op.value), className: buttonClassName },
					op.label
				)
			);
		});

		return _react2['default'].createElement(
			'div',
			{ className: componentClassName },
			options
		);
	}
});
