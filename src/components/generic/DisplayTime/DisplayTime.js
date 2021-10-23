import { Component } from 'react';
import { Duration } from '../../../utils/helpers';
import './DisplayTime.scss';
import TimeComponent from '../TimeComponent/TimeComponent';
import PropTypes from 'prop-types';

class DisplayTime extends Component {

  state = {
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
  };


  componentDidMount() {
    const { duration } = this.props;

    if (duration && !this.countdownInterval) {
      this.countdownInterval = setInterval(() => {
        duration.tick();
        this.setState({
          years: duration.years,
          months: duration.months,
          days: duration.days,
          hours: duration.hours,
          minutes: duration.minutes,
          seconds: duration.seconds,
          milliseconds: duration.milliseconds
        });
        if (duration.done) clearInterval(this.countdownInterval);
      }, duration.tickSize);
    }
  }

  render() {
    const { className } = this.props;

    const components = [
      // { label: "Y", prependZero: false, name: "years" },
      // { label: "M", prependZero: false, name: "months" },
      // { label: "D", prependZero: false, name: "days" },
      { label: "h", prependZero: true, name: "hours" },
      { label: "m", prependZero: true, name: "minutes" },
      { label: "s", prependZero: true, name: "seconds" },
      { label: "ms", prependZero: true, name: "milliseconds" }
    ]

    return <div className={['time-components', className].join(" ")}>
      {components.map((component, i) =>
        <TimeComponent value={this.state[component.name]}
          key={component.label}
          label={component.label}
          prependZero={component.prependZero}
          showColon={i !== 0 }></TimeComponent>)}
    </div>;
  }
}
DisplayTime.propTypes = {
  duration: PropTypes.instanceOf(Duration),
  className: PropTypes.string
}

DisplayTime.defaultProps = {
  duration: new Duration(0),
  className: null
}

export default DisplayTime;