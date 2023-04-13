import { React, useState, useEffect } from "react";
import { getBusTime } from "../../API/cta";
import { Button } from "@mui/material";

export default function Tracker() {
  const [refreshInterval, setRefreshInterval] = useState(200 || 0);
  const [route1, setRoute1] = useState(22);
  const [distance1, setDistanceRoute1] = useState();
  const [route2, setRoute2] = useState(36);
  const [distance2, setDistanceRoute2] = useState();
  const [direction, setDirection] = useState("North");
  const fetchMetrics = () => {
    getBusTime(route1, direction).then((res) => {
      setDistanceRoute1(res);
    });
    getBusTime(route2, direction).then((res) => {
      setDistanceRoute2(res);
    });
  };
  const changeDirection = () => {
    if (direction === "North") {
      setDirection("South");
      fetchMetrics();
    } else {
      setDirection("North");
      fetchMetrics();
    }
  };
  useEffect(() => {
    if (refreshInterval && refreshInterval > 0) {
      const interval = setInterval(fetchMetrics, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [refreshInterval]);

  return (
    <div>
      <Button size="large" variant="contained" onClick={changeDirection}>
        Change Direction
      </Button>
      <h1>
        {direction} Bound {route1} Bus at Clark and Arlington will be here in{" "}
        {distance1} minutes <br></br> {direction} Bound {route2} Bus at Clark
        and Arlington will be here in {distance2} minutes{" "}
      </h1>
    </div>
  );
}
