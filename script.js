

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4e3a5a744bmsh2e2338661b64200p1aed34jsn3659e9fd2a89',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getwheather=(city)=>{
const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi`;
cityname.innerHTML=city;
fetch(url,options)
.then(response => response.json())
.then((response) => {
	console.log(response);


	cloud_pct.innerHTML=response.cloud_pct
         
	feels_like.innerHTML=response.feels_like

	humidity.innerHTML=response.humidity
	humidity2.innerHTML=response.humidity

	max_temp.innerHTML=response.max_temp
	
	
	min_temp.innerHTML=response.min_temp
	
	
	sunrise.innerHTML=response.sunrise
	
	
	sunset.innerHTML=response.sunset
	
	
	temp3.innerHTML=response.temp
	
	temp2.innerHTML=response.temp
	wind_degrees.innerHTML=response.wind_degrees
	
	
	wind_speed.innerHTML=response.wind_speed
	wind_speed2.innerHTML=response.wind_speed

 
})
.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
	e.preventDefault();
	getwheather(city.value);
})

const url = 'https://open-weather13.p.rapidapi.com/city/Delhi';
const op = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4e3a5a744bmsh2e2338661b64200p1aed34jsn3659e9fd2a89',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};


fetch(url,op)
.then(response => response.json())
.then((response) => {
	console.log(response);
a1.innerHTML=response.main.humidity
a2.innerHTML=response.main.feels_like
a3.innerHTML=response.main.humidity
a4.innerHTML=response.main.temp_max+"fr"
a5.innerHTML=response.main.temp_min+"fr"
a6.innerHTML=response.sys.sunrise
a7.innerHTML=response.sys.sunset
a8.innerHTML=response.main.temp+"fr"
a9.innerHTML=response.wind.deg
a0.innerHTML=response.wind.speed

})
.catch(err => console.error(err));

const ul = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Sambalpur';
const os = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4e3a5a744bmsh2e2338661b64200p1aed34jsn3659e9fd2a89',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch(ul,os)
.then(response => response.json())
.then((response) => {
	console.log(response);
b1.innerHTML=response.current.cloud
b2.innerHTML=response.current.feelslike_f

b3.innerHTML=response.current.humidity
b4.innerHTML=response.current.temp_c
b5.innerHTML=response.current.temp_c
b6.innerHTML="not found"
b7.innerHTML="not found"
b8.innerHTML=response.current.temp_c
b9.innerHTML=response.current.wind_degree

b0.innerHTML=response.current.wind_kph

})