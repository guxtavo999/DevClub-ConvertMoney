const convertButton = document.querySelector(".convert-button");
const CurrencySelect = document.querySelector(".currency-select")
const fromCurrency = document.querySelector("#fromCurrency")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".value-input").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value"); // Outras moedas
    const dolarToday = 5.2;
    const euroToday = 6.2;
    const LibraToday = 7.2;
    const bitcoinToday = 40000;


    if (CurrencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);
    }

    if (CurrencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);
    }
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);

    if (CurrencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / LibraToday); // Exemplo de taxa de câmbio
    }

    if (CurrencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday); // Exemplo de taxa de câmbio
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);


}

function convertValues1() {
    const inputCurrencyValue = document.querySelector(".value-input").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");

    if (fromCurrency.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue);
    }

    if (fromCurrency.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue);
    }

    if (fromCurrency.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue);
    }

    if (fromCurrency.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue);
    }

    if (fromCurrency.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue);
    }
}
function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (CurrencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (CurrencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (CurrencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (CurrencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    convertValues()
}

function changeCurrency1() {
    const currencyName1 = document.getElementById("fromCurrency")
    const currencyImage1 = document.querySelector("#currency-img1")
    const currencyName2 = document.getElementById("fromCurrency-name")

    if (currencyName1.value == "real") {
        currencyName2.innerHTML = "Real"
        currencyImage1.src = "./assets/real.png"
    }
    if (currencyName1.value == "dolar") {
        currencyName2.innerHTML = "Dólar americano"
        currencyImage1.src = "./assets/dolar.png"
    }

    if (currencyName1.value == "euro") {
        currencyName2.innerHTML = "Euro"
        currencyImage1.src = "./assets/euro.png"
    }

    if (currencyName1.value == "libra") {
        currencyName2.innerHTML = "Libra"
        currencyImage1.src = "./assets/libra.png"
    }

    if (currencyName1.value == "bitcoin") {
        currencyName2.innerHTML = "Bitcoin"
        currencyImage1.src = "./assets/bitcoin.png"
    }

    convertValues1()
}

CurrencySelect.addEventListener("change", changeCurrency)
fromCurrency.addEventListener("change", changeCurrency1)
convertButton.addEventListener("click", convertValues1);
