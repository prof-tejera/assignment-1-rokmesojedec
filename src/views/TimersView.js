import React from "react";
import styled from "styled-components";

import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";

const Timers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Timer = styled.div`
  border: 1px solid gray;
  padding: 20px;
  margin: 10px;
  font-size: 1.5rem;
`;

const TimerTitle = styled.div``;

function App() {
  const timers = [
    { title: "Stopwatch", C: <Stopwatch title={"Stopwatch"} /> },
    { title: "Countdown", C: <Countdown title={"Countdown"} /> },
    { title: "XY", C: <XY title={"XY"} /> },
    { title: "Tabata", C: <Tabata /> },
  ];

  return (
    <div className="grid typescale-md-major-third grid-col-span-12">
      {timers.map((timer, index) => (
        <div className="col-lg-span-6 " key={index}>
          <div className="m-t-2 m-x-0 p-0">
            {timer.C}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
