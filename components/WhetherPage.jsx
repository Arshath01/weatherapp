import { useEffect,useState } from "react";
import HourlyWhether from './HourlyWhether';
import WeeklyWhether from './WeeklyWhether'

export default function WhetherPage(props){
    const data = props;
    const [current_time,setTime] = useState(null);

    useEffect(()=>{
        const time = new Date;
        const hours = time.getHours();
        const minutes = time.getMinutes().toString();
        setTime(hours>12?(hours-12).toString()+":"+minutes+" pm":hours.toString()+":"+minutes+" am");
    },[])

    return (
        <>
          
            <div id="current_wrapper" className="container mx-auto bg-primary p-3 m-2 rounded text-light">
                <div className="ms-3 m-2">
                    <h2 className="text-dark">{props.location.name}</h2>
                    <h5 className="text-secondary">{props.location.region}</h5>
                    <small>{props.current.temp_c}&deg;C</small>
                </div>
                <div className="ms-auto me-4 p-1">
                    <h4 className="ms-5 mt-2">{current_time}</h4>
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