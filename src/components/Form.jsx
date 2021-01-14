import React, {useState, useEffect} from 'react';

import useCurrency from '../hooks/useCurrency';
import useCripto from '../hooks/useCripto';

import axios from 'axios';


const Form = ({storeCurrency, storeCriptoCurrency}) =>{

    //cripto array state
    const [criptoCurrencies, storeCriptoCurrencies] = useState([]);

    const Currencies = [
        {name:"United States Dollar", code:"USD"},
        {name:"British Pound Sterling", code:"GBP"},
        {name:"Euro", code:"EUR"},
        {name:"Mexican Peso", code:"MXN"},
        {name:"Argentine Peso", code:"ARS"}
    ]

    //Using useCurrency
    let [currency, SelectCurrency] = useCurrency('Choose your currency', 'USD', Currencies);

    //using useCripto
    const [criptocurrency, SelectCripto] = useCripto('Choose your cripto currency', 'BTC', criptoCurrencies)

    //Call API
    useEffect(() =>{
        const apiKey = '2bfbc9e0c343bed00c5810ef6af6f59cd2e82b1e57da35f29ec7aa4d34fa3bff';
        const consultAPI = async () =>{
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD&api_key=${apiKey}`
        
            const result = await axios.get(url);
            storeCriptoCurrencies(result.data.Data);
        }
        consultAPI();


    }, [])

    useEffect(() => {
        storeCurrency(currency);
        storeCriptoCurrency(criptocurrency);
    }, [currency, criptocurrency])
        


    return (
        <form>
            <SelectCurrency />
            <SelectCripto />
            <input type="submit"
                value="calculate"/> 
        </form>
    )
}

export default Form
