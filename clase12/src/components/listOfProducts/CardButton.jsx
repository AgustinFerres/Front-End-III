import React from 'react'
import { Button } from './styles'

const CardButton = ({ value, renderButtons }) => {
    return (
        <Button main={value !== "REMOVE" && true } onClick={renderButtons}>
            {value}
        </Button>
    )
}

export default CardButton