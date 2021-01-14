import axios from 'axios';
import React, {Fragment, useEffect, useState} from 'react';
import Form from './components/Form.jsx';

function App() {

  const [currency, storeCurrency] = useState('USD');
  const [criptoCurrency, storeCriptoCurrency] = useState('BTC');
  const [result, storeResult] = useState({});

  useEffect(()=>{
    const calculateCryptoPrice = async () =>{
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoCurrency}&tsyms=${currency}`;

      const result = await axios.get(url);
      storeResult(result.data.DISPLAY[criptoCurrency][currency]);
    }

    calculateCryptoPrice();
  }, [currency, criptoCurrency])

  return (
    <Fragment>
      <Form
        storeCurrency={storeCurrency}
        storeCriptoCurrency={storeCriptoCurrency}
      >
    </Form>
    </Fragment>
  );
}

export default App;
