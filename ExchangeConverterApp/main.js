const amountInput = document.querySelector("#amaount");
const amountWrapper = document.querySelector("#amount-wrapper");
const ExchangeWrapper = document.querySelector("#Exchange-wrapper");
const Value = document.querySelector("#Value");
const currency = new Currency();

getListenners();


function getListenners() {
    amountInput.addEventListener("input", change);

}

function change() {
    const amount = Number(amountInput.value);
    const firstOptions = amountWrapper.options[amountWrapper.selectedIndex].value;
    const secondOptions = ExchangeWrapper.options[ExchangeWrapper.selectedIndex].value;
    currency.Change(amount, firstOptions, secondOptions)
        .then((result) => {
            Value.value = result;
            console.log(result);
        })
}