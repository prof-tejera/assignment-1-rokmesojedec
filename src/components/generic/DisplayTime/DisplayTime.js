import { Component } from 'react';
import { Duration } from '../../../utils/helpers';
import './DisplayTime.scss';
import TimeComponent from '../TimeComponent/TimeComponent';

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

  constructor() {
    super();
    const test = new Duration({ minutes: 0, seconds: 30, tickSize: Duration.TIME_ENUM.MILLISECOND * 64 });
    const CountDown = setInterval(() => {
      test.tick();
      this.setState({
        years: test.years,
        months: test.months,
        days: test.days,
        hours: test.hours,
        minutes: test.minutes,
        seconds: test.seconds,
        milliseconds: test.milliseconds
      });
      if (test.done) clearInterval(CountDown);
    }, Duration.TIME_ENUM.MILLISECOND * 64);
  }


  render() {
    const components = ["years", "months", "days", "hours", "minutes", "seconds", "milliseconds"];

    return <div>
      {["years", "months", "days", "hours", "minutes", "seconds", "milliseconds"].map(component => 
        <TimeComponent value={this.state[component]} label={component}></TimeComponent>)}
 
    </div>;
  }
}

export default DisplayTime;