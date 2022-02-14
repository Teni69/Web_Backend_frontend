import React, { Component } from 'react'
import axios from 'axios'
import ItemSzam from './ItemSzam'
import { Link } from 'react-router-dom'
import './SzamList.css'

export default class ListEloado extends Component {
    state = {
        szamok: []
    }

    componentDidMount(){
        axios.get('/szam').then(response => {
            this.setState({szamok : response.data})
            console.log(this.state.szamok)
        })
    }

    render() {
        return (
            <div>
                <h1>
                   Számok
                </h1>
                <div className='Container'>
                {
                    this.state.szamok && this.state.szamok.map(szam => {
                        return(
                            <ItemSzam
                                id = {szam.SzamID}
                                cim = {szam.SzamCim}
                                ar = {szam.Ar}
                                albumid = {szam.AlbumID}
                            />
                        );
                    })
                }
                <Link to = '/InsertSzam'>Beszúrás</Link>
            </div>
            </div>
        )
    }
}
