import React, { Component } from 'react'
import Country from '../Country/Country'
import PropTypes from 'prop-types'

import './Countries.css'

class Countries extends Component {
    render() {
        let countries = null;

        countries = this.props.countries.map((country) => {
            return (
                <Country
                    key={country.id}
                    id={country.id}
                    title={country.title}
                    text={country.text}
                    separateCitiesByCountryId={this.props.separateCitiesByCountryId}
                    activeId={this.props.activeId}
                />
            )
        })

        return (
            <div className={'countries'}>
                {countries}
            </div >
        )
    }
}

Countries.propTypes = {
    countries: PropTypes.array,
    activeId: PropTypes.number,
    separateCitiesByCountryId: PropTypes.func,
}

export default Countries