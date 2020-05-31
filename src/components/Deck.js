import React, { Component } from 'react'
import axios from 'axios'

import Card from './Card'

import styles from './Deck.module.css'

const API_BASE_URL = 'https://deckofcardsapi.com/api/deck'

class Deck extends Component {
    constructor(props) {
        super(props)

        this.state = {
            deck: null,
            drawn: []
        }

        this.getCard = this.getCard.bind(this)
    }

    async componentDidMount() {
        let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`)
        this.setState({
            deck: deck.data
        })
    }

    async getCard() {
        let id = this.state.deck.deck_id
        try {
            let cardUrl = `${API_BASE_URL}/${id}/draw/`
            let cardRes = await axios.get(cardUrl)
            if (!cardRes.data.success) {
                throw new Error('No cards remaining!')
            }
            let card = cardRes.data.cards[0]
            this.setState((st) => ({
                drawn: [
                    ...st.drawn,
                    {
                        id: card.code,
                        image: card.image,
                        name: `${card.value} of ${card.suit}`
                    }
                ]
            }))
        } catch (error) {
            alert(error)
        }
    }

    render() {
        const cards = this.state.drawn.map((c) => (
            <Card key={c.id} name={c.name} image={c.image} />
        ))
        return (
            <div className={styles.Deck}>
                <h1 className={styles.DeckTitle}>♦ Card Dealer ♦</h1>
                <button className={styles.DeckButton} onClick={this.getCard}>
                    Deal a Card!
                </button>
                <div className={styles.CardArea}>{cards}</div>
            </div>
        )
    }
}

export default Deck
