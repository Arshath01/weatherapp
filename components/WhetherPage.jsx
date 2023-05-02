import { useEffect,useState } from "react";
import HourlyWhether from './HourlyWhether'

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
          
            <div id="current_wrapper" className="container mx-auto bg-primary p-1 m-2 rounded text-light">
                <div className="ms-3 m-2">
                    <h2>{props.location.name}</h2>
                    <h3>{props.location.region}</h3>
                    <small>{props.current.temp_c}&deg;C</small>
                </div>
                <div className="ms-auto me-4 p-1">
                    <h3 className="mt-2 ms-2">{current_time}</h3>
                    <img src={props.current.condition.icon} alt="" />
                    <span className="my-auto"><b>{props.current.condition.text}</b></span>
                </div>
            </div>

            <section id="section" className="mx-auto gap-1"><HourlyWhether data={data}/></section>
          
        </>
    )
}