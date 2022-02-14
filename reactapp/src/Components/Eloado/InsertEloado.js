import React, { Component } from 'react'
import axios from 'axios'
import './EloadoInsert.css'

export default class InsertEloado extends Component {

    state = {
        name: ''
    }

    onChangeName = (event) =>{
        var value = event.target.value
        this.setState({name:value})
    }

    onClickButton(){
        var body = {
            'Name': this.state.name
        }
        axios.post('/eloado', body)
    }

    render() {
        return (
            <div className='InsertDiv'>
                <input className='placeholder' placeholder='name'onChange={this.onChangeName}></input>
                <button className='btn' onClick={this.onClickButton.bind(this)}>Mentés</button>
            </div>
        )
    }
}