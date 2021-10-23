import { Component } from 'react';
import PropTypes from 'prop-types';

import './TimeComponent.scss';

class TimeComponent extends Component {
    render() {
        const { prependZero, value, label, className, showColon } = this.props;
        return <div className={['time-component', className, showColon ? "colon" : "no-colon"].join(" ")}>
            <div>
                {prependZero && value < 10 &&
                    <span className='timer-font zero'>0</span>
                }
                <span className={'timer-font' + (value === 0 ? ' zero' : '')}>{value}</span></div>
            {label &&
                <div className="label">{label}</div>
            }
        </div>;
    }
}

TimeComponent.propTypes = {
    value: PropTypes.number,
    prependZero: PropTypes.bool,
    label: PropTypes.string,
    className: PropTypes.string,
    showColon: PropTypes.bool
}

TimeComponent.defaultProps = {
    value: 0,
    prependZero: false,
    label: null,
    className: null,
    showColon: false
}

export default TimeComponent;