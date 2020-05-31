import React, { Component } from 'react'

import styles from './Card.module.css'

class Card extends Component {
    render() {
        return (
            <img
                className={styles.Card}
                src={this.props.image}
                alt={this.props.name}
            />
        )
    }
}

export default Card
