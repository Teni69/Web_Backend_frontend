import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './SzamItem.css'

export default class ItemSzam extends Component {

    onDeleteClick(){
        axios.delete('/szam/'+this.props.id).then()
    }

    render() {
        return (
            <div className='SzamCard'>
                <div>
                    <span>
                       Szám ID
                    </span>
                    <p>
                       {this.props.id}
                    </p>
                </div>
                <div>
                    <span>
                        Szám Címe
                    </span>
                    <p>
                        {this.props.cim}
                    </p>
                </div>
                <div>
                    <span>
                        Ár
                    </span>
                    <p>
                        {this.props.ar}
                    </p>
                </div>
                <div>
                    <span>
                        Album ID
                    </span>
                    <p>
                        {this.props.albumid}
                    </p>
                </div>
                <button onClick={this.onDeleteClick.bind(this)}>
                    Törlés
                </button>
                <Link to = {`/UpdateSzam/${this.props.id}`}>Módosítás</Link>
            </div>
        )
    }
}
