'use strict';

var React = require('react');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');
var classNames = require('classnames');

var REGEXP_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validateEmail(value) {
	return REGEXP_EMAIL.test(value);
}

module.exports = createReactClass({
	displayName: 'EmailInputGroup',
	propTypes: {
		alwaysValidate: PropTypes.bool,
		className: PropTypes.string,
		invalidMessage: PropTypes.string,
		label: PropTypes.string,
		onChange: PropTypes.func,
		required: PropTypes.bool,
		requiredMessage: PropTypes.string,
		value: PropTypes.string
	},
	getDefaultProps: function getDefaultProps() {
		return {
			requiredMessage: 'Email address is required',
			invalidMessage: 'Please enter a valid email address'
		};
	},
	getInitialState: function getInitialState() {
		return {
			isValid: true,
			validationIsActive: this.props.alwaysValidate
		};
	},
	componentDidMount: function componentDidMount() {
		if (this.state.validationIsActive) {
			this.validateInput(this.props.value);
		}
	},
	componentWillReceiveProps: function componentWillReceiveProps(newProps) {
		if (this.state.validationIsActive) {
			if (newProps.value !== this.props.value && newProps.value !== this._lastChangeValue && !newProps.alwaysValidate) {
				// reset validation state if the value was changed outside the component
				return this.setState({
					isValid: true,
					validationIsActive: false
				});
			}
			this.validateInput(newProps.value);
		}
	},
	handleChange: function handleChange(e) {
		this._lastChangeValue = e.target.value;
		if (this.props.onChange) this.props.onChange(e);
	},
	handleBlur: function handleBlur() {
		if (!this.props.alwaysValidate) {
			this.setState({ validationIsActive: false });
		}
		this.validateInput(this.props.value);
	},
	validateInput: function validateInput(value) {
		var newState = {
			isValid: true
		};
		if (value.length && !validateEmail(value) || !value.length && this.props.required) {
			newState.isValid = false;
		}
		if (!newState.isValid) {
			newState.validationIsActive = true;
		}
		this.setState(newState);
	},
	render: function render() {
		var validationMessage;
		if (!this.state.isValid) {
			validationMessage = React.createElement(
				'div',
				{ className: 'form-validation is-invalid' },
				this.props.value.length ? this.props.invalidMessage : this.props.requiredMessage
			);
		}
		var formGroupClass = classNames('FormField', {
			'is-invalid': !this.state.isValid
		}, this.props.className);

		var componentLabel = this.props.label ? React.createElement(
			'label',
			{ className: 'FormLabel', htmlFor: 'inputEmail' },
			this.props.label
		) : null;

		return React.createElement(
			'div',
			{ className: formGroupClass },
			componentLabel,
			React.createElement('input', { onChange: this.handleChange, onBlur: this.handleBlur, value: this.props.value, type: 'email', className: 'FormInput', placeholder: 'Enter email', id: 'inputEmail' }),
			validationMessage
		);
	}
});
