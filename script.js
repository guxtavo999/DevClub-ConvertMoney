const convertButton =  document.querySelector(".convert-button");
const CurrencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".value-input").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value"); // Outras moedas
    const dolarToday = 5.2;
    const euroToday = 6.2;


    if (CurrencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
        } ).format(inputCurrencyValue / dolarToday);
    }

    if (CurrencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
        } ).format(inputCurrencyValue / euroToday);
    }
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    } ).format(inputCurrencyValue);
}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img") 

    if (CurrencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (CurrencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    
    convertValues()
}

CurrencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues);