import styled from "styled-components";



export const Product = styled.article`

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
    padding: 10px;
    height: 350px;
    width: 200px;
    border: 2px solid lightgray;
    & > img {
        max-width: 150px;
        max-height: 150px;
        align-self: center;
    }
    & > p > span:hover {
        cursor: pointer;
    }

`
export const ButtonContainer = styled.div`

    display: flex;

`

export const Button = styled.button`

    flex-grow: 1;
    border: none;
    padding: 5px;
    background-color: ${({main}) => main ? '#6cdd3d' : '#dd4e3c'};
    &:hover {
        transform: scale(1.05);
        border: 1px solid #3cabdd;
        cursor: pointer;
    }
`