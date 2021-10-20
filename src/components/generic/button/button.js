import { Component } from 'react';
import './Button.scss';

class Button extends Component {
  render() {
    const disabled = this.props?.disabled ? this.props?.disabled  : false;
    const className = this.props?.className ? this.props.className : "btn-primary";
    return <button 
      className={['btn', className, this.props.color, this.props.size].join(" ")} 
      disabled={disabled} 
      onClick={this.props.onClick}>
        {this.props.text}
    </button>;
  }
}

export default Button;