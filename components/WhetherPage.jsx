import { useEffect,useState } from "react";
import HourlyWhether from './HourlyWhether';
import WeeklyWhether from './WeeklyWhether'

export default function WhetherPage(props){
    const data = props;
    const time = data.location.localtime.split(" ")
    const localtime = time[time.length-1]
    return (
        <>
          
            <div id="current_wrapper" className="container mx-auto  p-3 m-2 rounded text-light">
                <div className="ms-3 m-2">
                    <h2 className="text-light">{props.location.name}</h2>
                    <small className="text-light">{props.location.country}</small> <br />
                    <small>{props.current.temp_c}&deg;C</small>
                </div>
                <div className="ms-auto me-4 p-1">
                    <h4 className="ms-5 mt-2">{localtime}</h4>
                    <img src={props.current.condition.icon} alt="" />
                    <span className="my-auto"><b>{props.current.condition.text}</b></span>
                </div>
            </div>

            <section id="section" className="mx-auto gap-1 p-1 "><HourlyWhether data={data}/></section>

            <div className=" mx-auto" id="weekly_whether">
                <h4 className="my-2 ms-2">Weekly <span className="text-primary">Whether</span></h4> 

                <div><WeeklyWhether data={data}/></div>
            </div>
          
        </>
    )
}