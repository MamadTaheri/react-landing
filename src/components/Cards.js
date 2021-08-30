import React, { Component } from 'react'

import Card from './Card'
import styles from './Cards.module.css'

import iphonex from "../images/iphone10.jpg"

export default class Cards extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Card image={iphonex} name="Iphone X" cost ="500 $" />
            </div>
        )
    }
}
