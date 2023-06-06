const getBitcoinPrice = async () => {

    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    };
    // console.log(`Fetch url: ${url}`);
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(`Result: ${result}`);
    return result['bitcoin']['usd'];
};

const getSatoshiPrice = async () => {
    const bitcoinPrice = await getBitcoinPrice();
    return parseInt( bitcoinPrice) / 100000000;
}

async function submitBtcForm(btc) {
    const btcFromForm = btc['btc'];
    if (!isNaN(btcFromForm)){
        const bitcoinPrice = await getBitcoinPrice();
        const result = parseFloat(btcFromForm) * bitcoinPrice;
        document.getElementById("btcformoutput").innerText = result + ' $';
    } else {
        document.getElementById("btcformoutput").innerText = "Invalid Input";
    }
}

async function submitSatsForm(satoshi) {
    const satoshiFromForm = satoshi['satoshi'];
    if (!isNaN(satoshiFromForm)){
        const satoshiPrice = await getSatoshiPrice();
        const result = parseFloat(satoshiFromForm) * satoshiPrice;
        document.getElementById("satsformoutput").innerText = result + ' $';
    } else {
        document.getElementById("satsformoutput").innerText = "Invalid Input";
    }
}


document.addEventListener("DOMContentLoaded", async function (event) {
    if (document.getElementById("btcusd")) {
        document.getElementById("btcusd").innerText = await getBitcoinPrice();
    }
    if (document.getElementById("satsusd")) {
        document.getElementById("satsusd").innerText = await getSatoshiPrice();
    }
    // bitcoin.html form submit
    if (document.getElementById("btcform")) {
        const btcbutton = document.getElementById("btcbutton");
        btcbutton.addEventListener("click", () => {
            const btc = document.getElementById("btc");
            submitBtcForm({ btc: btc.value });
        });
    }
    // sats.html form submit
    if (document.getElementById("satsform")) {
        const satsbutton = document.getElementById("satsbutton");
        satsbutton.addEventListener("click", () => {
            const satoshi = document.getElementById("satoshi");
            submitSatsForm({ satoshi: satoshi.value });
        });
    }
});
