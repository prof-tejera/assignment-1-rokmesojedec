import React from "react";
import Panel from "./../generic/Panel/Panel";
import Button from "./../generic/Button/Button";
import DisplayTime from "./../generic/DisplayTime/DisplayTime";
import ProgressCircle from "./../generic/ProgressCircle/ProgressCircle";
import { Duration } from '../../classes/Duration';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stopwatch: new Duration(
        {
          rounds: 1,
          seconds: 10,
          tickSize: Duration.TIME_ENUM.MILLISECOND * 52,
          countdownMode: false,
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
    // This code was added for development purposes, starts the Timer
    // Timer should be static for first deliverable
    // const { stopwatch } = this.state;
    // if (stopwatch) stopwatch.start();
  }

  componentWillUnmount() {
        // This code was added for development purposes, clears the Timer
    // Timer should be static for first deliverable
    // const { stopwatch } = this.state;
    // if (stopwatch) stopwatch.clear();
  }

  render() {
    const { title } = this.props;
    const { stopwatch } = this.state;
    return <Panel>
      <ProgressCircle progress={4222}>
        <div>
          <div className="text-center m-0">
            <h5 className="text-center weight-100 gradient-code-secondary-clip ">{title}</h5>
          </div>
          <DisplayTime className="m-t-3" duration={stopwatch}></DisplayTime>
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
