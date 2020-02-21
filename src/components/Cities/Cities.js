import React, { Component } from 'react'
import City from '../City/City'
import AddingForm from '../AddingForm/AddingForm'
import PropTypes from 'prop-types'

import './Cities.css'

class Cities extends Component {
    state = {
        countryId: this.props.selectedCountryId
    }

    idCatherForDelete = identificator => {
        const mustBeDeletedId = identificator;
        this.props.deleteHandler(mustBeDeletedId);
    }
    render() {
        let cities = null;

        if (this.props.isOpenCitiesList) {
            cities = this.props.cities.map((city) => {
                return (
                    <div
                        className={'cityContainer'}
                        key={city.id}
                    >
                        <City
                            id={city.id}
                            country_id={city.country_id}
                            title={city.title}
                            desc={city.desc}
                            idCatherForDelete={() => this.idCatherForDelete(city.id)}
                            deleteHandler={this.props.deleteHandler}
                            updateCityData={this.props.updateCityData}
                        />
                    </div>
                )
            })
        }

        return (
            <div className={'cities'}>
                <AddingForm
                    className={'addingForm'}
                    mustBeButton={this.props.isOpenCitiesList}
                    selectedCountryId={this.props.selectedCountryId}
                    addNewCity={this.props.addNewCity}
                />
                {cities}
            </div >
        )
    }
}

Cities.propTypes = {
    cities: PropTypes.array,
    isOpenCitiesList: PropTypes.bool,
    deleteHandler: PropTypes.func,
    updateCityData: PropTypes.func,
    selectedCountryId: PropTypes.number,
    addNewCity: PropTypes.func,
}

export default Cities

