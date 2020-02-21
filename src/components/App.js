import React, { Component } from 'react'
import Header from '../layout/Header/Header'
import Countries from './Countries/Countries'
import Cities from './Cities/Cities'

import './App.css';

class App extends Component {
  state = {
    countries: [
      {
        "id": 1,
        "title": "United Kingdom",
        "text": "The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom(UK) or Britain, is a sovereign state in Europe."
      },

      {
        "id": 2,
        "title": "France",
        "text": "France, officially the French Republic (French: R\u00e9publique fran\u00e7aise), is a unitary sovereign state comprising territory in western Europe and several overseas regions and territories."
      },

      {
        "id": 3,
        "title": "Spain",
        "text": "Spain (Spanish: Espa\u00f1a), officially the Kingdom of Spain (Spanish: Reino de Espa\u00f1a), is a sovereign state located on the Iberian Peninsula in southwestern Europe."
      },

      {
        "id": 4,
        "title": "Germany",
        "text": "Germany, officially the Federal Republic of Germany (German: Bundesrepublik Deutschland), is a federal parliamentary republic in western - central Europe."
      }

    ],

    cities: [
      {
        "id": 1,
        "country_id": 1,
        "title": "London",
        "desc": "is a capital of Great Britain"
      },

      {
        "id": 2,
        "country_id": 1,
        "title": "Liverpool",
        "desc": ""
      },

      {
        "id": 3,
        "country_id": 2,
        "title": "Paris",
        "desc": ""
      },

      {
        "id": 4,
        "country_id": 3,
        "title": "Madrid",
        "desc": ""
      },

      {
        "id": 5,
        "country_id": 4,
        "title": "Berlin",
        "desc": ""
      },

      {
        "id": 6,
        "country_id": 4,
        "title": "Munich",
        "desc": ""
      },

      {
        "id": 7,
        "country_id": 4,
        "title": "Hamburg",
        "desc": ""
      }
    ],

    isOpenCitiesList: true,

    citiesListMustBeRendered: [],

    activeId: 1,

    selectedCountryId: 1,
  }

  componentDidMount() {
    this.firstRender();
  }

  firstRender = () => {
    let firstRender = null;
    firstRender = this.state.cities.filter(city => city.country_id === 1)
    this.setState({
      citiesListMustBeRendered: firstRender,
    })
  }

  separateCitiesByCountryId = ident => {
    if (this.state.activeId !== ident) {
      let arr = this.state.cities.filter(city => ident === city.country_id)

      this.setState({
        citiesListMustBeRendered: arr,
        activeId: ident,
        isOpenCitiesList: true,
        selectedCountryId: ident,
      })

    }
  }

  deleteHandler = mustBeDeletedId => {
    const cities = this.state.cities.filter(city => city.id != mustBeDeletedId);
    const citiesListMustBeRendered = this.state.citiesListMustBeRendered.filter(city => city.id !== mustBeDeletedId);

    this.setState({
      cities: cities,
      citiesListMustBeRendered: citiesListMustBeRendered
    })
  }

  updateCityData = (ident, title, desc) => {
    let updatedCities = null;

    updatedCities = this.state.cities.map(city => {
      if (ident === city.id) {
        city.title = title;
        city.desc = desc;
      }
      return city;
    })

    this.setState({
      cities: updatedCities,
    })
  }

  addNewCity = (identif, countryIdent, title, desc) => {
    let newCity = {};

    newCity.id = identif;
    newCity.country_id = countryIdent;
    newCity.title = title;
    newCity.desc = desc;

    this.setState({
      cities: this.state.cities.concat(newCity),
      citiesListMustBeRendered: this.state.citiesListMustBeRendered.concat(newCity),
    })
  }

  render() {

    return (
      <div className={'App'}>
        <Header />

        <div className={'container'}>
          <Countries
            countries={this.state.countries}
            activeId={this.state.activeId}
            separateCitiesByCountryId={this.separateCitiesByCountryId}
          />

          <Cities
            cities={this.state.citiesListMustBeRendered}
            isOpenCitiesList={this.state.isOpenCitiesList}
            deleteHandler={this.deleteHandler}
            updateCityData={this.updateCityData}
            selectedCountryId={this.state.selectedCountryId}
            addNewCity={this.addNewCity}
          />

        </div>
      </div>
    )
  }
}

export default App;
