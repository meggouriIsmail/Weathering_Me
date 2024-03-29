const MoreInfo = (props) => {
    const {wind, sys, main, timezone} = props;
    var sunrise, sunset;
    
    if (sys) {
        // Convert UTC timestamps to local time in the specified time zone
        const options = {
            timeZone: timezone, // Replace with the actual time zone of the city
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: false,
        };
    
         sunrise = new Date(sys.sunrise * 1000).toLocaleTimeString(sys.country, options);
         sunset = new Date(sys.sunset * 1000).toLocaleTimeString(sys.country, options);
    }

    return (
        <div className="moreInf">
            <div className="col">
                <div className="cell">
                    <p>{main ? main.pressure : 0}pa</p>
                    <p>Pressure</p>
                </div>
                <div className="cell">
                    <p>{wind ? wind.speed : 0}mph</p>
                    <p>Wind</p>
                </div>
                <div className="cell">
                    <p>{sunrise ? sunrise.substring(0,sunrise.length-3) : "00:00"}</p>
                    <p>Sunrise</p>
                </div>
                </div>
                <div className="col">
                <div className="cell">
                    <p>{main ?  parseInt(main.feels_like) : 0}°</p>
                    <p>feels like</p>
                </div>
                <div className="cell">
                    <p>{main ?  main.humidity : 0}%</p>
                    <p>Humidity</p>
                </div>
                <div className="cell">
                    <p>{sunset ? sunset.substring(0,sunset.length-3) : "00:00"}</p>
                    <p>Sunset</p>
                </div>
            </div>
        </div>
    );
}
 
export default MoreInfo;