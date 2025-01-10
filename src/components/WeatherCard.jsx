function WeatherCard({ weatherData }) {
    if (!weatherData) {
        return <div>Loading...</div>;
    }

    const { name, main, wind, weather, sys } = weatherData;
    const iconCode = weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    const dateBuilder = (d) => {
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`;
    };

    let now = new Date();
    let date = dateBuilder(now);

      return (
       <main>
           <section className="location">
             <div className="city">{`${name}, ${sys.country}`}</div>
               <div className="date">{date}</div>
           </section>
           <div className="current">
            <div className="temp">{Math.round(main.temp)}<span>°c</span></div>
             <div className="weather">{weather[0].main}</div>
                <div className="hi-low">{`${Math.round(main.temp_min)}°c / ${Math.round(main.temp_max)}°c`}</div>
           </div>
        </main>
      );
  }

  export default WeatherCard;