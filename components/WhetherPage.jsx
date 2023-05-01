export default function WhetherPage(props){
    return (
        <>
            <div className="current_whether_wrapper">
                <div className="current_whether">
                    <h1>{props.location.name}</h1>
                    <h2>{props.location.country}</h2>
                    <small>{props.current.temp_c}&deg;C</small>
                </div>
            </div>
        </>
    )
}