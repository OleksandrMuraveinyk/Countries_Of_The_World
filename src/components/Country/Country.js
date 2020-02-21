import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Country.css'

class Country extends Component {
    catchId = () =>
        this.props.separateCitiesByCountryId(this.props.id);

    render() {
        if (this.props.id === this.props.activeId) {
            return (
                <div
                    className={'activeCountry'}
                    onClick={this.catchId}
                >
                    <p
                        className={'titleActCountry'}
                    >
                        {this.props.title}
                    </p>

                    <p>{this.props.text}</p>
                </div >
            )
        }

        return (
            <div
                className={'country'}
                onClick={this.catchId}
            >
                <p
                    className={'titleCountry'}
                >
                    {this.props.title}
                </p>

                <p>{this.props.text}</p>

            </div >
        )
    }
}

Country.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    text: PropTypes.string,
    activeId: PropTypes.number,
    separateCitiesByCountryId: PropTypes.func,
}

export default Country