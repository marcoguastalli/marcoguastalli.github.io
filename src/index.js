const init = async () => {

    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    };
    console.log(`Fetch url: ${url}`);
    const response = await fetch(url, options)
        .then((response) => {
            console.log(`Response status code: ${response.status}`);
        })
        .catch(function (err) {
            console.log(`Error: ${err}`);
        });
    const { apiResult } = Promise.then(response => response.json);
    console.log(apiResult);
};

init();