import styled from "styled-components";
import LogoDesktop from '../../assets/images/Logo-Desktop.svg'
import LogoMobile from '../../assets/images/Logo-mobile.svg'

export const HeaderWrapper = styled.header`
    padding: 20px;
    box-shadow: 0 4px 4px 0 rgb(64, 51, 58, 0.2);
    display:flex;
    align-items:center;
    justify-content: space-between;
`

export const Logo = styled.span`
    background-image: url(${LogoMobile});
    background-repeat: no-repeat;
    display: inline-block;
    width: 70px;
    height: 70px;

    @media screen and (min-width: 700px){
        background-image: url(${LogoDesktop});
        width: 172px;
        height: 70px;
    }
`