import styled from "styled-components";


export const CardContainer = styled.div`

    display: flex;
    flex-direction: column;
    aspect-ratio: 4 / 3;
    width: 200px;
    align-items: center;
    background-color: white;
    justify-content: space-between;
    border: 2px solid #6deb33;
    border-radius: 15px;
    padding: 10px;
    & > img {
    
        aspect-ratio: 4 / 3;
        width: 200px;
    }

`

export const ButtonContainer = styled.div`

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;

`


export const Button = styled.button`

    border: 2px solid ${({main}) => main ? '#6deb33' : '#ede632'};
    border-radius: 15px;
    font-size: 1.5rem;
    padding: 5px 10px;
    background-color: ${({main}) => main ? '#ede632' : '#6deb33'};
    color: white;
    &:active {
        animation: 0.5s click ease;
    }


    @keyframes click {
        0% {
            transform: scale(0.9);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }


`