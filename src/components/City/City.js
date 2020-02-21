import React, { Component } from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import EditIcon from '@material-ui/icons/Edit'
import PropTypes from 'prop-types'

import './City.css'

class City extends Component {
    state = {
        title: this.props.title,
        desc: this.props.desc,
        id: this.props.id,
        tempTitle: this.props.title,
        tempDesc: this.props.desc,
        disabled: true,
        editingMenu: false
    }

    titleChange = newValue => {
        let tempTitle = this.state.tempTitle;
        tempTitle = newValue;
        this.setState({ tempTitle })
    }

    descChange = newValue => {
        let tempDesc = this.state.tempDesc;
        tempDesc = newValue;
        this.setState({ tempDesc })
    }

    changesCancel = () => {
        this.setState({
            title: this.state.title,
            desc: this.state.desc,
            editingMenu: false,
            disabled: true,
        })
    }

    changesSubmit = () => {
        this.setState({
            title: this.state.tempTitle,
            desc: this.state.tempDesc,
            editingMenu: false,
            disabled: true,
        })

        this.props.updateCityData(this.state.id, this.state.tempTitle, this.state.tempDesc)
    }

    render() {
        if (this.state.editingMenu) {
            return (
                <div
                    className={'containerEdit'}
                >
                    <h4 className={'title'}>{this.state.editingMenu ? 'Edit city ' + this.state.title : null}</h4>

                    <div className={'editor'}>

                        <textarea
                            className={'titleInputOnEdit'}
                            placeholder={this.state.title}
                            disabled={this.state.disabled}
                            onChange={event => this.titleChange(event.target.value)}
                        ></textarea>

                        <textarea
                            className={'descInputOnEdit'}
                            placeholder={this.state.desc}
                            disabled={this.state.disabled}
                            onChange={event => this.descChange(event.target.value)}
                        ></textarea>

                    </div>
                    <div
                        className={'buttons'}
                    >
                        <button
                            className={'btn btn-primary btn-lg'}
                            onClick={this.changesSubmit}
                        >
                            Submit
                        </button>

                        <button
                            className={'btn btn-secondary btn-lg'}
                            onClick={this.changesCancel}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )
        }

        return (
            <>
                <div>
                    <input
                        className={'titleInput'}
                        value={this.state.title}
                        disabled={this.state.disabled}
                    ></input>
                    <input
                        className={'descInput'}
                        value={this.state.desc}
                        disabled={this.state.disabled}
                    ></input>
                </div>
                <div
                    className={'cityIcons'}
                >
                    <EditIcon
                        className={'icons'}
                        onClick={() => { this.setState({ disabled: false, editingMenu: true }) }}
                    />
                    <DeleteOutlineIcon
                        className={'icons'}
                        onClick={this.props.idCatherForDelete}
                    />
                </div>
            </>
        )
    }
}

City.propTypes = {
    country_id: PropTypes.number,
    title: PropTypes.string,
    desc: PropTypes.string,
    idCatherForDelete: PropTypes.func,
    deleteHandler: PropTypes.func,
    updateCityData: PropTypes.func,
}

export default City


