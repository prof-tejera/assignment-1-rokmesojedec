import React from "react";
import Panel from "./../generic/Panel/Panel";
import Button from "./../generic/Button/Button";
import ProgressCircle from "./../generic/ProgressCircle/ProgressCircle";
import { Duration } from '../../classes/Duration';
import TimeComponent from "../generic/TimeComponent/TimeComponent";
import "./Tabata.scss";

class Tabata extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      tabata: new Duration(
        {
          name: "Tabata",
          rounds: 1,
          seconds: 10,
          tickSize: Duration.TIME_ENUM.MILLISECOND * 52,
          countdownMode: true,
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
    const { tabata } = this.state;
    if (tabata) tabata.start();
  }

  componentWillUnmount() {
    const { tabata } = this.state;
    if (tabata) tabata.clear();
  }

  render() {
    const { title } = this.props;
    const { progress } = this.state;
    return <Panel>
      <ProgressCircle progress={progress}>
        <div className="tabata">
          <div className="text-center m-0">
            <h5 className="text-center weight-100 gradient-code-secondary-clip ">{title}</h5>
          </div>
          <div className="tabata-progress-panel m-t-3">
              <ProgressCircle progress={8700} size="xs" thickness="xs" className="embedded">
                <TimeComponent label="round" prependZero={true} value={3} ></TimeComponent>
              </ProgressCircle>
              <ProgressCircle progress={5700} size="xs" thickness="xs" className="embedded">
                <TimeComponent label="work" prependZero={true} value={26}></TimeComponent>
              </ProgressCircle>
              <ProgressCircle progress={10000} size="xs" thickness="xs" className="embedded">
                <TimeComponent label="rest" prependZero={true} ></TimeComponent>
              </ProgressCircle>
            </div>
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

export default Tabata;
