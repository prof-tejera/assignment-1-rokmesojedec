import { Component } from 'react';
import PropTypes from 'prop-types';

import './TimeComponent.scss';

class TimeComponent extends Component {
    render() {
        const { prependZero, value, label } = this.props;
        return <div>
            {prependZero && value < 10 &&
                <span className='timer-font zero'>0</span>
            }
            <span className='timer-font'>{value}</span>
            {label &&
                <div>{label}</div>
            }
        </div>;
    }
}

TimeComponent.propTypes = {
    value: PropTypes.number,
    prependZero: PropTypes.bool,
    label: PropTypes.string
}

TimeComponent.defaultProps = {
    value: 0,
    prependZero: false,
    label: null
}

export default TimeComponent;