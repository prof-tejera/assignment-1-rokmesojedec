import React from "react";
import Panel from "./../generic/Panel/Panel";
import Button from "./../generic/Button/Button";
import DisplayTime from "./../generic/DisplayTime/DisplayTime";
import ProgressCircle from "./../generic/ProgressCircle/ProgressCircle";
import { Duration } from '../../utils/helpers';

class Stopwatch extends React.Component {
  state = {
    progress: 0,
    duration: new Duration({ minutes: 1, seconds: 30, tickSize: Duration.TIME_ENUM.MILLISECOND * 52 })
  }

  componentDidMount() {
    const { duration } = this.state;
    if (duration && !this.countdownInterval) {
      this.countdownInterval = setInterval(() => {
        if (this.state.progress !== duration.precentDone)
        console.log(duration.precentDone);

          this.setState({
            progress: duration.precentDone
          });
        if (duration.done) clearInterval(this.countdownInterval);
      }, duration.tickSize);
    }
  }

  render() {
    const { title } = this.props;
    const { progress, duration } = this.state;
    return <Panel>
    <ProgressCircle progress={5}>
      <div>
        <div className="text-center m-0">
          <h4 class="text-center weight-100 gradient-code-secondary-clip ">{title}</h4>
        </div>
        <DisplayTime className="m-t-3" duration={duration}></DisplayTime>
        <div className="ButtonsPanel">
          <Button className="text-primary bold flat RoundButton">
            <span className="material-icons size-48">play_arrow</span>
          </Button>
          <Button className="text-danger bold flat RoundButton">
            <span className="material-icons size-48"> clear</span>
          </Button>
        </div>
      </div>
    </ProgressCircle>
  </Panel>;
  }
}

export default Stopwatch;
