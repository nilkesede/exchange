import {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import money from 'money';

const fetchRates = () => axios.get('https://api.fixer.io/latest').then(({data}) => data);

class Index extends Component {
  static async getInitialProps() {
    const {base, rates} = await fetchRates();
    return {base, rates};
  }

  render() {
    money.base = this.props.base;
    money.rates = this.props.rates;

    const value = 10;
    const converted = money.convert(value, {from: 'USD', to: 'BRL'});

    return `${value.toFixed(2)} usd is ${converted.toFixed(2)} brl`;
  }
}

Index.propTypes = {
  base: PropTypes.string,
  rates: PropTypes.object
};

Index.defaultProps = {
  base: 'USD',
  rates: {}
};

export default Index;
