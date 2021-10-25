import React from "react";
import Panel from "./../generic/Panel/Panel";
import Button from "./../generic/Button/Button";
import DisplayTime from "./../generic/DisplayTime/DisplayTime";
import ProgressCircle from "./../generic/ProgressCircle/ProgressCircle";
import { Duration } from '../../classes/Duration';

class Countdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      duration: new Duration(
        {
          rounds: 3,
          minutes: 0,
          seconds: 10,
          tickSize:
            Duration.TIME_ENUM.MILLISECOND * 52,
          intervalFunctions: [(duration) => {
            if (this.state.progress !== duration.precentDone)
              this.setState({
                progress: duration.precentDone
              });
          }]
        })
    }
  }

  componentDidMount() {
    const { duration } = this.state;
    if (duration) duration.start();
  }

  componentWillUnmount() {
    const { duration } = this.state;
    if (duration) duration.clear();
  }

  render() {
    const { title } = this.props;
    const { progress, duration } = this.state;
    return <Panel>
      <ProgressCircle progress={progress}>
        <div>
          <div className="text-center m-0">
            <h5 class="text-center weight-100 gradient-code-secondary-clip ">{title}</h5>
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

export default Countdown;
