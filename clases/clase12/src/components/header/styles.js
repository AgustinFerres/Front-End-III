import styled from "styled-components";


export const HeaderContainer = styled.div`

    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: lightgray;

`

export const HeaderSection = styled.section`

    display: flex;
    gap: 10px;
    font-size: 2rem;
    align-items: center;
    & > img {
        width: 5vw;
        max-width: 100px;
        min-width: 50px;
    }
    & > span {
        align-self: center;
    }
    @media (max-width: 1000px) {
        font-size: 1.5rem
    }
    @media (max-width: 500px) {
        font-size: 1rem
    }
`