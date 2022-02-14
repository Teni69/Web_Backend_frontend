import React, { Component } from 'react'
import axios from 'axios'
import ItemEloado from './ItemEloado'
import { Link } from 'react-router-dom'
import './EloadoList.css'

export default class ListEloado extends Component {
    state = {
        eloadok: []
    }

    componentDidMount(){
        axios.get('/eloado').then(response => {
            this.setState({eloadok : response.data})
            console.log(this.state.eloadok)
        })
    }

    render() {
        return (
            <div>
                <h1>
                   Előadók
                </h1>
                <div className='Container'>
                {
                    this.state.eloadok && this.state.eloadok.map(eloado => {
                        return(
                            <ItemEloado
                                id = {eloado.EloadoID}
                                name = {eloado.Name}
                            />
                        );
                    })
                }
                <Link to = '/InsertEloado'>Beszúrás</Link>
            </div>
            </div>
        )
    }
}
