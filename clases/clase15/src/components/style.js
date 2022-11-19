import styled from "styled-components";



export const Loading = styled.div`

    border: 5px solid violet;
    border-left: none;
    border-top: none;
    aspect-ratio: 1/1;
    width: 100px;
    border-radius: 50%;
    animation: progress 1s infinite;

    @keyframes progress {
        0%{
            transform:  rotate(0deg)
        }
        100%{
            transform: rotate(360deg)
        }
    }
`
export const Section = styled.section`

    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: space-evenly;
    margin: 50px;

`
export const Card = styled.article`
    aspect-ratio: 3 / 4;
    width: 400px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
    box-shadow: 0px 0px 10px black;
    backface-visibility: hidden;
    border-radius: 10px;

    &:hover {
        animation: forwards elevate ease-in; 
    }

    @keyframes elevate {
        0%{
            transform: perspective(1000px) translateZ(0);
            -webkit-font-smoothing: subpixel-antialiased;
            -webkit-transform: translateZ(0) scale(1.0, 1.0);

        }
        100%{
            -webkit-transform: translateZ(100px) scale(1.0, 1.0);
            transform: perspective(1000px) translateZ(20px);
            -webkit-font-smoothing: subpixel-antialiased;
            
        }
    }

`

export const CardHeader = styled.div`

    display: flex;
    align-items: center;
    & > div {
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

`
export const Avatar = styled.img`

    width: 20%;
    aspect-ratio: 1/1;
    height: 100%;
    border-radius: 50%;
`

export const CardMedia = styled.iframe`

    aspect-ratio: 16 /  9;
    width: 105.5%;
    align-self: center;
    margin: 10px;
    border: none;

`


export const CardContent = styled.p`



`


export const CardActions = styled.div`

    & > button {
        margin-left: 10px;
        width: 20px;
        aspect-ratio: 1/1;
        rotate: 45deg;
        border: none;
        cursor: pointer;
        background-color: ${({liked}) => liked ? 'crimson' : 'gray'};
        &::before {
            content: '';
            position: absolute;
            background-color: ${({liked}) => liked ? 'crimson' : 'gray'};
            top: -10px;
            left: 0;
            width: 20px;
            aspect-ratio: 1/1;
            border-radius:50%;
        }
        &::after {
            content: '';
            position: absolute;
            background-color: ${({liked}) => liked ? 'crimson' : 'gray'};
            top: 0px;
            left: -10px;
            width: 20px;
            aspect-ratio: 1/1;
            border-radius:50%;
        }
        
        &:active {
    
            animation: 1s change ease;
        }
    }


    @keyframes change {
        0%{
            transform: scale(0.9);
        }
        50%{
            transform: scale(1.1);

        }
        100%{
            transform: scale(1);
        }
    }

`
export const HeadeerContainer = styled.header`

    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 2rem;
    padding: 40px;
    background-color: #3d9dfc;
    color: white;
    & > h1:hover {
        color: #0e5fb0;
        cursor: pointer;
    }

`

export const NavBar = styled.nav`
    font-size: 1.5rem;
    display: flex;
    justify-content: space-evenly;
    gap: 30px;

    & > *:hover {
        transform: scale(1.1);
        color: #0e5fb0;
        cursor: pointer;
    }

`
