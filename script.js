const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7b89676c38msh608e1cf49c84c46p1bc1abjsnad8b009644b2',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

async function fetchData(city){
    cityName.innerHTML = city
    boston.innerHTML = city
    try {
        const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options);
        const result = await response.json();
        console.log(result);
        
        // cloud_pct.innerHTML = result.cloud_pct
        temp.innerHTML = result.temp
        temp2.innerHTML = result.temp
        feels_like.innerHTML = result.feels_like
        humidity.innerHTML = result.humidity
        humidity2.innerHTML = result.humidity
        min_temp.innerHTML = result.min_temp
        max_temp.innerHTML = result.max_temp
        wind_speed.innerHTML = result.wind_speed
        wind_speed2.innerHTML = result.wind_speed
        wind_degrees.innerHTML = result.wind_degrees
        sunrise.innerHTML = result.sunrise
        sunset.innerHTML = result.sunset

        b1.innerHTML = result.cloud_pct
        b2.innerHTML = result.temp
        b3.innerHTML = result.feels_like
        b4.innerHTML = result.humidity
        b5.innerHTML = result.min_temp
        b6.innerHTML = result.max_temp
        b7.innerHTML = result.wind_speed
        b8.innerHTML = result.wind_degrees
        b9.innerHTML = result.sunrise
        b10.innerHTML = result.sunset

    } catch (error) {
        console.error(error);
    }
}

submit.addEventListener("click", (e)=>{
    e.preventDefault();
    fetchData(city.value);
})

const dropDownItems = document.querySelectorAll('.dropdown-item');
dropDownItems.forEach(item => {
    item.addEventListener("click", (e)=>{
        e.preventDefault();
        const selectedCity = item.getAttribute('data-value');

        fetchData(selectedCity);
    })
})

fetchData("Delhi")

async function newFetchData(city, a, b, c, d, e, f, g, h, i, j){
    try {
        const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options);
        const result = await response.json();
        
        a.innerHTML = result.cloud_pct
        b.innerHTML = result.temp
        c.innerHTML = result.feels_like
        d.innerHTML = result.humidity
        e.innerHTML = result.min_temp
        f.innerHTML = result.max_temp
        g.innerHTML = result.wind_speed
        h.innerHTML = result.wind_degrees
        i.innerHTML = result.sunrise
        j.innerHTML = result.sunset

    } catch (error) {
        console.error(error);
    }
}

newFetchData("Lucknow", l1, l2, l3, l4, l5, l6, l7, l8, l9, l10)
newFetchData("Kolkata", k1, k2, k3, k4, k5, k6, k7, k8, k9, k10)
newFetchData("Delhi", d1, d2, d3, d4, d5, d6, d7, d8, d9, d10)
newFetchData("Patna", p1, p2, p3, p4, p5, p6, p7, p8, p9, p10)
