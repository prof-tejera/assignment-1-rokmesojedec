import { Component } from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

class Input extends Component {
  render() {
    const { type, value, disabled } = this.props;
    return <input type={type} value={value} disabled={disabled}></input>;
  }
}
Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  disabled: PropTypes.bool
}

Input.defaultProps = {
  type: "text",
  disabled: false
}

export default Input;