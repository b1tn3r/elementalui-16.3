'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');
var classNames = require('classnames');
var Spinner = require('./Spinner');

var icons = require('../Octicons').map;

module.exports = createReactClass({
	displayName: 'FormIcon',
	propTypes: {
		className: PropTypes.string,
		color: PropTypes.oneOf(['danger', 'default', 'muted', 'primary', 'success', 'warning']),
		fill: PropTypes.oneOf(['danger', 'default', 'muted', 'primary', 'success', 'warning']),
		icon: PropTypes.string,
		isLoading: PropTypes.bool,
		type: PropTypes.string
	},
	render: function render() {
		// classes
		var className = classNames('IconField__icon', icons[this.props.icon].className, this.props.fill ? 'IconField__icon-fill--' + this.props.fill : null, this.props.type ? 'IconField__icon-color--' + this.props.type : null, this.props.className);
		var component = this.props.isLoading ? React.createElement(Spinner, { size: 'sm' }) : React.createElement('div', { className: className });
		return component;
	}
});
