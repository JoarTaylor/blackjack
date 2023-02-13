import React from 'react'

export default function Cards({cards}) {
  return (
    cards.map(card => {
        return <img key={card.code} src={card.images.png} alt="" />
    })
  )
}
