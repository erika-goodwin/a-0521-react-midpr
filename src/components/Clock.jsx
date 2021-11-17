import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import tz from "dayjs/plugin/timezone";

const Clock = ({ timezone }) => {
  const [date, setDate] = useState();
  dayjs.extend(utc);
  dayjs.extend(tz);

  useEffect(() => {
    const unixtime = dayjs('2021-11-17').valueOf();
    console.log(dayjs(unixtime + timezone));

    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, [timezone]);

  const tick = () => {
    // setDate()
  };

  return (
    <>
      <p>{date}</p>
    </>
  );
};
export default Clock;

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { date: "" };
//   }

//   componentDidMount() {
//     this.setState({ date: this.dateBuilder(this.props.timezone) });
//     // this.timerID = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date(),
//     });
//   }

//   dateBuilder = (timezone) => {
//     const nowInLocalTime = Date.now() + 1000 * (timezone / 3600);
//     const millitime = new Date(nowInLocalTime);
//     const dateFormat = millitime.toLocaleString();

//     let hours = millitime.toLocaleString("en-US", { hour: "numeric" });
//     let minutes = millitime.toLocaleString("en-US", { minute: "numeric" });

//     return `${hours}:${minutes}`;
//   };

//   render() {
//     return (
//       <>
//         <p>{this.state.date}</p>
//         {/* <p>{this.state.date.toLocaleTimeString("en-US", "{Asia/Tokyo}")}.</p> */}
//       </>
//     );
//   }
// }
// export default Clock;
