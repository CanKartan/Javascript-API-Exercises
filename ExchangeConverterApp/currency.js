class Currency {

    constructor() {
        this.APIKey = "";
        this.URL = "https://api.currencyfreaks.com/v2.0/rates/latest";
    }

    async Change(amount, firstOptions, secondOptions) {
        const response = await fetch(`${this.URL}?apikey=${this.APIKey}&base=${firstOptions}`)
        const data = await response.json();
        const exchangeResult = amount * parseFloat(data.rates[secondOptions])
        return exchangeResult;
    }

}

