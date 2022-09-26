const search = document.querySelector("button");
const input = document.querySelector("input");
const city = document.querySelector(".cities");



  const getWeather = async () =>{
    const apiKey = "37edbe6ffb893712b353a19b28fac6a3";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`;

    try{
        const response = await fetch(url);
        if(!response.ok){
            hata();
            throw new Error("there is not a city called")
            
        }
        const data = await response.json()
        console.log(data);
        return data;
    }
    catch{
        console.log(error);
    }

    
    
    
  }
  search.addEventListener("click",getWeather)

  const hata = () => {
    city.innerHTML = `
    <h1>İKAZ </h1>
    ` }