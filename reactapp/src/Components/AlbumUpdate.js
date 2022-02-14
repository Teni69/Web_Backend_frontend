import React, { Component } from 'react'
import axios from 'axios'
import '../AlbumUpdate.css'
export default class AlbumUpdate extends Component {

    state = {
        id: '',
        cim: '',
        eloadoid: ''
    }

    componentDidMount(){
        const id = this.props.match.params.id
        let result = axios.get(`/album/${id}`).then(result => {
            console.log(result)
            this.setState({
            id,
            cim: result.data[0].Cim,
            eloadoid: result.data[0].EloadoID
            })
        })
    }

    onChangeId = (event) =>{
        var value = event.target.value
        this.setState({id:value})
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
        axios.put(`/album/${this.state.id}`, body)
    }

    render() {
        return (
            <div className='UpdateDiv'>
                <input className='placeholder' placeholder='id' onChange={this.onChangeId} value={this.state.id && this.state.id}></input>
                <input className='placeholder' placeholder='cim'onChange={this.onChangeCim} value={this.state.cim && this.state.cim}></input>
                <input className='placeholder' placeholder='eloadoid'onChange={this.onChangeEloadoId} value={this.state.eloadoid && this.state.eloadoid}></input>
                <button className='btn' onClick={this.onClickButton.bind(this)}>Mentés</button>
            </div>
        )
    }
}
