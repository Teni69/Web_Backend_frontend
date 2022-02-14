import React, { Component } from 'react'
import axios from 'axios'
import AlbumItem from './albumItem'
import { Link } from 'react-router-dom'
import '../AlbumList.css'

export default class listAlbum extends Component {
    state = {
        albums: []
    }

    componentDidMount(){
        axios.get('/album').then(response => {
            this.setState({albums : response.data})
            console.log(this.state.albums)
        })
    }

    render() {
        return (
            <div>
                <h1>
                   Albumok
                </h1>
                <div className='Container'>
                {
                    this.state.albums && this.state.albums.map(album => {
                        return(
                            <AlbumItem
                                id = {album.AlbumID}
                                cim = {album.Cim}
                                eloadoid = {album.EloadoID}
                            />
                        );
                    })
                }
                <Link to = '/InsertAlbum'>Beszúrás</Link>
            </div>
            </div>
        )
    }
}
