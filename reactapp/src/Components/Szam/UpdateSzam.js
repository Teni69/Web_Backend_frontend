import React, { Component } from 'react'
import axios from 'axios'
import './SzamUpdate.css'
export default class UpdateSzam extends Component {

    state = {
        id: '',
        cim: '',
        ar: '',
        albumid: ''
    }

    componentDidMount(){
        const id = this.props.match.params.id
        let result = axios.get(`/szam/${id}`).then(result => {
            console.log(result)
            this.setState({
            id,
            cim: result.data[0].SzamCim,
            ar: result.data[0].Ar,
            albumid: result.data[0].AlbumID
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
        axios.put(`/szam/${this.state.id}`, body)
    }

    render() {
        return (
            <div className='UpdateDiv'>
                <input className='placeholder' placeholder='id' onChange={this.onChangeId} value={this.state.id && this.state.id}></input>
                <input className='placeholder' placeholder='cim'onChange={this.onChangeCim} value={this.state.cim && this.state.cim}></input>
                <input className='placeholder' placeholder='ar'onChange={this.onChangeAr} value={this.state.ar && this.state.ar}></input>
                <input className='placeholder' placeholder='albumid'onChange={this.onChangeAlbumId} value={this.state.albumid && this.state.albumid}></input>
                <button className='btn' onClick={this.onClickButton.bind(this)}>Mentés</button>
            </div>
        )
    }
}
