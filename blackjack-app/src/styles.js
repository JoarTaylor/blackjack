import styled from 'styled-components'

const Blackjackdiv = styled.div`
    display: ${({blackjack}) => blackjack ? 'block': 'none'};
    text-align: center;

`

const Gamecontainer = styled.div`
    background-color: #467148;
    height: 100vh;
    padding: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;

    button {
        font-size: 3em;
        font-weight: bold;
        color: white;
        background-color: #467148;
        border: 4px solid white;
        border-radius: 10px;

        &:hover {
            background-color: #228b22;
        }
    }

    div {
        font-size: 3em;
        font-weight: bold;
        color: white;

        img {
            margin: 5vh;
        }
    }
`

export { Blackjackdiv, Gamecontainer }