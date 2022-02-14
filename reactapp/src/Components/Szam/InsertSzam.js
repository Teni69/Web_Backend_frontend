import React, { Component } from 'react'
import axios from 'axios'
import './SzamInsert.css'

export default class InsertSzam extends Component {

    state = {
        cim: '',
        ar: '',
        albumid: ''
    }

    onChangeCim = (event) =>{
        var value = event.target.value
        this.setState({cim:value})
    }

    onChangeAr = (event) =>{
        var value = event.target.value
        this.setState({ar:value})
    }

    onChangeAlbumId = (event) =>{
        var value = event.target.value
        this.setState({albumid:value})
    }

    onClickButton(){
        var body = {
            'SzamCim': this.state.cim,
            'Ar': this.state.ar,
            'AlbumID': this.state.albumid
        }
        axios.post('/szam', body)
    }

    render() {
        return (
            <div className='InsertDiv'>
                <input className='placeholder' placeholder='cim'onChange={this.onChangeCim}></input>
                <input className='placeholder' placeholder='ar'onChange={this.onChangeAr}></input>
                <input className='placeholder' placeholder='albumid'onChange={this.onChangeAlbumId}></input>
                <button className='btn' onClick={this.onClickButton.bind(this)}>Mentés</button>
            </div>
        )
    }
}
