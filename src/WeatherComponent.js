import HourlyForcast from "./HourlyForcast"
import MoreInfo from "./MoreInfo"


const d = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Section = (props) => {
    const {cityCountry, icon, temp, description, Info} = props;
    const iconPic = `https://openweathermap.org/img/wn/${icon}@4x.png`;
    return (
        <section className="blur page">
            <div className="info">
                <h1 className="city">{cityCountry}</h1>
                <p className="date">{days[d.getDay()] +" "+ d.getDate() +" "+ months[d.getMonth()]}</p>
            </div>
            <div className="forcast">
                <div className="tempeture-block">
                    <img className="cloud" src={iconPic} alt="" />
                    <div>
                        <h1 className="temp">{Math.floor(temp)}°</h1>
                        <p className="description">{description}</p>
                    </div>
                </div>
                <MoreInfo 
                    main={props.main}
                    sys={props.sys}
                    wind={props.wind}
                    coords={props.coord}
                    timezone={props.timezone}
                />
            </div>
            <h1 style={{ paddingLeft: "1em"  }}>Forecast</h1>
            <div className="container">
                <div className="row">
                    <HourlyForcast Info={Info} />
                </div>
            </div>
        </section>
    );
}
 
export default Section;
