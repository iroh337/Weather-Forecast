var api_key = '427a22132c36c4ff825bc68401e52bcd'

var button = document.querySelector('.search')



function showInDisplay(data){
    
    if(data.cod === 200){
        const txtcity = document.querySelector('.city').innerHTML = `Weather ${data.name} (${data.sys.country})`
        const txttemp = document.querySelector('.temp').innerHTML = `${Math.floor(data.main.temp)} ºC`
        
        const img = document.querySelector('.img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        const info = document.querySelector('.info').innerHTML = `${data.weather[0].main}`
        const humid = document.querySelector('.humidity').innerHTML = `${data.main.humidity}% Humidity`
    }else{
        const txtcity = document.querySelector('.city').innerHTML = 'City Not Found'
        const txttemp = document.querySelector('.temp').innerHTML = ''
        
        const img = document.querySelector('.img').style.visibility = 'hidden'
        const info = document.querySelector('.info').innerHTML = ``
        const humid = document.querySelector('.humidity').innerHTML = ``
    }
    
    
}

async function seacrhCity(city){

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`).then( repsponse => repsponse.json())
    console.log(data)

    showInDisplay(data)
}



button.addEventListener('click', () =>{
    var city = document.querySelector('.input-city').value

    
    seacrhCity(city)

    

})


