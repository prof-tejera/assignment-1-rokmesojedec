import { Component } from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

class Button extends Component {

  render() {
    const {disabled, onClick, children, label, className} = this.props;
    return <button 
      data-tooltip-bottom={label}
      className={['btn', className].join(" ")} 
      disabled={disabled} 
      onClick={onClick}>
        {children}
    </button>;
  }
}

export default Button;

Button.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  disabled: false,
  className: null,
  label: null,
  onClick: ()=>{ console.log("button clicked!"); }
}