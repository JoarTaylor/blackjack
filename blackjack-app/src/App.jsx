import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'
import Cards from './Cards';
import { Blackjackdiv } from './styles';
import { Gamecontainer } from './styles';


function App() {
  const [cards, setCards] = useState([]);
  const [firstCardValue, setFirstCardValue] = useState();
  const [secondCardValue, setSecondCardValue] = useState();
  const [blackjack, setBlackjack] = useState(false);
  const [score, setScore] = useState();


  const drawCards = () => {
    axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=2').then(response => {
      setCards(response.data.cards)
      console.log(response.data.cards)
    })
  }


  useEffect(() => {
    if(cards.length > 1) {
      if(cards[0].value == 'ACE') {
        setFirstCardValue(11);
      } else if (cards[0].value == 'KING' || cards[0].value == 'QUEEN' || cards[0].value == 'JACK') {
        setFirstCardValue(10);
      } else {
        setFirstCardValue(cards[0].value)
      }

      if(firstCardValue != undefined)
      console.log('value ', firstCardValue)
    }
  })

  useEffect(() => {
    if(cards.length > 1) {
      if(cards[1].value == 'ACE') {
        setSecondCardValue(11);
      } else if (cards[1].value == 'KING' || cards[1].value == 'QUEEN' || cards[1].value == 'JACK') {
        setSecondCardValue(10);
      } else {
        setSecondCardValue(cards[1].value)
      }  
    }
  })

useEffect(() => {
  if(secondCardValue != undefined) {
    setScore(parseFloat(firstCardValue)  + parseFloat(secondCardValue));
    if(firstCardValue + secondCardValue == 21) {
      setBlackjack(true)
    }
  }
})

  return (
    <>
    <Gamecontainer>
      <button onClick={drawCards}>Draw</button>
      <div>
        <Cards cards={cards}>
        </Cards>
      </div>
      <div>Score: {score}</div>
        <Blackjackdiv blackjack={blackjack}>
        🎉🎉🎉BLACKJACK!!!🎉🎉🎉
        </Blackjackdiv>
      </Gamecontainer>
    </>
  )
}

export default App
