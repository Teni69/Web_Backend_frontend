import React, { Component } from 'react'
import axios from 'axios'
import '../AlbumInsert.css'

export default class AlbumInsert extends Component {

    state = {
        cim: '',
        eloadoid: ''
    }

    onChangeCim = (event) =>{
        var value = event.target.value
        this.setState({cim:value})
    }

    onChangeEloadoId = (event) =>{
        var value = event.target.value
        this.setState({eloadoid:value})
    }

    onClickButton(){
        var body = {
            'Cim': this.state.cim,
            'EloadoID': this.state.eloadoid
        }
        axios.post('/album', body)
    }

    render() {
        return (
            <div className='InsertDiv'>
                <input className='placeholder' placeholder='cim'onChange={this.onChangeCim}></input>
                <input className='placeholder' placeholder='eloadoid'onChange={this.onChangeEloadoId}></input>
                <button className='btn' onClick={this.onClickButton.bind(this)}>Mentés</button>
            </div>
        )
    }
}
