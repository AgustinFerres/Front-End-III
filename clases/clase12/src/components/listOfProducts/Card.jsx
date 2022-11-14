import React, { Fragment, useEffect, useId, useState } from 'react'
import CardButton from './CardButton';
import { ButtonContainer, Product } from './styles'

const getPrice = (n, price) => {
    return price * n;
}


const Card = ({id, name, demo_male, demo_female, price, handleCarrito, productsInCart, findInArray, viewSelected, genre, count}) => {
    
    const [ imgUrl, setImgUrl ] = useState(demo_female);
    const [ genreSelected, setGenreSelected ] = useState("female")
    const buttonProps = (value) => {
        return {value, renderButtons}
    }
    const [buttons, setButtons] = useState([
        "ADD TO CART",
    ])
    
    const renderButtons = e => {
        // cambio de botones segun se agregan o remueven productos del carrito
        switch (buttons.length){
            case 1:
                setButtons(["REMOVE", "ADD + 1"]);
                break;
            case 2:
                if (e.target.innerText === "REMOVE") {
                    if (findInArray(productsInCart, id , genreSelected).count > 1) {
                        break;
                    }else {
                        setButtons(["ADD TO CART"]);
                        break;
                    }
                }
            }
        // agrego o remuevo el producto seleccionado del carrito
        handleCarrito(e, id, genreSelected);
    }

    const handleURL = e => {
        switch (e.target.innerText) {
            case "FOR HER":
                setImgUrl(demo_female)
                findInArray(productsInCart, id, "female") === undefined && setButtons(["ADD TO CART"]);
                break;
        
            default:
                case "FOR HIM": 
                setImgUrl(demo_male)
                findInArray(productsInCart, id, "male") === undefined && setButtons(["ADD TO CART"]);
                break;
        }
    }
    const handleGenderSelected = (e, param) => {
        const options = {
            male: demo_male,
            female: demo_female
        };
        setGenreSelected(param);
        handleURL(e)
        setImgUrl(options[param]);
    }

    const renderView = () => {
        switch (viewSelected) {
            case 'cart':
                return (
                    <Product>
                        <div>
                            <h2>{name}</h2>
                            <p>{findInArray(productsInCart, id, genre).count}</p>
                        </div>
                        <img src={genre === "male" ? demo_male : demo_female} alt="" />
                        <p>{'USD $' + getPrice(findInArray(productsInCart, id, genre).count, Number(price.slice(5, price.length)))}</p>
                    </Product>
                )
            default:
                case 'local':
                    return (
                        <Product>
                            <p><span onClick={(e) => handleGenderSelected(e,"female")}>FOR HER</span> / <span onClick={(e) => handleGenderSelected(e,"male")}>FOR HIM</span></p>
                            <img src={imgUrl} alt="" />
                            <div>
                                <h2>{name}</h2>
                                <p>{price}</p>
                            </div>
                            <ButtonContainer>
                                {buttons.map(value => <CardButton {...buttonProps(value, renderButtons)} key={value}/>)}
                            </ButtonContainer>
                        </Product>
                    )
        }
    }
    
    
    return (
        <Fragment>
            {renderView()}
        </Fragment>
    )
}

export default Card