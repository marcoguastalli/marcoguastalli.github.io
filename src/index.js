const init = async () => {

    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';
    let result = [];
    const response = await fetch(url, options)
        .then((response) => {
            console.log(' Response status code: ', response.status);
            result = response.json();
        })
        .catch(function (err) {
            console.log("Unable to fetch:", err);
        });
        console.log(result);
};

init();