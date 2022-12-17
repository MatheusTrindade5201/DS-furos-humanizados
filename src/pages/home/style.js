import styled from "styled-components";

export const HomePageContainer = styled.main`
    height: 100vh;

    .description{
        padding: 30px 20px 0 20px;
        display: flex;
        flex-direction: column;
        gap: 80px;
    }

    .description>section{
        display: flex;
        flex-direction: column;
        gap: 25px
    }

    @media screen and (min-width: 900px) {
        .description{
        padding: 60px 90px 0 90px;
    } 
    }
`

export const Title = styled.h2`

    font-size: 32px;
    font-weight: normal;

    &::before{
        content: '';
        display: block;
        position: relative;
        width: 60px;
        height: 5px;
        background-color: ${props => props.theme.colors.secondary};
        left: 2px;
        top: 38px;
        z-index: -1;
    }
`

export const Paragraphy = styled.p`
    font-size: 16px;
    line-height: 32px

`