export const fetchCurrenciesList = async () => {
    try{
        const response = await fetch('https://corsproxy.io/?https://moneymorph.dev/api/currencies');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        const currenciesListArray = Object.entries(data);
            currenciesListArray.unshift(['USD', 'United States Dollar']); //list does not contain USd thats why
            console.log(currenciesListArray);
        return currenciesListArray;
    }
    catch(error) {
        alert(`Error fetching data: ${error}\n Please try again later`);
        return null;
    }
}

export const convert = async (amount, fromCurrency, toCurrency) => {
    try{
        const response = await fetch(`https://corsproxy.io/?https://moneymorph.dev/api/convert/${amount}/${fromCurrency}/${toCurrency}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        // console.log(data);
        return data;
    }
    catch(error) {
        alert(`Error fetching data: ${error}\n Please try again later`);
        return null;
    }
}


// https://moneymorph.dev/api/convert/50/USD/EUR
// {
//   "meta": {
//     "timestamp": 1754307635,
//     "rate": 0.8769
//   },
//   "request": {
//     "query": "/convert/50.0/USD/EUR",
//     "from": "USD",
//     "to": "EUR",
//     "amount": 50
//   },
//   "response": 43.845
// }


// https://moneymorph.dev/api/currencies
// {
//   "AUD": "Australian Dollar",
//   "BGN": "Bulgarian Lev",
//   "BRL": "Brazilian Real",
//   "CAD": "Canadian Dollar",
//   "CHF": "Swiss Franc",
//   "CNY": "Chinese Yuan",
//   "CZK": "Czech Koruna",
//   "DKK": "Danish Krone",
//   "EUR": "Euro",
//   "GBP": "British Pound",
//   "HKD": "Hong Kong Dollar",
//   "HUF": "Hungarian Forint",
//   "IDR": "Indonesian Rupiah",
//   "ILS": "Israeli Shekel",
//   "INR": "Indian Rupee",
//   "ISK": "Icelandic Krona",
//   "JPY": "Japanese Yen",
//   "KRW": "South Korean Won",
//   "MXN": "Mexican Peso",
//   "MYR": "Malaysian Ringgit",
//   "NOK": "Norwegian Krone",
//   "NZD": "New Zealand Dollar",
//   "PHP": "Philippine Peso",
//   "PLN": "Polish Zloty",
//   "RON": "Romanian Leu",
//   "SEK": "Swedish Krona",
//   "SGD": "Singapore Dollar",
//   "THB": "Thai Baht",
//   "TRY": "Turkish Lira",
//   "ZAR": "South African Rand"
// }

// https://moneymorph.dev/api/latest
// {
//   "timestamp": 1754307754,
//   "base": "USD",
//   "rates": {
//     "AUD": 1.557,
//     "BGN": 1.715,
//     "BRL": 5.6234,
//     "CAD": 1.3874,
//     "CHF": 0.8166,
//     "CNY": 7.2118,
//     "CZK": 21.5609,
//     "DKK": 6.5441,
//     "EUR": 0.8769,
//     "GBP": 0.7598,
//     "HKD": 7.85,
//     "HUF": 350.8857,
//     "IDR": 16519.7036,
//     "ILS": 3.4245,
//     "INR": 87.5044,
//     "ISK": 125.3946,
//     "JPY": 150.4823,
//     "KRW": 1404.6212,
//     "MXN": 18.9546,
//     "MYR": 4.2775,
//     "NOK": 10.3585,
//     "NZD": 1.7061,
//     "PHP": 58.1524,
//     "PLN": 3.7491,
//     "RON": 4.4502,
//     "SEK": 9.818,
//     "SGD": 1.2988,
//     "THB": 32.8499,
//     "TRY": 40.6685,
//     "ZAR": 18.3232
//   }
// }