import { useEffect, useRef, useState } from "react";
import { endOfRestBeep } from "../../Api/Beeps";
import Button from "../Button/Button";
import styles from "./Timer.module.css";
const Timer = () => {
  const [time, setTime] = useState(60);
  const [running, setRunning] = useState(false);
  const timeRef = useRef(60);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    timeRef.current = time;
  }, [time]);

  const stop = () => {
    let id = window.localStorage.getItem("timerId");

    console.log(id);
    if (id) {
      clearInterval(parseInt(id));
    }
    setRunning(false);
    setTime(60);
    timeRef.current = 60;
  };

  const handleClick = () => {
    if (running) {
      stop();
    } else {
      setRunning(true);
      let id = setInterval(() => {
        if (timeRef.current <= 0) {
          //@ts-ignore
          endOfRestBeep();
          stop();
        } else {
          setTime(timeRef.current - 1);
        }
      }, 1000);
      console.log(id);
      window.localStorage.setItem("timerId", id.toString());
    }
  };

  return (
    <div className={styles.timer}>
      <div className={styles.timedisplay}>{formatTime(time)}</div>
      <Button onClick={handleClick} text={running ? "Stop" : "Start"} />
    </div>
  );
};

export default Timer;
