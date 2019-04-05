'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');
var classNames = require('classnames');

var ALERT_TYPES = ['danger', 'error', // alias for danger
'info', 'primary', 'success', 'warning'];

module.exports = createReactClass({
	displayName: 'ElementalAlert',
	propTypes: {
		children: PropTypes.node.isRequired,
		className: PropTypes.string,
		type: PropTypes.oneOf(ALERT_TYPES).isRequired
	},
	render: function render() {
		var componentClass = classNames('Alert', 'Alert--' + this.props.type, this.props.className);

		return React.createElement(
			'div',
			{ className: componentClass },
			this.props.children
		);
	}
});
