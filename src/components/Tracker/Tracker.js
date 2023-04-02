import { React, useState, useEffect } from "react";
import { getBusTime } from "../../API/cta";

export default function Tracker() {
  const [distance, setDistance] = useState();
  const [refreshInterval, setRefreshInterval] = useState(200 || 0);

  const fetchMetrics = () => {
    getBusTime().then((res) => {
      setDistance(res);
    });
  };

  useEffect(() => {
    if (refreshInterval && refreshInterval > 0) {
      const interval = setInterval(fetchMetrics, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [refreshInterval]);
  return (
    <h1>
      North Bound 22 Bus at Clark and Arlington will be here in {distance} feet{" "}
    </h1>
  );
}
