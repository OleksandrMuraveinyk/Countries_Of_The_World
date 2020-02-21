import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './AddingForm.css'

class AddingForm extends Component {
    state = {
        id: `${(~~(Math.random() * 1e8)).toString(16)}`,
        country_id: this.props.selectedCountryId,
        title: '',
        desc: '',
        isAddingFormActive: false,
        isButtonActive: true,
    }

    addingFormActivation = () => {
        this.setState({
            isAddingFormActive: true,
            isButtonActive: false,
        })

    }

    titleAdding = newValue => {
        this.setState({
            title: newValue.trim()
        })
    }

    descAdding = newValue => {
        this.setState({
            desc: newValue.trim()
        })

    }

    addingCancel = () => {
        this.setState({
            title: '',
            desc: '',
            isAddingFormActive: false,
            isButtonActive: true,
        })
    }

    addingSubmit = () => {
        if (this.state.title && this.state.desc) {
            this.setState({
                isAddingFormActive: false,
                isButtonActive: true,
                id: `${(~~(Math.random() * 1e8)).toString(16)}`,
            })

            this.props.addNewCity(this.state.id, this.props.selectedCountryId, this.state.title, this.state.desc);
        }
    }

    render() {
        if (this.props.mustBeButton && this.state.isButtonActive) {
            return (
                <div>
                    <button
                        className={'btn btn-primary btn-lg'}
                        onClick={this.addingFormActivation}
                    >
                        + Add City
                </button>
                </div>
            )
        }

        if (this.props.mustBeButton && this.state.isAddingFormActive) {
            return (
                <div
                    className={'containerAdd'}
                >
                    <h4 className={'title'}>Adding City</h4>

                    <div
                        className={'addingPlace'}>
                        <textarea
                            className={'titleAdding'}
                            placeholder={'Enter city name'}
                            onChange={event => this.titleAdding(event.target.value)}
                        ></textarea>

                        <textarea
                            className={'descAdding'}
                            placeholder={'Enter description'}

                            onChange={event => this.descAdding(event.target.value)}
                        ></textarea>

                    </div>

                    <div
                        className={'buttons'}
                    >
                        <button
                            className={'btn btn-primary btn-lg'}
                            onClick={this.addingSubmit}
                        >
                            Submit
                        </button>

                        <button
                            className={'btn btn-secondary btn-lg'}
                            onClick={this.addingCancel}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )
        }

        return (
            null
        )
    }
}

AddingForm.propTypes = {
    mustBeButton: PropTypes.bool,
    selectedCountryId: PropTypes.number,
    addNewCity: PropTypes.func
}

export default AddingForm