import {getBitcoinPrice, getSatoshiPrice, submitBtcForm, submitSatsForm} from './forms/forms.js';

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
