import { useEffect, useRef } from "react";
import Countdown from "react-countdown";

export default function Timer({ start, setStart, setSave }) {
  const Counter = ({ props }) => (
    <span>{props.seconds === 0 ? 60 : props.seconds}</span>
  );
  const timeRef = useRef();

  const handleEnd = ({ start }) => {
    console.log("timer enddd");

    setStart(false);
    setSave(true);
  };

  useEffect(() => {
    if (start) {
      timeRef.current.start();
    }
  }, [start]);

  return (
    <div className="timer">
      <h3>
        <Countdown
          date={Date.now() + 10000}
          renderer={(props) => <Counter props={props} />}
          onComplete={handleEnd}
          autoStart={false}
          ref={timeRef}
        ></Countdown>
      </h3>
    </div>
  );
}
