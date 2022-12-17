import styled from "styled-components";

export const CardWrapper = styled.div`
    height: 300px;
    min-width: 335px;
    max-width: 440px;
    border: solid 1px ${props => props.theme.colors.secondary};
    box-sizing: border-box;
    box-shadow: ${props => props.theme.colors.shadow};
    border-radius: 8px;
    padding: 24px 30px;

    h3{
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px
    }

    ul{
        display: flex;
        flex-direction: column;
        gap: 50px
    }

    ul li {
        list-style: square;
        font-size: 16px;
    }

    @media screen and (min-width: 900px){
        max-width: 360px
    }

`