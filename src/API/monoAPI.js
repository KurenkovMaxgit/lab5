
async function getMonoCurrency(){
const response = await fetch("https://api.monobank.ua/bank/currency")
currency = await response.json()
return currency
}
// const data = await getMonoCurrency();
// console.log(data)
module.exports = {getMonoCurrency};