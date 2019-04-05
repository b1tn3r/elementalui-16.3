'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');

var _react2 = _interopRequireDefault(_react);

var _blacklist = require('blacklist');

var _blacklist2 = _interopRequireDefault(_blacklist);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

module.exports = createReactClass({
	displayName: 'ResponsiveText',
	propTypes: {
		hiddenLG: PropTypes.string,
		hiddenMD: PropTypes.string,
		hiddenSM: PropTypes.string,
		hiddenXS: PropTypes.string,
		visibleLG: PropTypes.string,
		visibleMD: PropTypes.string,
		visibleSM: PropTypes.string,
		visibleXS: PropTypes.string
	},
	getInitialState: function getInitialState() {
		return {
			windowWidth: typeof window !== 'undefined' ? window.innerWidth : 0
		};
	},
	componentDidMount: function componentDidMount() {
		if (typeof window !== 'undefined') window.addEventListener('resize', this.handleResize);
	},
	componentWillUnmount: function componentWillUnmount() {
		if (typeof window !== 'undefined') window.removeEventListener('resize', this.handleResize);
	},
	handleResize: function handleResize() {
		this.setState({
			windowWidth: typeof window !== 'undefined' ? window.innerWidth : 0
		});
	},
	render: function render() {
		var _props = this.props;
		var hiddenXS = _props.hiddenXS;
		var hiddenSM = _props.hiddenSM;
		var hiddenMD = _props.hiddenMD;
		var hiddenLG = _props.hiddenLG;
		var visibleXS = _props.visibleXS;
		var visibleSM = _props.visibleSM;
		var visibleMD = _props.visibleMD;
		var visibleLG = _props.visibleLG;
		var windowWidth = this.state.windowWidth;

		var text = undefined;

		// set widths / flex-basis
		if (windowWidth < _constants2['default'].breakpoint.xs) {
			text = visibleXS || hiddenSM || hiddenMD || hiddenLG;
		} else if (windowWidth < _constants2['default'].breakpoint.sm) {
			text = hiddenXS || visibleSM || hiddenMD || hiddenLG;
		} else if (windowWidth < _constants2['default'].breakpoint.md) {
			text = hiddenXS || hiddenSM || visibleMD || hiddenLG;
		} else {
			text = hiddenXS || hiddenSM || hiddenMD || visibleLG;
		}

		var props = (0, _blacklist2['default'])(this.props, {
			'hiddenXS': true,
			'hiddenSM': true,
			'hiddenMD': true,
			'hiddenLG': true,
			'visibleXS': true,
			'visibleSM': true,
			'visibleMD': true,
			'visibleLG': true
		});

		return _react2['default'].createElement(
			'span',
			props,
			text
		);
	}
});
