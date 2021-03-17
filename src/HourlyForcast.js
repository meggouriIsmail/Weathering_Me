
function HourlyForcast(props) {

    return (
        props.Info ? props.Info.map((item, index) => {
            var date = new Date(item.dt * 1000);
            return (
                <div className="next-week" key={index}>
                    <div>
                        <p>{date.getMonth()+1}.{date.getDate()}</p>
                        <p>{date.getHours()}:{date.getMinutes()}0</p>
                    </div>
                    <img className="icon-cloud" src={"http://openweathermap.org/img/wn/"+item.weather[0].icon+"@2x.png"} alt="pic" />
                    <p>{parseInt(item.temp)}°</p>
                </div>
            );
        }) : <div>Not Found</div>
    );
}
export default HourlyForcast;