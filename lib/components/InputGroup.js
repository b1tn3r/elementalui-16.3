'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');
var classNames = require('classnames');
var blacklist = require('blacklist');

module.exports = createReactClass({
	displayName: 'InputGroup',
	propTypes: {
		className: PropTypes.string,
		contiguous: PropTypes.bool
	},
	render: function render() {
		// classes
		var className = classNames('InputGroup', {
			'InputGroup--contiguous': this.props.contiguous
		}, this.props.className);
		var props = blacklist(this.props, 'contiguous');

		return React.createElement('div', _extends({}, props, { className: className }));
	}
});

// expose the child to the top level export
module.exports.Section = require('./InputGroupSection');
