import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './EloadoItem.css'

export default class ItemEloado extends Component {

    onDeleteClick(){
        axios.delete('/eloado/'+this.props.id).then()
    }

    render() {
        return (
            <div className='EloadoCard'>
                <div>
                    <span>
                       Előadó ID
                    </span>
                    <p>
                       {this.props.id}
                    </p>
                </div>
                <div>
                    <span>
                        Név
                    </span>
                    <p>
                        {this.props.name}
                    </p>
                </div>
                <button onClick={this.onDeleteClick.bind(this)}>
                    Törlés
                </button>
                <Link to = {`/UpdateEloado/${this.props.id}`}>Módosítás</Link>
            </div>
        )
    }
}
