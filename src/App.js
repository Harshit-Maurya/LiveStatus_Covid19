import React from 'react';

import { Cards, CountryPicker, Chart, Img} from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import image1 from './images/image1.png';


class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <center><marquee direction="up" behavior="slide" scrolldelay="500"><img className={styles.image} src={image1} alt="COVID-19" /></marquee></center>
        <div><hr /></div>
        <CountryPicker data={data} handleCountryChange={this.handleCountryChange}  />
        <Cards data={data} />
        <Img data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
      
      </div>
    );
  }
}

export default App;
