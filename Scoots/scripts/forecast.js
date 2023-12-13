
        const currentTemp = document.querySelector('#current-temp');
        const weatherIcon = document.querySelector('#weather-icon');
        const captionDesc = document.querySelector('#caption-desc');
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=91914a7113cb3976298a9d4c1b5266c2&units=imperial`;

        async function apiFetch() {
            try {
                const response = await fetch(url);
                if (response.ok) {
                    const data = await response.json();
                    displayResults(data);
                } else {
                    throw Error(await response.text());
                }
            } catch (error) {
                console.log(error);
            }
        }

        apiFetch();

        function displayResults(data) {
            currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
            const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            let desc = data.weather[0].description;
            weatherIcon.setAttribute('src', iconsrc);
            weatherIcon.setAttribute('alt', desc);
            captionDesc.textContent = `${desc}`;

        const tomorrowCurrentTemp = document.querySelector('#tomorrow-current-temp');
        const tomorrowWeatherIcon = document.querySelector('#tomorrow-weather-icon');
        const tomorrowCaptionDesc = document.querySelector('#tomorrow-caption-desc');
        const tomorrowUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=49.75&lon=6.64&appid=91914a7113cb3976298a9d4c1b5266c2&units=imperial`;

        async function tomorrowApiFetch() {
            try {
                const response = await fetch(tomorrowUrl);
                if (response.ok) {
                    const data = await response.json();
                    displayTomorrowResults(data);
                } else {
                    throw Error(await response.text());
                }
            } catch (error) {
                console.log(error);
            }
        }

        tomorrowApiFetch();

        function displayTomorrowResults(data) {
            tomorrowCurrentTemp.innerHTML = `${data.list[0].main.temp.toFixed(0)}&deg;F`;
            const iconsrc = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
            let desc = data.list[0].weather[0].description;
            tomorrowWeatherIcon.setAttribute('src', iconsrc);
            tomorrowWeatherIcon.setAttribute('alt', desc);
            tomorrowCaptionDesc.textContent = `${desc}`;
        }
      }