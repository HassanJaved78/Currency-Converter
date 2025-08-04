import React, { useEffect, useState } from "react";
import './styles/Converter.css'

import { fetchCurrenciesList, convert } from '../api/apiServices';

const Converter = () => {

    const [amount, setAmount] = useState('');
    const [currencies, setCurrencies] = useState([]);
    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('');
    const [exchangeRate, setExchangeRate] = useState('Exchange Rate');
    const [convertedAmount, setConvertedAmount] = useState(null);

    const handleSelectChange = (event) => {
        
        const {name, value} = event.target;

        if(name === "input-currency"){
            setFromCurrency(value);
        }
        else if (name === "output-currency") {
            setToCurrency(value);
        }
    }

    useEffect(() => {
        setConvertedAmount(null);
        setExchangeRate('Exchange Rate');
    }, [amount, fromCurrency, toCurrency]);

    useEffect(() => {
        const getCurrencies = async () => {
            const currenciesList = await fetchCurrenciesList();
            // console.log(currenciesList);
            if (!currenciesList) {
                //if null return alert alredy shown just go back
                return;
            }
            setCurrencies(currenciesList);
        }

        getCurrencies();
    }, []);

    function swapHandler(){
        // console.log("swap");
        if(fromCurrency && toCurrency) {
            // console.log("swapping");
            const temp = fromCurrency;
            setFromCurrency(toCurrency);
            setToCurrency(temp);
        }
    }

    async function handleSubmit(e){
        e.preventDefault();

        // console.log("handle submit");

        if(!amount || !fromCurrency || !toCurrency){
            alert("Please fill in all fields");
            return;
        }

        if(parseFloat(amount) <= 0) {
            alert("Amount must be greater than 0");
            return;
        }

        if(fromCurrency === toCurrency) {
            alert("Both currencies cannot be same");
            return;
        }

        try {
        const result = await convert(amount, fromCurrency, toCurrency);
        // console.log("result: ",result);
        if(result) {
            setConvertedAmount(result.response);
            setExchangeRate(`Exchange rate: ${result.meta.rate}`);
        }
        
    } catch (error) {
        console.error("Conversion failed:", error);
        alert("Conversion failed. Please try again later.");
    }
    }

    return (
        <div className="converter-container">
            <h2>Currency Converter</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam saepe, ut voluptates repellat dicta itaque.</p>
            <hr />

            <form className="converter-form" onSubmit={handleSubmit}>
                <input 
                    type="number" 
                    placeholder="Amount" 
                    min={1} 
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />

                <label htmlFor="input-currency">From</label>
                <select 
                    name="input-currency" 
                    id="input-currency" 
                    value={fromCurrency}
                    onChange={handleSelectChange}
                >
                    <option value="" disabled>Country</option>
                    {currencies.map(([code, name]) => {
                        return (
                            <option key={code} value={code} disabled={code === toCurrency}>
                                {code}-{name}
                            </option>
                        )
                    })}
                </select>

                <button type="button" onClick={swapHandler}>
                    <img src="https://cdn4.iconfinder.com/data/icons/basic-interface-overcolor/512/flip_horizontal-512.png" alt="swap image" title="swap" height={40} />
                </button>

                <label htmlFor="output-currency">To</label>
                <select 
                    name="output-currency" 
                    id="output-currency" 
                    value={toCurrency}
                    onChange={handleSelectChange}
                >
                    <option value="" disabled>Country</option>
                    {currencies.map(([code, name]) => {
                        return (
                            <option key={code} value={code} disabled={code === fromCurrency}>
                                {code}-{name}
                            </option>
                        )
                    })}
                </select>

                <p>{exchangeRate}</p>

                <h2>{convertedAmount !== null ? convertedAmount.toFixed(2) : "0.00"}</h2>

                <input type="submit" value="Convert" disabled={!amount || !fromCurrency || !toCurrency}/>

            </form>
            
        </div>
    )
}

export default Converter;