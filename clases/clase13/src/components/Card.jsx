import React, { Component } from 'react'
import {fire, water, rock} from '../data.json'
import { Button, ButtonContainer, CardContainer } from './styles'
const arrayPokemons = [...fire, ...water, ...rock]

export default class Card extends Component {


    state = {
        index: 0,
        name: '',
        imgURL: '',
    }

    incrementCount = (e) => {
        switch (e.target.innerText) {
            case "NEXT":
                this.setState({ index: this.state.index + 1 });
                break;
        
            default:
            case "PREV":
                this.setState({ index: this.state.index === 0 ? arrayPokemons.length - 1 : this.state.index - 1});
                break;
        }
    }

    componentDidMount() {
        this.setState({ 
            name: arrayPokemons[this.state.index].pokemonName, 
            imgURL: arrayPokemons[this.state.index].avatar 
    })
        //LLAMADOS INICIALES A API'S.
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.index !== this.state.index) {
            this.setState({ 
                name: arrayPokemons[(this.state.index % arrayPokemons.length)].pokemonName,
                imgURL: arrayPokemons[(this.state.index % arrayPokemons.length)].avatar
            })
        }
    }
    render() {
        return (
        <CardContainer>
            <img src={this.state.imgURL} alt={this.state.name} />
            <h1>{this.state.name}</h1>
            <ButtonContainer>

                <Button onClick={this.incrementCount}>PREV</Button>
                <Button onClick={this.incrementCount} main={true}>NEXT</Button>
            </ButtonContainer>
        </CardContainer>
        )
    }
}