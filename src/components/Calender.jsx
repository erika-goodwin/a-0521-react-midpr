import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import tz from "dayjs/plugin/timezone";

const Calender = ({ dt, timezone }) => {
  const [date, setDate] = useState();
  dayjs.extend(utc);
  dayjs.extend(tz);

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, [timezone]);

  const tick = () => {
    var date = new Date();
    var greenwichMeanTime = date.getTime() + date.getTimezoneOffset() * 60000;
    const displayDate = dayjs(greenwichMeanTime + timezone * 1000).format(
      "YYYY/MM/DD"
    );
    setDate(displayDate);
  };

  return (
    <>

      <p className="pt-1">{date}</p>
    </>
  );
};
export default Calender;
