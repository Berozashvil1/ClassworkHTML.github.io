import { getCurrencies, getSupported, renderOptions } from "./Services.js";
import { HtmlElement } from "./DomeElements.js";

let rate = null;
let currency1 = 'GEL';
let currency2 = 'USD';
let amount_1 = 1;
let amount_2 = null;
let currencies = null;
const supportedCodes = await getSupported();

HtmlElement.amount_1.addEventListener("input", e => amount_1 = e.target.value);
HtmlElement.select_1.addEventListener("change", async (e) => {
    currency1 = e.target.value;
    currencies = await getCurrencies(currency1);
    rate = currencies.rates[currency2];
});
HtmlElement.select_2.addEventListener("change", e => {
    currency2 = e.target.value
    rate = currencies.rates[currency2]
});
HtmlElement.convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    amount_2 = rate * amount_1;
    HtmlElement.amount_2.value = amount_2;
})
HtmlElement.swapBtn.addEventListener("click", (e)=>{
    const currencyChanged=currency2;
    currency2=currency1;
    currency1=currencyChanged;
    init()
})


async function init() {
    renderOptions(supportedCodes, currency1, currency2);
    currencies = await getCurrencies(currency1);
    rate = currencies.rates[currency2];
    amount_2 = rate * amount_1;
    HtmlElement.amount_2.value = amount_2;
}

<<<<<<< HEAD
await init();


=======
init()

HtmlElement.select_1.addEventListener("change", async (e) => {
    const code = e.target.value;
    const data = await getCurrencies(code);
    code2 = HtmlElement.select_2.value;
    code1 = data.base_code;
    rate = data.rates[code2];
    HtmlElement.amount_2.value = rate * HtmlElement.amount_1.value
    code2 = HtmlElement.select_2.value;
    console.log(rate);
})

convert.addEventListener("click", (e)=>{
    
})
>>>>>>> a3654dd47c70c822fbff14d14d87db6279ee24e8
