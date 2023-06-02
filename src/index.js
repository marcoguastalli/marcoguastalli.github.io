const init = async () => {

    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    };
    let result = [];
    console.log(`Fetch url: ${url}`);
    const response = await fetch(url, options)
        .then((response) => {
            console.log(`Response status code: ${response.status}`);
            result = response.json();
        })
        .catch(function (err) {
            console.log(`Error: ${err}`);
        });
        console.log(result);
};

init();