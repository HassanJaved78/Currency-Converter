import React, { useEffect, useState } from "react";
import './styles/ExchangeRates.css'

import { fetchCurrenciesList, getExchangeRates } from '../api/apiServices';

const ExchangeRates = () => {

    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('All');
    const [currencies, setCurrencies] = useState([]);
    const [rates, setRates] = useState([]);


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

    const handleSelectChange = (event) => {
        
        const {name, value} = event.target;

        if(name === "input-currency"){
            setFromCurrency(value);
        }
        else if (name === "output-currency") {
            setToCurrency(value);
        }
    }

    function swapHandler(){
        // console.log("swap");
        if(fromCurrency && toCurrency) {
            if(toCurrency === "All") {
                alert("Cannot swap if \'To currency\' is \'all\'");
                return;
            }
            // console.log("swapping");
            const temp = fromCurrency;
            setFromCurrency(toCurrency);
            setToCurrency(temp);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        async function get(){
            const result = await getExchangeRates(fromCurrency, toCurrency);
            if(result) {
                setRates(result);
            }
            else {
                setRates([]); // Clear table on error
            }
        }
        get();

    }

    return (
        <div id="exchange" className="exchange-rates">
            <h2>Exchange Rate</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam saepe, ut voluptates repellat dicta itaque.</p>
            <hr />

            <form className="rates-form" onSubmit={handleSubmit}>

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
                    <option value="All">All</option>
                    {currencies.map(([code, name]) => {
                        return (
                            <option key={code} value={code} disabled={code === fromCurrency}>
                                {code}-{name}
                            </option>
                        )
                    })}
                </select>

                <div className="buttons">
                    <input type="submit" value="Get Rates" disabled={!fromCurrency}/>

                    <input type="button" value="Reset" onClick={() => {
                        setFromCurrency('');
                        setToCurrency('All');
                        setRates([]);
                    }}/>
                </div>
                
            </form>
        
            {rates.length === 0 && <p>No Data to display</p>}

            {rates.length > 0 && 
            
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>From</th>
                                <th>To</th>
                                <th>Rate</th>
                            </tr>
                        </thead>

                        <tbody>
                            {rates.map(([code, rate]) => {
                                const currencyName = currencies.find(([c]) => c === code)?.[1] || "";
                                return (
                                <tr key={code}>
                                    <td>{fromCurrency}</td>
                                    <td>{code} - {currencyName}</td>
                                    <td>{rate}</td>
                                </tr>
                                );
                            })}
                        </tbody>

                    </table>
                </div>
            }

        </div>
    )
}

export default ExchangeRates;