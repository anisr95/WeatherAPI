const getCity = async (city) => {
    const key = "2b56138751da48a2a0772924202812";
    const link = "http://api.weatherapi.com/v1/current.json";
    const query = `?key=${key}&q=${city}`;

    const response = await fetch(link + query);
    const data = await response.json();

    const condition = data.current.condition.text;
    const temp = data.current.temp_f;
    
    return {
        condition,
        temp,
        data
    };
};

// getCity("sacramento").then(data => {
    
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });
