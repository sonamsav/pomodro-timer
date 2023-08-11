import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #6a2c9e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
  margin: 0 auto;
  margin-bottom: 20px;
  transition: background-color 0.5s ease-in-out;
  position: relative;
`;

const TimerText = styled.span`
  position: absolute;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 10px;

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    background-color: #783dba;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #6a2c9e;
    }

    &:focus {
      outline: none;
    }
  }
`;

const Timer = () => {
  const [seconds, setSeconds] = useState(2 * 60); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false); // Indicates whether it's break time
  const [breakStarted, setBreakStarted] = useState(false); // Indicates if break has started

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  useEffect(() => {
    if (seconds === 0) {
      setIsActive(false);
      if (isBreak) {
        // Switch to work mode
        setSeconds(2 * 60);
      } else {
        // Switch to break mode
        setSeconds(5 * 60);
        setBreakStarted(true); // Break has started
      }
      setIsBreak(!isBreak);
    }
  }, [seconds, isBreak]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setSeconds(2 * 60);
    setBreakStarted(false);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <h1>Pomodoro Timer</h1>
      <Circle timerRunning={isActive}>
        <TimerText>{formatTime(seconds)}</TimerText>
      </Circle>
      <ButtonGroup>
        {breakStarted ? (
          <button onClick={resetTimer}>Break Started</button>
        ) : (
          <button onClick={toggleTimer}>{isActive ? "Pause" : "Start"}</button>
        )}
        <button onClick={resetTimer}>Reset</button>
      </ButtonGroup>
    </div>
  );
};

export default Timer;
