import logo from './searchIcon.svg';

const Form = (props) => {
    return (
        <div>
            {props.error ? Error() : null }
            <form className="search-box" onSubmit={props.loadWeather}>
                <button className="search-btn" type="submit" >
                <img src={logo} style={{ width : "25px" }} alt="logo" />
                </button>
                <input type="text" placeholder="City" name="city"/>
            </form>
        </div>
    );
}

const Error = () => {
    return (
        <div className="error">
            <h2>
                Please enter a valid City
            </h2>
        </div>
    );
}

export default Form;