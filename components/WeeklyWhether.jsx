export  default function ({ data }) {
	console.log("whether:", data)

	const Weekly = ({ dayIndex}) => {
		const raw_date = data.forecast.forecastday[dayIndex].date;
		const condition = data.forecast.forecastday[dayIndex].day;
		const condition_report = {
			icon:condition.condition.icon,
			text:condition.condition.text
		}

		// assigning WeeklyDays
		const weeklyDays = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
			"Sunday",
		]

		// getDay by Date
		const day = new Date(raw_date);
		const getDay = day.getDate();

		// avgtemp
		const avgtemp = Math.floor(data.forecast.forecastday[dayIndex].day.avgtemp_c)
		return (
			<div className="p-3 bg-info d-flex justify-content-between rounded m-2 text-white" id="week_wrap">

					<div>
						<h4>{weeklyDays[getDay]}</h4>
						<span><b>{avgtemp}&deg;C</b></span>
					</div>

					<div className="d-flex gap-4 my-auto" id="astro">
						<div>
							<h5><b>Sunrise</b></h5>
							<span>{data.forecast.forecastday[dayIndex].astro.sunrise}</span>
						</div>

					</div>

					<div className="d-flex flex-column">
						<img src={condition_report.icon} id="img" alt="" />
						<small id="text"><b>{condition_report.text}</b></small>
					</div>
			</div>
		)
	}
	return (
		<>
			<Weekly dayIndex={0} />
		  	<Weekly dayIndex={1} />
			<Weekly dayIndex={2} />
			<Weekly dayIndex={3} />
			<Weekly dayIndex={4} />
		</>
	)
}