import styled, { css } from "styled-components"

export const CardContainer = styled.div`

    display: flex;
    margin: 20px;
    justify-content: center;
    gap: 20px;

`

export const Product = styled.article `

    display: flex;
    max-width: 400px;
    flex-direction: column;
    text-align: left;
    gap: 5px;
    border: 1px lightgray solid;
    border-radius: 10px;
    padding: 10px;
    justify-content: space-between;
    & > div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        text-align: center
    }
`

export const HeaderContainer = styled.header`

    background-color: lightgray;
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 50px;
    padding-bottom: 10px;
`

export const SpanHeader = styled.span`

    background-color: black;
    color: white;
    padding: 5px;
    text-align: left;
    border-radius: 15px;

`


export const SpanCard = styled.span`

    ${({main}) => main && css`

        background-color: #f1a2a2;
        border-radius: 5px;
        color: black;
        padding: 3px 2px;
    `}

`

export const Button = styled.button`
    border: 1px solid grey;
    background-color: lightgray;
    padding: 5px

`