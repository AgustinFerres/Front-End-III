import React from 'react'

const Header = ({count}) => {
    return (
        <header>
            <div>
                <h1>Estatus de Posteos</h1>
                <p>Likes totales: <span>{count}</span></p>
            </div>
        </header>
    )
}

export default Header