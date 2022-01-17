const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const image = document.querySelector("img.time");

cityForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();
    updateCity(city).then(data => {
        updateUI(data);
    }).catch(err => console.log(err));
    
});

// updateCity("london").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });


const updateCity = async (city) => {
    const cityDet = await getCity(city);
    console.log(cityDet);
    return cityDet;
}
const updateUI = (data) => {
    const {condition, temp} = data;
    const cityName = data.data.location.name;
    details.innerHTML =`
        <h5>${cityName}</h5>
        <p>${condition}</p>
        <div class="temp">
            <span>${temp}</span>
            <span>&deg;F</span>
        </div>
    `
    if (card.classList.contains("d-none")) {
        card.classList.remove("d-none");
    }
    if (data.data.current.is_day === 1) {
        image.setAttribute("src", "images/day.jpg");
    } else {
        image.setAttribute("src", "images/night.jpg");
    }
};