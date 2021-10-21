import React from "react";
import Panel from "./../generic/Panel/Panel";
import Button from "./../generic/Button/Button";
import DisplayTime from "./../generic/DisplayTime/DisplayTime";

class Countdown extends React.Component {
  render() {
    return <Panel>
      <DisplayTime></DisplayTime>
      <div>
        <Button className="gradient-primary-warning shadow-3 p-x-5 bold">Start</Button>
        <Button className="gradient-secondary-danger shadow-3 p-x-5 bold">Clear</Button>
      </div>
    </Panel>;
  }
}

export default Countdown;
