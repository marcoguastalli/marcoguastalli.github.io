const init = async () => {

    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';
    const response = await fetch(url);
    console.log(response);

};

init();