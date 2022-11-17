import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, ButtonContainer, CardContainer } from './styles'


const CardFuncional = () => {

    const [index, setIndex] = useState(1);
    const [pokemon, setPokemon] = useState(null);


    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${index}/`)
        .then(res => setPokemon(res.data))
        .catch(err => console.log(err))
    }, [index])
    
    const incrementCount = (e) => {
        switch (e.target.innerText){
            case 'NEXT':
                setIndex(prev => prev + 1);
                break;
            default:
            case 'PREV':
                setIndex(prev => prev === 1 ? prev : prev - 1);
                break;
        }
    }

    
    return (
        <CardContainer>
            <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
            <h1>{pokemon?.name}</h1>
            <ButtonContainer>

                <Button onClick={incrementCount}>PREV</Button>
                <Button onClick={incrementCount} main={true}>NEXT</Button>
            </ButtonContainer>
        </CardContainer>
    )
}

export default CardFuncional