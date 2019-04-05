'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');
var classNames = require('classnames');

var icons = require('../Octicons').map;
var validNames = require('../Octicons').keys;

var Glyph = createReactClass({
	displayName: 'Glyph',
	propTypes: {
		className: PropTypes.string,
		icon: PropTypes.oneOf(validNames),
		type: PropTypes.oneOf(['danger', 'default', 'muted', 'primary', 'success', 'warning'])
	},
	render: function render() {
		// classes
		var className = classNames('Glyph__icon', icons[this.props.icon].className, this.props.type ? 'IconField__icon-color--' + this.props.type : null, this.props.className);
		return React.createElement('i', { className: className });
	}
});

module.exports = Glyph;
module.exports.names = validNames;
