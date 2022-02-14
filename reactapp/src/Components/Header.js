import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Header.css'

export default class Header extends Component {

    render() {
        return (
            <div className='Header'>
                <Link to = '/Eloado/eloado'>Előadók</Link>
                <Link to = '/album'>Albumok</Link>
                <Link to = '/Szam/szam'>Számok</Link>
            </div>
        )
    }
}
