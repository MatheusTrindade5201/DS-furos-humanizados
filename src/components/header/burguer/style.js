import styled from "styled-components";

const BurguerWrapper = styled.span`
    width: 30px;
    height: 30px;
    display: flex;
    flex-direction: column;
    gap: 9px;
    align-items: flex-end;
    cursor: pointer;

    div{
        width: 30px;
        height: 4.07px;
        background-color: #40333A40;
        border-radius: 8px;
        transition: .2s;
        transform-origin: 0;

        &:nth-child(2){
           width: 25px 
        }

        &:nth-child(1){
            transform: ${({open}) => open === false ? 'rotate(0)' : 'rotate(60deg)'}
        }

        &:nth-child(2){
            transform: ${({open}) => open === false ? 'translate(0)' : 'translate(500%)'}
        }

        &:nth-child(3){
            transform: ${({open}) => open === false ? 'rotate(0)' : 'rotate(-60deg)'}
        }

    }

    :hover>div{
        background-color: #40333A80;
    }

    @media screen and (min-width: 900px){
        display:none
    }
`

export default BurguerWrapper