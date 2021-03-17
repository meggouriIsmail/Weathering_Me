const MoreInfo = (props) => {
    const {wind, sys, main} = props;
    var sunrise, sunset;

    if(sys){
        sunrise = new Date((sys.sunrise) * 1000);
        sunset = new Date(sys.sunset * 1000);
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
                    <p>{sunrise ? sunrise.getHours() : 0}:{sunrise ? sunrise.getMinutes() : 0}</p>
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
                    <p>{sunset ? sunset.getHours() : 0}:{sunset ? sunset.getMinutes() : 0}</p>
                    <p>Sunset</p>
                </div>
            </div>
        </div>
    );
}
 
export default MoreInfo;