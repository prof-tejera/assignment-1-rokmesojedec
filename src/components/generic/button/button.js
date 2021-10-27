import { Component } from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

class Button extends Component {

  render() {
    const {disabled, onClick, children, tooltip, className} = this.props;
    return <button 
      data-tooltip-bottom={tooltip}
      className={['btn', className].join(" ")} 
      disabled={disabled} 
      onClick={onClick}>
        {children ? children : "Button"}
    </button>;
  }
}

export default Button;

Button.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  tooltip: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  disabled: false,
  className: "primary bold raised",
  tooltip: null,
  onClick: ()=>{ console.log("button clicked!"); }
}