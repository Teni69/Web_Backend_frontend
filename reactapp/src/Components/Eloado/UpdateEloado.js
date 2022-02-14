import React, { Component } from 'react'
import axios from 'axios'
import './EloadoUpdate.css'
export default class UpdateEloado extends Component {

    state = {
        id: '',
        name: '',
    }

    componentDidMount(){
        const id = this.props.match.params.id
        let result = axios.get(`/eloado/${id}`).then(result => {
            console.log(result)
            this.setState({
            id,
            name: result.data[0].Name
            })
        })
    }

    onChangeId = (event) =>{
        var value = event.target.value
        this.setState({id:value})
    }

    onChangeName = (event) =>{
        var value = event.target.value
        this.setState({name:value})
    }

    onClickButton(){
        var body = {
            'Name': this.state.name
        }
        axios.put(`/eloado/${this.state.id}`, body)
    }

    render() {
        return (
            <div className='UpdateDiv'>
                <input className='placeholder' placeholder='id' onChange={this.onChangeId} value={this.state.id && this.state.id}></input>
                <input className='placeholder' placeholder='name'onChange={this.onChangeName} value={this.state.name && this.state.name}></input>
                <button className='btn' onClick={this.onClickButton.bind(this)}>Mentés</button>
            </div>
        )
    }
}
