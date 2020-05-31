import React, { Component } from 'react'

import styles from './Card.module.css'

class Card extends Component {
    constructor(props) {
        super(props)

        let angle = Math.random() * 90 - 45
        let xPos = Math.random() * 40 - 20
        let yPos = Math.random() * 40 - 20
        this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`
    }

    render() {
        return (
            <img
                className={styles.Card}
                src={this.props.image}
                alt={this.props.name}
                style={{ transform: this._transform }}
            />
        )
    }
}

export default Card
