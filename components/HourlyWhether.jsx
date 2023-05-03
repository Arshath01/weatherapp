export default function HourlyWhether({ data }) {

  const Hour = ({ dayIndex, hourIndex }) => {

    // reusable props=> forecast
    const reUse = data.forecast.forecastday[dayIndex]

    console.log(data.forecast.forecastday[0].hour[dayIndex])
    // serializing_time
    const date_time = reUse.hour[hourIndex].time.split(" ");
    const time = date_time[date_time.length - 1].split(":")
    const ampm = time[0] > 12 ? (time[0] - 12).toString() + " pm" : (time[0] - 0).toString() + " am";
    console.log(ampm)

    // serializing_date
    const date = date_time[0]
    console.log(date)

    // average temperature
    const temp = Math.floor(reUse.hour[hourIndex].temp_c);
    console.log(temp)

    // condtion report
    const condition_report = {
      icon: reUse.hour[hourIndex].condition.icon,
      text: reUse.hour[hourIndex].condition.text
    }

    console.log(condition_report.icon)

    return (
      <>
        <div id="Hourly_inner_wrap" className=" mx-auto container px-2 pb-2 border border-primary rounded">
          <div className="d-flex justify-content-between p-2">
            <h5>{temp}&deg;C</h5>
            <small>{ampm}</small>
          </div>
          <div className="report ms-auto">
            <img src={condition_report.icon} alt="whether_icon" /> <br />
            <small className="mx-autto">{condition_report.text}</small>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Hour dayIndex={0} hourIndex={1} />
      <Hour dayIndex={0} hourIndex={7} />
      <Hour dayIndex={0} hourIndex={10} />
      <Hour dayIndex={0} hourIndex={14} />
      <Hour dayIndex={0} hourIndex={18} />
    </>
  );

}