import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../AlbumItem.css'

export default class albumItem extends Component {

    onDeleteClick(){
        axios.delete('/album/'+this.props.id).then()
    }

    render() {
        return (
            <div className='AlbumCard'>
                <div>
                    <span>
                       Album ID
                    </span>
                    <p>
                       {this.props.id}
                    </p>
                </div>
                <div>
                    <span>
                        Album Címe
                    </span>
                    <p>
                        {this.props.cim}
                    </p>
                </div>
                <div>
                    <span>
                        Előadó ID
                    </span>
                    <p>
                        {this.props.eloadoid}
                    </p>
                </div>
                <button onClick={this.onDeleteClick.bind(this)}>
                    Törlés
                </button>
                <Link to = {`/UpdateAlbum/${this.props.id}`}>Módosítás</Link>
            </div>
        )
    }
}
