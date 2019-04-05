'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');
var classNames = require('classnames');

module.exports = createReactClass({
	displayName: 'FormRow',
	propTypes: {
		className: PropTypes.string
	},
	render: function render() {
		var className = classNames('FormRow', this.props.className);

		return React.createElement(
			'div',
			{ className: className },
			this.props.children
		);
	}
});
