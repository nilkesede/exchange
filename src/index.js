import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';
import money from 'money';
import locurrency from 'locale-currency';

(async function () {
  try {
    const {country} = await axios.get('http://ipinfo.io/geo').then(({data}) => data);
    const base = locurrency.getCurrency(country);
    const {rates} = await axios.get(`http://api.fixer.io/latest?base=${base}`).then(({data}) => data);

    money.base = base;
    money.rates = {
      ...rates,
      [base]: 1.0
    };

    console.log(money(1).from('USD').to(base));
  } catch (err) {
    console.error(err);
  }
})();

const App = () => 'exchange';
ReactDOM.render(<App/>, document.getElementById('root'));
