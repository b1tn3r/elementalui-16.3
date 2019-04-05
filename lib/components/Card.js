'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');
var classNames = require('classnames');

module.exports = createReactClass({
	displayName: 'Card',
	propTypes: {
		children: PropTypes.node.isRequired,
		className: PropTypes.string
	},
	render: function render() {
		var className = classNames('Card', this.props.className);

		return React.createElement('div', _extends({}, this.props, { className: className }));
	}
});
