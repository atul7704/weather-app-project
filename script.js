const inputBox=document.querySelector(".input-box");
const searchBtn=document.querySelector("#searchBtn");
const weather_img=document.querySelector(".weather-img");
const tempreture=document.querySelector(".tempreture");
const description=document.querySelector(".description");
const humidity=document.querySelector("#humidityval");
const wind_speed=document.querySelector("#wind-speed");


async function checkWeather(city){
    const api_key="87e13105fdcdf04ea1ad7d024681e30f";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data=await fetch(`${url}`).then(response=>response.json());
    tempreture.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`;
    description.innerHTML=`${weather_data.weather[0].description}`;

    humidity.innerHTML=`${weather_data.main.humidity}%`;
    wind_speed.innerHTML=`${weather_data.wind.speed}KM/H`;

    switch(weather_data.weather[0].main){
        case 'clouds':
            weather_img.src="cloud.png";
            break;

         case ' Broken clouds':
                weather_img.src="cloud.png";
                break;


         case ' Scattered Clouds':
                    weather_img.src="cloud.png";
                    break;

         case ' Overcast Clouds':
                        weather_img.src="cloud.png";
                        break;
    
        case 'Clear':
                weather_img.src="clear.png";
                break;

        case 'Rain':
                    weather_img.src="rain.png";
                    break;

         case 'Mist':
                     weather_img.src="mist.png";
                     break;

          case 'Snow':
                     weather_img.src="snow.png";
                     break;
    }
}
searchBtn.addEventListener("click",()=>{
    checkWeather(inputBox.value);
})
