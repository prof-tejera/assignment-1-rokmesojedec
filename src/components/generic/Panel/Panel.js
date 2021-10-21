import { Component } from 'react';
import './Panel.scss';

class Panel extends Component {
  render() {
    return <div class="shadow-5">{this.props.children}</div>;
  }
}

export default Panel;