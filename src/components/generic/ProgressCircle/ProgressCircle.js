import { Component } from 'react';
import PropTypes from 'prop-types';
import './ProgressCircle.scss';

class ProgressCircle extends Component {
    render() {
        const { progress, className,  children } = this.props;
        return <div className={['', 'ProgressCircle', className,].join(" ")}>
            <div className={['overlay', "progress-" + progress].join(" ")}>
                <div className={['InnerCircle'].join(" ")}>
                    {children}
                </div>
            </div>
        </div>;
    }
}

ProgressCircle.propTypes = {
    progress: PropTypes.number,
    className: PropTypes.string,
    background: PropTypes.string
}

ProgressCircle.defaultProps = {
    progress: 0,
    className: null,
    background: "gradient-primary-light-danger"
}

export default ProgressCircle;