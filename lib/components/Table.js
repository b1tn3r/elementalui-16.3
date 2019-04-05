'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');

var _react2 = _interopRequireDefault(_react);

module.exports = createReactClass({
	displayName: 'Table',

	propTypes: {
		children: PropTypes.any,
		className: PropTypes.string
	},

	render: function render() {
		// classes
		var className = (0, _classnames2['default'])('Table', this.props.className);

		// render table element
		return _react2['default'].createElement('table', _extends({}, this.props, { className: className }));
	}
});
