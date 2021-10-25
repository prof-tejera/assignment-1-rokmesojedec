import { Component } from 'react';
import { Duration } from '../../../classes/Duration';
import './DisplayTime.scss';
import TimeComponent from '../TimeComponent/TimeComponent';
import PropTypes from 'prop-types';

class DisplayTime extends Component {

  constructor(props) {
    super(props);
    this.state = {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
      duration: props.duration
    }
  }

  durationTick(duration) {
    this.setState({
      years: duration.currentYears,
      months: duration.currentMonths,
      days: duration.currentDays,
      hours: duration.currentHours,
      minutes: duration.currentMinutes,
      seconds: duration.currentSeconds,
      milliseconds: duration.currentMilliseconds
    });
  }

  componentDidMount(){
    const { duration } = this.state;
    if (duration) duration.pushIntervalFunction(this.durationTick.bind(this));
  }

  componentWillUnmount() {
    const { duration } = this.state;
    duration.clear();
  }

  render() {
    const { className } = this.props;

    const components = [
      { label: "h", prependZero: true, name: "hours" },
      { label: "m", prependZero: true, name: "minutes" },
      { label: "s", prependZero: true, name: "seconds" },
      { label: "ms", prependZero: false, name: "milliseconds" }
    ]

    return <div className={['time-components', className].join(" ")}>
      {components.map((component, i) =>
        <TimeComponent value={this.state[component.name]}
          key={component.label}
          label={component.label}
          prependZero={component.prependZero}
          showColon={i !== 0}></TimeComponent>)}
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