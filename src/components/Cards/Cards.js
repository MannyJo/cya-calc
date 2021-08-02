import React from 'react';
import cards from '../../data/cards';

class CardList extends React.Component {
    state = {
        cards: cards.map(card => ({...card, numberOfCards: 0, totalPriceOfTheCard: 0})),
        total: 0,
    }

    handleNumberOfCardsChange = id => e => {
        let cards = this.state.cards.map(card => {
            if(card.id === id) {
                card = { ...card, numberOfCards: parseInt(e.target.value), totalPriceOfTheCard: parseInt(e.target.value)*card.price }
            }
            return card
        });

        this.setState({
            cards: cards,
            total: cards.reduce((sum, card) => sum + card.totalPriceOfTheCard, 0)
        });
    }

    render() {
        return (
            <div>
                {this.state.cards.map(card => 
                    <div key={card.id}>
                        <span>{card.name}</span>
                        <span>&nbsp;X&nbsp;</span>
                        <span><input type="number" value={card.numberOfCards} onChange={this.handleNumberOfCardsChange(card.id)} /></span>
                        <span>&nbsp;=&nbsp;</span>
                        <span>{card.totalPriceOfTheCard.toLocaleString()}</span>
                    </div>
                )}
                <br/>
                <div>Total : {this.state.total.toLocaleString()}</div>
            </div>
        );
    }
}

export default CardList;