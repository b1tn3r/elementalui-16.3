'use strict';

var blacklist = require('blacklist');
var classnames = require('classnames');
var React = require('react');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');

module.exports = createReactClass({
	displayName: 'Form',
	propTypes: {
		children: PropTypes.node.isRequired,
		className: PropTypes.string,
		component: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
		type: PropTypes.oneOf(['basic', 'horizontal', 'inline'])
	},
	getDefaultProps: function getDefaultProps() {
		return {
			component: 'form',
			type: 'basic'
		};
	},
	render: function render() {
		var props = blacklist(this.props, 'children', 'type', 'component');
		props.className = classnames('Form', 'Form--' + this.props.type, this.props.className);

		return React.createElement(this.props.component, props, this.props.children);
	}
});
