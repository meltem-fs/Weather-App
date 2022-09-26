const search = document.querySelector("button");
const input = document.querySelector("input");
const city = document.querySelector(".cities");


  const getWeather = async () => {
    const apiKey = "37edbe6ffb893712b353a19b28fac6a3";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        hata();
        throw new Error("there is not a city called");
      }

      const data = await response.json();
      console.log(data);

      const {
        weather,
        name,
        main: { temp },
        sys
      } = data;
        
    if(city.innerHTML.toLowerCase().includes(input.value.toLowerCase())){
        alert("you know")
    }else{
        city.innerHTML += `
    <div class="card mx-auto m-3 shadow-lg col-lg-4 col-md-6 col-sm-12 kard ">
      
      <span class="card-title w-50">${name}</span>
        <span class="card-title w-50">${sys.country}</span>
        <h5 class="card-title">${temp}℃</h5>
        <h5 class="card-title">${weather[0].description}</h5>
        <img src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png" class="card-img-top" alt="...">
    
    </div>
  `;
    }
   
      
      cart();
    } catch (error) {
      console.log(error);
    }
  };

  search.addEventListener("click", getWeather);

  const hata = () => {
    city.innerHTML = `<p>there is not a city called</p>`;
  };

