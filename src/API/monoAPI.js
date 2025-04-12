
async function getMonoCurrency(){
const response = await fetch("https://api.monobank.ua/bank/currency")
currency = await response.json()
return currency
}
module.exports = {getMonoCurrency};
