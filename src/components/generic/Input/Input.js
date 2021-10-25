import { Component } from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

class Input extends Component {
  render() {
    const { type, value, disabled, className, min, max } = this.props;
    return <input className={["timer-input timer-font", className].join(" ")} 
      type={type} 
      value={value} 
      min={min}
      max={max}
      disabled={disabled}></input>;
  }
}
Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  disabled: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number
}

Input.defaultProps = {
  type: "number",
  disabled: false,
  min: 0
}

export default Input;