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
    const response = await fetch(url, options);
    const result = await response.json()
    console.log(result);
};

init();