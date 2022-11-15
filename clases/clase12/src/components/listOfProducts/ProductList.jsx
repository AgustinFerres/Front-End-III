import React, { Fragment } from 'react'
import Card from './Card'
import { Total } from './styles';

const getTotal = (arr) => {
    let suma = 0;
    arr.forEach(product => suma += Number(product.price.slice(5, product.price.length)));
    return suma;
}

const ProductList = ({handleCarrito, products, productsInCart, viewSelected, findInArray}) => {


    const cardProps = {
        handleCarrito, productsInCart, findInArray, viewSelected
    }

    const renderProducts = (view) => {
        switch (view) {
            case 'cart':
                if (productsInCart.length) {
                    return (
                        <Fragment>
                            {productsInCart.map(item => <Card {...item} {...cardProps} key={(item.id).toString() + item.genre}/>)}
                        </Fragment>
                        );
                }else {
                    return <h2>No items selected</h2>
                }
            case 'local':
                return products.map(item => <Card {...item}  {...cardProps} key={(item.id).toString() + item.genre}/>);
            default:
                return <h2>Error</h2>
        }
    }

    return (
        <main>
            <section>
                {renderProducts(viewSelected)}  
            </section>
            {viewSelected === 'cart' && <Total>Total: USD $ {getTotal(productsInCart)}</Total>}
        </main>
    )
}

export default ProductList