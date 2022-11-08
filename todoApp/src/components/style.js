import styled, { css } from "styled-components";


export const MainContainer = styled.main`

    width: 80vw;
    height: 80vw;
    display: grid;
    grid-template-rows: 1fr 1fr 3fr 3fr;
    grid-template-columns: 1fr;
    row-gap: 10px;
    
`

export const Button = styled.button`

    background-color: blue;
    color: white;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 1rem;
    font-weight: 400;
    &:hover {
        background-color: blue;
    }
`

export const Input = styled.input`

    flex-grow: .5;
    border-radius: 100vh;
    padding: 5px 10px;
    border: 2px solid gray;
    &:focus{
        outline: none;
        border: 2px solid violet;
    }
`
export const Form = styled.form`

    grid-row: 2/2;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Title = styled.h1`
    grid-row: 1/2;
    font-size: 3rem;
    color: white;
    align-self: center;
`

export const TaskContainer = styled.ul`
    grid-row: 3/4;
    display: flex;
    flex-direction: column;
    gap: 10px
    ${({main}) => main && css `

        grid-row: 4/5;
    `}
`

export const Li = styled.li`
    background-color: gray;
	border-radius: 30px;
	padding: 8px 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;
    animation: enter 1s ease-out;

    @keyframes enter {
        0%{
            transform: translate(-10px)
        }
        50%{
            transform: translate(10px)
        }
        90%{
            transform: translate(0)
        }
    }
`